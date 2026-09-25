'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const UI_TEXT = {
  de: {
    navTag: 'Editorial Advisory',
    h1: 'US-SaaS-Positionierung für europäische Engineering-Leads.',
    sub: 'Wörtliche Übersetzungen zerstören die Konversionsabsicht. Wir entwickeln strukturelle Anpassungen für kritische EU-Märkte.',
    desc: 'Sie verlieren in Europa Pipeline-Effizienz durch wörtliche Agency-Übersetzungen, die technische Infrastruktur wie billige Marketing-Software wirken lassen. VeraVox setzt adversarial Audits und kontextuelle Anker ein, um Ihre US-Botschaften exakt auf das pragmatische Vokabular europäischer CTOs und Engineering Leads abzustimmen. Null Marketing-Fluff. Hohe Signal-Lokalisierung.',
    libraryLink: 'Audit-Bibliothek erkunden ↓',
    specTitle: 'Engagementspezifikation',
    targetMarkets: 'Zielmärkte',
    method: 'Methode',
    methodVal: 'strukturell, nicht wörtlich',
    diagCall: 'Diagnosegespräch',
    fluff: 'Marketing-Fluff',
    teardownTitle: 'Im Fokus: Der `Linear`-Teardown',
    teardownDesc: 'Eine illustrative Rekonstruktion, wie wir das Kernmessaging eines US-Produkts für einen deutschen Technik-Käufer strukturell neu konzipieren — Zeile für Zeile, Entscheidung für Entscheidung.',
    directRejected: 'Direktübersetzung — abgelehnt',
    structuralShipped: 'Strukturelle Anpassung — veröffentlicht',
    whyFailedHeading: 'Warum es scheitert',
    whyFailedText: '"Fastest" und "high-performing" sind übertriebene Superlative. Wörtlich übersetzt wirken sie auf deutsche Tech-Leads wie ungeprüfte Marketing-Versprechungen.',
    anchorHeading: 'Der Anker',
    anchorHtml: '<span class="text-bone-100">nachvollziehbar</span> (traceable, verifiable) ist ein Begriff, nach dem deutsche CTOs direkt suchen — er leistet die Vertrauensarbeit, die "fast" zu erreichen versuchte.',
    restructureHeading: 'Die Umstrukturierung',
    restructureText: 'Beginnt mit der Funktion statt mit der Geschwindigkeit — entsprechend der üblichen Struktur deutscher Produktdokumentationen.',
    expandExplain: 'Aufschlüsselung anzeigen (DE)',
    auditLibTitle: 'Audit-Bibliothek',
    auditLibDesc: 'Ausführliche Memos zur Evaluierung technischer Absichten und Lokalisierungsintegrität über primäre B2B-Infrastruktur-Oberflächen.',
    freeAccess: 'Kostenfreier Zugriff',
    memo4: 'Memo Nr. 04',
    readMemo: 'Memorandum lesen →',
    premium: 'Premium',
    memo5: 'Memo Nr. 05',
    memo6: 'Memo Nr. 06',
    subscriberOnly: 'Nur für Abonnenten',
    footerSub: 'Strukturelle Textanpassung für europäische Tech-Märkte (ES | FR | DE).',
    footerCopy: '© 2026 VeraVox — alle Texte auditiert, keiner davon übersetzt',
    newsletterTitle: 'Newsletter',
    newsletterDesc: 'Monatliche Memos zur Architektur von B2B-Lokalisierungen direkt in Ihrem Postfach.',
    newsletterTooltip: 'Inhalt: Präzise Einblicke in semantische Drift, Positionierung von Developer Tools und private Audit-Briefings.',
    subscribeBtn: 'Abonnieren',
    overrideBtn: 'US Original (Override)',
  },
  es: {
    navTag: 'Editorial Advisory',
    h1: 'Posicionamiento US SaaS para engineering leads en Europa.',
    sub: 'Las traducciones literales destruyen la intención de conversión. Construimos adaptaciones estructurales para mercados exigentes de la UE.',
    desc: 'Estás perdiendo pipeline de ventas en Europa debido a traducciones literales de agencias que hacen que la infraestructura técnica parezca software comercial genérico. VeraVox implementa auditorías adversariales y anclajes contextuales para mapear tus mensajes al vocabulario pragmático exacto que exigen CTOs y engineering leads. Cero marketing vacío. Alta precisión.',
    libraryLink: 'Explorar la Biblioteca de Auditorías ↓',
    specTitle: 'Especificación de proyecto',
    targetMarkets: 'Mercados objetivo',
    method: 'Método',
    methodVal: 'estructural, no literal',
    diagCall: 'Llamada de diagnóstico',
    fluff: 'Marketing vacío',
    teardownTitle: 'Destacado: El caso `Linear`',
    teardownDesc: 'Una reconstrucción ilustrativa de cómo reestructuramos el mensaje central de un producto estadounidense para un comprador técnico alemán, paso a paso.',
    directRejected: 'Traducción directa — rechazada',
    structuralShipped: 'Adaptación estructural — publicada',
    whyFailedHeading: 'Por qué falló',
    whyFailedText: '"Fastest" y "high-performing" son superlativos exagerados. Traducidos literalmente, se leen como afirmaciones de marketing sin verificar para un lead de ingeniería alemán.',
    anchorHeading: 'El anclaje',
    anchorHtml: '<span class="text-bone-100">nachvollziehbar</span> (rastreable, verificable) es un término que los CTOs alemanes buscan directamente; hace el trabajo de generar confianza que "rápido" intentaba lograr.',
    restructureHeading: 'La reestructuración',
    restructureText: 'Lidera con la función, no con la velocidad, coincidiendo con cómo se ordena convencionalmente la documentación de productos en Alemania.',
    expandExplain: 'Ver desglose analítico (ES)',
    auditLibTitle: 'Biblioteca de Auditorías',
    auditLibDesc: 'Memorandos completos que evalúan la intención técnica y la integridad de localización en superficies B2B.',
    freeAccess: 'Acceso libre',
    memo4: 'Memo N° 04',
    readMemo: 'Leer memorando →',
    premium: 'Premium',
    memo5: 'Memo N° 05',
    memo6: 'Memo N° 06',
    subscriberOnly: 'Exclusivo para suscriptores',
    footerSub: 'Adaptación estructural de textos para mercados tecnológicos europeos (ES | FR | DE).',
    footerCopy: '© 2026 VeraVox — todo el contenido auditado, ninguno traducido',
    newsletterTitle: 'Newsletter',
    newsletterDesc: 'Memorandos mensuales sobre arquitectura de localización para infraestructura B2B.',
    newsletterTooltip: 'Qué incluye: Análisis de drift semántico, posicionamiento de developer tools y briefs de auditoría privados.',
    subscribeBtn: 'Suscribirse',
    overrideBtn: 'US Original (Override)',
  },
  fr: {
    navTag: 'Editorial Advisory',
    h1: 'Positionnement US SaaS pour les engineering leads en Europe.',
    sub: 'Les traductions littérales détruisent l’intention de conversion. Nous construisons des adaptations structurelles pour des marchés exigeants.',
    desc: 'Vous perdez du pipeline commercial en Europe en raison de traductions d’agences qui font passer votre infrastructure technique pour du simple logiciel grand public. VeraVox déploie des audits contradictoires et des ancrages contextuels pour aligner vos messages sur le vocabulaire pragmatique des CTOs et engineering leads. Zéro jargon marketing. Haute fidélité.',
    libraryLink: 'Explorer la bibliothèque d’audits ↓',
    specTitle: 'Spécification de mission',
    targetMarkets: 'Marchés cibles',
    method: 'Méthode',
    methodVal: 'structurelle, non littérale',
    diagCall: 'Appel de diagnostic',
    fluff: 'Jargon marketing',
    teardownTitle: 'À l’affiche : Le cas `Linear`',
    teardownDesc: 'Une reconstruction illustrative de la façon dont nous réagençons le message central d’un produit US pour un acheteur technique allemand.',
    directRejected: 'Traduction littérale — rejetée',
    structuralShipped: 'Adaptation structurelle — publiée',
    whyFailedHeading: 'Pourquoi cela échoue',
    whyFailedText: '"Fastest" et "high-performing" sont des superlatifs exagérés. Traduits littéralement, ils apparaissent comme des arguments marketing non vérifiés pour un lead technique allemand.',
    anchorHeading: 'L’ancrage',
    anchorHtml: '<span class="text-bone-100">nachvollziehbar</span> (traçable, vérifiable) est un terme que les CTOs recherchent directement — il établit la confiance que "fast" essayait d’obtenir.',
    restructureHeading: 'La restructuration',
    restructureText: 'Met en avant la fonction plutôt que la vitesse — ce qui correspond à la structure conventionnelle de la documentation tech en Allemagne.',
    expandExplain: 'Afficher l’analyse (FR)',
    auditLibTitle: 'Bibliothèque d’Audits',
    auditLibDesc: 'Mémorandums complets évaluant l’intention technique et l’intégrité de localisation sur les surfaces B2B.',
    freeAccess: 'Accès libre',
    memo4: 'Mémo n° 04',
    readMemo: 'Lire le mémorandum →',
    premium: 'Premium',
    memo5: 'Mémo n° 05',
    memo6: 'Mémo n° 06',
    subscriberOnly: 'Exclusif abonnés',
    footerSub: 'Adaptation textuelle structurelle pour les marchés tech européens (ES | FR | DE).',
    footerCopy: '© 2026 VeraVox — tout le contenu audité, aucun traduit',
    newsletterTitle: 'Newsletter',
    newsletterDesc: 'Mémos mensuels sur l’architecture de localisation directement dans votre boîte.',
    newsletterTooltip: 'Contenu : Analyses de dérive sémantique, positionnement d’outils dev et briefs d’audit privés.',
    subscribeBtn: 'S’inscrire',
    overrideBtn: 'US Original (Override)',
  },
  en: {
    navTag: 'Editorial Advisory',
    h1: 'Re-engineering US SaaS positioning for European engineering leads.',
    sub: 'Literal translations destroy conversion intent. We build structural adaptations for cynical EU markets.',
    desc: 'You are losing pipeline efficiency in Europe due to literal agency translations that make high-margin developer infrastructure read like basic consumer software. VeraVox deploys Adversarial Audits and Contextual Anchors to map your US messaging to the exact pragmatic vocabulary expected by European CTOs and engineering leads. Zero marketing fluff. High-signal localization.',
    libraryLink: 'Explore the Audit Library ↓',
    specTitle: 'Engagement Spec',
    targetMarkets: 'Target Markets',
    method: 'Method',
    methodVal: 'structural, not literal',
    diagCall: 'Diagnostic call',
    fluff: 'Marketing fluff',
    teardownTitle: 'Featured: The `Linear` teardown',
    teardownDesc: 'An illustrative reconstruction of how we structurally re-engineer a US product’s core messaging for a German technical buyer — line by line, decision by decision.',
    directRejected: 'Direct translation — rejected',
    structuralShipped: 'Structural adaptation — shipped',
    whyFailedHeading: 'Why it failed',
    whyFailedText: '"Fastest" and "high-performing" are hype superlatives. Translated literally, they read as unverified marketing claims to a DE engineering lead.',
    anchorHeading: 'The anchor',
    anchorHtml: '<span class="text-bone-100">nachvollziehbar</span> (traceable, verifiable) is a term DE technical buyers search for directly — it does the trust-building work "fast" was trying to do.',
    restructureHeading: 'The restructure',
    restructureText: 'Leads with function, not speed — matching how DE product documentation is conventionally ordered.',
    expandExplain: 'Toggle native breakdown (EN)',
    auditLibTitle: 'Audit Library',
    auditLibDesc: 'Full-length memorandums evaluating technical intent and localization integrity across primary B2B infrastructure surfaces.',
    freeAccess: 'Free Access',
    memo4: 'Memo No. 04',
    readMemo: 'Read Resend audit →',
    premium: 'Premium',
    memo5: 'Memo No. 05',
    memo6: 'Memo No. 06',
    subscriberOnly: 'Subscriber-only',
    footerSub: 'Structural copy adaptation for European tech markets (ES | FR | DE).',
    footerCopy: '© 2026 VeraVox — all copy audited, none of it translated',
    newsletterTitle: 'Newsletter',
    newsletterDesc: 'Monthly memorandums on localization architecture delivered straight to your inbox.',
    newsletterTooltip: 'Includes: Semantic drift analysis, developer tool positioning frameworks, and private audit briefs.',
    subscribeBtn: 'Subscribe',
    overrideBtn: 'View in Local Language',
  }
};

