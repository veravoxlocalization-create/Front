'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// ============================================================================
// 1. DICTIONARY & LOCALIZATION STRINGS
// ============================================================================
const translations = {
  en: {
    brand: "VeraVox",
    aboutLink: "About / GEO Engine",
    toggleInlineInactive: "Show Interlinear Translation",
    toggleInlineActive: "Hide Interlinear Translation",
    tagline: "High-Context Software Copy & Developer Tool Localization",
    heroHeading: "Deconstruct & Rebuild Developer Copy for Global Markets",
    heroSubheading: "We translate, refactor, and contextualize technical copy, documentation, and SaaS positioning to sound natively engineered in every region.",
    ctaPrimary: "Explore Case Studies",
    ctaSecondary: "View About / GEO Engine",
    sectionFeaturesTitle: "Engineered for High-Context Accuracy",
    feature1Title: "Technical Intent Preservation",
    feature1Desc: "We eliminate word-for-word translation bugs, ensuring API terminology, code samples, and dev-marketing retain precise technical meaning.",
    feature2Title: "Interlinear Comparison Engines",
    feature2Desc: "Inspect parallel translations side-by-side with original source text without breaking UI alignment or cluttering layout semantics.",
    feature3Title: "Dark-Mode First Design",
    feature3Desc: "Tailored for modern developer interfaces, technical blogs, and developer hubs using crisp, low-fatigue typography.",
  },
  es: {
    brand: "VeraVox",
    aboutLink: "Acerca de / Motor GEO",
    toggleInlineInactive: "Mostrar traducción interlineal",
    toggleInlineActive: "Ocultar traducción interlineal",
    tagline: "Localización de Software y Herramientas para Desarrolladores",
    heroHeading: "Deconstruye y Reestructura Copy Técnico para Mercados Globales",
    heroSubheading: "Traducimos, refactorizamos y contextualizamos textos técnicos, documentación y posicionamiento SaaS para sonar nativos en cada región.",
    ctaPrimary: "Explorar Casos de Estudio",
    ctaSecondary: "Ver Acerca de / Motor GEO",
    sectionFeaturesTitle: "Diseñado para Precisión Técnica de Alto Contexto",
    feature1Title: "Preservación de la Intención Técnica",
    feature1Desc: "Eliminamos errores de traducción literal, asegurando que la terminología de API, ejemplos de código y marketing dev mantengan su sentido técnico exacto.",
    feature2Title: "Motores de Comparación Interlineal",
    feature2Desc: "Inspecciona traducciones paralelas lado a lado con el texto fuente sin romper la alineación de la UI ni saturar la interfaz.",
    feature3Title: "Diseño Enfocado en Modo Oscuro",
    feature3Desc: "Adaptado para interfaces de desarrollador, blogs técnicos y centros de documentación con tipografía limpia y de baja fatiga visual.",
  },
  de: {
    brand: "VeraVox",
    aboutLink: "Über / GEO-Engine",
    toggleInlineInactive: "Interlineare Übersetzung anzeigen",
    toggleInlineActive: "Interlineare Übersetzung ausblenden",
    tagline: "High-Context Software-Texte & Entwickler-Tool Lokalisierung",
    heroHeading: "Entwickler-Texte für globale Märkte dekonstruieren und neu aufbauen",
    heroSubheading: "Wir übersetzen, refaktorieren und kontextualisieren technische Dokumentation und SaaS-Positionierung für maximale regionale Präzision.",
    ctaPrimary: "Fallstudien erkunden",
    ctaSecondary: "Über / GEO-Engine anzeigen",
    sectionFeaturesTitle: "Entwickelt für höchste technische Präzision",
    feature1Title: "Wahrung der technischen Absicht",
    feature1Desc: "Keine wörtlichen Übersetzungsfehler mehr: API-Begriffe, Codebeispiele und B2B-Texte bleiben präzise und fachlich korrekt.",
    feature2Title: "Interlineare Vergleichs-Engine",
    feature2Desc: "Parallele Übersetzungen direkt neben dem Quelltext prüfen, ohne Layout und UI-Semantik zu beeinträchtigen.",
    feature3Title: "Dark-Mode-Optimiertes Design",
    feature3Desc: "Maßgeschneidert für moderne Entwickleroberflächen, technische Blogs und Dokumentations-Hubs.",
  },
  fr: {
    brand: "VeraVox",
    aboutLink: "À propos / Moteur GEO",
    toggleInlineInactive: "Afficher la traduction interlinéaire",
    toggleInlineActive: "Masquer la traduction interlinéaire",
    tagline: "Localisation de Logiciels et Outils pour Développeurs",
    heroHeading: "Déconstruire et Reconstruire le Copy Technique pour le Marché Global",
    heroSubheading: "Nous traduisons, refactorisons et contextuons les textes techniques, docs API et positionnements SaaS pour une précision native.",
    ctaPrimary: "Explorer les Études de Cas",
    ctaSecondary: "Voir À propos / Moteur GEO",
    sectionFeaturesTitle: "Conçu pour une Précision Technique Haute Fidélité",
    feature1Title: "Préservation de l'Intention Technique",
    feature1Desc: "Élimine les erreurs de traduction littérale pour garantir la justesse de la terminologie API et des exemples de code.",
    feature2Title: "Moteur de Comparaison Interlinéaire",
    feature2Desc: "Inspectez les traductions parallèles côte à côte avec le texte source sans déformer l'alignement de l'interface.",
    feature3Title: "Design Optimisé pour Mode Sombre",
    feature3Desc: "Adapté aux interfaces développeurs modernes, blogs techniques et hubs de documentation à faible fatigue visuelle.",
  },
  it: {
    brand: "VeraVox",
    aboutLink: "Chi siamo / Motore GEO",
    toggleInlineInactive: "Mostra traduzioni interlineari",
    toggleInlineActive: "Nascondi traduzioni interlineari",
    tagline: "Localizzazione di Software e Strumenti per Sviluppatori",
    heroHeading: "Decostruire e Ricostruire i Testi Tecnici per i Mercati Globali",
    heroSubheading: "Traduciamo, refactorizziamo e contestualizziamo documentazione tecnica, API e testi SaaS per risuonare nativi in ogni regione.",
    ctaPrimary: "Esplora i Casi di Studio",
    ctaSecondary: "Vedi Chi siamo / Motore GEO",
    sectionFeaturesTitle: "Progettato per la Massima Precisione Tecnica",
    feature1Title: "Conservazione dell'Intento Tecnico",
    feature1Desc: "Eliminiamo gli errori di traduzione letterale, garantendo che la terminologia API e gli esempi di codice mantengano un senso preciso.",
    feature2Title: "Motori di Confronto Interlineare",
    feature2Desc: "Ispeziona le traduzioni parallele affiancate al testo sorgente senza alterare il layout o l'interfaccia utente.",
    feature3Title: "Design Focalizzato sul Dark-Mode",
    feature3Desc: "Sviluppato per interfacce sviluppatore moderne, blog tecnici e hub di documentazione a affaticamento visivo ridotto.",
  },
  pt: {
    brand: "VeraVox",
    aboutLink: "Sobre / Motor GEO",
    toggleInlineInactive: "Mostrar tradução interlinear",
    toggleInlineActive: "Ocultar tradução interlinear",
    tagline: "Localização de Software e Ferramentas para Desenvolvedores",
    heroHeading: "Desconstruir e Reconstruir Copy Técnico para Mercados Globais",
    heroSubheading: "Traduzimos, refatoramos e contextualizamos textos técnicos, documentação de API e cópia de SaaS para cada mercado regional.",
    ctaPrimary: "Explorar Casos de Estudo",
    ctaSecondary: "Ver Sobre / Motor GEO",
    sectionFeaturesTitle: "Criado para Precisão Técnica de Alto Contexto",
    feature1Title: "Preservação da Intenção Técnica",
    feature1Desc: "Eliminamos erros de tradução literal, garantindo que termos de API, amostras de código e marketing técnico mantenham sentido exato.",
    feature2Title: "Motores de Comparação Interlinear",
    feature2Desc: "Inspecione traduções paralelas lado a lado com o texto fonte sem quebrar o alinhamento da interface.",
    feature3Title: "Design Focado em Modo Escuro",
    feature3Desc: "Desenvolvido para interfaces de desenvolvedor modernas, blogs técnicos e hubs de documentação com tipografia limpa.",
  },
};

