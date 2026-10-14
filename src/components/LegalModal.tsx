import React from 'react';
import { X, Shield, FileText, Scale, RotateCcw } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  docType: 'license' | 'privacy' | 'terms' | 'refunds';
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, docType }) => {
  if (!isOpen) return null;

  const docs = {
    license: {
      title: 'Template License Agreement',
      icon: <FileText className="w-5 h-5 text-[#344E41]" />,
      content: (
        <div className="space-y-4 text-sm text-[#2B2B2B]/85 leading-relaxed">
          <p className="font-semibold text-[#344E41]">Standard License ($59 launch / $79 regular):</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Grants you a non-exclusive license to use the template files for one (1) website.</li>
            <li>Can be used for your own coaching business or for one client project.</li>
            <li>You may customize code, styling, copy, layouts, and assets without limitation.</li>
          </ul>
          <p className="font-semibold text-[#344E41] pt-2">Freelancer License ($129):</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Grants you permission to build unlimited client websites using the template.</li>
            <li>Ideal for freelance web designers, virtual assistants, and agency owners.</li>
          </ul>
          <p className="font-semibold text-rose-700 pt-2">Prohibitions (All Tiers):</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>You may NOT resell, redistribute, sub-license, or share the source code files.</li>
            <li>You may NOT bundle the template in public repositories or website builder themes.</li>
          </ul>
        </div>
      )
    },
    privacy: {
      title: 'Privacy Policy',
      icon: <Shield className="w-5 h-5 text-[#344E41]" />,
      content: (
        <div className="space-y-4 text-sm text-[#2B2B2B]/85 leading-relaxed">
          <p>
            At Sagepage Studio, we respect your privacy and believe in minimal data collection.
          </p>
          <h4 className="font-semibold text-[#344E41]">What We Collect</h4>
          <p>
            When you purchase a template or request the free checklist, we collect your name and email address to deliver your download link, license confirmation, and essential product updates.
          </p>
          <h4 className="font-semibold text-[#344E41]">Payment Processing</h4>
          <p>
            We never store your credit card or payment credentials. All transactions are securely processed by Lemon Squeezy acting as our Merchant of Record.
          </p>
          <h4 className="font-semibold text-[#344E41]">No Third-Party Ad Tracking</h4>
          <p>
            We do not sell, rent, or trade your personal information to third-party data brokers. You may unsubscribe from marketing emails at any time.
          </p>
        </div>
      )
    },
    terms: {
      title: 'Terms of Service',
      icon: <Scale className="w-5 h-5 text-[#344E41]" />,
      content: (
        <div className="space-y-4 text-sm text-[#2B2B2B]/85 leading-relaxed">
          <p>
            By purchasing or downloading digital templates from Sagepage Studio, you agree to these Terms of Service.
          </p>
          <h4 className="font-semibold text-[#344E41]">Digital Delivery</h4>
          <p>
            Templates are delivered immediately as downloadable .zip archives upon successful payment.
          </p>
          <h4 className="font-semibold text-[#344E41]">Warranty & Compatibility</h4>
          <p>
            Templates are tested in latest versions of Google Chrome, Apple Safari, Microsoft Edge, and Mozilla Firefox. Templates are supplied as clean static code (HTML5 + Tailwind CSS + vanilla JS).
          </p>
        </div>
      )
    },
    refunds: {
      title: '14-Day Clarity Refund Policy',
      icon: <RotateCcw className="w-5 h-5 text-[#344E41]" />,
      content: (
        <div className="space-y-4 text-sm text-[#2B2B2B]/85 leading-relaxed">
          <div className="p-4 bg-[#E9E4D8]/50 rounded-xl border border-[#E9E4D8]">
            <p className="font-semibold text-[#344E41]">Our 14-Day Clarity Guarantee</p>
            <p className="mt-1 text-xs">
              We stand behind our code. If you find the template defective, broken, or unable to be run as documented within 14 days of purchase, email us for a full refund.
            </p>
          </div>
          <h4 className="font-semibold text-[#344E41]">How to Request a Refund</h4>
          <p>
            Simply email <strong>support@sagepage.co</strong> with your order email and purchase receipt ID within 14 days. We will process your return within 1 to 2 business days.
          </p>
        </div>
      )
    }
  };

  const currentDoc = docs[docType] || docs.license;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-[#FAF7F2] border border-[#E9E4D8] rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[85vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between pb-4 border-b border-[#E9E4D8] mb-6">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-[#E9E4D8]/60 rounded-xl">
              {currentDoc.icon}
            </div>
            <h3 className="font-serif text-xl font-bold text-[#344E41]">
              {currentDoc.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#E9E4D8]/50 text-[#2B2B2B]/70"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {currentDoc.content}

        <div className="mt-8 pt-4 border-t border-[#E9E4D8] flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-full bg-[#344E41] text-white text-sm font-medium hover:bg-[#283d33]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
