import React, { useState } from 'react';
import { Check, Download, Video, Mail, ExternalLink, FileText, Sparkles, Star } from 'lucide-react';
import { triggerZipDownload } from '../data/clarityTemplateZip';

interface OrderSuccessProps {
  orderInfo?: {
    orderId: string;
    templateName: string;
    licenseType: string;
    total: number;
    email: string;
  };
  navigate: (route: string) => void;
}

export const OrderSuccess: React.FC<OrderSuccessProps> = ({ orderInfo, navigate }) => {
  const [downloading, setDownloading] = useState(false);
  const [showPortalModal, setShowPortalModal] = useState(false);

  const order = orderInfo || {
    orderId: 'SP-982143',
    templateName: 'Clarity Coach Template',
    licenseType: 'Standard License (1 Site)',
    total: 59,
    email: 'coach@example.com'
  };

  const handleDownload = async () => {
    setDownloading(true);
    try {
      await triggerZipDownload();
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 text-center space-y-10 animate-in fade-in duration-200">
      {/* Check Icon */}
      <div className="w-16 h-16 rounded-full bg-[#344E41] text-white flex items-center justify-center mx-auto shadow-md">
        <Check className="w-9 h-9 stroke-[2.5]" />
      </div>

      {/* Header */}
      <div className="space-y-2">
        <h1 className="font-serif text-4xl sm:text-5xl text-[#344E41] tracking-tight">
          Thanks for your order.
        </h1>
        <p className="text-base sm:text-lg text-[#2B2B2B]/80 max-w-lg mx-auto">
          Your download link is also in your email ({order.email}).
        </p>
        <p className="text-xs font-mono text-[#2B2B2B]/60">
          Order ID: #{order.orderId} · {order.licenseType}
        </p>
      </div>

      {/* Big Button 'Download Clarity (zip)' */}
      <div className="pt-2">
        <button
          onClick={handleDownload}
          disabled={downloading}
          className="px-10 py-5 rounded-full bg-[#344E41] hover:bg-[#283d33] text-white font-serif text-xl sm:text-2xl font-bold shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-3 cursor-pointer disabled:opacity-75"
        >
          <Download className="w-6 h-6 stroke-[2]" />
          <span>{downloading ? 'Building Zip Archive...' : 'Download Clarity (zip)'}</span>
        </button>
        <p className="text-xs text-[#2B2B2B]/60 mt-2">
          File: clarity-coach-template.zip (180 KB) · All 7 pages + theme.css
        </p>
      </div>

      {/* 3 Steps: Unzip, Open README.md, Open index.html */}
      <div className="bg-white rounded-3xl border border-[#E9E4D8] p-6 sm:p-8 text-left shadow-xs space-y-4">
        <h3 className="font-serif text-xl font-bold text-[#344E41] text-center sm:text-left">
          Next 3 Steps to Launch:
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="p-4 bg-[#FAF7F2] rounded-2xl border border-[#E9E4D8]">
            <span className="font-serif font-bold text-sm text-[#344E41] block mb-1">Step 1: Unzip</span>
            <p className="text-[#2B2B2B]/80">Right-click clarity-coach-template.zip and extract all files to a folder on your computer.</p>
          </div>
          <div className="p-4 bg-[#FAF7F2] rounded-2xl border border-[#E9E4D8]">
            <span className="font-serif font-bold text-sm text-[#344E41] block mb-1">Step 2: Open README.md</span>
            <p className="text-[#2B2B2B]/80">Read our 5-minute brand customization guide and copy prompts to personalize your words.</p>
          </div>
          <div className="p-4 bg-[#FAF7F2] rounded-2xl border border-[#E9E4D8]">
            <span className="font-serif font-bold text-sm text-[#344E41] block mb-1">Step 3: Open index.html</span>
            <p className="text-[#2B2B2B]/80">Double-click index.html to preview in your browser immediately without running a terminal.</p>
          </div>
        </div>
      </div>

      {/* Cards: 'Watch the setup video' and 'Join the customer email list for updates' */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
        <div className="p-6 bg-white rounded-2xl border border-[#E9E4D8] space-y-3">
          <div className="w-10 h-10 rounded-xl bg-[#E9E4D8]/60 flex items-center justify-center text-[#344E41]">
            <Video className="w-5 h-5" />
          </div>
          <h4 className="font-serif text-lg font-bold text-[#344E41]">
            Watch the setup video
          </h4>
          <p className="text-xs text-[#2B2B2B]/75 leading-relaxed">
            Follow our 10-minute walkthrough showing how to swap colors, hook up Calendly, and deploy in 60 seconds on Netlify Drop.
          </p>
          <button
            onClick={() => navigate('docs')}
            className="text-xs font-semibold text-[#344E41] hover:text-[#D9A68B] inline-flex items-center gap-1"
          >
            <span>Watch Setup Video</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-[#E9E4D8] space-y-3">
          <div className="w-10 h-10 rounded-xl bg-[#E9E4D8]/60 flex items-center justify-center text-[#344E41]">
            <Mail className="w-5 h-5" />
          </div>
          <h4 className="font-serif text-lg font-bold text-[#344E41]">
            Join customer updates list
          </h4>
          <p className="text-xs text-[#2B2B2B]/75 leading-relaxed">
            Get email notifications whenever a new template version, SEO update, or complimentary bonus section is released.
          </p>
          <div className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded inline-block">
            ✓ Auto-enrolled via {order.email}
          </div>
        </div>
      </div>

      {/* Link: 'Manage your order and invoices' */}
      <div className="pt-2">
        <button
          onClick={() => setShowPortalModal(true)}
          className="text-xs text-[#2B2B2B]/70 hover:text-[#344E41] underline underline-offset-4 cursor-pointer"
        >
          Manage your order and invoices (Customer Portal)
        </button>
      </div>

      {/* Review request line: 'Loved it? Leave a review in 7 days.' */}
      <div className="p-4 bg-[#FAF7F2] rounded-2xl border border-[#E9E4D8] text-xs text-[#2B2B2B]/80 flex items-center justify-center gap-2">
        <Star className="w-4 h-4 text-[#D9A68B] fill-current" />
        <span className="font-medium">Loved it? Leave a review in 7 days.</span>
        <span className="text-[#2B2B2B]/50">(We'll send a gentle check-in email)</span>
      </div>

      {/* Customer Portal Modal Simulation */}
      {showPortalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white p-6 rounded-2xl max-w-md w-full text-left space-y-4">
            <h4 className="font-serif text-xl font-bold text-[#344E41]">Lemon Squeezy Customer Portal</h4>
            <div className="p-3 bg-[#FAF7F2] rounded-xl text-xs space-y-1.5 font-mono">
              <p>Receipt ID: #{order.orderId}</p>
              <p>Product: {order.templateName}</p>
              <p>License: {order.licenseType}</p>
              <p>Total Paid: ${order.total}.00 USD (Includes VAT/Taxes)</p>
            </div>
            <p className="text-xs text-[#2B2B2B]/70">
              Your official tax receipt and PDF invoice have been delivered to <strong>{order.email}</strong>.
            </p>
            <button
              onClick={() => setShowPortalModal(false)}
              className="w-full py-2.5 rounded-full bg-[#344E41] text-white text-xs font-semibold"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
