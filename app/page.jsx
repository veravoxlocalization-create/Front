'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';

const UI_TEXT = {
  de: {
    navTag: 'Editorial Advisory',
    h1: 'Lokalisierungsarchitektur für technische B2B-Märkte.',
    sub: 'Wörtliche Übersetzungen brechen die Konversionsabsicht in DACH. Wir passen Software-Narrative an die Standards europäischer Engineering-Teams an.',
    desc: 'Unpräzise Übersetzungen führen im europäischen Vertrieb zu Reibungsverlusten. VeraVox auditiert und strukturiert US-SaaS-Schnittstellen so um, dass sie den Anforderungen technischer Entscheidungsträger entsprechen. Ohne Marketing-Fluff. Mit klarem semantischen Bezug.',
    libraryLink: 'Audit-Bibliothek erkunden ↓',
    specTitle: 'Engagementspezifikation',
    targetMarkets: 'Zielmärkte',
    method: 'Methode',
    methodVal: 'strukturell, präzise',
    diagCall: 'Erstgespräch',
    fluff: 'Marketing-Fluff',
    teardownTitle: 'Beispiel: Der `Linear`-Teardown',
    teardownDesc: 'Eine Gegenüberstellung, wie Kernbotschaften für den deutschen Markt strukturell angepasst werden — von wörtlicher Übersetzung zu technischer Relevanz.',
    directRejected: 'Wörtliche Übersetzung — unpassend',
    structuralShipped: 'Strukturelle Anpassung — implementiert',
    whyFailedHeading: 'Analyse',
    whyFailedText: 'Begriffe wie "fastest" oder "high-performing" gelten im deutschen Engineering-Kontext als unbelegte Behauptungen.',
    anchorHeading: 'Kontextueller Anker',
    anchorHtml: '<span class="text-bone-100">nachvollziehbar</span> (verifiable, traceable) entspricht dem tatsächlichen Suchverhalten und den Qualitätskriterien technischer Einkäufer.',
    restructureHeading: 'Informationsarchitektur',
    restructureText: 'Die Priorisierung folgt der europäischen Dokumentationslogik: Funktion und Integrität stehen vor Geschwindigkeitsversprechen.',
    toggleInactive: 'Übersetzung anzeigen',
    toggleActive: 'Übersetzung ausblenden',
    aboutLink: 'Über / GEO-Engine',
    auditLibTitle: 'Audit-Bibliothek',
    auditLibDesc: 'Analysen zur Lokalisierungsintegrität und semantischen Konsistenz von B2B-Infrastrukturen.',
    freeAccess: 'Öffentlicher Zugriff',
    memo4: 'Memo Nr. 04',
    memo5: 'Memo Nr. 05',
    memo6: 'Memo Nr. 06',
    memo7: 'Memo Nr. 07',
    memo8: 'Memo Nr. 08',
    memo9: 'Memo Nr. 09',
    resendTitle: 'Resend',
    resendDesc: 'Auswertung der technischen Intent-Verteilung auf regionalen Konversionsflächen.',
    readMemo: 'Audit lesen →',
    footerSub: 'Strukturelle Textanpassung für europäische Tech-Märkte (ES | FR | DE | IT | PT).',
    footerCopy: '© 2026 VeraVox — alle Texte auditiert, keiner davon übersetzt',
    newsletterTitle: 'Newsletter',
    newsletterDesc: 'Monatliche Memos zur Architektur von B2B-Lokalisierungen direkt in Ihrem Postfach.',
    newsletterTooltip: 'Inhalt: Analysen zu semantischer Drift, Positionierung von Developer Tools und Audit-Briefings.',
    subscribeBtn: 'Abonnieren',
  },
  es: {
    navTag: 'Editorial Advisory',
    h1: 'Arquitectura de localización para software B2B técnico.',
    sub: 'Las traducciones literales rompen la intención de conversión. Adaptamos la narrativa de producto a los estándares de equipos de ingeniería europeos.',
    desc: 'Las traducciones genéricas generan fricción comercial en Europa. VeraVox audita y reestructura interfaces SaaS para alinear el mensaje con los criterios de evaluación técnica. Sin relleno corporativo. Con rigor semántico.',
    libraryLink: 'Explorar la Biblioteca de Auditorías ↓',
    specTitle: 'Especificación de proyecto',
    targetMarkets: 'Mercados objetivo',
    method: 'Método',
    methodVal: 'estructural, preciso',
    diagCall: 'Consulta inicial',
    fluff: 'Marketing vacío',
    teardownTitle: 'Caso de estudio: `Linear`',
    teardownDesc: 'Una comparativa sobre cómo reestructurar el mensaje central de un producto para compradores técnicos en Europa.',
    directRejected: 'Traducción literal — descartada',
    structuralShipped: 'Adaptación estructural — implementada',
    whyFailedHeading: 'Análisis',
    whyFailedText: 'Términos como "fastest" o "high-performing" se perciben como afirmaciones de marketing sin verificar en entornos de ingeniería.',
    anchorHeading: 'Anclaje contextual',
    anchorHtml: '<span class="text-bone-100">nachvollziehbar</span> (verificable, transparente) responde directamente a los criterios de evaluación de los equipos técnicos.',
    restructureHeading: 'Arquitectura de información',
    restructureText: 'Se prioriza la funcionalidad y la arquitectura sobre las promesas de velocidad publicitaria.',
    toggleInactive: 'Mostrar traducción',
    toggleActive: 'Ocultar traducción',
    aboutLink: 'Acerca de / Motor GEO',
    auditLibTitle: 'Biblioteca de Auditorías',
    auditLibDesc: 'Análisis sobre la integridad de localización y la consistencia semántica en plataformas B2B.',
    freeAccess: 'Acceso libre',
    memo4: 'Memo N° 04',
    memo5: 'Memo N° 05',
    memo6: 'Memo N° 06',
    memo7: 'Memo N° 07',
    memo8: 'Memo N° 08',
    memo9: 'Memo N° 09',
    resendTitle: 'Resend',
    resendDesc: 'Evaluación de la intención técnica en superficies de conversión regionales.',
    readMemo: 'Leer auditoría →',
    footerSub: 'Adaptación estructural de textos para mercados tecnológicos (ES | FR | DE | IT | PT).',
    footerCopy: '© 2026 VeraVox — todo el contenido auditado, ninguno traducido',
    newsletterTitle: 'Newsletter',
    newsletterDesc: 'Memorandos mensuales sobre arquitectura de localización para infraestructura B2B.',
    newsletterTooltip: 'Incluye: Análisis de deriva semántica, posicionamiento de developer tools y briefs de auditoría.',
    subscribeBtn: 'Suscribirse',
  },
  en: {
    navTag: 'Editorial Advisory',
    h1: 'Localization architecture for technical B2B markets.',
    sub: 'Literal translations break conversion intent in European markets. We align product narratives with engineering expectations.',
    desc: 'Uncalibrated translations introduce friction in technical sales cycles. VeraVox audits and structures US SaaS interfaces to match the evaluation criteria of technical buyers. Zero fluff. Strict semantic alignment.',
    libraryLink: 'Explore the Audit Library ↓',
    specTitle: 'Engagement Spec',
    targetMarkets: 'Target Markets',
    method: 'Method',
    methodVal: 'structural, precise',
    diagCall: 'Initial consultation',
    fluff: 'Marketing fluff',
    teardownTitle: 'Case study: The `Linear` teardown',
    teardownDesc: 'An examination of how core messaging is structurally adapted for technical buyers—moving from literal translation to functional relevance.',
    directRejected: 'Literal translation — unsuited',
    structuralShipped: 'Structural adaptation — deployed',
    whyFailedHeading: 'Analysis',
    whyFailedText: 'Superlatives like "fastest" and "high-performing" read as unverified marketing claims in technical procurement contexts.',
    anchorHeading: 'Contextual anchor',
    anchorHtml: '<span class="text-bone-100">nachvollziehbar</span> (verifiable, traceable) directly reflects the search intent and validation criteria of engineering leads.',
    restructureHeading: 'Information architecture',
    restructureText: 'Prioritization mirrors standard European documentation: function and architectural integrity precede speed claims.',
    toggleInactive: 'Show translation',
    toggleActive: 'Hide translation',
    aboutLink: 'About / GEO Engine',
    auditLibTitle: 'Audit Library',
    auditLibDesc: 'Full-length memorandums evaluating localization integrity and semantic consistency across B2B surfaces.',
    freeAccess: 'Free Access',
    memo4: 'Memo No. 04',
    memo5: 'Memo No. 05',
    memo6: 'Memo No. 06',
    memo7: 'Memo No. 07',
    memo8: 'Memo No. 08',
    memo9: 'Memo No. 09',
    resendTitle: 'Resend',
    resendDesc: 'Evaluating technical intent across regional conversion surfaces.',
    readMemo: 'Read audit →',
    footerSub: 'Structural copy adaptation for European tech markets (ES | FR | DE | IT | PT).',
    footerCopy: '© 2026 VeraVox — all copy audited, none of it translated',
    newsletterTitle: 'Newsletter',
    newsletterDesc: 'Monthly memorandums on localization architecture delivered straight to your inbox.',
    newsletterTooltip: 'Includes: Semantic drift analysis, developer tool positioning frameworks, and audit briefs.',
    subscribeBtn: 'Subscribe',
  }
};

