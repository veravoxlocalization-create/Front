'use client';

import React from 'react';
import Link from 'next/link';

export default function ResendAuditMemo() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <main className="max-w-4xl mx-auto px-6 md:px-12 pt-12 pb-32">
      {/* Top Navigation / Utility Bar */}
      <div className="flex justify-between items-center border-b border-ink-700 pb-4 mb-16">
        <div className="font-mono text-[10px] uppercase tracking-widest text-bone-500">
          VeraVox Labs <span className="mx-2">·</span> Editorial Advisory
        </div>
        <button 
          onClick={handlePrint}
          className="font-mono text-[10px] uppercase tracking-widest text-bone-500 hover:text-signal-gold transition-colors cursor-pointer bg-transparent border-0"
        >
          Export PDF
        </button>
      </div>

      {/* Memo Header */}
      <header className="mb-20">
        <div className="font-mono text-[10px] uppercase tracking-widest text-signal-gold mb-6">
          Localization Audit <span className="mx-2">·</span> Memorandum No. 04
        </div>
        <h1 className="font-display font-medium text-4xl md:text-5xl text-bone-100 tracking-tight mb-4">
          Localization Audit: Resend
        </h1>
        <p className="text-lg text-bone-300 mb-10">
          Evaluating Technical Intent Across Regional Conversion Surfaces
        </p>
        
        {/* Metadata Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-ink-700 font-mono text-[10px] uppercase tracking-widest text-bone-500 leading-relaxed">
          <div>
            <span className="text-bone-300 block mb-1">Client</span>
            Resend
          </div>
          <div>
            <span className="text-bone-300 block mb-1">Markets</span>
            LATAM (ES) & DACH (DE)
          </div>
          <div>
            <span className="text-bone-300 block mb-1">Audience</span>
            CTOs & Engineering Leads
          </div>
        </div>
      </header>

      {/* Section 1 */}
      <section className="mb-20">
        <div className="font-mono text-[10px] uppercase tracking-widest text-signal-gold mb-8">
          Section 1 / Perspective
        </div>
        <div className="max-w-none text-bone-300 leading-relaxed space-y-6">
          <p>
            <strong className="text-bone-100 font-medium">In Silicon Valley, restraint is positioning.</strong> Conversational shorthand like "email" or "reach humans" signals simplicity and confidence. However, when developer infrastructure expands into LATAM and DACH markets, verbatim agency translations strip away that prestige—rendering high-margin developer tools as basic webmail clients or consumer marketing fluff.
          </p>
          <p>
            This audit evaluates three critical touchpoints on Resend's primary acquisition layer, contrasting US baseline intent against traditional agency output and developer-native positioning.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section className="mb-20">
        <div className="font-mono text-[10px] uppercase tracking-widest text-signal-gold mb-8">
          Section 2 / Core Acquisition Copy
        </div>
        
        {/* Audit Block 01 */}
        <div className="mb-16">
          <h3 className="font-mono text-[10px] uppercase tracking-widest text-bone-300 mb-6">
            01 / The Hero Headline (H1)
          </h3>
          
          <div className="space-y-6 mb-8">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-bone-600 mb-2">US Baseline</p>
              <p className="text-bone-300 italic">"Email for developers."</p>
            </div>
            
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-bone-600 mb-2">Traditional Agency Output</p>
              <ul className="text-bone-300 space-y-1">
                <li><span className="text-bone-500 mr-2">ES:</span> Correo electrónico para desarrolladores.</li>
                <li><span className="text-bone-500 mr-2">DE:</span> E-Mail für Entwickler.</li>
              </ul>
            </div>

            <div className="border-l-2 border-signal-gold pl-4 py-1">
              <p className="font-mono text-[10px] uppercase tracking-widest text-signal-gold mb-2">Refined Technical Intent</p>
              <ul className="text-bone-100 font-medium space-y-1">
                <li><span className="text-bone-500 font-normal mr-2">ES:</span> La API de email para desarrolladores.</li>
                <li><span className="text-bone-500 font-normal mr-2">DE:</span> Die E-Mail-API für Entwickler.</li>
              </ul>
            </div>
          </div>

          <p className="text-bone-300 leading-relaxed text-sm">
            In US tech culture, "email" is recognized shorthand for backend delivery infrastructure. Translated literally into European Spanish or German, "correo electrónico" shifts product categorization toward consumer webmail inbox clients like Outlook or Gmail. <strong className="text-bone-100 font-medium">Inserting "API" restores category prestige while capturing high-volume regional search intent.</strong>
          </p>
        </div>

        {/* Audit Block 02 */}
        <div className="mb-16">
          <h3 className="font-mono text-[10px] uppercase tracking-widest text-bone-300 mb-6">
            02 / The Core Value Proposition (H2)
          </h3>
          
          <div className="space-y-6 mb-8">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-bone-600 mb-2">US Baseline</p>
              <p className="text-bone-300 italic">"The best API to reach humans instead of spam folders. Build, test, and deliver transactional emails at scale."</p>
            </div>
            
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-bone-600 mb-2">Traditional Agency Output</p>
              <ul className="text-bone-300 space-y-1">
                <li><span className="text-bone-500 mr-2">ES:</span> La mejor API para llegar a humanos en lugar de carpetas de spam...</li>
                <li><span className="text-bone-500 mr-2">DE:</span> Die beste API, um Menschen statt Spam-Ordner zu erreichen...</li>
              </ul>
            </div>

            <div className="border-l-2 border-signal-gold pl-4 py-1">
              <p className="font-mono text-[10px] uppercase tracking-widest text-signal-gold mb-2">Refined Technical Intent</p>
              <ul className="text-bone-100 font-medium space-y-1">
                <li><span className="text-bone-500 font-normal mr-2">ES:</span> Máxima entregabilidad al inbox. Construye, prueba y envía correos transaccionales a escala.</li>
                <li><span className="text-bone-500 font-normal mr-2">DE:</span> Maximale Posteingangszustellbarkeit. Entwickeln, testen und versenden Sie transaktionale E-Mails im großen Stil.</li>
              </ul>
            </div>
          </div>

          <p className="text-bone-300 leading-relaxed text-sm">
            "Reach humans" works in English because founder-led copy feels fresh here. Translated word-for-word, however, "llegar a humanos" sounds bizarre and unpolished to international B2B buyers. <strong className="text-bone-100 font-medium">Engineering leads evaluate infrastructure on inbox placement, not vibes.</strong> Anchoring on entregabilidad and Zustellbarkeit grounds the promise in metrics evaluators trust.
          </p>
        </div>

        {/* Audit Block 03 */}
        <div>
          <h3 className="font-mono text-[10px] uppercase tracking-widest text-bone-300 mb-6">
            03 / The Primary Call to Action (CTA)
          </h3>
          
          <div className="space-y-6 mb-8">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-bone-600 mb-2">US Baseline</p>
              <p className="text-bone-300 italic">"Get Started"</p>
            </div>
            
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-bone-600 mb-2">Traditional Agency Output</p>
              <ul className="text-bone-300 space-y-1">
                <li><span className="text-bone-500 mr-2">ES:</span> Empezar</li>
                <li><span className="text-bone-500 mr-2">DE:</span> Loslegen</li>
              </ul>
            </div>

            <div className="border-l-2 border-signal-gold pl-4 py-1">
              <p className="font-mono text-[10px] uppercase tracking-widest text-signal-gold mb-2">Refined Technical Intent</p>
              <ul className="text-bone-100 font-medium space-y-1">
                <li><span className="text-bone-500 font-normal mr-2">ES:</span> Probar API / Crear cuenta gratis</li>
                <li><span className="text-bone-500 font-normal mr-2">DE:</span> API testen / Kostenloses Konto erstellen</li>
              </ul>
            </div>
          </div>

          <p className="text-bone-300 leading-relaxed text-sm">
            Passive verbs like "Empezar" carry zero technical momentum for engineering buyers. High-intent buyers don't want generic onboarding flows—they want immediate utility, such as generating an API key or running a payload test.
          </p>
        </div>
      </section>

      {/* Section 3 */}
      <section className="mb-20">
        <div className="font-mono text-[10px] uppercase tracking-widest text-signal-gold mb-8">
          Section 3 / Applied Surface Audits
        </div>
        
        <div className="space-y-6 text-bone-300 leading-relaxed">
          <h3 className="font-display text-xl text-bone-100 mb-2">01 / React Email Integration</h3>
          <p>
            Resend's native integration with React Email is its definitive technical moat. When localizing this documentation block, the messaging must preserve the gravity of component-driven architecture. Verbatim translation fails here because terms like "templating engine" carry different connotations across European enterprise developer tooling.
          </p>
        </div>
      </section>
      
      {/* Return Navigation */}
      <div className="mt-32 pt-8 border-t border-ink-700">
        <Link href="/" className="font-mono text-[10px] uppercase tracking-widest text-bone-500 hover:text-signal-gold transition-colors">
          ← Return to Directory
        </Link>
      </div>
    </main>
  );
}
