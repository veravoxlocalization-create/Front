'use client';

import React, { useEffect, useState } from 'react';

export default function AuditMemorandum() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    document.title = "Localization Audit — Resend (Veravox Labs)";
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <div id="memorandum-root" className="min-h-screen bg-[#faf8f5] text-[#0f1115] antialiased selection:bg-[#f7f3ea]">
      {/* Topbar - Web Only */}
      <header id="document-topbar" className="print:hidden border-b border-[#e8dfcb] bg-[#faf8f5]/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-2xl mx-auto px-6 py-3 flex items-center justify-between text-xs font-mono tracking-wider text-[#8c8577]">
          <span>VERAVOX LABS · EDITORIAL ADVISORY</span>
          <button 
            id="export-pdf-button"
            onClick={handlePrint}
            className="px-3 py-1 bg-[#f7f3ea] hover:bg-[#e8dfcb] border border-[#e8dfcb] text-[#0f1115] rounded transition-colors font-medium cursor-pointer"
          >
            Export PDF
          </button>
        </div>
      </header>

      {/* Main Document Canvas */}
      <main id="document-content" className="max-w-2xl mx-auto px-6 py-12 md:py-16">
        {/* Header Block */}
        <div id="memorandum-header" className="space-y-3">
          <span className="text-xs font-mono tracking-widest text-[#b89542] uppercase block">
            LOCALIZATION AUDIT · MEMORANDUM NO. 04
          </span>
          <h1 className="text-3xl md:text-4xl font-serif font-medium text-[#0f1115] tracking-tight">
            Localization Audit: Resend
          </h1>
          <p className="text-lg text-[#4a4e58] font-normal">
            Evaluating Technical Intent Across Regional Conversion Surfaces
          </p>
          <div className="text-xs font-mono text-[#8c8577] pt-2 uppercase tracking-wider">
            CLIENT: RESEND · MARKETS: LATAM (ES) &amp; DACH (DE) · AUDIENCE: CTOS &amp; ENGINEERING LEADS
          </div>
        </div>

        <hr className="my-8 border-[#e8dfcb]" />

        {/* Section 1: Perspective */}
        <section id="section-perspective" className="space-y-6 print:break-inside-avoid text-[#4a4e58]">
          <span className="text-xs font-mono text-[#b89542] uppercase tracking-wider block">
            SECTION 1 · PERSPECTIVE
          </span>
          <p className="text-base leading-relaxed">
            <strong className="font-semibold text-[#0f1115]">In Silicon Valley, restraint is positioning.</strong> Conversational shorthand like "email" or "reach humans" signals simplicity and confidence. However, when developer infrastructure expands into LATAM and DACH markets, verbatim agency translations strip away that prestige—rendering high-margin developer tools as basic webmail clients or consumer marketing fluff.
          </p>
          <p className="text-base leading-relaxed">
            This audit evaluates three critical touchpoints on Resend's primary acquisition layer, <strong className="font-semibold text-[#0f1115]">contrasting US baseline intent against traditional agency output and developer-native positioning.</strong>
          </p>
        </section>

        <hr className="my-8 border-[#e8dfcb]" />

        {/* Section 2: Core Touchpoints */}
        <div id="section-core-copy" className="space-y-10">
          <span className="text-xs font-mono text-[#b89542] uppercase tracking-wider block">
            SECTION 2 · CORE ACQUISITION COPY
          </span>
          
          {/* 01 Hero Headline */}
          <article id="touchpoint-01-hero" className="space-y-4 print:break-inside-avoid">
            <div className="text-xs font-mono text-[#b89542] tracking-wider">
              01 / THE HERO HEADLINE (H1)
            </div>
            
            <div className="space-y-2 text-sm text-[#4a4e58]">
              <div className="font-mono text-xs text-[#8c8577] uppercase">US Baseline</div>
              <p className="italic text-[#0f1115]">"Email for developers."</p>
            </div>

            <div className="space-y-1 text-sm text-[#4a4e58]">
              <div className="font-mono text-xs text-[#8c8577] uppercase">Traditional Agency Output</div>
              <p>• ES: Correo electrónico para desarrolladores.</p>
              <p>• DE: E-Mail für Entwickler.</p>
            </div>

            <div className="border-l-2 border-[#b89542] pl-4 py-1 space-y-1 text-sm text-[#0f1115] bg-[#f7f3ea]/50">
              <div className="font-mono text-xs text-[#b89542] uppercase">Refined Technical Intent</div>
              <p>• ES: La API de email para desarrolladores.</p>
              <p>• DE: Die E-Mail-API für Entwickler.</p>
            </div>

            <p className="text-sm leading-relaxed text-[#4a4e58]">
              <strong className="font-semibold text-[#0f1115]">In US tech culture, "email" is recognized shorthand for backend delivery infrastructure.</strong> Translated literally into European Spanish or German, "correo electrónico" shifts product categorization toward consumer webmail inbox clients like Outlook or Gmail. <strong className="font-semibold text-[#0f1115]">Inserting "API" restores category prestige while capturing high-volume regional search intent.</strong>
            </p>
          </article>

          {/* 02 Core Value Prop */}
          <article id="touchpoint-02-value-prop" className="space-y-4 print:break-inside-avoid">
            <div className="text-xs font-mono text-[#b89542] tracking-wider">
              02 / THE CORE VALUE PROPOSITION (H2)
            </div>

            <div className="space-y-2 text-sm text-[#4a4e58]">
              <div className="font-mono text-xs text-[#8c8577] uppercase">US Baseline</div>
              <p className="italic text-[#0f1115]">"The best API to reach humans instead of spam folders. Build, test, and deliver transactional emails at scale."</p>
            </div>

            <div className="space-y-1 text-sm text-[#4a4e58]">
              <div className="font-mono text-xs text-[#8c8577] uppercase">Traditional Agency Output</div>
              <p>• ES: ...para llegar a humanos en lugar de carpetas de spam...</p>
            </div>

            <div className="border-l-2 border-[#b89542] pl-4 py-1 space-y-1 text-sm text-[#0f1115] bg-[#f7f3ea]/50">
              <div className="font-mono text-xs text-[#b89542] uppercase">Refined Technical Intent</div>
              <p>• ES: Máxima entregabilidad al inbox. Construye, prueba y envía correos transaccionales a escala.</p>
            </div>

            <p className="text-sm leading-relaxed text-[#4a4e58]">
              <strong className="font-semibold text-[#0f1115]">"Reach humans" works in English because founder-led copy feels fresh here.</strong> Translated word-for-word, however, "llegar a humanos" sounds bizarre and unpolished to international B2B buyers. <strong className="font-semibold text-[#0f1115]">Engineering leads evaluate infrastructure on inbox placement, not vibes.</strong> Anchoring on entregabilidad grounds the promise in metrics evaluators trust.
            </p>
          </article>

          {/* 03 Primary CTA */}
          <article id="touchpoint-03-cta" className="space-y-4 print:break-inside-avoid">
            <div className="text-xs font-mono text-[#b89542] tracking-wider">
              03 / THE PRIMARY CALL TO ACTION (CTA)
            </div>

            <div className="space-y-2 text-sm text-[#4a4e58]">
              <div className="font-mono text-xs text-[#8c8577] uppercase">US Baseline</div>
              <p className="italic text-[#0f1115]">"Get Started"</p>
            </div>

            <div className="space-y-1 text-sm text-[#4a4e58]">
              <div className="font-mono text-xs text-[#8c8577] uppercase">Traditional Agency Output</div>
              <p>• ES: Empezar</p>
            </div>

            <div className="border-l-2 border-[#b89542] pl-4 py-1 space-y-1 text-sm text-[#0f1115] bg-[#f7f3ea]/50">
              <div className="font-mono text-xs text-[#b89542] uppercase">Refined Technical Intent</div>
              <p>• ES: Probar API / Crear cuenta gratis</p>
            </div>

            <p className="text-sm leading-relaxed text-[#4a4e58]">
              <strong className="font-semibold text-[#0f1115]">Passive verbs like "Empezar" carry zero technical momentum for engineering buyers.</strong> High-intent buyers don't want generic onboarding flows—they want immediate utility, such as generating an API key or running a payload test.
            </p>
          </article>
        </div>

        <hr className="my-8 border-[#e8dfcb]" />

        {/* Section 3: Applied Surface Audit (Expanded) */}
        <section id="section-applied-surfaces" className="space-y-10 print:break-inside-avoid text-[#4a4e58]">
          <span className="text-xs font-mono text-[#b89542] uppercase tracking-wider block">
            SECTION 3 · APPLIED SURFACE AUDITS
          </span>
          
          {/* 04 React Email */}
          <article id="touchpoint-04-react-email" className="space-y-4 print:break-inside-avoid pt-2">
            <div className="text-xs font-mono text-[#b89542] tracking-wider">
              04 / REACT EMAIL INTEGRATION
            </div>
            
            <p className="text-base leading-relaxed">
              <strong className="font-semibold text-[#0f1115]">Resend’s native integration with React Email is its definitive technical moat.</strong> When localizing this documentation block, the messaging must preserve the gravity of component-driven architecture.
            </p>

            <div className="space-y-2 text-sm text-[#4a4e58]">
              <div className="font-mono text-xs text-[#8c8577] uppercase">US Baseline</div>
              <p className="italic text-[#0f1115]">"Write emails in React. Create your templates using the components you already know."</p>
            </div>

            <div className="space-y-1 text-sm text-[#4a4e58]">
              <div className="font-mono text-xs text-[#8c8577] uppercase">Traditional Agency Output</div>
              <p>• ES: Escribe correos en React. Crea tus plantillas...</p>
            </div>

            <div className="border-l-2 border-[#b89542] pl-4 py-1 space-y-1 text-sm text-[#0f1115] bg-[#f7f3ea]/50">
              <div className="font-mono text-xs text-[#b89542] uppercase">Refined Technical Intent</div>
              <p>• ES: Desarrolla plantillas de email con React. Construye interfaces usando componentes que ya dominas.</p>
            </div>

            <p className="text-sm leading-relaxed text-[#4a4e58]">
              <strong className="font-semibold text-[#0f1115]">Directly translating "write emails" reduces a sophisticated templating engine to a basic text editor.</strong> Engineers don't "write" emails in React; they build component-driven architectures. Anchoring the regional copy around "desarrolla" (develop) aligns the messaging with the actual frontend workflow.
            </p>
          </article>

          {/* 05 Founder Narrative */}
          <article id="touchpoint-05-founder-narrative" className="space-y-4 print:break-inside-avoid">
            <div className="text-xs font-mono text-[#b89542] tracking-wider">
              05 / FOUNDER NARRATIVE (ZENO ROCHA)
            </div>
            
            <p className="text-base leading-relaxed">
              <strong className="font-semibold text-[#0f1115]">Developer infrastructure is frequently sold through founder-led conviction.</strong> Zeno Rocha's personal positioning builds immense trust, but direct translations can accidentally make him sound like IT support rather than a systems architect.
            </p>

            <div className="space-y-2 text-sm text-[#4a4e58]">
              <div className="font-mono text-xs text-[#8c8577] uppercase">US Baseline</div>
              <p className="italic text-[#0f1115]">"I started Resend to fix email for developers."</p>
            </div>

            <div className="space-y-1 text-sm text-[#4a4e58]">
              <div className="font-mono text-xs text-[#8c8577] uppercase">Traditional Agency Output</div>
              <p>• ES: Empecé Resend para arreglar el correo para los desarrolladores.</p>
            </div>

            <div className="border-l-2 border-[#b89542] pl-4 py-1 space-y-1 text-sm text-[#0f1115] bg-[#f7f3ea]/50">
              <div className="font-mono text-xs text-[#b89542] uppercase">Refined Technical Intent</div>
              <p>• ES: Fundé Resend para resolver la infraestructura de email para developers.</p>
            </div>

            <p className="text-sm leading-relaxed text-[#4a4e58]">
              <strong className="font-semibold text-[#0f1115]">"Arreglar el correo" sounds like a technician fixing an inbox connection issue.</strong> By upgrading the language to "resolver la infraestructura" (solving infrastructure), the Spanish copy successfully projects the authoritative scale of a Silicon Valley founder.
            </p>
          </article>

          {/* 06 Docs / Webhooks */}
          <article id="touchpoint-06-webhooks" className="space-y-4 print:break-inside-avoid">
            <div className="text-xs font-mono text-[#b89542] tracking-wider">
              06 / TECHNICAL DOCUMENTATION (WEBHOOKS)
            </div>
            
            <p className="text-base leading-relaxed">
              <strong className="font-semibold text-[#0f1115]">The documentation layer is where marketing promises face engineering scrutiny.</strong> Vague verbs destroy technical credibility during the integration phase.
            </p>

            <div className="space-y-2 text-sm text-[#4a4e58]">
              <div className="font-mono text-xs text-[#8c8577] uppercase">US Baseline</div>
              <p className="italic text-[#0f1115]">"Listen to email events. Track when emails are delivered, opened, or bounced."</p>
            </div>

            <div className="space-y-1 text-sm text-[#4a4e58]">
              <div className="font-mono text-xs text-[#8c8577] uppercase">Traditional Agency Output</div>
              <p>• ES: Escucha eventos de correo. Rastrea cuando los correos son entregados...</p>
            </div>

            <div className="border-l-2 border-[#b89542] pl-4 py-1 space-y-1 text-sm text-[#0f1115] bg-[#f7f3ea]/50">
              <div className="font-mono text-xs text-[#b89542] uppercase">Refined Technical Intent</div>
              <p>• ES: Webhooks de eventos. Monitorea el estado de entrega, aperturas y rebotes en tiempo real.</p>
            </div>

            <p className="text-sm leading-relaxed text-[#4a4e58]">
              <strong className="font-semibold text-[#0f1115]">Translating "listen" to "escucha" feels overly conversational in a Spanish API specification.</strong> Engineers look for standardized technical terminology. Replacing the literal translation with "Webhooks" and "Monitorea" instantly grounds the instruction in backend reality.
            </p>
          </article>
        </section>

        <hr className="my-8 border-[#e8dfcb]" />

        {/* Section 4: Systemic Scope (Moved to bottom as conclusion) */}
        <section id="section-scope" className="space-y-4 print:break-inside-avoid">
          <span className="text-xs font-mono text-[#b89542] uppercase tracking-wider block">
            SECTION 4 · SYSTEMIC SCOPE
          </span>
          <p className="text-sm leading-relaxed text-[#4a4e58]">
            <strong className="font-semibold text-[#0f1115]">Landing page copy governs only the initial entry gate.</strong> End-to-end technical localization across the developer lifecycle encompasses three additional architectural layers:
          </p>
          <ul className="text-sm text-[#4a4e58] space-y-2 pl-4 list-disc marker:text-[#b89542]">
            <li>Interactive API Documentation &amp; SDK Method Names</li>
            <li>Console Onboarding &amp; Webhook Telemetry</li>
            <li>Runtime Error Payloads &amp; System Status Strings</li>
          </ul>
          <p className="text-sm leading-relaxed text-[#4a4e58] pt-2">
            <strong className="font-semibold text-[#0f1115]">Veravox partners with engineering organizations to deploy context-aware, developer-native localization across the complete technical stack.</strong>
          </p>
        </section>

        {/* Newsletter Section (No UI Artifacts) */}
        <section id="section-newsletter" className="mt-20 print:hidden space-y-6">
          <div className="text-xs font-mono text-[#8c8577] uppercase tracking-wider">
            EDITORIAL ADVISORY
          </div>
          <p className="text-base leading-relaxed text-[#0f1115] font-medium max-w-md">
            Receive future memorandums on engineering localization, technical intent, and market expansion.
          </p>
          {subscribed ? (
            <p className="text-xs font-mono text-[#b89542] uppercase tracking-wider">
              ✓ Subscribed to future advisories.
            </p>
          ) : (
            <form id="advisory-subscribe-form" className="flex items-end max-w-md gap-4" onSubmit={handleSubscribe}>
              <input 
                id="advisory-email-input"
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address" 
                required
                className="w-full bg-transparent border-b border-[#0f1115]/20 pb-1 text-[#0f1115] placeholder:text-[#8c8577] focus:outline-none focus:border-[#b89542] rounded-none transition-colors"
              />
              <button 
                id="advisory-submit-button"
                type="submit" 
                className="text-xs font-mono text-[#b89542] hover:text-[#0f1115] uppercase tracking-wider pb-1 transition-colors whitespace-nowrap cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          )}
        </section>

        {/* Footer */}
        <footer id="document-footer" className="pt-16 text-xs font-mono text-[#8c8577] border-t border-[#e8dfcb] mt-16 flex flex-col sm:flex-row gap-2 justify-between items-start sm:items-center">
          <span>VERAVOX LABS · ENGINEERING-GRADE LOCALIZATION</span>
          <span>CONFIDENTIAL ASSESSMENTS GROUP</span>
        </footer>
      </main>
    </div>
  );
}
