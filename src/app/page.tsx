"use client";

import { HeroSection } from '@/components/sections/hero-section';
import { ProjectShowcaseSection } from '@/components/sections/project-showcase-section';
import { BenefitsSection } from '@/components/sections/benefits-section';
import { PricingSection } from '@/components/sections/pricing-section';
import { FaqSection } from '@/components/sections/partners-faq-section';
import { CallToActionSection } from '@/components/sections/call-to-action-section';
import { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

function StickyBar({ onOpen }: { onOpen: () => void }) {
  return (
    <div className="relative z-50 w-full bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 text-white flex items-center justify-center px-4 py-2 shadow-lg font-medium">
      <span className="mr-2">🎁 Free 5-Point Website Mini Audit!</span>
      <button
        className="bg-white/20 backdrop-blur-sm text-white font-semibold px-3 py-1 rounded-full hover:bg-white/30 transition ml-2 border border-white/30"
        onClick={onOpen}
      >
        Get Yours Now
      </button>
    </div>
  );
}

function QuickAuditPopup({ open, onClose }: { open: boolean, onClose: () => void }) {
  const [state, handleSubmit] = useForm("xblyjgoz");

  useEffect(() => {
    if (!open) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 max-w-sm w-full shadow-xl relative border border-gray-100">
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl"
          onClick={onClose}
          aria-label="Close"
        >✕</button>
        <div className="flex flex-col items-center text-center">
          <h3 className="text-xl font-bold mb-1 text-gray-900">Free Website Mini Audit</h3>
          <p className="mb-4 text-gray-600 text-sm">
            Get a quick expert review of your site—no strings attached.
          </p>
          {state.succeeded ? (
            <div className="text-green-600 font-semibold text-base py-8">
              🎉 Thank you! You'll get your audit within 24 hours.
            </div>
          ) : (
            <form className="w-full" onSubmit={handleSubmit}>
              <label className="block text-left text-gray-700 text-sm mb-1" htmlFor="site-url">
                Website URL <span className="text-red-500">*</span>
              </label>
              <input
                id="site-url"
                name="site-url"
                className="border border-gray-300 rounded-md p-2 mb-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500 text-black"
                placeholder="https://yourwebsite.com"
                type="url"
                required
              />
              <ValidationError prefix="Website" field="site-url" errors={state.errors} />

              <label className="block text-left text-gray-700 text-sm mb-1" htmlFor="email">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                className="border border-gray-300 rounded-md p-2 mb-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500 text-black"
                placeholder="you@email.com"
                type="email"
                required
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />

              <div className="flex items-center mb-2">
                <input
                  id="launch_soon"
                  name="launch_soon"
                  type="checkbox"
                  className="mr-2"
                  value="Yes"
                />
                <label htmlFor="launch_soon" className="text-gray-700 text-sm">
                  Launching in next 30 days
                </label>
              </div>

              <div className="mb-2">
                <span className="block text-left text-gray-700 text-sm mb-1">Budget</span>
                <div className="flex gap-2 text-gray-600">
                  <label className="flex items-center">
                    <input type="radio" name="budget" value="<$1K" className="mr-1" />
                    &lt;$1K
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="budget" value="$1–3K" className="mr-1" />
                    $1–3K
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="budget" value="$3K+" className="mr-1" />
                    $3K+
                  </label>
                </div>
              </div>

              <button
                className="bg-green-500 hover:bg-green-600 transition text-white font-semibold px-4 py-2 rounded-md w-full shadow mt-2"
                type="submit"
                disabled={state.submitting}
              >
                {state.submitting ? "Submitting..." : "Get My Free Audit"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  const [popupOpen, setPopupOpen] = useState(false);

  // Show popup automatically after 12s if not already opened
  useEffect(() => {
    const timer = setTimeout(() => setPopupOpen(true), 12000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <StickyBar onOpen={() => setPopupOpen(true)} />
      <HeroSection />
      <ProjectShowcaseSection />
      <BenefitsSection />
      <PricingSection />
      <FaqSection />
      <CallToActionSection />
      <QuickAuditPopup open={popupOpen} onClose={() => setPopupOpen(false)} />
    </>
  );
}
