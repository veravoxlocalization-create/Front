'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const TEARDOWN_CONTENT = {
  de: {
    buyerLang: 'German',
    label: 'asset.headline — us-en → de-de',
    direct: 'Linear ist der schnellste Weg, moderne Software zu planen, zu verfolgen und auszuliefern — gebaut für die Geschwindigkeit leistungsstarker Teams.',
    structural: 'Linear strukturiert Planung, Entwicklung und Auslieferung in einem System — nachvollziehbar für Teams, die Präzision brauchen.',
    whyFailed: '"Fastest" and "high-performing" are hype superlatives. Translated literally, they read as unverified marketing claims to a DE engineering lead.',
    anchorHtml: '<span class="text-bone-100">nachvollziehbar</span> (traceable, verifiable) is a term DE technical buyers search for directly — it does the trust-building work "fast" was trying to do.',
    restructure: 'Leads with function, not speed — matching how DE product documentation is conventionally ordered.',
  },
  es: {
    buyerLang: 'Spanish',
    label: 'asset.headline — us-en → es-es',
    direct: 'Envía código más rápido. Sin romper tu base de código.',
    structural: 'Acelera tus despliegues. Sin comprometer tu infraestructura.',
    whyFailed: 'Physical verbs like "send" and "break" read as overly literal and lack enterprise prestige in Spanish B2B.',
    anchorHtml: '<span class="text-bone-100">Infraestructura</span> and <span class="text-bone-100">despliegues</span> shift the framing from a physical action to structural engineering.',
    restructure: 'Removes Germanic action-orientation to focus on systemic stability, matching how ES technical buyers evaluate risk.',
  },
  fr: {
    buyerLang: 'French',
    label: 'asset.headline — us-en → fr-fr',
    direct: 'Expédiez le code plus rapidement. Sans casser votre base de code.',
    structural: 'Accélérez vos déploiements. Sans compromettre votre infrastructure.',
    whyFailed: 'Literal translations of "ship" and "break" sound like a logistics error rather than a software solution.',
    anchorHtml: 'European enterprise buyers require conceptual abstraction. <span class="text-bone-100">Déploiements</span> establishes immediate technical authority.',
    restructure: 'Aligns with French technical documentation standards, prioritizing institutional reliability over aggressive speed.',
  },
};

type Lang = 'es' | 'fr' | 'de';

