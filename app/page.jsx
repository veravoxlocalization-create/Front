'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// ============================================================================
// 1. TRANSLATION DICTIONARY (Supports EN, ES, DE, FR, IT, PT)
// ============================================================================
const translations = {
  en: {
    brand: "VeraVox",
    aboutLink: "About / GEO Engine",
    toggleInlineInactive: "Show Interlinear Translation",
    toggleInlineActive: "Hide Interlinear Translation",
    heroTitle: "Technical Intent Preserved Localization",
    heroDesc: "We deconstruct and rebuild B2B developer marketing, API documentation, and SaaS copy for high-context expansion.",
    targetAudienceTitle: "Built For Developers & Engineering Teams",
    targetAudienceDesc: "Zero fluff. Preserving technical authority across regional acquisition surfaces.",
  },
  es: {
    brand: "VeraVox",
    aboutLink: "Acerca de / Motor GEO",
    toggleInlineInactive: "Mostrar traducción interlineal",
    toggleInlineActive: "Ocultar traducción interlineal",
    heroTitle: "Localización con conservación de intención técnica",
    heroDesc: "Deconstruimos y reestructuramos marketing para desarrolladores B2B, documentación API y texto SaaS.",
    targetAudienceTitle: "Diseñado para desarrolladores y equipos de ingeniería",
    targetAudienceDesc: "Sin relleno. Preservando la autoridad técnica en cada mercado regional.",
  },
  de: {
    brand: "VeraVox",
    aboutLink: "Über / GEO-Engine",
    toggleInlineInactive: "Interlineare Übersetzung anzeigen",
    toggleInlineActive: "Interlineare Übersetzung ausblenden",
    heroTitle: "Lokalisierung unter Wahrung der technischen Absicht",
    heroDesc: "Wir dekonstruieren und strukturieren B2B-Entwicklermarketing, API-Dokumentation und SaaS-Texte neu.",
    targetAudienceTitle: "Entwickelt für Entwickler und Ingenieurteams",
    targetAudienceDesc: "Kein Schnickschnack. Technische Autorität auf allen regionalen Märkten wahren.",
  },
  fr: {
    brand: "VeraVox",
    aboutLink: "À propos / Moteur GEO",
    toggleInlineInactive: "Afficher la traduction interlinéaire",
    toggleInlineActive: "Masquer la traduction interlinéaire",
    heroTitle: "Localisation avec préservation de l'intention technique",
    heroDesc: "Nous déconstruisons et reconstruisons le marketing B2B pour développeurs, les docs API et les textes SaaS.",
    targetAudienceTitle: "Conçu pour les développeurs et équipes d'ingénierie",
    targetAudienceDesc: "Sans superflu. Préserver l'autorité technique sur chaque surface d'acquisition.",
  },
  it: {
    brand: "VeraVox",
    aboutLink: "Chi siamo / Motore GEO",
    toggleInlineInactive: "Mostra traduzioni interlineari",
    toggleInlineActive: "Nascondi traduzioni interlineari",
    heroTitle: "Localizzazione con conservazione dell'intento tecnico",
    heroDesc: "Decostruiamo e ricostruiamo il marketing B2B per sviluppatori, documentazione API e testi SaaS.",
    targetAudienceTitle: "Progettato per sviluppatori e team di ingegneria",
    targetAudienceDesc: "Senza fronzoli. Mantenere l'autorità tecnica in ogni mercato regionale.",
  },
  pt: {
    brand: "VeraVox",
    aboutLink: "Sobre / Motor GEO",
    toggleInlineInactive: "Mostrar tradução interlinear",
    toggleInlineActive: "Ocultar tradução interlinear",
    heroTitle: "Localização com preservação da intenção técnica",
    heroDesc: "Desconstruímos e reconstruímos marketing B2B para desenvolvedores, documentação de API e cópia de SaaS.",
    targetAudienceTitle: "Criado para desenvolvedores e equipes de engenharia",
    targetAudienceDesc: "Sem excessos. Preservando a autoridade técnica em cada mercado regional.",
  },
};

