import React, { useState, useEffect } from 'react';
import { Cookie, X, Check, Shield } from 'lucide-react';

export const CookieNotice: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true);

  useEffect(() => {
    try {
      const consent = typeof window !== 'undefined' && window.localStorage ? localStorage.getItem('sagepage_cookie_consent') : null;
      if (!consent) {
        const timer = setTimeout(() => setVisible(true), 1200);
        return () => clearTimeout(timer);
      }
    } catch {
      // In sandboxed iframe environments where storage is restricted, avoid throwing
    }
  }, []);

  const handleAccept = () => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('sagepage_cookie_consent', 'accepted');
      }
    } catch {}
    setVisible(false);
    setShowSettings(false);
  };

  const handleDecline = () => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('sagepage_cookie_consent', 'declined');
      }
    } catch {}
    setVisible(false);
    setShowSettings(false);
  };

  const handleSaveSettings = () => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem(
          'sagepage_cookie_consent',
          analyticsEnabled ? 'custom_accepted' : 'custom_declined'
        );
      }
    } catch {}
    setVisible(false);
    setShowSettings(false);
  };

  if (!visible) return null;

  return (
    <aside
      aria-label="Cookie consent banner"
      className="fixed z-50 bottom-4 left-4 right-4 sm:right-auto sm:max-w-md bg-white border border-[#E9E4D8] rounded-2xl shadow-xl p-5 text-sm animate-in slide-in-from-bottom duration-300"
    >
      {!showSettings ? (
        <div>
          <div className="flex items-start gap-3">
            <div className="p-2 bg-[#E9E4D8]/50 rounded-xl text-[#344E41] shrink-0 mt-0.5">
              <Cookie className="w-5 h-5 text-[#344E41]" />
            </div>
            <div className="flex-1">
              <h4 className="font-serif font-bold text-[#344E41] text-base">Cookie Preferences</h4>
              <p className="mt-1 text-[#2B2B2B]/80 text-[13px] leading-relaxed">
                We use a few cookies to understand what works and make our templates better. We never sell your personal data.
              </p>
            </div>
            <button
              onClick={handleDecline}
              className="text-[#2B2B2B]/50 hover:text-[#2B2B2B] p-1 rounded-md"
              aria-label="Dismiss cookie banner"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="mt-4 pt-3 border-t border-[#E9E4D8]/80 flex flex-wrap items-center justify-between gap-2">
            <button
              onClick={() => setShowSettings(true)}
              className="text-xs text-[#2B2B2B]/70 hover:text-[#344E41] underline underline-offset-2 py-1 px-1"
            >
              Settings
            </button>
            <div className="flex items-center gap-2">
              <button
                onClick={handleDecline}
                className="px-3.5 py-1.5 rounded-full border border-[#E9E4D8] text-xs font-medium text-[#2B2B2B] hover:bg-[#FAF7F2] transition-colors"
              >
                Decline
              </button>
              <button
                onClick={handleAccept}
                className="px-4 py-1.5 rounded-full bg-[#344E41] text-xs font-medium text-white hover:bg-[#283d33] transition-colors shadow-xs"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex items-center justify-between pb-2 border-b border-[#E9E4D8]">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#344E41]" />
              <h4 className="font-serif font-bold text-[#344E41]">Cookie Settings</h4>
            </div>
            <button
              onClick={() => setShowSettings(false)}
              className="text-xs text-[#2B2B2B]/60 hover:text-[#2B2B2B]"
            >
              Back
            </button>
          </div>

          <div className="mt-3 space-y-3 text-xs">
            <div className="flex items-center justify-between p-2 bg-[#FAF7F2] rounded-lg">
              <div>
                <p className="font-semibold text-[#2B2B2B]">Essential Cookies</p>
                <p className="text-[#2B2B2B]/60">Necessary for checkout & secure downloads</p>
              </div>
              <span className="text-[11px] font-semibold text-[#344E41]">Required</span>
            </div>

            <div className="flex items-center justify-between p-2 bg-[#FAF7F2] rounded-lg">
              <div>
                <p className="font-semibold text-[#2B2B2B]">Analytics Cookies</p>
                <p className="text-[#2B2B2B]/60">Helps us monitor visitor traffic & popular guides</p>
              </div>
              <input
                type="checkbox"
                checked={analyticsEnabled}
                onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                className="w-4 h-4 text-[#344E41] rounded border-gray-300 focus:ring-[#344E41]"
              />
            </div>
          </div>

          <div className="mt-4 flex justify-end gap-2">
            <button
              onClick={handleSaveSettings}
              className="px-4 py-1.5 rounded-full bg-[#344E41] text-xs font-medium text-white hover:bg-[#283d33] transition-colors"
            >
              Save Preferences
            </button>
          </div>
        </div>
      )}
    </aside>
  );
};
