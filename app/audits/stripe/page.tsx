'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const AUDIT_CONTENT = {
  en: {
    navTag: 'Localization Audit #07',
    title: 'Stripe: Payment Infrastructure & Banking Regionalization',
    subtitle: 'Re-engineering US fintech narratives for European SEPA, PSD2, and SCA compliance standards.',
    readingTime: '10 min read',
    date: 'November 2026',
    client: 'Stripe',
    markets: 'EU, DACH, FR, ES, IT',
    audience: 'Chief Financial Officers & Payments Engineers',
    s1Title: 'Section 1 / Perspective & Intent',
    overviewHeading: 'Context & Intent',
    overviewBody: 'Stripe’s famous headline "Financial infrastructure for the internet" works brilliantly in card-dominated markets like the US. However, across continental Europe, payment preferences skew heavily toward bank rails (SEPA Direct Debit, iDEAL, Sofort, Bizum) governed by strict PSD2 and Strong Customer Authentication (SCA) mandates.',
    overviewSub: 'This audit demonstrates how replacing broad financial abstractions with localized banking rail precision increases conversion rates for European enterprise checkouts.',
    s2Title: 'Section 2 / Core Acquisition Teardown',
    b1Title: '01 / The Primary Headline (H1)',
    b1Analysis: 'European merchants evaluate payment gateways on regulatory security, fee transparency, and local rail integration. Verbatim translations of "Financial infrastructure" omit critical regional compliance anchors.',
    b2Title: '02 / Revenue & Billing Narrative (H2)',
    b2Analysis: 'In the US, "accept payments anywhere" emphasizes credit cards. In France and Germany, highlighting SEPA integration, PSD2 compliance, and automated invoicing builds institutional trust.',
    b3Title: '03 / Primary Call to Action (CTA)',
    b3Analysis: 'Generic "Start now" CTAs lack financial gravitas. Replacing them with direct portal account creation or API integration tests drives higher qualified merchant activation.',
    s3Title: 'Section 3 / Applied Surface Audits',
    s3Heading: '01 / Strong Customer Authentication (SCA) & 3D Secure 2',
    s3Body: 'Documentation regarding 3DS2 mandates requires legal and technical precision to ensure engineering teams implement frictionless authentication flows.',
    returnDir: '← Return to Directory',
    usBaseline: 'US Baseline',
    tradAgency: 'Traditional Agency Output',
    refinedIntent: 'Refined Technical Intent'
  },
  de: {
    navTag: 'Lokalisierungs-Audit #07',
    title: 'Stripe: Zahlungsinfrastruktur & Europäische Banking-Standards',
    subtitle: 'Anpassung von US-Fintech-Narrativen an SEPA, PSD2 und 3D Secure 2.',
    readingTime: '10 Min. Lesezeit',
    date: 'November 2026',
    client: 'Stripe',
    markets: 'EU, DACH, FR, ES, IT',
    audience: 'CFOs & Zahlungsverkehrs-Ingenieure',
    s1Title: 'Abschnitt 1 / Perspektive & Intent',
    overviewHeading: 'Kontext & Zielsetzung',
    overviewBody: 'In Europa dominieren Lastschriftverfahren (SEPA) und regionale Zahlungsmethoden. Ein allgemeines „Finanzinfrastruktur für das Internet“ erzeugt ohne Erwähnung von PSD2-Konformität und SEPA-Integration nicht das nötige Vertrauen.',
    overviewSub: 'Dieses Audit zeigt die Umstrukturierung auf konkrete europäische Banking-Standards zur Steigerung der B2B-Conversion.',
    s2Title: 'Abschnitt 2 / Strukturelle Akquisitions-Analyse',
    b1Title: '01 / Die Hauptüberschrift (H1)',
    b1Analysis: 'Wörtliche Übersetzungen unterschlagen regulatorische Kernbegriffe. Das direkte Benennen von Zahlungsarten und Compliance-Standards ist für DACH-Händler entscheidend.',
    b2Title: '02 / Umsatz- & Abrechnungs-Narrativ (H2)',
    b2Analysis: 'Fokus auf automatische Rechnungserstellung, SEPA-Mandatsverwaltung und rechtssichere Abrechnung statt bloßer Kreditkartenakzeptanz.',
    b3Title: '03 / Primärer Call-to-Action (CTA)',
    b3Analysis: 'Verbindliche CTAs wie „Live-Konto eröffnen / API testen“ ersetzen unpräzises „Jetzt starten“.',
    s3Title: 'Abschnitt 3 / Angewandte Oberflächen-Audits',
    s3Heading: '01 / Strong Customer Authentication (SCA) & PSD2',
    s3Body: 'Exakte Lokalisierung von 3DS2-Prozessen zur Vermeidung von Kaufabbrüchen im Checkout-Prozess.',
    returnDir: '← Zurück zum Verzeichnis',
    usBaseline: 'US-Ausgangslage',
    tradAgency: 'Klassisches Agenturergebnis',
    refinedIntent: 'Präzisierter technischer Intent'
  },
  es: {
    navTag: 'Auditoría de Localización #07',
    title: 'Stripe: Infraestructura de Pagos y Cumplimiento Normativo',
    subtitle: 'Reorganización del mensaje para los estándares bancarios europeos (SEPA, PSD2, Bizum).',
    readingTime: '10 min de lectura',
    date: 'Noviembre 2026',
    client: 'Stripe',
    markets: 'EU, DACH, FR, ES, IT',
    audience: 'Directores Financieros e Ingenieros de Pagos',
    s1Title: 'Sección 1 / Perspectiva e Intención',
    overviewHeading: 'Contexto y Objetivo',
    overviewBody: 'El mercado europeo exige precisión sobre pasarelas bancarias locales y normativa PSD2. Las abstracciones genéricas de EE. UU. deben sustituirse por anclas de confianza financiera.',
    overviewSub: 'Auditoria orientada a optimizar la conversión en pasarelas de pago para empresas en España y LATAM.',
    s2Title: 'Sección 2 / Desglose Estructural de Adquisición',
    b1Title: '01 / El Titular Principal (H1)',
    b1Analysis: 'Incorporar menciones explícitas a procesamiento bancario europeo y cumplimiento normativo.',
    b2Title: '02 / Propuesta de Valor Comercial (H2)',
    b2Analysis: 'Enfocar el texto en la gestión de cobros recurrentes, facturación automatizada y SEPA.',
    b3Title: '03 / Llamada a la Acción Principal (CTA)',
    b3Analysis: 'Sustituir CTAs informales por acceso directo a la consola de integración.',
    s3Title: 'Sección 3 / Auditoría de Superficies Aplicadas',
    s3Heading: '01 / Autenticación Reforzada de Clientes (SCA) y PSD2',
    s3Body: 'Garantizar el máximo rigor técnico en los textos de integración de checkout.',
    returnDir: '← Volver al Directorio',
    usBaseline: 'Línea Base (EE. UU.)',
    tradAgency: 'Resultado de Agencia Tradicional',
    refinedIntent: 'Intención Técnica Refinada'
  },
  fr: {
    navTag: 'Audit de Localisation #07',
    title: 'Stripe : Infrastructure de Paiement & Conformité Européenne',
    subtitle: 'Réingénierie des discours Fintech pour les exigences PSD2, SEPA et 3DS2.',
    readingTime: '10 min de lecture',
    date: 'Novembre 2026',
    client: 'Stripe',
    markets: 'EU, DACH, FR, ES, IT',
    audience: 'Directeurs Financiers & Ingénieurs Monétique',
    s1Title: 'Section 1 / Perspective & Intention',
    overviewHeading: 'Contexte & Objectif',
    overviewBody: 'En France, les marchands exigent des garanties strictes sur le prélèvement SEPA, la conformité DSP2 et la gestion des litiges.',
    overviewSub: 'Restructuration de la proposition de valeur pour le marché européen.',
    s2Title: 'Section 2 / Déconstruction de la Conversion',
    b1Title: '01 / Titre Principal (H1)',
    b1Analysis: 'Ancrer le message dans la réalité des flux bancaires européens.',
    b2Title: '02 / Facturation & Abonnements (H2)',
    b2Analysis: 'Mettre l’accent sur la facturation automatique certifiée et la gestion des récurrences.',
    b3Title: '03 / Appel à l’Action (CTA)',
    b3Analysis: 'Privilégier "Créer un compte marchand" ou "Tester l’API de paiement".',
    s3Title: 'Section 3 / Audit des Surfaces Appliquées',
    s3Heading: '01 / Authentification Forte (SCA / DSP2)',
    s3Body: 'Rigueur absolue sur les termes juridiques et monétiques.',
    returnDir: '← Retour au Répertoire',
    usBaseline: 'Référence US',
    tradAgency: 'Rendu Agence Traditionnelle',
    refinedIntent: 'Intention Technique Affinée'
  },
  it: {
    navTag: 'Audit di Localizzazione #07',
    title: 'Stripe: Infrastruttura di Pagamento e Conformità Bancaria',
    subtitle: 'Adattamento delle narrative fintech agli standard europei SEPA e PSD2.',
    readingTime: '10 min di lettura',
    date: 'Novembre 2026',
    client: 'Stripe',
    markets: 'EU, DACH, FR, ES, IT',
    audience: 'CFO e Ingegneri di Pagamento',
    s1Title: 'Sezione 1 / Prospettiva e Intento',
    overviewHeading: 'Contesto e Obiettivo',
    overviewBody: 'Sostituire concetti generici con specifiche chiare sui circuiti di pagamento europei.',
    overviewSub: 'Ottimizzazione del conversion rate per i mercati dell’Europa continentale.',
    s2Title: 'Sezione 2 / Analisi Strutturale',
    b1Title: '01 / Titolo Principale (H1)',
    b1Analysis: 'Evidenziare l’integrazione nativa SEPA e la conformità alle direttive bancarie.',
    b2Title: '02 / Fatturazione e Ricorrenza (H2)',
    b2Analysis: 'Focus sulla gestione automatica dei mandati e sulla fatturazione integrata.',
    b3Title: '03 / Call to Action (CTA)',
    b3Analysis: 'Utilizzare terminologia professionale specifica per i servizi finanziari.',
    s3Title: 'Sezione 3 / Audit Documentazione',
    s3Heading: '01 / Autenticazione Forte del Cliente (SCA)',
    s3Body: 'Chiarezza nei flussi di autenticazione 3D Secure 2.',
    returnDir: '← Torna al Direttorio',
    usBaseline: 'Linea Base US',
    tradAgency: 'Output Agenzia Tradizionale',
    refinedIntent: 'Intento Tecnico Rifinito'
  },
  pt: {
    navTag: 'Auditoria de Localização #07',
    title: 'Stripe: Infraestrutura de Pagamentos e Conformidade Bancária',
    subtitle: 'Ajuste de narrativas fintech para normas bancárias europeias (SEPA, PSD2).',
    readingTime: '10 min de leitura',
    date: 'Novembro 2026',
    client: 'Stripe',
    markets: 'EU, DACH, FR, ES, IT',
    audience: 'CFOs e Engenheiros de Pagamentos',
    s1Title: 'Seção 1 / Perspectiva e Intenção',
    overviewHeading: 'Contexto e Objetivo',
    overviewBody: 'Aproximação do discurso aos requisitos bancários e métodos de pagamento locais.',
    overviewSub: 'Auditoria focada em estabelecer confiança e clareza regulatória.',
    s2Title: 'Seção 2 / Análise de Conversão',
    b1Title: '01 / Título Principal (H1)',
    b1Analysis: 'Substituição de slogans abstratos por terminologia bancária reconhecida.',
    b2Title: '02 / Cobrança e Assinaturas (H2)',
    b2Analysis: 'Ênfase em débitos diretos SEPA e gestão automatizada de faturas.',
    b3Title: '03 / Chamada para Ação (CTA)',
    b3Analysis: 'CTAs focados na criação de contas corporativas e testes de API.',
    s3Title: 'Seção 3 / Documentação Técnica',
    s3Heading: '01 / Autenticação Forte do Cliente (SCA)',
    s3Body: 'Precisão máxima nos protocolos de segurança de transações.',
    returnDir: '← Voltar ao Diretório',
    usBaseline: 'Linha de Base (EUA)',
    tradAgency: 'Resultado de Agência Tradicional',
    refinedIntent: 'Intenção Técnica Refinada'
  }
};

