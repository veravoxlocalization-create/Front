'use client';

import { useState } from 'react';
import auditData from '@/public/data/audits.json';

export default function FeaturedAudits() {
  const [activeLangs, setActiveLangs] = useState<Record<string, string>>({
    resend: 'ES',
    vercel: 'FR',
    supabase: 'EN',
    stripe: 'ES',
    posthog: 'EN',
  });

  const [showBaseline, setShowBaseline] = useState<Record<string, boolean>>({});

  const toggleLang = (auditId: string, lang: string) => {
    setActiveLangs((prev) => ({ ...prev, [auditId]: lang }));
  };

  const toggleDiff = (auditId: string) => {
    setShowBaseline((prev) => ({ ...prev, [auditId]: !prev[auditId] }));
  };

  return (
    <section className="w-full max-w-6xl mx-auto py-16 px-4 bg-black text-white font-mono">
      <div className="mb-12 border-b border-neutral-800 pb-6">
        <h2 className="text-2xl font-bold tracking-tight text-neutral-100">
          VeraVox // Re-Engineered Technical Audits
        </h2>
        <p className="text-sm text-neutral-400 mt-2">
          High-density regional positioning vs. Silicon Valley baseline copy.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {auditData.audits.map((item) => {
          const currentLang = activeLangs[item.id];
          const variant = item.variants[currentLang as keyof typeof item.variants];
          const isComparing = showBaseline[item.id];

          return (
            <div
              key={item.id}
              className="border border-neutral-800 bg-neutral-950 p-6 flex flex-col justify-between hover:border-neutral-700 transition-colors"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs uppercase font-bold text-neutral-400 tracking-wider">
                    {item.brand}
                  </span>
                  <div className="flex items-center space-x-2">
                    {Object.keys(item.variants).map((lang) => (
                      <button
                        key={lang}
                        onClick={() => toggleLang(item.id, lang)}
                        className={`text-xs px-2 py-0.5 border ${
                          currentLang === lang
                            ? 'border-white bg-white text-black font-bold'
                            : 'border-neutral-800 text-neutral-400 hover:border-neutral-600'
                        }`}
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                </div>

                <p className="text-xs text-neutral-500 mb-4">{item.surface}</p>

                {isComparing ? (
                  <div className="bg-neutral-900 border border-red-950/50 p-4 mb-4 text-xs">
                    <span className="text-red-400 font-bold block mb-1">
                      [US LIVE BASELINE]
                    </span>
                    <p className="font-bold text-neutral-200 mb-2">{item.usLiveBaseline.h1}</p>
                    <p className="text-neutral-400">{item.usLiveBaseline.subheadline}</p>
                  </div>
                ) : (
                  <div className="mb-4">
                    <h3 className="text-base font-bold text-neutral-100 mb-2">{variant.h1}</h3>
                    <p className="text-xs leading-relaxed text-neutral-300">{variant.subheadline}</p>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-neutral-900 flex justify-between items-center">
                <button
                  onClick={() => toggleDiff(item.id)}
                  className="text-xs text-neutral-400 hover:text-white underline decoration-neutral-700 underline-offset-4"
                >
                  {isComparing ? 'Show Localized' : 'Compare US Live'}
                </button>
                <span className="text-[10px] text-neutral-600 font-bold">VERAVOX // OK</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
