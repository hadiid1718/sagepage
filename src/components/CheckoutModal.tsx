import React, { useState } from 'react';
import { X, ShieldCheck, Lock, Check, Tag, CreditCard, Sparkles, Download, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (orderInfo: {
    orderId: string;
    templateName: string;
    licenseType: string;
    total: number;
    email: string;
  }) => void;
  initialLicense?: 'standard' | 'freelancer' | 'bundle';
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
  initialLicense = 'standard'
}) => {
  const [selectedTier, setSelectedTier] = useState<'standard' | 'freelancer' | 'bundle'>(initialLicense);
  const [includeOrderBump, setIncludeOrderBump] = useState(false);
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<{ code: string; percentOff: number } | null>(null);
  const [couponError, setCouponError] = useState('');
  
  const [email, setEmail] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'apple_pay' | 'google_pay'>('card');
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen) return null;

  const tierPrices = {
    standard: 59,
    freelancer: 129,
    bundle: 149
  };

  const basePrice = tierPrices[selectedTier];
  const orderBumpPrice = includeOrderBump ? 29 : 0;
  const subtotal = basePrice + orderBumpPrice;
  const discountAmount = appliedCoupon ? Math.round((subtotal * appliedCoupon.percentOff) / 100) : 0;
  const finalTotal = Math.max(0, subtotal - discountAmount);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    setCouponError('');
    const code = couponCode.trim().toUpperCase();
    if (code === 'LAUNCH20' || code === 'COACH20') {
      setAppliedCoupon({ code, percentOff: 20 });
    } else if (code === 'SAGE10') {
      setAppliedCoupon({ code, percentOff: 10 });
    } else {
      setCouponError('Invalid coupon code. Try "LAUNCH20" for 20% off.');
    }
  };

  const handleSubmitPayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsProcessing(true);

    /*
      COMMENT: Lemon Squeezy Hosted Checkout / Overlay Connection Point
      // On live production site with Lemon Squeezy:
      // window.createLemonSqueezyCheckout({
      //   variantId: selectedTier === 'standard' ? '12345' : '12346',
      //   customPrice: finalTotal,
      //   email: email,
      //   checkoutData: { custom: { customerName } }
      // });
    */

    setTimeout(() => {
      setIsProcessing(false);
      try {
        confetti({
          particleCount: 90,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // safe confetti fallback
      }

      const orderId = `SP-${Math.floor(100000 + Math.random() * 900000)}`;
      onSuccess({
        orderId,
        templateName: selectedTier === 'bundle' ? 'Clarity 3-Template Suite' : 'Clarity Coach Template',
        licenseType: selectedTier === 'freelancer' ? 'Freelancer (Unlimited Sites)' : selectedTier === 'bundle' ? 'Bundle License' : 'Standard License (1 Site)',
        total: finalTotal,
        email: email || 'coach@example.com'
      });
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-[#FAF7F2] border border-[#E9E4D8] rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="checkout-modal-title"
      >
        {/* Header */}
        <div className="sticky top-0 bg-[#FAF7F2]/95 backdrop-blur-md px-6 py-4 border-b border-[#E9E4D8] flex items-center justify-between z-10">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#344E41] flex items-center justify-center text-white">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <h2 id="checkout-modal-title" className="font-serif text-lg font-bold text-[#344E41]">
                Complete Your Order
              </h2>
              <p className="text-xs text-[#2B2B2B]/70 flex items-center gap-1">
                <span>Secure Lemon Squeezy checkout</span>
                <span>·</span>
                <span className="text-[#344E41] font-medium">Instant zip delivery</span>
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#E9E4D8]/60 text-[#2B2B2B]/70 transition-colors"
            aria-label="Close checkout"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <form onSubmit={handleSubmitPayment} className="p-6 sm:p-8 space-y-6">
          {/* License Selection */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#344E41] mb-2.5">
              1. Select License Tier
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <button
                type="button"
                onClick={() => setSelectedTier('standard')}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  selectedTier === 'standard'
                    ? 'border-[#344E41] bg-white ring-2 ring-[#344E41]/20 shadow-xs'
                    : 'border-[#E9E4D8] bg-[#FAF7F2] hover:bg-white/60'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-sm text-[#2B2B2B]">Standard</span>
                  <span className="font-serif font-bold text-lg text-[#344E41]">$59</span>
                </div>
                <p className="text-[11px] text-[#2B2B2B]/60 mt-1">1 site for you or 1 client</p>
                <div className="mt-2 text-[10px] text-[#D9A68B] font-semibold">Save $20 today</div>
              </button>

              <button
                type="button"
                onClick={() => setSelectedTier('freelancer')}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  selectedTier === 'freelancer'
                    ? 'border-[#344E41] bg-white ring-2 ring-[#344E41]/20 shadow-xs'
                    : 'border-[#E9E4D8] bg-[#FAF7F2] hover:bg-white/60'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-sm text-[#2B2B2B]">Freelancer</span>
                  <span className="font-serif font-bold text-lg text-[#344E41]">$129</span>
                </div>
                <p className="text-[11px] text-[#2B2B2B]/60 mt-1">Unlimited client sites</p>
                <div className="mt-2 text-[10px] text-[#344E41] font-semibold">Designer favorite</div>
              </button>

              <button
                type="button"
                onClick={() => setSelectedTier('bundle')}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  selectedTier === 'bundle'
                    ? 'border-[#344E41] bg-white ring-2 ring-[#344E41]/20 shadow-xs'
                    : 'border-[#E9E4D8] bg-[#FAF7F2] hover:bg-white/60'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-sm text-[#2B2B2B]">Bundle (3x)</span>
                  <span className="font-serif font-bold text-lg text-[#344E41]">$149</span>
                </div>
                <p className="text-[11px] text-[#2B2B2B]/60 mt-1">Clarity + Folio + Studio</p>
                <div className="mt-2 text-[10px] text-[#A3B18A] font-semibold">All templates</div>
              </button>
            </div>
          </div>

          {/* Customer Details */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#344E41] mb-2.5">
              2. Your Delivery Email
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] text-[#2B2B2B]/70 mb-1">Your Full Name</label>
                <input
                  type="text"
                  required
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="e.g. Sarah Jenkins"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E9E4D8] bg-white text-sm focus:border-[#344E41] focus:ring-1 focus:ring-[#344E41] outline-none"
                />
              </div>
              <div>
                <label className="block text-[11px] text-[#2B2B2B]/70 mb-1">Email Address (for download link)</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="coach@yourpractice.com"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E9E4D8] bg-white text-sm focus:border-[#344E41] focus:ring-1 focus:ring-[#344E41] outline-none"
                />
              </div>
            </div>
          </div>

          {/* Order Bump Upsell (as specified in page 11) */}
          <div className="bg-white border-2 border-dashed border-[#A3B18A] p-4 rounded-2xl flex items-start gap-3">
            <input
              type="checkbox"
              id="order-bump"
              checked={includeOrderBump}
              onChange={(e) => setIncludeOrderBump(e.target.checked)}
              className="w-5 h-5 rounded text-[#344E41] border-[#E9E4D8] focus:ring-[#344E41] mt-0.5 cursor-pointer"
            />
            <label htmlFor="order-bump" className="flex-1 cursor-pointer">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-sm text-[#344E41]">
                  Add 25-Min Setup Video Masterclass & Copy Templates
                </span>
                <span className="text-xs font-bold bg-[#A3B18A]/20 text-[#344E41] px-2 py-0.5 rounded-md">
                  +$29
                </span>
              </div>
              <p className="text-xs text-[#2B2B2B]/70 mt-1 leading-relaxed">
                Watch over Alex's shoulder as he unzips, edits colors, updates text in under 10 minutes, and hooks up Calendly live.
              </p>
            </label>
          </div>

          {/* Coupon Code Section */}
          <div>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                placeholder="Discount code (try LAUNCH20)"
                className="flex-1 px-3.5 py-2 rounded-xl border border-[#E9E4D8] bg-white text-xs uppercase tracking-wider focus:border-[#344E41] outline-none"
              />
              <button
                type="button"
                onClick={handleApplyCoupon}
                className="px-4 py-2 bg-[#E9E4D8] hover:bg-[#ded7c8] text-[#344E41] text-xs font-semibold rounded-xl transition-colors cursor-pointer"
              >
                Apply
              </button>
            </div>
            {appliedCoupon && (
              <p className="text-xs text-[#344E41] font-medium mt-1.5 flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-[#A3B18A]" />
                <span>Coupon {appliedCoupon.code} applied: {appliedCoupon.percentOff}% off!</span>
              </p>
            )}
            {couponError && <p className="text-xs text-rose-600 mt-1">{couponError}</p>}
          </div>

          {/* Payment Method Selector */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#344E41] mb-2">
              3. Payment Method
            </label>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setPaymentMethod('card')}
                className={`flex-1 py-2 px-3 rounded-xl border text-xs font-medium flex items-center justify-center gap-2 transition-all ${
                  paymentMethod === 'card'
                    ? 'border-[#344E41] bg-white text-[#344E41] shadow-xs'
                    : 'border-[#E9E4D8] bg-[#FAF7F2] text-[#2B2B2B]/70'
                }`}
              >
                <CreditCard className="w-4 h-4" />
                <span>Credit / Debit Card</span>
              </button>
              <button
                type="button"
                onClick={() => setPaymentMethod('apple_pay')}
                className={`flex-1 py-2 px-3 rounded-xl border text-xs font-medium flex items-center justify-center gap-2 transition-all ${
                  paymentMethod === 'apple_pay'
                    ? 'border-[#344E41] bg-white text-[#344E41] shadow-xs'
                    : 'border-[#E9E4D8] bg-[#FAF7F2] text-[#2B2B2B]/70'
                }`}
              >
                <span> Apple Pay / Wallets</span>
              </button>
            </div>

            {paymentMethod === 'card' && (
              <div className="mt-3 p-3 bg-white border border-[#E9E4D8] rounded-xl space-y-2 text-xs">
                <input
                  type="text"
                  placeholder="Card number (4242 •••• •••• 4242)"
                  defaultValue="4242 4242 4242 4242"
                  className="w-full p-2 border border-[#E9E4D8] rounded-lg outline-none font-mono"
                />
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder="MM / YY"
                    defaultValue="12/28"
                    className="p-2 border border-[#E9E4D8] rounded-lg outline-none font-mono"
                  />
                  <input
                    type="text"
                    placeholder="CVC"
                    defaultValue="888"
                    className="p-2 border border-[#E9E4D8] rounded-lg outline-none font-mono"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Total & Submit Button */}
          <div className="pt-4 border-t border-[#E9E4D8] space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-[#2B2B2B]/70">Subtotal:</span>
              <span className="font-medium text-[#2B2B2B]">${subtotal}</span>
            </div>
            {discountAmount > 0 && (
              <div className="flex items-center justify-between text-sm text-[#344E41]">
                <span>Discount ({appliedCoupon?.code}):</span>
                <span>-${discountAmount}</span>
              </div>
            )}
            <div className="flex items-center justify-between text-base font-bold text-[#344E41]">
              <span>Total to pay:</span>
              <span className="font-serif text-2xl">${finalTotal} USD</span>
            </div>

            <button
              type="submit"
              disabled={isProcessing}
              className="w-full py-4 rounded-full bg-[#344E41] hover:bg-[#283d33] text-white font-medium text-base shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 min-h-[50px]"
            >
              {isProcessing ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Preparing instant download...</span>
                </>
              ) : (
                <>
                  <span>Pay ${finalTotal} & Download Clarity (zip)</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            <div className="flex items-center justify-center gap-4 text-xs text-[#2B2B2B]/60 pt-2">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#344E41]" />
                14-day refund guarantee
              </span>
              <span>·</span>
              <span>Tax/VAT handled by merchant of record</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