export default function Home() {
  const [lang, setLang] = useState<Lang>('de');
  const currentTeardown = TEARDOWN_CONTENT[lang];

  return (
    <>
      <header className="border-b border-ink-700">
        <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <Link href="#top" className="font-display font-semibold text-lg tracking-tight text-bone-100">VeraVox</Link>
          <div className="flex items-center gap-3 font-mono text-xs">
            {(['es', 'fr', 'de'] as Lang[]).map((l) => (
              <React.Fragment key={l}>
                <button
                  onClick={() => setLang(l)}
                  className={`bg-transparent border-0 p-0 cursor-pointer transition-colors hover:text-bone-300 ${lang === l ? 'text-signal-green' : 'text-bone-500'}`}
                >
                  {l.toUpperCase()}
                </button>
                {l !== 'de' && <span className="text-ink-600">/</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </header>

      <section id="top" className="max-w-6xl mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-20 md:pb-28">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          <div className="lg:col-span-7">
            <h1 className="hero-in d1 font-display font-semibold text-4xl sm:text-5xl md:text-[3.4rem] leading-[1.08] tracking-tight text-bone-100 max-w-xl">
              Re-engineer your US SaaS copy for European technical buyers.
            </h1>
            <p className="hero-in d2 mt-6 text-lg md:text-xl text-bone-300 max-w-lg leading-relaxed">
              Literal translations destroy conversion intent. We build structural adaptations for cynical EU markets.
            </p>
            <p className="hero-in d3 mt-8 text-base text-bone-500 max-w-md leading-relaxed">
              You are losing pipeline efficiency in Europe due to mismatched tone and structural translation errors. VeraVox deploys Adversarial Audits and Contextual Anchors to map your US messaging to the exact pragmatic vocabulary expected by European decision-makers. Zero marketing fluff. High-signal localization.
            </p>
            <div className="hero-in d4 mt-10">
              <Link href="#audits" className="rule-hover inline-block text-sm font-medium text-bone-100 pb-0.5">
                Explore the Audit Library ↓
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 lg:pt-2">
            <div className="hero-in d3 border border-ink-700 bg-ink-900">
              <div className="px-5 py-3 border-b border-ink-700 font-mono text-xs text-bone-500">
                engagement spec
              </div>
              <dl className="divide-y divide-ink-700">
                <div className="flex items-center justify-between px-5 py-4">
                  <dt className="text-sm text-bone-500">Target markets</dt>
                  <dd className="font-mono text-sm text-bone-100">ES · FR · DE</dd>
                </div>
                <div className="flex items-center justify-between px-5 py-4">
                  <dt className="text-sm text-bone-500">Method</dt>
                  <dd className="font-mono text-sm text-bone-100">structural, not literal</dd>
                </div>
                <div className="flex items-center justify-between px-5 py-4">
                  <dt className="text-sm text-bone-500">Diagnostic call</dt>
                  <dd className="font-mono text-sm text-bone-100">60 min</dd>
                </div>
                <div className="flex items-center justify-between px-5 py-4">
                  <dt className="text-sm text-bone-500">Marketing fluff</dt>
                  <dd className="font-mono text-sm text-signal-green">0%</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section id="teardown" className="border-t border-ink-700 bg-ink-900/40">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="max-w-xl mb-12">
            <h2 className="font-display font-semibold text-3xl md:text-4xl tracking-tight text-bone-100">
              Featured: the Linear teardown
            </h2>
            <p className="mt-4 text-base text-bone-500 leading-relaxed">
              An illustrative reconstruction of how we structurally re-engineer a US product's core messaging for a <span className="text-bone-100">{currentTeardown.buyerLang}</span> technical buyer — line by line, decision by decision.
            </p>
          </div>
          <div className="border border-ink-700 bg-ink-950">
            <div className="flex items-center justify-between px-5 py-3 border-b border-ink-700">
              <span className="font-mono text-xs text-bone-500">{currentTeardown.label}</span>
              <span className="font-mono text-xs text-bone-500">illustrative example</span>
            </div>
            <div className="grid md:grid-cols-[1fr_auto] divide-y md:divide-y-0 divide-ink-700">
              <div className="divide-y divide-ink-700">
                <div className="flex gap-4 px-5 py-5">
                  <span className="font-mono text-signal-red select-none mt-0.5">−</span>
                  <div>
                    <p className="font-mono text-xs text-signal-red mb-2">direct translation — rejected</p>
                    <p className="text-bone-500 line-through decoration-signal-red/60 leading-relaxed">
                      {currentTeardown.direct}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 px-5 py-5">
                  <span className="font-mono text-signal-green select-none mt-0.5">+</span>
                  <div>
                    <p className="font-mono text-xs text-signal-green mb-2">structural adaptation — shipped</p>
                    <p className="text-bone-100 leading-relaxed">
                      {currentTeardown.structural}
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-5 py-5 md:w-72 md:border-l border-ink-700 space-y-5">
                <div>
                  <p className="font-mono text-xs text-bone-500 mb-1">why it failed</p>
                  <p className="text-sm text-bone-300 leading-relaxed">{currentTeardown.whyFailed}</p>
                </div>
                <div>
                  <p className="font-mono text-xs text-bone-500 mb-1">the anchor</p>
                  <p className="text-sm text-bone-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: currentTeardown.anchorHtml }} />
                </div>
                <div>
                  <p className="font-mono text-xs text-bone-500 mb-1">the restructure</p>
                  <p className="text-sm text-bone-300 leading-relaxed">{currentTeardown.restructure}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="audits" className="border-t border-ink-700 bg-ink-950">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="max-w-xl mb-12">
            <h2 className="font-display font-semibold text-3xl md:text-4xl tracking-tight text-bone-100">
              Audit Library
            </h2>
            <p className="mt-4 text-base text-bone-500 leading-relaxed">
              Full-length memorandums evaluating technical intent and localization integrity across primary B2B infrastructure surfaces.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/audits/resend" className="group block border border-ink-700 bg-ink-900 p-6 hover:border-signal-green transition-colors flex flex-col justify-between h-full">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="font-mono text-xs text-signal-green uppercase tracking-wider">Free Access</span>
                  <span className="font-mono text-xs text-bone-500">Memo No. 04</span>
                </div>
                <h3 className="font-display text-xl text-bone-100 mb-2 group-hover:text-signal-green transition-colors">Resend</h3>
                <p className="text-sm text-bone-500 leading-relaxed mb-6">Evaluating technical intent across regional conversion surfaces. Contrasting US baseline intent against traditional agency output.</p>
              </div>
              <div className="font-mono text-xs text-bone-300 flex items-center gap-2">
                Read Memorandum →
              </div>
            </Link>

            <div className="border border-ink-700 bg-ink-900/50 p-6 flex flex-col justify-between h-full opacity-75">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="font-mono text-xs text-bone-500 uppercase tracking-wider">Premium</span>
                  <span className="font-mono text-xs text-bone-500">Memo No. 05</span>
                </div>
                <h3 className="font-display text-xl text-bone-300 mb-2">Vercel</h3>
                <p className="text-sm text-bone-600 leading-relaxed mb-6">Deconstructing enterprise caching documentation for strict DACH compliance and operational rigor.</p>
              </div>
              <div className="font-mono text-xs text-bone-600">
                Subscriber Exclusive
              </div>
            </div>

            <div className="border border-ink-700 bg-ink-900/50 p-6 flex flex-col justify-between h-full opacity-75">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="font-mono text-xs text-bone-500 uppercase tracking-wider">Premium</span>
                  <span className="font-mono text-xs text-bone-500">Memo No. 06</span>
                </div>
                <h3 className="font-display text-xl text-bone-300 mb-2">Supabase</h3>
                <p className="text-sm text-bone-600 leading-relaxed mb-6">Shifting US conversational abstractions into declarative database management vernacular for LATAM engineering teams.</p>
              </div>
              <div className="font-mono text-xs text-bone-600">
                Subscriber Exclusive
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-ink-700">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-14">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <p className="font-display font-semibold text-lg text-bone-100">VeraVox Localization</p>
              <p className="text-sm text-bone-500 mt-1">Audits &amp; native re-engineering.</p>
              <p className="text-sm text-bone-500 mt-4 max-w-sm leading-relaxed">Structural copy adaptation for European tech markets (ES | FR | DE).</p>
            </div>
            <div className="font-mono text-xs text-bone-500">
              © 2026 VeraVox — all copy audited, none of it translated
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
