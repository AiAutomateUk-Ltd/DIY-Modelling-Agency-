
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { PaymentTier } from '../types';

interface StripeSimProps {
  tier: PaymentTier;
  price: string;
  onSuccess: () => void;
  onCancel: () => void;
}

const StripeSim: React.FC<StripeSimProps> = ({ tier, price, onSuccess, onCancel }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [cardNumber, setCardNumber] = useState('');

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      onSuccess();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-white w-full max-w-md shadow-2xl relative animate-slide-up-fade">
        <button 
          onClick={onCancel}
          className="absolute top-4 right-4 text-gray-400 hover:text-black"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-10">
          <div className="mb-8">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-gray-400 mb-2">Secure Checkout</h2>
            <p className="text-2xl font-serif">{tier === 'KIT' ? 'Solo Model Starter Kit' : 'Big-Sis Back-Up Access'}</p>
            <p className="text-3xl font-serif mt-2">{price}</p>
          </div>

          <form onSubmit={handlePay} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Card Information</label>
              <div className="border border-gray-200 p-4 bg-gray-50 flex items-center gap-4">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                 </svg>
                 <input 
                  type="text" 
                  maxLength={19}
                  placeholder="4242 4242 4242 4242" 
                  className="bg-transparent w-full outline-none font-mono text-sm"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim())}
                  required
                 />
              </div>
              <div className="grid grid-cols-2 gap-4">
                 <div className="border border-gray-200 p-4 bg-gray-50">
                    <input type="text" placeholder="MM / YY" className="bg-transparent w-full outline-none text-sm" required />
                 </div>
                 <div className="border border-gray-200 p-4 bg-gray-50">
                    <input type="text" placeholder="CVC" className="bg-transparent w-full outline-none text-sm" required />
                 </div>
              </div>
            </div>

            <button 
              type="submit"
              disabled={isProcessing}
              className="w-full bg-black text-white py-5 text-xs font-bold uppercase tracking-[0.4em] hover:bg-zinc-800 transition-all flex items-center justify-center gap-4"
            >
              {isProcessing ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                  Processing...
                </>
              ) : `Pay ${price}`}
            </button>
          </form>

          <p className="mt-8 text-center text-[10px] text-gray-400 uppercase tracking-widest leading-relaxed">
            Payments are encrypted and secure. <br/> DIY Agency does not store your card details.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StripeSim;