// ============================================================================
// 2. MAIN HOMEPAGE COMPONENT
// ============================================================================
export default function HomePage() {
  const [lang, setLang] = useState('es');
  const [showInline, setShowInline] = useState(false);

  const t = translations[lang] || translations.en;

  return (
    <div className="min-h-screen bg-ink-950 text-bone-100 font-sans selection:bg-signal-gold selection:text-ink-950 flex flex-col justify-between">
      
      {/* --------------------------------------------------------------------- */}
      {/* HEADER / NAVIGATION BAR                                                */}
      {/* --------------------------------------------------------------------- */}
      <header className="border-b border-ink-800 sticky top-0 bg-ink-950/90 backdrop-blur z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          
          {/* Brand & Home Route */}
          <Link href="/" className="font-display font-semibold text-xl text-bone-100 tracking-tight hover:text-signal-gold transition-colors">
            {t.brand}
          </Link>

          {/* Navigation Controls */}
          <div className="flex items-center gap-6">
            
            {/* Language Selection Buttons */}
            <nav className="flex items-center gap-1 font-mono text-xs">
              {['en', 'es', 'de', 'fr', 'it', 'pt'].map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`uppercase px-2 py-1 rounded transition-colors cursor-pointer ${
                    lang === l
                      ? 'text-signal-gold font-bold border-b-2 border-signal-gold bg-ink-900'
                      : 'text-bone-400 hover:text-bone-100'
                  }`}
                >
                  {l}
                </button>
              ))}
            </nav>

            {/* DIRECT ACCESS TO ABOUT PAGE */}
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
      {/* MAIN CONTENT HERO & FEATURES                                           */}
      {/* --------------------------------------------------------------------- */}
      <main className="max-w-5xl mx-auto px-6 py-12 space-y-16 flex-grow">
        
        {/* INTERLINEAR TOGGLE CONTROLLER */}
        <div className="flex justify-between items-center border-b border-ink-800 pb-4">
          <span className="font-mono text-xs text-bone-400 tracking-wider uppercase">
            {t.tagline}
          </span>
          
          <button
            onClick={() => setShowInline(!showInline)}
            className={`font-mono text-xs px-4 py-2 border rounded transition-all cursor-pointer ${
              showInline
                ? 'bg-ink-900 border-signal-gold text-signal-gold font-semibold shadow-sm'
                : 'bg-transparent border-ink-700 text-bone-300 hover:border-bone-400'
            }`}
          >
            {showInline ? t.toggleInlineActive : t.toggleInlineInactive}
          </button>
        </div>

        {/* HERO SECTION */}
        <section className="space-y-6 pt-4">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-bone-100 tracking-tight leading-tight">
            {t.heroHeading}
          </h1>

          <p className="text-xl text-bone-300 max-w-3xl leading-relaxed">
            {t.heroSubheading}
          </p>

          {/* INTERLINEAR PARALLEL TEXT VIEW (ACTIVE WHEN TOGGLED) */}
          {showInline && (
            <div className="p-5 bg-ink-900/80 border-l-4 border-signal-gold font-mono text-xs text-bone-300 space-y-2 rounded-r">
              <p className="text-signal-gold font-bold">// PARALLEL SOURCE COMPARISON (EN SOURCE):</p>
              <p className="italic">"We deconstruct and rebuild developer copy, API documentation, and technical positioning to preserve intent across international expansion surfaces."</p>
            </div>
          )}

          {/* ACTION BUTTONS */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#features"
              className="px-6 py-3 bg-bone-100 text-ink-950 font-mono text-xs font-semibold rounded hover:bg-signal-gold transition-colors"
            >
              {t.ctaPrimary}
            </a>

            <Link
              href="/about"
              className="px-6 py-3 border border-ink-700 text-bone-200 font-mono text-xs rounded hover:border-signal-gold hover:text-signal-gold transition-colors"
            >
              {t.ctaSecondary} →
            </Link>
          </div>
        </section>

        {/* FEATURES GRID SECTION */}
        <section id="features" className="pt-12 border-t border-ink-800 space-y-8">
          <h2 className="font-display text-2xl font-semibold text-bone-100">
            {t.sectionFeaturesTitle}
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="p-6 bg-ink-900/50 border border-ink-800 rounded space-y-3">
              <h3 className="font-display text-lg text-signal-gold font-medium">
                {t.feature1Title}
              </h3>
              <p className="text-sm text-bone-400 leading-relaxed">
                {t.feature1Desc}
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-6 bg-ink-900/50 border border-ink-800 rounded space-y-3">
              <h3 className="font-display text-lg text-signal-gold font-medium">
                {t.feature2Title}
              </h3>
              <p className="text-sm text-bone-400 leading-relaxed">
                {t.feature2Desc}
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-6 bg-ink-900/50 border border-ink-800 rounded space-y-3">
              <h3 className="font-display text-lg text-signal-gold font-medium">
                {t.feature3Title}
              </h3>
              <p className="text-sm text-bone-400 leading-relaxed">
                {t.feature3Desc}
              </p>
            </div>
          </div>
        </section>

      </main>

      {/* --------------------------------------------------------------------- */}
      {/* FOOTER                                                                */}
      {/* --------------------------------------------------------------------- */}
      <footer className="border-t border-ink-800 py-8 bg-ink-950">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-bone-400">
          <p>© {new Date().getFullYear()} VeraVox Localization Lab. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link
              href="/about"
              className="text-bone-300 hover:text-signal-gold transition-colors underline underline-offset-4"
            >
              {t.aboutLink}
            </Link>
          </div>
        </div>
      </footer>

    </div>
  );
}
