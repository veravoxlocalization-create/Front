'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// ============================================================================
// 1. DICTIONARY (Placed outside the component to preserve memory)
// ============================================================================
const AUDIT_CONTENT = {
  de: {
    navTag: 'Lokalisierungs-Audit #04',
    title: 'Resend: Technische Intent-Analyse & Regionalisierung',
    subtitle: 'Dekonstruktion von Entwickler-Marketing-Narrativen für europäische B2B-Anforderungen.',
    readingTime: '8 Min. Lesezeit',
    date: 'September 2026',
    overviewHeading: 'Kontext & Zielsetzung',
    overviewBody: 'Resend hat das Entwickler-Erlebnis für E-Mail-APIs in den USA neu definiert. Bei der Expansion in den europäischen Raum stoßen rein wörtliche Übersetzungen jedoch auf Vorbehalte hinsichtlich Datenarchitektur, Compliance und technischer Präzision.',
    breakdownHeading: 'Struktureller Teardown',
  },
  es: {
    navTag: 'Auditoría de Localización #04',
    title: 'Resend: Análisis de Intención Técnica y Regionalización',
    subtitle: 'Desmontando la narrativa para desarrolladores en entornos B2B europeos y de LATAM.',
    readingTime: '8 min de lectura',
    date: 'Septiembre 2026',
    overviewHeading: 'Contexto y Objetivo',
    overviewBody: 'Resend redefinió la experiencia de desarrollo para APIs de correo en EE. UU. Sin embargo, al expandirse a Europa y LATAM, las traducciones literales generan fricción sobre la arquitectura de datos, el cumplimiento normativo y el rigor técnico.',
    breakdownHeading: 'Desglose Estructural',
  },
  fr: {
    navTag: 'Audit de Localisation #04',
    title: 'Resend : Analyse d’Intention Technique et Régionalisation',
    subtitle: 'Déconstruction des récits dev-marketing pour les exigences B2B européennes.',
    readingTime: '8 min de lecture',
    date: 'Septembre 2026',
    overviewHeading: 'Contexte & Objectif',
    overviewBody: 'Resend a redéfini l’expérience développeur pour les API e-mail aux États-Unis. Lors de l’expansion européenne, les traductions littérales heurtent les exigences d’architecture de données et de conformité.',
    breakdownHeading: 'Analyse Structurelle',
  },
  it: {
    navTag: 'Audit di Localizzazione #04',
    title: 'Resend: Analisi dell’Intento Tecnico e Regionalizzazione',
    subtitle: 'Ristrutturazione delle narrative dev-marketing per i requisiti B2B europei.',
    readingTime: '8 min di lettura',
    date: 'Settembre 2026',
    overviewHeading: 'Contesto e Obiettivo',
    overviewBody: 'Resend ha ridefinito l’esperienza di sviluppo per le API e-mail negli Stati Uniti. Durante l’espansione in Europa, le traduzioni letterali creano attrito riguardo all’architettura dei dati e alla conformità.',
    breakdownHeading: 'Analisi Strutturale',
  },
  pt: {
    navTag: 'Auditoria de Localização #04',
    title: 'Resend: Análise de Intenção Técnica e Regionalização',
    subtitle: 'Desconstruindo narrativas de dev-marketing para requisitos B2B europeus e LATAM.',
    readingTime: '8 min de leitura',
    date: 'Setembro 2026',
    overviewHeading: 'Contexto e Objetivo',
    overviewBody: 'A Resend redefiniu a experiência do desenvolvedor para APIs de e-mail nos EUA. Ao expandir para a Europa e América Latina, traduções literais geram fricção sobre arquitetura de dados e conformidade.',
    breakdownHeading: 'Análise Estrutural',
  },
  en: {
    navTag: 'Localization Audit #04',
    title: 'Resend: Technical Intent & Regionalization Audit',
    subtitle: 'Deconstructing developer-marketing narratives for European B2B procurement standards.',
    readingTime: '8 min read',
    date: 'September 2026',
    overviewHeading: 'Context & Intent',
    overviewBody: 'Resend redefined the developer experience for email APIs in North America. However, when expanding into EU markets, literal copy translation introduces friction around data architecture, compliance, and technical rigor.',
    breakdownHeading: 'Structural Breakdown',
  }
};

