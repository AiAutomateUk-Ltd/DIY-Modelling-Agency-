
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import { GoogleGenAI } from "@google/genai";
import { MODEL_DETAILS, PORTFOLIO_WORKS, BRAND_NAME, STARTER_KIT_ASSETS } from '../constants';

const getSystemInstruction = () => {
  const portfolioContext = PORTFOLIO_WORKS.map(w => 
    `- ${w.title} (${w.year}): ${w.description} (${w.category})`
  ).join('\n');

  const kitAssets = STARTER_KIT_ASSETS.map(a => `- ${a.title}: ${a.desc}`).join('\n');

  return `You are the Booking & Career Assistant for "DIY Modelling Agency". 
  Your tone is professional, exclusive, and empowering. You represent both elite talent and the "Solo Model Starter Kit" program.
  
  Agency Context:
  - Name: DIY Modelling Agency (${BRAND_NAME})
  - Featured Model: Elara Vane
  - Location: ${MODEL_DETAILS.location}
  
  The Solo Model Starter Kit:
  - Concept: A zero-cash modelling agency in 30 days for TikTok-obsessed girls who hate gate-keepers.
  - Price: £12 one-off or £12 + £9/mo for "Big-Sis Back-Up" support.
  - Included Assets:
  ${kitAssets}
  - Key Tools: Botika (AI model body swap), Revery.ai (garment mock-ups), Mokker.ai (instant studio lighting), Wix AI builder.
  
  Behavior:
  - If someone asks to book Elara, direct them to the Contact form.
  - If someone asks how to start modelling or about the kit, enthusiastically explain the £12 starter kit and the AI-powered workflow. Mention it's a "solo, AI-powered, zero-human-help" roadmap.
  - Mention "Big-Sis Back-Up" if they ask for coaching or help.
  - Keep answers brief (1-2 sentences).`;
};

export const sendMessageToGemini = async (history: {role: string, text: string}[], newMessage: string): Promise<string> => {
  try {
    let apiKey: string | undefined = process.env.API_KEY;
    
    if (!apiKey) {
      return "Assistant offline. (API Key Missing)";
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: getSystemInstruction(),
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessage({ message: newMessage });
    return result.text;

  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I apologize, but I am unable to access the agency system right now.";
  }
};