// ============================================================================
// 2. MAIN HOMEPAGE COMPONENT
// ============================================================================
export default function HomePage() {
  const [lang, setLang] = useState('es'); // Default active language
  const [showInline, setShowInline] = useState(false); // Toggle state for interlinear translations

  // Fallback to active language translation object
  const t = translations[lang] || translations.en;

  return (
    <div className="min-h-screen bg-ink-950 text-bone-100 font-sans selection:bg-signal-gold selection:text-ink-950">
      
      {/* --------------------------------------------------------------------- */}
      {/* HEADER & NAVIGATION                                                    */}
      {/* --------------------------------------------------------------------- */}
      <header className="border-b border-ink-700 sticky top-0 bg-ink-950/90 backdrop-blur z-40">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link href="/" className="font-display font-semibold text-lg text-bone-100 tracking-tight">
            {t.brand}
          </Link>

          {/* Navigation Items */}
          <div className="flex items-center gap-6">
            
            {/* Language Picker */}
            <div className="flex items-center gap-2 font-mono text-xs">
              {['en', 'es', 'de', 'fr', 'it', 'pt'].map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`uppercase px-2 py-1 rounded transition-colors bg-transparent cursor-pointer ${
                    lang === l
                      ? 'text-signal-gold font-bold border-b border-signal-gold'
                      : 'text-bone-500 hover:text-bone-200'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>

            {/* DIRECT ACCESS TO ABOUT PAGE (Top Door) */}
            <Link
              href="/about"
              className="font-mono text-xs px-3 py-1.5 border border-ink-700 rounded text-bone-300 hover:text-signal-gold hover:border-signal-gold transition-colors"
            >
              {t.aboutLink}
            </Link>
          </div>
        </div>
      </header>

      {/* --------------------------------------------------------------------- */}
      {/* MAIN CONTENT AREA                                                      */}
      {/* --------------------------------------------------------------------- */}
      <main className="max-w-4xl mx-auto px-6 md:px-12 pt-16 pb-24 space-y-12">
        
        {/* INTERLINEAR TOGGLE BUTTON (Issue B Fix) */}
        <div className="flex justify-end">
          <button
            onClick={() => setShowInline(!showInline)}
            className={`font-mono text-xs px-4 py-2 border rounded transition-all cursor-pointer ${
              showInline
                ? 'bg-ink-900 border-signal-gold text-signal-gold font-semibold'
                : 'bg-transparent border-ink-700 text-bone-300 hover:border-bone-400'
            }`}
          >
            {/* Dynamically pulls from current language dictionary whether ON or OFF */}
            {showInline ? t.toggleInlineActive : t.toggleInlineInactive}
          </button>
        </div>

        {/* Hero Section */}
        <section className="space-y-4">
          <h1 className="font-display text-3xl md:text-5xl text-bone-100 tracking-tight leading-tight">
            {t.heroTitle}
          </h1>
          <p className="text-lg text-bone-300 leading-relaxed">
            {t.heroDesc}
          </p>

          {/* Interlinear Parallel Text Box (Rendered when toggle is ON) */}
          {showInline && (
            <div className="p-4 bg-ink-900 border-l-2 border-signal-gold text-xs font-mono text-bone-400 space-y-1">
              <p className="text-signal-gold">// ORIGINAL ENGLISH PARALLEL TEXT:</p>
              <p>"Deconstructing and rebuilding developer-facing copy across core European and Latin American acquisition surfaces."</p>
            </div>
          )}
        </section>

        {/* Target Audience Section */}
        <section className="space-y-4 pt-8 border-t border-ink-800">
          <h2 className="font-display text-xl text-bone-200">
            {t.targetAudienceTitle}
          </h2>
          <p className="text-bone-400 leading-relaxed">
            {t.targetAudienceDesc}
          </p>
        </section>
      </main>

      {/* --------------------------------------------------------------------- */}
      {/* FOOTER                                                                 */}
      {/* --------------------------------------------------------------------- */}
      <footer className="border-t border-ink-800 py-12 bg-ink-950">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-bone-500">
          <p>© {new Date().getFullYear()} VeraVox Localization Lab. All rights reserved.</p>
          
          {/* DIRECT ACCESS TO ABOUT PAGE (Bottom Door) */}
          <div className="flex items-center gap-6">
            <Link
              href="/about"
              className="text-bone-400 hover:text-signal-gold transition-colors underline underline-offset-4"
            >
              {t.aboutLink}
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
