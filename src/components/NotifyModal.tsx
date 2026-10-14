import React, { useState } from 'react';
import { X, Bell, CheckCircle2 } from 'lucide-react';

interface NotifyModalProps {
  isOpen: boolean;
  onClose: () => void;
  templateName?: string;
}

export const NotifyModal: React.FC<NotifyModalProps> = ({ isOpen, onClose, templateName = 'Upcoming Templates' }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    /*
      COMMENT: MailerLite tag 'notify-wishlist' integration hook
    */
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-[#FAF7F2] border border-[#E9E4D8] rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-xl relative"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-[#E9E4D8]/50 text-[#2B2B2B]/70"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="w-12 h-12 rounded-2xl bg-[#E9E4D8] text-[#344E41] flex items-center justify-center mb-4">
              <Bell className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#344E41]">
              Get notified when {templateName} drops
            </h3>
            <p className="mt-2 text-sm text-[#2B2B2B]/80 leading-relaxed">
              We release templates in small batches. Leave your email to receive early access and an exclusive $20 launch discount code.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full px-4 py-3 rounded-xl border border-[#E9E4D8] bg-white text-sm focus:border-[#344E41] focus:ring-1 focus:ring-[#344E41] outline-none"
              />
              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-[#344E41] hover:bg-[#283d33] text-white font-medium text-sm transition-colors cursor-pointer min-h-[44px]"
              >
                Notify Me at Launch
              </button>
            </form>
            <p className="mt-3 text-center text-xs text-[#2B2B2B]/60">
              No spam, ever. Unsubscribe with 1 click.
            </p>
          </div>
        ) : (
          <div className="text-center py-4">
            <div className="w-12 h-12 rounded-full bg-[#A3B18A]/30 text-[#344E41] flex items-center justify-center mx-auto mb-3">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#344E41]">You're on the early list!</h3>
            <p className="mt-2 text-sm text-[#2B2B2B]/80">
              We'll send you an email the minute {templateName} is ready, along with your private launch pricing.
            </p>
            <button
              onClick={onClose}
              className="mt-6 px-6 py-2.5 rounded-full bg-[#344E41] text-white text-sm font-medium hover:bg-[#283d33]"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
