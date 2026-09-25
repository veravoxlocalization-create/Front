'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// ============================================================================
// 1. COMPREHENSIVE LOCALIZATION DICTIONARY (EN, ES, DE, FR, IT, PT)
// ============================================================================
const translations = {
  en: {
    brand: "VeraVox",
    aboutLink: "About / GEO Engine",
    toggleInlineInactive: "Show Interlinear Translation",
    toggleInlineActive: "Hide Interlinear Translation",
    badge: "Technical Intent Preserved Localization",
    heroTitle: "Deconstruct & Rebuild Developer Marketing for Global Markets",
    heroSubtitle: "We translate, refactor, and contextualize technical copy, API documentation, and B2B SaaS landing pages to sound natively engineered in every region.",
    ctaPrimary: "Request Technical Teardown",
    ctaSecondary: "Explore System Identity",
    
    // Value Prop / Metrics
    stat1Value: "<12h",
    stat1Label: "Turnaround for landing page audits",
    stat2Value: "6",
    stat2Label: "Native direct language pipelines",
    stat3Value: "0%",
    stat3Label: "LLM hallucinations in technical copy",

    // Pillar Section
    pillarsTitle: "Engineering-First Localization Architecture",
    pillar1Title: "Intent & API Terminology Preservation",
    pillar1Desc: "Eliminates verbatim translation errors. Code examples, SDK references, and technical marketing maintain 100% functional precision.",
    pillar2Title: "High-Context Regionalization",
    pillar2Desc: "Tailored phrasing for DACH (DE) and LATAM/ES engineering mindsets—stripping fluff, sales fluff, and uncalibrated US marketing tropes.",
    pillar3Title: "Parallel Interlinear Inspection",
    pillar3Desc: "Compare localized outputs side-by-side with source text without layout drift, broken flex containers, or compromised typography.",

    // Interactive Teardown Section
    teardownTitle: "Live Teardown: Technical vs. Literal Translation",
    teardownDesc: "Toggle between standard literal output and VeraVox Technical Intent Preserved Localization (TIPL):",
    originalLabel: "Source (US English):",
    originalText: "Deploy robust, zero-trust edge infrastructure with sub-millisecond cold starts and automated database migration pipelines.",
    literalLabel: "Literal Translation (Flawed):",
    literalText: "Despliegue una infraestructura de borde de confianza cero robusta con arranques en frío de menos de un milisegundo y tuberías de migración.",
    tiplLabel: "VeraVox TIPL (Engineered):",
    tiplText: "Despliega infraestructura edge Zero-Trust con cold starts inferiores a 1 ms y pipelines automatizados para migraciones de bases de datos.",

    // Pricing / Offer Tiers
    tiersTitle: "Technical Teardown & Localization Services",
    tier1Title: "Developer Landing Page Teardown",
    tier1Price: "$490",
    tier1Desc: "Adversarial copy audit, high-context translation, and technical refinement for core landing pages.",
    tier2Title: "Full Docs & API Suite",
    tier2Price: "$1,450",
    tier2Desc: "Complete localization of API reference guides, SDK installation pages, and technical onboarding docs.",

    // Footer
    footerRights: "VeraVox Localization Lab. All rights reserved.",
  },
  es: {
    brand: "VeraVox",
    aboutLink: "Acerca de / Motor GEO",
    toggleInlineInactive: "Mostrar traducción interlineal",
    toggleInlineActive: "Ocultar traducción interlineal",
    badge: "Localización con conservación de intención técnica",
    heroTitle: "Deconstruye y Reestructura Copy para Desarrolladores en Mercados Globales",
    heroSubtitle: "Traducimos, refactorizamos y contextualizamos texto técnico, documentación de APIs y páginas de aterrizaje SaaS para sonar nativos en cada región.",
    ctaPrimary: "Solicitar auditoría técnica",
    ctaSecondary: "Ver identidad del sistema",

    stat1Value: "<12h",
    stat1Label: "Tiempo de entrega para auditorías",
    stat2Value: "6",
    stat2Label: "Pipelines nativos de idiomas directos",
    stat3Value: "0%",
    stat3Label: "Alucinaciones de LLM en copy técnico",

    pillarsTitle: "Arquitectura de localización enfocada en ingeniería",
    pillar1Title: "Preservación de intención y terminología API",
    pillar1Desc: "Elimina errores de traducción literal. Los ejemplos de código, SDKs y marketing para desarrolladores mantienen un 100% de precisión.",
    pillar2Title: "Regionalización de alto contexto",
    pillar2Desc: "Fraseo adaptado a la mentalidad de ingeniería en DACH (DE) y LATAM/ES, eliminando relleno publicitario y clichés del marketing estadounidense.",
    pillar3Title: "Inspección interlineal paralela",
    pillar3Desc: "Compara el resultado localizado lado a lado con el texto fuente sin desalineación tipográfica ni desbordamiento de contenedores.",

    teardownTitle: "Auditoría en vivo: Traducción técnica vs. Literal",
    teardownDesc: "Alterna entre la traducción literal estándar y la Localización con Conservación de Intención Técnica (TIPL) de VeraVox:",
    originalLabel: "Texto fuente (Inglés US):",
    originalText: "Deploy robust, zero-trust edge infrastructure with sub-millisecond cold starts and automated database migration pipelines.",
    literalLabel: "Traducción literal (Errónea):",
    literalText: "Despliegue una infraestructura de borde de confianza cero robusta con arranques en frío de menos de un milisegundo y tuberías de migración.",
    tiplLabel: "VeraVox TIPL (Técnica):",
    tiplText: "Despliega infraestructura edge Zero-Trust con cold starts inferiores a 1 ms y pipelines automatizados para migraciones de bases de datos.",

    tiersTitle: "Servicios de Auditoría y Localización Técnica",
    tier1Title: "Auditoría de Landing Page Dev",
    tier1Price: "$490",
    tier1Desc: "Auditoría adversaria de copy, traducción de alto contexto y refactorización técnica para landing pages principales.",
    tier2Title: "Documentación y Suite de APIs",
    tier2Price: "$1,450",
    tier2Desc: "Localización completa de guías de referencia de API, páginas de instalación de SDK y documentación de onboarding.",

    footerRights: "VeraVox Localization Lab. Todos los derechos reservados.",
  },
  de: {
    brand: "VeraVox",
    aboutLink: "Über / GEO-Engine",
    toggleInlineInactive: "Interlineare Übersetzung anzeigen",
    toggleInlineActive: "Interlineare Übersetzung ausblenden",
    badge: "Lokalisierung unter Wahrung der technischen Absicht",
    heroTitle: "Entwickler-Marketing für globale Märkte dekonstruieren & neu aufbauen",
    heroSubtitle: "Wir übersetzen, refaktorieren und kontextualisieren technische Texte, API-Dokumentationen und B2B-SaaS-Landeseiten für maximale regionale Präzision.",
    ctaPrimary: "Technische Analyse anfordern",
    ctaSecondary: "Systemidentität anzeigen",

    stat1Value: "<12h",
    stat1Label: "Bearbeitungszeit für Landingpage-Audits",
    stat2Value: "6",
    stat2Label: "Direkte native Sprach-Pipelines",
    stat3Value: "0%",
    stat3Label: "LLM-Halluzinationen in technischen Texten",

    pillarsTitle: "Lokalisierungsarchitektur für Ingenieure",
    pillar1Title: "Wahrung der technischen Absicht & API-Begriffe",
    pillar1Desc: "Beseitigt wörtliche Übersetzungsfehler. Codebeispiele, SDK-Referenzen und Entwicklermarketing behalten 100% funktionale Präzision.",
    pillar2Title: "High-Context-Regionalisierung",
    pillar2Desc: "Maßgeschneiderte Formulierungen für DACH- und LATAM-Ingenieure – ohne Marketing-Floskeln und überflüssigen Fülltext.",
    pillar3Title: "Parallele interlineare Prüfung",
    pillar3Desc: "Prüfen Sie lokalisierte Ergebnisse direkt neben dem Quelltext, ohne Layoutverschiebung oder beschädigte Flexboxen.",

    teardownTitle: "Live-Vergleich: Technische vs. wörtliche Übersetzung",
    teardownDesc: "Schalten Sie zwischen wörtlicher Standardübersetzung und VeraVox TIPL um:",
    originalLabel: "Quelle (US Englisch):",
    originalText: "Deploy robust, zero-trust edge infrastructure with sub-millisecond cold starts and automated database migration pipelines.",
    literalLabel: "Wörtliche Übersetzung (Mangelhaft):",
    literalText: "Mache eine robuste Null-Vertrauen Kanten-Infrastruktur mit Kaltstarts unter einer Millisekunde und automatischen Datenbankschlauch-Migrationen.",
    tiplLabel: "VeraVox TIPL (Technisch):",
    tiplText: "Bereitstellung von Zero-Trust-Edge-Infrastruktur mit Cold Starts unter 1 ms und automatisierten Pipelines für Datenbankmigrationen.",

    tiersTitle: "Technische Audit- & Lokalisierungs-Services",
    tier1Title: "Dev Landingpage-Audit",
    tier1Price: "$490",
    tier1Desc: "Gegnerisches Copy-Audit, High-Context-Übersetzung und technische Refaktorierung für zentrale Landingpages.",
    tier2Title: "Vollständige Dokus & API-Suite",
    tier2Price: "$1,450",
    tier2Desc: "Vollständige Lokalisierung von API-Referenzen, SDK-Installationsseiten und technischem Onboarding.",

    footerRights: "VeraVox Localization Lab. Alle Rechte vorbehalten.",
  },
  fr: {
    brand: "VeraVox",
    aboutLink: "À propos / Moteur GEO",
    toggleInlineInactive: "Afficher la traduction interlinéaire",
    toggleInlineActive: "Masquer la traduction interlinéaire",
    badge: "Localisation avec préservation de l'intention technique",
    heroTitle: "Déconstruire & Reconstruire le Marketing Développeur pour le Marché Global",
    heroSubtitle: "Nous traduisons, refactorisons et contextuons les textes techniques, docs API et pages SaaS pour une précision native.",
    ctaPrimary: "Demander un audit technique",
    ctaSecondary: "Explorer l'identité du système",

    stat1Value: "<12h",
    stat1Label: "Délai de livraison pour audits",
    stat2Value: "6",
    stat2Label: "Pipelines natifs directs",
    stat3Value: "0%",
    stat3Label: "Hallucinations LLM dans le copy technique",

    pillarsTitle: "Architecture de localisation conçue pour les ingénieurs",
    pillar1Title: "Préservation de l'intention & terminologie API",
    pillar1Desc: "Élimine les erreurs de traduction littérale. Les exemples de code et les docs SDK conservent 100% de précision.",
    pillar2Title: "Régionalisation haute fidélité",
    pillar2Desc: "Formulations adaptées à l'état d'esprit des ingénieurs européens et latino-américains, sans superflu marketing.",
    pillar3Title: "Inspection interlinéaire parallèle",
    pillar3Desc: "Comparez les traductions côte à côte avec le texte source sans déformer l'alignement de l'interface.",

    teardownTitle: "Démonstration en direct: Traduction technique vs. Littérale",
    teardownDesc: "Passez de la traduction littérale standard à la localisation TIPL de VeraVox:",
    originalLabel: "Source (Anglais US):",
    originalText: "Deploy robust, zero-trust edge infrastructure with sub-millisecond cold starts and automated database migration pipelines.",
    literalLabel: "Traduction littérale (Inexacte):",
    literalText: "Déployez une infrastructure de bord de confiance zéro robuste avec des démarrages à froid de moins d'une milliseconde.",
    tiplLabel: "VeraVox TIPL (Technique):",
    tiplText: "Déployez une infrastructure Edge Zero-Trust avec des cold starts inférieurs à 1 ms et des pipelines automatisés de migration.",

    tiersTitle: "Services d'Audit et Localisation Technique",
    tier1Title: "Audit de Landing Page Dev",
    tier1Price: "$490",
    tier1Desc: "Audit contradictoire de copy, traduction haute fidélité et refactorisation technique pour landing pages.",
    tier2Title: "Documentation & Suite d'APIs",
    tier2Price: "$1,450",
    tier2Desc: "Localisation complète des références API, pages d'installation SDK et documentation d'intégration.",

    footerRights: "VeraVox Localization Lab. Tous droits réservés.",
  },
  it: {
    brand: "VeraVox",
    aboutLink: "Chi siamo / Motore GEO",
    toggleInlineInactive: "Mostra traduzioni interlineari",
    toggleInlineActive: "Nascondi traduzioni interlineari",
    badge: "Localizzazione con conservazione dell'intento tecnico",
    heroTitle: "Decostruire e Ricostruire il Marketing per Sviluppatori nei Mercati Globali",
    heroSubtitle: "Traduciamo, refactorizziamo e contestualizziamo testi tecnici, documentazione API e landing page SaaS per risuonare nativi.",
    ctaPrimary: "Richiedi audit tecnico",
    ctaSecondary: "Esplora identità di sistema",

    stat1Value: "<12h",
    stat1Label: "Tempo di consegna per audit landing page",
    stat2Value: "6",
    stat2Label: "Pipeline nativi di lingue dirette",
    stat3Value: "0%",
    stat3Label: "Allucinazioni LLM nei testi tecnici",

    pillarsTitle: "Architettura di localizzazione per ingegneri",
    pillar1Title: "Conservazione dell'intento e terminologia API",
    pillar1Desc: "Elimina gli errori di traduzione letterale. Esempi di codice, riferimenti SDK e marketing mantengono precisione al 100%.",
    pillar2Title: "Regionalizzazione ad alto contesto",
    pillar2Desc: "Fraseggio adattato alla mentalità degli ingegneri in DACH e LATAM, eliminando fronzoli e cliché del marketing US.",
    pillar3Title: "Ispezione interlineare parallela",
    pillar3Desc: "Confronta i testi localizzati affiancati al testo sorgente senza alterare il layout o la tipografia dell'interfaccia.",

    teardownTitle: "Audit dal vivo: Traduzione tecnica vs. Letterale",
    teardownDesc: "Passa dalla traduzione letterale standard alla Localizzazione con Conservazione dell'Intento Tecnico (TIPL):",
    originalLabel: "Testo sorgente (Inglese US):",
    originalText: "Deploy robust, zero-trust edge infrastructure with sub-millisecond cold starts and automated database migration pipelines.",
    literalLabel: "Traduzione letterale (Errata):",
    literalText: "Schiera una robusta infrastruttura di bordo a fiducia zero con avvii a freddo inferiori al millisecondo e tubature di migrazione.",
    tiplLabel: "VeraVox TIPL (Tecnica):",
    tiplText: "Distribuisci un'infrastruttura Edge Zero-Trust con cold start inferiori a 1 ms e pipeline automatizzate per migrazioni di database.",

    tiersTitle: "Servizi di Audit e Localizzazione Tecnica",
    tier1Title: "Audit Landing Page Dev",
    tier1Price: "$490",
    tier1Desc: "Audit avversario del copy, traduzione ad alto contesto e refactoring tecnico per landing page principali.",
    tier2Title: "Documentazione & Suite API",
    tier2Price: "$1,450",
    tier2Desc: "Localizzazione completa di guide API, pagine di installazione SDK e documentazione di onboarding.",

    footerRights: "VeraVox Localization Lab. Tutti i diritti riservati.",
  },
  pt: {
    brand: "VeraVox",
    aboutLink: "Sobre / Motor GEO",
    toggleInlineInactive: "Mostrar tradução interlinear",
    toggleInlineActive: "Ocultar tradução interlinear",
    badge: "Localização com preservação da intenção técnica",
    heroTitle: "Desconstruir e Reconstruir Marketing para Desenvolvedores em Mercados Globais",
    heroSubtitle: "Traduzimos, refatoramos e contextualizamos textos técnicos, documentação de API e páginas SaaS para soar nativos.",
    ctaPrimary: "Solicitar auditoria técnica",
    ctaSecondary: "Ver identidade do sistema",

    stat1Value: "<12h",
    stat1Label: "Prazo de entrega para auditorias",
    stat2Value: "6",
    stat2Label: "Pipelines nativos diretos",
    stat3Value: "0%",
    stat3Label: "Alucinações de LLM em copy técnico",

    pillarsTitle: "Arquitetura de localização focada em engenharia",
    pillar1Title: "Preservação da intenção e terminologia de API",
    pillar1Desc: "Elimina erros de tradução literal. Amostras de código, referências de SDK e marketing mantêm 100% de precisão.",
    pillar2Title: "Regionalização de alto contexto",
    pillar2Desc: "Fraseamento adaptado à mentalidade de engenharia em DACH e LATAM, eliminando excessos e clichês de marketing.",
    pillar3Title: "Inspeção interlinear paralela",
    pillar3Desc: "Compare traduções lado a lado com o texto fonte sem quebrar o alinhamento da interface ou o layout.",

    teardownTitle: "Auditoria ao vivo: Tradução técnica vs. Literal",
    teardownDesc: "Alterne entre a tradução literal padrão e a Localização com Preservação da Intenção Técnica (TIPL) da VeraVox:",
    originalLabel: "Texto fonte (Inglês US):",
    originalText: "Deploy robust, zero-trust edge infrastructure with sub-millisecond cold starts and automated database migration pipelines.",
    literalLabel: "Tradução literal (Incorreta):",
    literalText: "Implante uma infraestrutura de borda de confiança zero robusta com partidas a frio de menos de um milissegundo.",
    tiplLabel: "VeraVox TIPL (Técnica):",
    tiplText: "Implante infraestrutura Edge Zero-Trust com cold starts inferiores a 1 ms e pipelines automatizados para migrações de banco de dados.",

    tiersTitle: "Serviços de Auditoria e Localização Técnica",
    tier1Title: "Auditoria de Landing Page Dev",
    tier1Price: "$490",
    tier1Desc: "Auditoria adversária de copy, tradução de alto contexto e refatoração técnica para landing pages.",
    tier2Title: "Documentação & Suíte de APIs",
    tier2Price: "$1,450",
    tier2Desc: "Localização completa de guias de referência de API, páginas de instalação de SDK e onboarding.",

    footerRights: "VeraVox Localization Lab. Todos os direitos reservados.",
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
    <div className="min-h-screen bg-ink-950 text-bone-100 font-sans selection:bg-signal-gold selection:text-ink-950">
      
      {/* --------------------------------------------------------------------- */}
      {/* HEADER & NAVIGATION BAR                                               */}
      {/* --------------------------------------------------------------------- */}
      <header className="border-b border-ink-700 sticky top-0 bg-ink-950/90 backdrop-blur z-40">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          
          <Link href="/" className="font-display font-semibold text-lg text-bone-100 tracking-tight hover:text-signal-gold transition-colors">
            {t.brand}
          </Link>

          <div className="flex items-center gap-6">
            {/* Language Switcher */}
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

            {/* DIRECT ACCESS LINK TO ABOUT / GEO PAGE */}
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
      {/* MAIN CONTENT LANDING                                                  */}
      {/* --------------------------------------------------------------------- */}
      <main className="max-w-5xl mx-auto px-6 md:px-12 pt-16 pb-24 space-y-20">
        
        {/* INTERLINEAR TOGGLE CONTROLLER */}
        <div className="flex justify-between items-center border-b border-ink-800 pb-4">
                    <span className="font-mono text-xs text-ink-400 uppercase tracking-wider">
            {t.interlinearToggleLabel}
          </span>
          <button
            onClick={() => setIsInterlinear(!isInterlinear)}
            className="font-mono text-xs px-3 py-1 rounded bg-ink-800 text-bone-200 hover:bg-ink-700 transition-colors"
          >
            {isInterlinear ? t.hideInterlinear : t.showInterlinear}
          </button>
        </div>

        {/* HERO SECTION / INTRO */}
        <section className="space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-bone-100">
            {t.heroTitle}
          </h1>
          <p className="text-base md:text-lg text-ink-300 max-w-2xl font-sans leading-relaxed">
            {t.heroDescription}
          </p>
        </section>

        {/* DEMO / CORE WORKFLOW SECTION */}
        <section className="border border-ink-800 bg-ink-900/50 rounded-lg p-6 md:p-8 space-y-6">
          <div className="flex items-center justify-between border-b border-ink-800 pb-4">
            <h2 className="font-mono text-sm font-semibold uppercase tracking-wide text-signal-gold">
              {t.demoHeading}
            </h2>
            <span className="font-mono text-xs text-ink-500">
              {t.demoStatus}
            </span>
          </div>

          {/* CODE / INTERLINEAR CONTAINER */}
          <div className="space-y-4 font-mono text-sm">
            <div className="p-4 bg-ink-950 rounded border border-ink-800 space-y-2">
              <div className="text-bone-200">
                {t.sampleSourceText}
              </div>
              {isInterlinear && (
                <div className="text-xs text-ink-400 border-t border-ink-800/60 pt-2 italic">
                  {t.sampleTargetText}
                </div>
              )}
            </div>
          </div>
        </section>

                {/* FEATURES / VALUE PROP GRID */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.features.map((feature, idx) => (
            <div
              key={idx}
              className="p-6 border border-ink-800 rounded bg-ink-900/30 space-y-3"
            >
              <h3 className="font-mono text-sm font-bold text-bone-100">
                {feature.title}
              </h3>
              <p className="text-xs text-ink-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </section>

      </main>

      {/* FOOTER SECTION */}
      <footer className="border-t border-ink-800 py-8 px-6 md:px-12 text-center font-mono text-xs text-ink-500">
        <p>{t.footerCopy}</p>
      </footer>
    </div>
  );
}