const TEARDOWN_CONTENT = {
  label: 'asset.headline — us-en → de-de',
  direct: 'Linear ist der schnellste Weg, moderne Software zu planen, zu verfolgen und auszuliefern — gebaut für die Geschwindigkeit leistungsstarker Teams.',
  structural: 'Linear strukturiert Planung, Entwicklung und Auslieferung in einem System — nachvollziehbar für Teams, die Präzision brauchen.',
};

export default function Home() {
  const [lang, setLang] = useState('de');
  const [expandedBreakdown, setExpandedBreakdown] = useState(false);
  const t = UI_TEXT[lang];

  return (
    <>
      <header className="border-b border-ink-700">
        <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <Link href="#top" className="font-display font-semibold text-lg tracking-tight text-bone-100">VeraVox</Link>
          <div className="flex items-center gap-3 font-mono text-xs">
            {['es', 'fr', 'de'].map((l) => (
              <React.Fragment key={l}>
                <button
                  onClick={() => setLang(l)}
                  className={`bg-transparent border-0 p-0 cursor-pointer transition-colors hover:text-bone-300 ${lang === l ? 'text-signal-gold' : 'text-bone-500'}`}
                >
                  {l.toUpperCase()}
                </button>
                <span className="text-ink-600">/</span>
              </React.Fragment>
            ))}
            <button
              onClick={() => setLang(lang === 'en' ? 'de' : 'en')}
              className={`ml-2 px-2.5 py-1 border font-mono text-[10px] uppercase tracking-wider transition-colors cursor-pointer rounded-sm ${
                lang === 'en' 
                  ? 'bg-signal-gold text-ink-950 border-signal-gold font-medium' 
                  : 'bg-transparent text-signal-gold border-signal-gold/40 hover:border-signal-gold'
              }`}
            >
              {lang === 'en' ? 'EN (Active) ⟲' : 'US Override'}
            </button>
          </div>
        </div>
      </header>

      <section id="top" className="max-w-6xl mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-20 md:pb-28">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          <div className="lg:col-span-7">
            <h1 className="hero-in d1 font-display font-semibold text-4xl sm:text-5xl md:text-[3.4rem] leading-[1.08] tracking-tight text-bone-100 max-w-xl">
              {t.h1}
            </h1>
            <p className="hero-in d2 mt-6 text-lg md:text-xl text-bone-300 max-w-lg leading-relaxed">
              {t.sub}
            </p>
            <p className="hero-in d3 mt-8 text-base text-bone-500 max-w-md leading-relaxed">
              {t.desc}
            </p>
            <div className="hero-in d4 mt-10">
              <Link href="#audits" className="rule-hover inline-block text-sm font-medium text-bone-100 pb-0.5">
                {t.libraryLink}
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 lg:pt-2">
            <div className="hero-in d3 border border-ink-700 bg-ink-900">
              <div className="px-5 py-3 border-b border-ink-700 font-mono text-xs text-bone-500">
                {t.specTitle}
              </div>
              <dl className="divide-y divide-ink-700">
                <div className="flex items-center justify-between px-5 py-4">
                  <dt className="text-sm text-bone-500">{t.targetMarkets}</dt>
                  <dd className="font-mono text-sm text-bone-100">ES · FR · DE</dd>
                </div>
                <div className="flex items-center justify-between px-5 py-4">
                  <dt className="text-sm text-bone-500">{t.method}</dt>
                  <dd className="font-mono text-sm text-bone-100">{t.methodVal}</dd>
                </div>
                <div className="flex items-center justify-between px-5 py-4">
                  <dt className="text-sm text-bone-500">{t.diagCall}</dt>
                  <dd className="font-mono text-sm text-bone-100">60 min</dd>
                </div>
                <div className="flex items-center justify-between px-5 py-4">
                  <dt className="text-sm text-bone-500">{t.fluff}</dt>
                  <dd className="font-mono text-sm text-signal-green">0%</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section id="teardown" className="border-t border-ink-700 bg-ink-900/40">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="max-w-xl mb-12 flex justify-between items-end">
            <div>
              <h2 className="font-display font-semibold text-3xl md:text-4xl tracking-tight text-bone-100">
                {t.teardownTitle}
              </h2>
              <p className="mt-4 text-base text-bone-500 leading-relaxed">
                {t.teardownDesc}
              </p>
            </div>
          </div>
          
          <div className="border border-ink-700 bg-ink-950">
            <div className="flex items-center justify-between px-5 py-3 border-b border-ink-700">
              <span className="font-mono text-xs text-bone-500">{TEARDOWN_CONTENT.label}</span>
              <button 
                onClick={() => setExpandedBreakdown(!expandedBreakdown)}
                className="font-mono text-xs text-signal-gold bg-transparent border-0 cursor-pointer hover:underline"
              >
                {expandedBreakdown ? '▲ Hide breakdown' : `▼ ${t.expandExplain}`}
              </button>
            </div>
            
            <div className="grid md:grid-cols-[1fr_auto] divide-y md:divide-y-0 divide-ink-700">
              <div className="divide-y divide-ink-700">
                <div className="flex gap-4 px-5 py-5">
                  <span className="font-mono text-signal-red select-none mt-0.5">−</span>
                  <div>
                    <p className="font-mono text-xs text-signal-red mb-2">{t.directRejected}</p>
                    <p className="text-bone-500 line-through decoration-signal-red/60 leading-relaxed">
                      {TEARDOWN_CONTENT.direct}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 px-5 py-5">
                  <span className="font-mono text-signal-green select-none mt-0.5">+</span>
                  <div>
                    <p className="font-mono text-xs text-signal-green mb-2">{t.structuralShipped}</p>
                    <p className="text-bone-100 leading-relaxed">
                      {TEARDOWN_CONTENT.structural}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="px-5 py-5 md:w-72 md:border-l border-ink-700 space-y-5">
                <div>
                  <p className="font-mono text-xs text-bone-500 mb-1">{t.whyFailedHeading}</p>
                  <p className="text-sm text-bone-300 leading-relaxed">{t.whyFailedText}</p>
                </div>
                <div>
                  <p className="font-mono text-xs text-bone-500 mb-1">{t.anchorHeading}</p>
                  <p className="text-sm text-bone-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: t.anchorHtml }} />
                </div>
                <div>
                  <p className="font-mono text-xs text-bone-500 mb-1">{t.restructureHeading}</p>
                  <p className="text-sm text-bone-300 leading-relaxed">{t.restructureText}</p>
                </div>
              </div>
            </div>

            {/* Expanded UI-Language Native Teardown Note */}
            {expandedBreakdown && (
              <div className="px-5 py-4 border-t border-ink-700 bg-ink-900/60 font-mono text-xs text-bone-300 leading-relaxed">
                <span className="text-signal-gold font-medium mr-2">NATIVE BREAKDOWN NOTE [{lang.toUpperCase()}]:</span> 
                {lang === 'de' && 'Dieses Beispiel zeigt, wie deutsche Ingenieure Produktversprechen durch verifizierbare Funktionsmerkmale statt durch Marketing-Hyperbeln bewerten.'}
                {lang === 'es' && 'Este ejemplo demuestra cómo los ingenieros europeos evalúan las afirmaciones de productos a través de características funcionales verificables en lugar de hipérboles de marketing.'}
                {lang ==
            {/* Expanded UI-Language Native Teardown Note */}
            {expandedBreakdown && (
              <div className="px-5 py-4 border-t border-ink-700 bg-ink-900/60 font-mono text-xs text-bone-300 leading-relaxed">
                <span className="text-signal-gold font-medium mr-2">NATIVE BREAKDOWN NOTE [{lang.toUpperCase()}]:</span> 
                {lang === 'de' && 'Dieses Beispiel zeigt, wie deutsche Ingenieure Produktversprechen durch verifizierbare Funktionsmerkmale statt durch Marketing-Hyperbeln bewerten.'}
                {lang === 'es' && 'Este ejemplo demuestra cómo los ingenieros evalúan las afirmaciones de productos a través de características funcionales verificables en lugar de hipérboles de marketing.'}
                {lang === 'fr' && 'Cet exemple montre comment les ingénieurs évaluent les promesses de produits par des fonctionnalités vérifiables plutôt que par des superlatifs marketing.'}
                {lang === 'en' && 'This example demonstrates how European engineering leads evaluate product promises through verifiable functional features rather than marketing hyperbole.'}
              </div>
            )}
          </div>
        </div>
      </section>

      <section id="audits" className="border-t border-ink-700 bg-ink-950">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="max-w-xl mb-12">
            <h2 className="font-display font-semibold text-3xl md:text-4xl tracking-tight text-bone-100">
              {t.auditLibTitle}
            </h2>
            <p className="mt-4 text-base text-bone-500 leading-relaxed">
              {t.auditLibDesc}
            </p>
          </div>
                    <div className="grid md:grid-cols-3 gap-6">
            <Link href="/audits/resend" className="group block border border-ink-700 bg-ink-900 p-6 hover:border-signal-gold transition-colors flex flex-col justify-between h-full">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="font-mono text-xs text-signal-green uppercase tracking-wider">{t.freeAccess}</span>
                  <span className="font-mono text-xs text-bone-500">{t.memo4}</span>
                </div>
                <h3 className="font-display text-xl text-bone-100 mb-2 group-hover:text-signal-gold transition-colors">Resend</h3>
                <p className="text-sm text-bone-500 leading-relaxed mb-6">Evaluating technical intent across regional conversion surfaces. Contrasting US baseline intent against traditional agency output.</p>
              </div>
              <div className="font-mono text-xs text-bone-300 flex items-center gap-2">
                {t.readMemo}
              </div>
            </Link>

            <div className="border border-ink-700 bg-ink-900/50 p-6 flex flex-col justify-between h-full opacity-75">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="font-mono text-xs text-bone-500 uppercase tracking-wider">{t.premium}</span>
                  <span className="font-mono text-xs text-bone-500">{t.memo5}</span>
                </div>
                <h3 className="font-display text-xl text-bone-300 mb-2">Vercel</h3>
                <p className="text-sm text-bone-600 leading-relaxed mb-6">Deconstructing enterprise caching documentation for strict DACH compliance and operational rigor.</p>
              </div>
              <div className="font-mono text-xs text-bone-600">
                {t.subscriberOnly}
              </div>
            </div>

            <div className="border border-ink-700 bg-ink-900/50 p-6 flex flex-col justify-between h-full opacity-75">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="font-mono text-xs text-bone-500 uppercase tracking-wider">{t.premium}</span>
                  <span className="font-mono text-xs text-bone-500">{t.memo6}</span>
                </div>
                <h3 className="font-display text-xl text-bone-300 mb-2">Supabase</h3>
                <p className="text-sm text-bone-600 leading-relaxed mb-6">Shifting US conversational abstractions into declarative database management vernacular for LATAM engineering teams.</p>
              </div>
              <div className="font-mono text-xs text-bone-600">
                {t.subscriberOnly}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section with [i] Hover Tooltip */}
      <section className="border-t border-ink-700 bg-ink-950 py-20">
        <div className="max-w-xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="font-mono text-[10px] uppercase tracking-widest text-signal-gold">{t.newsletterTitle}</div>
            <div className="group relative cursor-help inline-block">
              <span className="font-mono text-[10px] text-bone-500 border border-ink-700 rounded-full px-1.5 py-0.2 hover:border-signal-gold transition-colors">i</span>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-ink-900 border border-ink-700 font-mono text-[11px] text-bone-300 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 text-left leading-relaxed">
                {t.newsletterTooltip}
              </div>
            </div>
          </div>
          
          <h3 className="font-display text-2xl text-bone-100 mb-2">{t.newsletterTitle}</h3>
          <p className="text-sm text-bone-400 mb-8 max-w-md mx-auto">{t.newsletterDesc}</p>
          
          <form onSubmit={(e) => { e.preventDefault(); alert('Subscribed successfully.'); }} className="flex gap-2 max-w-md mx-auto">
            <input 
              type="email" 
              required 
              placeholder="name@company.com" 
              className="bg-ink-900 border border-ink-700 px-4 py-2.5 text-sm text-bone-100 focus:outline-none focus:border-signal-gold flex-1 font-mono rounded-none"
            />
            <button 
              type="submit" 
              className="bg-ink-900 border border-ink-700 px-6 py-2.5 font-mono text-xs text-bone-200 hover:border-signal-gold hover:text-signal-gold transition-colors cursor-pointer uppercase tracking-wider rounded-none"
            >
              {t.subscribeBtn}
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-ink-700">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-14">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <p className="font-display font-semibold text-lg text-bone-100">VeraVox Localization</p>
              <p className="text-sm text-bone-500 mt-1">Audits &amp; native re-engineering.</p>
              <p className="text-sm text-bone-500 mt-4 max-w-sm leading-relaxed">{t.footerSub}</p>
            </div>
            <div className="font-mono text-xs text-bone-500">
              {t.footerCopy}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
        }
        