// ============================================================================
// 2. SINGLE DEFAULT EXPORT COMPONENT
// ============================================================================
export default function ResendAuditPage() {
  const [lang, setLang] = useState('en');
  const t = AUDIT_CONTENT[lang] || AUDIT_CONTENT.en;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-ink-950 text-bone-100 font-sans selection:bg-signal-gold selection:text-ink-950">
      {/* Sticky Header with Language Switcher & Export Controls */}
      <header className="border-b border-ink-700 sticky top-0 bg-ink-950/90 backdrop-blur z-40">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-mono text-xs text-bone-400 hover:text-signal-gold transition-colors">
            ← VeraVox Main
          </Link>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 font-mono text-xs">
              {['es', 'fr', 'de', 'it', 'pt', 'en'].map((l) => (
                <React.Fragment key={l}>
                  <button
                    onClick={() => setLang(l)}
                    className={`bg-transparent border-0 p-0 cursor-pointer transition-colors hover:text-bone-200 ${
                      lang === l ? 'text-signal-gold font-semibold' : 'text-bone-500'
                    }`}
                  >
                    {l.toUpperCase()}
                  </button>
                  {l !== 'en' && <span className="text-ink-600">/</span>}
                </React.Fragment>
              ))}
            </div>

            <button 
              onClick={handlePrint}
              className="font-mono text-[10px] uppercase tracking-widest text-bone-500 hover:text-signal-gold transition-colors cursor-pointer bg-transparent border-0"
            >
              Export PDF
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-6 md:px-12 pt-12 pb-32">
        {/* Memo Header */}
        <header className="mb-20">
          <div className="flex items-center gap-3 font-mono text-xs text-signal-green mb-4">
            <span>{t.navTag}</span>
            <span className="text-ink-600">·</span>
            <span className="text-bone-500">{t.date}</span>
            <span className="text-ink-600">·</span>
            <span className="text-bone-500">{t.readingTime}</span>
          </div>

          <h1 className="font-display font-medium text-4xl md:text-5xl text-bone-100 tracking-tight mb-4">
            {t.title}
          </h1>
          <p className="text-lg text-bone-300 mb-10">
            {t.subtitle}
          </p>
          
          {/* Metadata Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-ink-700 font-mono text-[10px] uppercase tracking-widest text-bone-500 leading-relaxed">
            <div>
              <span className="text-bone-300 block mb-1">Client</span>
              Resend
            </div>
            <div>
              <span className="text-bone-300 block mb-1">Markets</span>
              EU, LATAM, DACH
            </div>
            <div>
              <span className="text-bone-300 block mb-1">Audience</span>
              CTOs & Engineering Leads
            </div>
          </div>
        </header>

        {/* Section 1: Dynamic Overview Context */}
        <section className="mb-20">
          <div className="font-mono text-[10px] uppercase tracking-widest text-signal-gold mb-8">
            Section 1 / Perspective & Intent
          </div>
          <div className="max-w-none text-bone-300 leading-relaxed space-y-6">
            <h2 className="font-display font-semibold text-xl text-bone-100 mb-2">
              {t.overviewHeading}
            </h2>
            <p className="text-bone-300 leading-relaxed">
              {t.overviewBody}
            </p>
          </div>
        </section>

        {/* Section 2: Core Acquisition Teardowns */}
        <section className="mb-20">
          <div className="font-mono text-[10px] uppercase tracking-widest text-signal-gold mb-8">
            Section 2 / {t.breakdownHeading}
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

        {/* Section 3: Applied Surface Audits */}
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
    </div>
  );
}
