
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { PortfolioWork, JournalArticle, Product } from './types';

export const PORTFOLIO_WORKS: PortfolioWork[] = [
  {
    id: 'w1',
    title: 'Shadow & Light',
    category: 'Editorial',
    description: 'A study on high-contrast architectural fashion.',
    imageUrl: 'https://images.unsplash.com/photo-1539109132382-381bb3f1cffb?auto=format&fit=crop&q=80&w=1200',
    year: '2024',
    location: 'Paris, FR',
    photographer: 'Sacha van Vorssel'
  },
  {
    id: 'w2',
    title: 'Concrete Jungle',
    category: 'Commercial',
    description: 'Spring campaign for minimalist urban apparel.',
    imageUrl: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=1200',
    year: '2024',
    location: 'New York, USA',
    photographer: 'Marcus Wright'
  },
  {
    id: 'w3',
    title: 'Silk & Stone',
    category: 'Editorial',
    description: 'Juxtaposing organic textures with fluid textiles.',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1200',
    year: '2023',
    location: 'Milan, IT',
    photographer: 'Elena Rossi'
  }
];

// Added missing JOURNAL_ARTICLES
export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: 1,
    title: 'The AI Aesthetic',
    date: 'Oct 12, 2024',
    excerpt: 'How generative AI is reshaping the visual language of high-fashion editorial.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200',
    content: React.createElement('div', { className: 'space-y-6' }, 
      React.createElement('p', null, 'The intersection of technology and art has always been a fertile ground for innovation. In 2024, we are witnessing a paradigm shift as generative AI tools become staples in the creative workflow of elite fashion houses.'),
      React.createElement('p', null, 'At DIY Agency, we embrace these tools not as replacements for human talent, but as extensions of the creative mind. Our latest editorial series explores the boundaries between the physical and the digital.')
    )
  },
  {
    id: 2,
    title: 'Sustainable Scouting',
    date: 'Sep 28, 2024',
    excerpt: 'A new approach to talent management that prioritizes longevity and ethical growth.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200',
    content: React.createElement('div', { className: 'space-y-6' },
      React.createElement('p', null, 'Sustainability in fashion is often discussed in terms of materials, but at DIY, we believe it starts with people. Talent sustainability means fostering an environment where models can thrive long-term.'),
      React.createElement('p', null, 'We provide our roster with financial literacy tools, mental health support, and career longevity planning.')
    )
  }
];

// Added missing PRODUCTS
export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Aura Headset',
    category: 'Audio',
    price: 299,
    description: 'Minimalist audio engineering.',
    longDescription: 'Crafted from a single block of unpolished aluminum, the Aura Headset offers a tactile and auditory experience unlike any other. Designed for pure sound and absolute silence.',
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=1200',
    features: ['Active Noise Cancellation', '24-bit Hi-Res Audio', '40-hour Battery Life', 'Sustainable Materials']
  },
  {
    id: 'p2',
    name: 'Kinetic Ring',
    category: 'Wearable',
    price: 150,
    description: 'A discreet health companion.',
    longDescription: 'The Kinetic Ring monitors your biometric data through bone conduction and skin sensors, encased in a ceramic shell that feels like a natural extension of your body.',
    imageUrl: 'https://images.unsplash.com/photo-1588444837495-c6cfaf50c821?auto=format&fit=crop&q=80&w=1200',
    features: ['Sleep Tracking', 'Heart Rate Monitoring', 'Waterproof to 50m', 'Titanium Core']
  },
  {
    id: 'p3',
    name: 'Obelisk Lamp',
    category: 'Home',
    price: 450,
    description: 'Sculptural light.',
    longDescription: 'The Obelisk Lamp uses refracted light to create a soft, ambient glow that mimics the movement of the sun throughout the day. A centerpiece for the modern dwelling.',
    imageUrl: 'https://images.unsplash.com/photo-1507473885765-e6ed657db946?auto=format&fit=crop&q=80&w=1200',
    features: ['Natural Light Spectrum', 'Gesture Control', 'Recycled Sandstone Base']
  }
];

export const STARTER_KIT_ASSETS = [
  { title: "30-Day Checklist", desc: "Auto-progress bar ticks as you upload selfies.", emoji: "📈" },
  { title: "AI Prompt Vault", desc: "50 copy-paste prompts for Vogue-level shots.", emoji: "🤖" },
  { title: "Canva Swipe-Secret Kit", desc: "Drag-and-drop IG nine-grid & media kit.", emoji: "🎨" },
  { title: "Brand Email Scripts", desc: "5 plug-and-play pitches for micro-brands.", emoji: "💌" },
  { title: "Rate-Card Calculator", desc: "Auto-suggests day-rates based on followers.", emoji: "💰" },
  { title: "Fake-It Tearsheet Mockups", desc: "10 PSDs that look like magazine covers.", emoji: "📸" },
  { title: "Tax & Invoice Starter", desc: "Wave invoice template + teen tax checklist.", emoji: "🗒️" },
  { title: "Private TikTok Sound List", desc: "15 trending sounds for model-launch day.", emoji: "🎶" }
];

export const ROADMAP_STEPS = [
  { day: 1, task: "Agency mirror selfies", tool: "iPhone timer" },
  { day: 2, task: "AI clean-up (acne, light)", tool: "Adobe Express" },
  { day: 3, task: "Generate 1st Vogue shot", tool: "Botika 20 free" },
  { day: 4, task: "Build Portfolio site", tool: "Wix AI builder" },
  { day: 5, task: "Canva comp-card", tool: "Template provided" },
  { day: 30, task: "Land 1st paid gig", tool: "Celebrate" }
];

export const MODEL_DETAILS = {
  name: 'Featured Talent: ELARA VANE',
  agency: 'DIY Modelling Agency',
  measurements: {
    height: "5'10\"",
    bust: "32\"",
    waist: "24\"",
    hips: "34\"",
    eyes: "Hazel",
    hair: "Dark Brown"
  },
  location: 'Global Headquarters: London / NYC / Paris'
};

export const BRAND_NAME = 'DIY AGENCY';
