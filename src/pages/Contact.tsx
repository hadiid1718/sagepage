import React, { useState } from 'react';
import { Mail, Clock, HelpCircle, Send, CheckCircle2, ArrowRight } from 'lucide-react';

interface ContactProps {
  navigate: (route: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ navigate }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [reason, setReason] = useState('Template question');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        {/* Small sage envelope icon */}
        <div className="w-12 h-12 rounded-2xl bg-[#A3B18A]/25 text-[#344E41] flex items-center justify-center mx-auto mb-2">
          <Mail className="w-6 h-6 text-[#344E41]" />
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl text-[#344E41] tracking-tight">
          Questions? Ask me.
        </h1>
        <p className="text-lg text-[#2B2B2B]/80">
          I reply within 1 to 2 business days.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
        {/* Left Column: Form */}
        <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-[#E9E4D8] shadow-sm">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-wider text-[#344E41] mb-1.5">
                  Your Full Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Elena Vance"
                  className="w-full px-4 py-3 rounded-xl border border-[#E9E4D8] text-base focus:border-[#344E41] focus:ring-1 focus:ring-[#344E41] outline-none min-h-[44px] bg-white text-[#2B2B2B]"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-xs font-semibold uppercase tracking-wider text-[#344E41] mb-1.5">
                  Email Address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="elena@yourpractice.com"
                  className="w-full px-4 py-3 rounded-xl border border-[#E9E4D8] text-base focus:border-[#344E41] focus:ring-1 focus:ring-[#344E41] outline-none min-h-[44px] bg-white text-[#2B2B2B]"
                />
              </div>

              <div>
                <label htmlFor="contact-reason" className="block text-xs font-semibold uppercase tracking-wider text-[#344E41] mb-1.5">
                  Reason for Inquiry
                </label>
                <select
                  id="contact-reason"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-[#E9E4D8] text-base focus:border-[#344E41] outline-none bg-white min-h-[44px] text-[#2B2B2B]"
                >
                  <option value="Template question">Template question</option>
                  <option value="Customization">Customization</option>
                  <option value="Support">Support</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-wider text-[#344E41] mb-1.5">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="How can I help you today?"
                  className="w-full px-4 py-3 rounded-xl border border-[#E9E4D8] text-base focus:border-[#344E41] outline-none min-h-[100px] bg-white text-[#2B2B2B]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full bg-[#344E41] hover:bg-[#283d33] text-white font-medium text-sm transition-colors cursor-pointer flex items-center justify-center gap-2 min-h-[48px] touch-target shadow-xs"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>
            </form>
          ) : (
            <div className="text-center py-10 space-y-4">
              <CheckCircle2 className="w-12 h-12 text-[#344E41] mx-auto" />
              <h3 className="font-serif text-2xl font-bold text-[#344E41]">Message Sent!</h3>
              <p className="text-sm text-[#2B2B2B]/80 max-w-sm mx-auto">
                Thank you, {name}. Your inquiry regarding "{reason}" has been received. I will respond to {email} within 1 to 2 business days.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2.5 rounded-full border border-[#344E41] text-xs font-semibold text-[#344E41]"
              >
                Send Another Message
              </button>
            </div>
          )}
        </div>

        {/* Right Column: Side Card */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#FAF7F2] p-8 rounded-3xl border border-[#E9E4D8] space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#A3B18A]">
                Direct Contact
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#344E41] mt-1">
                Alex Carter
              </h3>
              <p className="text-xs text-[#2B2B2B]/70 mt-1">
                Founder & Lead Engineer
              </p>
            </div>

            <div className="space-y-4 text-xs text-[#2B2B2B]/85">
              <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-[#E9E4D8]">
                <Mail className="w-4 h-4 text-[#344E41] shrink-0" />
                <div>
                  <p className="font-semibold text-[#344E41]">support@sagepage.co</p>
                  <p className="text-[11px] text-[#2B2B2B]/60">General inquiries & order help</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-[#E9E4D8]">
                <Clock className="w-4 h-4 text-[#344E41] shrink-0" />
                <div>
                  <p className="font-semibold text-[#344E41]">1 to 2 Business Days</p>
                  <p className="text-[11px] text-[#2B2B2B]/60">Monday to Friday response time</p>
                </div>
              </div>
            </div>

            {/* Link to FAQ */}
            <div className="pt-4 border-t border-[#E9E4D8] space-y-2">
              <p className="text-xs text-[#2B2B2B]/80 font-medium">Looking for quick answers?</p>
              <button
                onClick={() => navigate('faq')}
                className="w-full py-2.5 px-4 rounded-full border border-[#344E41] text-[#344E41] text-xs font-semibold flex items-center justify-center gap-1.5 hover:bg-white transition-colors"
              >
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Visit Frequently Asked Questions</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
