"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useForm, ValidationError } from "@formspree/react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // QuickAuditPopup logic
  const [state, handleSubmit] = useForm("xblyjgoz");

  return (
    <header
      className="w-full flex flex-col"
      style={{
        backgroundImage: "url(/herobg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Blue border at the very top */}
      <div className="w-[85%] max-w-[1400px] mx-auto flex flex-col sm:flex-row sm:items-start md:items-center justify-between h-auto sm:h-[80px] py-3 sm:py-0 gap-2 sm:gap-0">
        {/* Logo on the far left */}
        <Link href="/" className="flex items-center mb-2 sm:mb-0">
          <img 
            src="/Logo-9-White.svg" 
            alt="Logo" 
            className="h-10 w-auto sm:h-12"
          />
        </Link>
        {/* CTA strip on the far right */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-0 ml-0 sm:ml-auto w-full sm:w-auto">
          <span className="bg-white/20 backdrop-blur-md text-white text-xs md:text-sm font-semibold px-3 sm:px-4 py-2 tracking-wide uppercase border border-white/30 shadow-sm w-full sm:w-auto text-center">
            ✱ Free Website Audit in 24 Hours
          </span>
          <button
            className="bg-gradient-to-r from-[#232323] to-[#111] text-white text-xs md:text-sm font-bold px-4 sm:px-6 py-2 uppercase tracking-wide hover:from-[#333] hover:to-[#222] transition border border-white/30 shadow-sm w-full sm:w-auto"
            onClick={() => setPopupOpen(true)}
          >
            Get Yours Now
          </button>
          {/* Popup */}
          {popupOpen && (
            <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-2">
              <div className="bg-white rounded-xl p-6 max-w-sm w-full shadow-xl relative border border-gray-100 max-h-[90vh] overflow-y-auto">
                <button
                  className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl"
                  onClick={() => setPopupOpen(false)}
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
          )}
        </div>
      </div>
    </header>
  );
}