const TEARDOWN_CONTENT = {
  label: 'asset.headline — us-en → de-de',
  direct: 'Linear ist der schnellste Weg, moderne Software zu planen, zu verfolgen und auszuliefern — gebaut für die Geschwindigkeit leistungsstarker Teams.',
  structural: 'Linear strukturiert Planung, Entwicklung und Auslieferung in einem System — nachvollziehbar für Teams, die Präzision brauchen.',
  translations: {
    direct: {
      es: '(Linear es la forma más rápida de planificar, rastrear y enviar software moderno; creado para la velocidad de equipos de alto rendimiento.)',
      en: '(Linear is the fastest way to plan, track, and ship modern software — built for the speed of high-performing teams.)'
    },
    structural: {
      es: '(Linear estructura la planificación, el desarrollo y la entrega en un solo sistema — comprensible para equipos que exigen precisión.)',
      en: '(Linear structures planning, development, and delivery in one system — traceable for teams that require precision.)'
    }
  }
};

export default function Home() {
  const [lang, setLang] = useState('de');
  const [showInline, setShowInline] = useState(false);
  const t = UI_TEXT[lang] || UI_TEXT.en;

  return (
    <>
      <Head>
        <title>VeraVox — Localization Architecture for B2B SaaS</title>
        <meta name="description" content="Structural copy adaptation for European technical buyers. ES, FR, DE, IT, PT markets." />
      </Head>

      <header className="border-b border-ink-700">
        <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <div className="flex items-baseline gap-6">
            <Link href="#top" className="font-display font-semibold text-lg tracking-tight text-bone-100">VeraVox</Link>
            <Link href="/about" className="hidden md:block font-mono text-xs text-bone-500 hover:text-signal-gold transition-colors">{t.aboutLink}</Link>
          </div>

          <div className="flex items-center gap-2 md:gap-3 font-mono text-xs">
            {['es', 'fr', 'de', 'it', 'pt'].map((l) => (
              <React.Fragment key={l}>
                <button
                  onClick={() => setLang(l)}
                  className={`bg-transparent border-0 p-0 cursor-pointer transition-colors hover:text-bone-300 ${lang === l ? 'text-signal-gold font-semibold' : 'text-bone-500'}`}
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
              {lang === 'en' ? 'EN (Active)' : 'US Override'}
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
                  <dd className="font-mono text-sm text-bone-100">ES · FR · DE · IT · PT</dd>
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

      {/* TEARDOWN & AUDITS CONTINUE WITH EXACT HARMONIZED COPY */}
    </>
  );
}