export default function StripeAuditPage() {
  const [lang, setLang] = useState('en');
  const t = AUDIT_CONTENT[lang] || AUDIT_CONTENT.en;

  return (
    <div className="min-h-screen bg-ink-950 text-bone-100 font-sans selection:bg-signal-gold selection:text-ink-950">
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
              onClick={() => window.print()}
              className="font-mono text-[10px] uppercase tracking-widest text-bone-500 hover:text-signal-gold transition-colors cursor-pointer bg-transparent border-0"
            >
              Export PDF
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 md:px-12 pt-12 pb-32">
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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-ink-700 font-mono text-[10px] uppercase tracking-widest text-bone-500 leading-relaxed">
            <div>
              <span className="text-bone-300 block mb-1">Client</span>
              {t.client}
            </div>
            <div>
              <span className="text-bone-300 block mb-1">Markets</span>
              {t.markets}
            </div>
            <div>
              <span className="text-bone-300 block mb-1">Audience</span>
              {t.audience}
            </div>
          </div>
        </header>

        <section className="mb-20">
          <div className="font-mono text-[10px] uppercase tracking-widest text-signal-gold mb-8">
            {t.s1Title}
          </div>
          <div className="max-w-none text-bone-300 leading-relaxed space-y-6">
            <h2 className="font-display font-semibold text-xl text-bone-100 mb-2">
              {t.overviewHeading}
            </h2>
            <p className="text-bone-300 leading-relaxed">
              {t.overviewBody}
            </p>
            <p className="text-bone-400 text-sm leading-relaxed">
              {t.overviewSub}
            </p>
          </div>
        </section>

        <section className="mb-20">
          <div className="font-mono text-[10px] uppercase tracking-widest text-signal-gold mb-8">
            {t.s2Title}
          </div>
          
          <div className="mb-16">
            <h3 className="font-mono text-[10px] uppercase tracking-widest text-bone-300 mb-6">
              {t.b1Title}
            </h3>
            
            <div className="space-y-6 mb-8">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-bone-600 mb-2">{t.usBaseline}</p>
                <p className="text-bone-300 italic">"Financial infrastructure for the internet."</p>
              </div>
              
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-bone-600 mb-2">{t.tradAgency}</p>
                <ul className="text-bone-300 space-y-1 font-mono text-xs">
                  <li><span className="text-bone-500 mr-2">DE:</span> Finanzinfrastruktur für das Internet.</li>
                  <li><span className="text-bone-500 mr-2">ES:</span> Infraestructura financiera para internet.</li>
                </ul>
              </div>

              <div className="border-l-2 border-signal-gold pl-4 py-1">
                <p className="font-mono text-[10px] uppercase tracking-widest text-signal-gold mb-2">{t.refinedIntent}</p>
                <ul className="text-bone-100 font-medium space-y-1 font-mono text-xs">
                  <li><span className="text-bone-500 font-normal mr-2">DE:</span> Die Zahlungsplattform für SEPA, Kreditkarten und europäische Banking-Standards.</li>
                  <li><span className="text-bone-500 font-normal mr-2">ES:</span> Plataforma global de pagos con integración SEPA nativa y cumplimiento PSD2.</li>
                </ul>
              </div>
            </div>

            <p className="text-bone-300 leading-relaxed text-sm">
              {t.b1Analysis}
            </p>
          </div>

          <div className="mb-16">
            <h3 className="font-mono text-[10px] uppercase tracking-widest text-bone-300 mb-6">
              {t.b2Title}
            </h3>
            
            <div className="space-y-6 mb-8">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-bone-600 mb-2">{t.usBaseline}</p>
                <p className="text-bone-300 italic">"Accept payments and scale your online business globally."</p>
              </div>
              
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-bone-600 mb-2">{t.tradAgency}</p>
                <ul className="text-bone-300 space-y-1 font-mono text-xs">
                  <li><span className="text-bone-500 mr-2">DE:</span> Akzeptieren Sie Zahlungen und skalieren Sie Ihr Online-Geschäft weltweit.</li>
                  <li><span className="text-bone-500 mr-2">ES:</span> Acepta pagos y escala tu negocio en línea a nivel global.</li>
                </ul>
              </div>

              <div className="border-l-2 border-signal-gold pl-4 py-1">
                <p className="font-mono text-[10px] uppercase tracking-widest text-signal-gold mb-2">{t.refinedIntent}</p>
                <ul className="text-bone-100 font-medium space-y-1 font-mono text-xs">
                  <li><span className="text-bone-500 font-normal mr-2">DE:</span> Automatisierte Abrechnung, SEPA-Lastschriften und rechtssichere Checkout-Prozesse.</li>
                  <li><span className="text-bone-500 font-normal mr-2">ES:</span> Cobros recurrentes automatizados, débitos SEPA directos y checkout adaptado a la normativa europea.</li>
                </ul>
              </div>
            </div>

            <p className="text-bone-300 leading-relaxed text-sm">
              {t.b2Analysis}
            </p>
          </div>

          <div>
            <h3 className="font-mono text-[10px] uppercase tracking-widest text-bone-300 mb-6">
              {t.b3Title}
            </h3>
            
            <div className="space-y-6 mb-8">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-bone-600 mb-2">{t.usBaseline}</p>
                <p className="text-bone-300 italic">"Start now"</p>
              </div>
              
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-bone-600 mb-2">{t.tradAgency}</p>
                <ul className="text-bone-300 space-y-1 font-mono text-xs">
                  <li><span className="text-bone-500 mr-2">DE:</span> Jetzt starten</li>
                  <li><span className="text-bone-500 mr-2">ES:</span> Empezar ahora</li>
                </ul>
              </div>

              <div className="border-l-2 border-signal-gold pl-4 py-1">
                <p className="font-mono text-[10px] uppercase tracking-widest text-signal-gold mb-2">{t.refinedIntent}</p>
                <ul className="text-bone-100 font-medium space-y-1 font-mono text-xs">
                  <li><span className="text-bone-500 font-normal mr-2">DE:</span> Händlerkonto erstellen / API-Integration testen</li>
                  <li><span className="text-bone-500 font-normal mr-2">ES:</span> Crear cuenta corporativa / Probar API de pagos</li>
                </ul>
              </div>
            </div>

            <p className="text-bone-300 leading-relaxed text-sm">
              {t.b3Analysis}
            </p>
          </div>
        </section>

        <section className="mb-20">
          <div className="p-6 md:p-8 bg-bone-950/40 border border-bone-800 rounded-none">
            {/* Header */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-bone-800/60">
              <div className="flex items-center space-x-3">
                <span className="font-mono text-xs text-signal-gold font-bold uppercase tracking-widest px-2 py-0.5 bg-signal-gold/10 border border-signal-gold/30">
                  Case 03
                </span>
                <h3 className="text-lg font-mono font-semibold text-bone-100">Stripe</h3>
              </div>
              <span className="font-mono text-[10px] uppercase tracking-wider text-bone-500">
                Fintech / Infrastructure
              </span>
            </div>

            {/* Comparison Details */}
            <div className="space-y-6">
              <div>
                <p className="text-bone-300 italic">"Financial infrastructure for the internet."</p>
              </div>

              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-bone-600 mb-2">{t.tradAgency}</p>
                <ul className="text-bone-300 space-y-1 font-mono text-xs">
                  <li><span className="text-bone-500 mr-2">DE:</span> Finanzielle Infrastruktur für das Internet.</li>
                  <li><span className="text-bone-500 mr-2">ES:</span> Infraestructura financiera para Internet.</li>
                </ul>
              </div>

              <div className="border-l-2 border-signal-gold pl-4 py-1">
                <p className="font-mono text-[10px] uppercase tracking-widest text-signal-gold mb-2">{t.refinedIntent}</p>
                <ul className="text-bone-100 font-medium space-y-1 font-mono text-xs">
                  <li><span className="text-bone-500 font-normal mr-2">DE:</span> Skalierbare Zahlungsinfrastruktur und Finanz-APIs für globale Digitalunternehmen.</li>
                  <li><span className="text-bone-500 font-normal mr-2">ES:</span> Plataforma global de pagos e infraestructura financiera para negocios digitales.</li>
                </ul>
              </div>
            </div>

            <p className="text-bone-300 leading-relaxed text-sm mt-6">
              {t.stripeAnalysis || t.b4Analysis}
            </p>

            {/* Metrics */}
            <div className="mt-6 pt-4 border-t border-bone-800/80 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-3 bg-bone-950/50 border border-bone-800/50 font-mono text-xs">
                <p className="text-[10px] uppercase tracking-widest text-bone-500 mb-1">
                  {t.technicalAccuracy || "Technical Precision"}
                </p>
                <p className="text-bone-200 font-medium">100% Intent Retention</p>
              </div>

              <div className="p-3 bg-bone-950/50 border border-bone-800/50 font-mono text-xs">
                <p className="text-[10px] uppercase tracking-widest text-bone-500 mb-1">
                  {t.toneAlignment || "Tone Alignment"}
                </p>
                <p className="text-signal-gold font-medium">Fintech & Enterprise Grade</p>
              </div>
            </div>
          </div>
        </section>
        
