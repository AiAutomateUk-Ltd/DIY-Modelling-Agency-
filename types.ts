
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

export interface PortfolioWork {
  id: string;
  title: string;
  category: 'Editorial' | 'Commercial' | 'Runway' | 'Portrait';
  description: string;
  imageUrl: string;
  year: string;
  location?: string;
  photographer?: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  longDescription?: string;
  imageUrl: string;
  features: string[];
}

export interface JournalArticle {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  content: React.ReactNode;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export type ViewState = 
  | { type: 'home' }
  | { type: 'work', work: PortfolioWork }
  | { type: 'about' }
  | { type: 'contact' };

export type PaymentTier = 'KIT' | 'BIG_SIS';

export interface AccessState {
  hasAccess: boolean;
  tier: PaymentTier | null;
}
