'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const AUDIT_CONTENT = {
  en: {
    navTag: 'Localization Audit #08',
    title: 'PostHog: Product Analytics & GDPR Data Sovereignty',
    subtitle: 'Re-engineering dev-analytics copy for privacy-conscious DACH and European engineering teams.',
    readingTime: '8 min read',
    date: 'November 2026',
    client: 'PostHog',
    markets: 'DACH, EU, LATAM',
    audience: 'Data Protection Officers & Lead Engineers',
    s1Title: 'Section 1 / Perspective & Intent',
    overviewHeading: 'Context & Intent',
    overviewBody: 'PostHog’s bold, casual US marketing ("How developers build better products" / "The Product OS") appeals to product-led founders. However, in Germany (DACH) and the EU, product analytics messaging encounters immediate scrutiny from Data Protection Officers (DPOs) concerned with cookie-less tracking, EU-cloud hosting, and GDPR (DSGVO) compliance.',
    overviewSub: 'This audit repositions PostHog around self-hosting options, zero-third-party data leakage, and compliance-first feature flags.',
    s2Title: 'Section 2 / Core Acquisition Teardown',
    b1Title: '01 / The Primary Headline (H1)',
    b1Analysis: 'In DACH enterprise contexts, "Product OS" is viewed as a vague buzzword. Highlighting GDPR compliance and self-hosted deployment options converts privacy-conscious engineering teams faster.',
    b2Title: '02 / Tracking & Analytics Narrative (H2)',
    b2Analysis: 'US copy focuses on session recordings and auto-capture. In Europe, framing these as privacy-compliant, cookieless telemetry tools prevents immediate rejection by legal compliance.',
    b3Title: '03 / Primary Call to Action (CTA)',
    b3Analysis: 'CTAs like "Get Started Free" are replaced with developer-native actions like "Deploy Instance" or "Explore EU Cloud".',
    s3Title: 'Section 3 / Applied Surface Audits',
    s3Heading: '01 / Session Replay & Privacy Data Masking',
    s3UsBaseline: 'Autocapture events and session recordings without extra engineering work.',
    s3TradAgencyEs: 'Captura automática de eventos y grabaciones de sesión sin trabajo de ingeniería adicional.',
    s3TradAgencyDe: 'Automatische Ereigniserfassung und Sitzungsaufzeichnungen ohne zusätzlichen Entwicklungsaufwand.',
    s3RefinedEs: 'Reproducción de sesiones con enmascaramiento estricto de PII en el cliente. Captura de eventos sin cookies de terceros ni fuga de datos.',
    s3RefinedDe: 'Session-Replay mit clientseitiger PII-Maskierung. Telemetrie-Erfassung ohne Drittanbieter-Cookies und ohne Datenabfluss.',
    s3Analysis: 'Autocapture event marketing alarms DPOs regarding unwanted PII ingestion. Explicitly framing it as client-side PII masking and cookieless telemetry secures DPO sign-off.',
    returnDir: '← Return to Directory',
    usBaseline: 'US Baseline',
    tradAgency: 'Traditional Agency Output',
    refinedIntent: 'Refined Technical Intent'
  },
  de: {
    navTag: 'Lokalisierungs-Audit #08',
    title: 'PostHog: Produktanalytik & DSGVO-Datensouveränität',
    subtitle: 'Anpassung von Entwickler-Analytics-Inhalten an strenge deutsche Datenschutzstandards.',
    readingTime: '8 Min. Lesezeit',
    date: 'November 2026',
    client: 'PostHog',
    markets: 'DACH, EU, LATAM',
    audience: 'Datenschutzbeauftragte & Lead Engineers',
    s1Title: 'Abschnitt 1 / Perspektive & Intent',
    overviewHeading: 'Kontext & Zielsetzung',
    overviewBody: 'In Deutschland führt Analytics-Software ohne klare DSGVO-Verankerung zur sofortigen Ablehnung durch den Datenschutzbeauftragten (DSB). „Product OS“ ist als Begriff zu unkonkret.',
    overviewSub: 'Dieses Audit betont DSGVO-Konformität, Self-Hosting-Optionen und cookielose Telemetrie.',
    s2Title: 'Abschnitt 2 / Strukturelle Akquisitions-Analyse',
    b1Title: '01 / Die Hauptüberschrift (H1)',
    b1Analysis: 'Messen Sie den Erfolg an der Datenschutz-Akzeptanz. Das explizite Nennen von EU-Hosting und DSGVO schafft direkte Freigabe-Voraussetzungen.',
    b2Title: '02 / Analytics- & Tracking-Narrativ (H2)',
    b2Analysis: 'Session-Replays und Event-Tracking müssen als datenschutzkonform und maskiert beschrieben werden.',
    b3Title: '03 / Primärer Call-to-Action (CTA)',
    b3Analysis: '„Instanz bereitstellen / EU-Cloud testen“ ersetzt generisches Registrieren.',
    s3Title: 'Abschnitt 3 / Angewandte Oberflächen-Audits',
    s3Heading: '01 / Feature-Flags & Session-Replay-Telemetrie',
    s3UsBaseline: 'Autocapture events and session recordings without extra engineering work.',
    s3TradAgencyEs: 'Captura automática de eventos y grabaciones de sesión sin trabajo de ingeniería adicional.',
    s3TradAgencyDe: 'Automatische Ereigniserfassung und Sitzungsaufzeichnungen ohne zusätzlichen Entwicklungsaufwand.',
    s3RefinedEs: 'Reproducción de sesiones con enmascaramiento estricto de PII en el cliente. Captura de eventos sin cookies de terceros ni fuga de datos.',
    s3RefinedDe: 'Session-Replay mit clientseitiger PII-Maskierung. Telemetrie-Erfassung ohne Drittanbieter-Cookies und ohne Datenabfluss.',
    s3Analysis: 'Absolute Präzision bei Datenmaskierung und lokaler Speicherung garantiert die Freigabe durch Datenschutzbeauftragte.',
    returnDir: '← Zurück zum Verzeichnis',
    usBaseline: 'US-Ausgangslage',
    tradAgency: 'Klassisches Agenturergebnis',
    refinedIntent: 'Präzisierter technischer Intent'
  },
  es: {
    navTag: 'Auditoría de Localización #08',
    title: 'PostHog: Analítica de Producto y Privacidad de Datos',
    subtitle: 'Readecuación de herramientas de análisis para el cumplimiento del RGPD en Europa.',
    readingTime: '8 min de lectura',
    date: 'Noviembre 2026',
    client: 'PostHog',
    markets: 'DACH, EU, LATAM',
    audience: 'Oficiales de Protección de Datos e Ingenieros',
    s1Title: 'Sección 1 / Perspectiva e Intención',
    overviewHeading: 'Contexto y Objetivo',
    overviewBody: 'Adaptar el mensaje de analítica de producto para superar las objeciones de privacidad y cumplimiento regulatorio en la Unión Europea.',
    overviewSub: 'Reestructuración enfocada en soberanía de datos y despliegue en infraestructura propia.',
    s2Title: 'Sección 2 / Desglose Estructural de Adquisición',
    b1Title: '01 / El Titular Principal (H1)',
    b1Analysis: 'Sustituir términos genéricos por afirmaciones claras sobre cumplimiento del RGPD y analítica de código abierto.',
    b2Title: '02 / Grabación de Sesiones y Telemetría (H2)',
    b2Analysis: 'Enfocar la captura de eventos garantizando el enmascaramiento de datos personales.',
    b3Title: '03 / Llamada a la Acción Principal (CTA)',
    b3Analysis: 'Incentivar el despliegue técnico inmediato o pruebas en servidor europeo.',
    s3Title: 'Sección 3 / Auditoría de Superficies Aplicadas',
    s3Heading: '01 / Feature Flags y Enmascaramiento de Datos',
    s3UsBaseline: 'Autocapture events and session recordings without extra engineering work.',
    s3TradAgencyEs: 'Captura automática de eventos y grabaciones de sesión sin trabajo de ingeniería adicional.',
    s3TradAgencyDe: 'Automatische Ereigniserfassung und Sitzungsaufzeichnungen ohne zusätzlichen Entwicklungsaufwand.',
    s3RefinedEs: 'Reproducción de sesiones con enmascaramiento estricto de PII en el cliente. Captura de eventos sin cookies de terceros ni fuga de datos.',
    s3RefinedDe: 'Session-Replay mit clientseitiger PII-Maskierung. Telemetrie-Erfassung ohne Drittanbieter-Cookies und ohne Datenabfluss.',
    s3Analysis: 'Garantía técnica de privacidad por diseño y enmascaramiento explícito de datos sensibles.',
    returnDir: '← Volver al Directorio',
    usBaseline: 'Línea Base (EE. UU.)',
    tradAgency: 'Resultado de Agencia Tradicional',
    refinedIntent: 'Intención Técnica Refinada'
  },
  fr: {
    navTag: 'Audit de Localisation #08',
    title: 'PostHog : Analytics Produit & Souveraineté des Données',
    subtitle: 'Réalignement des outils dev-analytics sur les exigences RGPD européennes.',
    readingTime: '8 min de lecture',
    date: 'Novembre 2026',
    client: 'PostHog',
    markets: 'DACH, EU, LATAM',
    audience: 'DPO & Directeurs Techniques',
    s1Title: 'Section 1 / Perspective & Intention',
    overviewHeading: 'Contexte & Objectif',
    overviewBody: 'Pour convaincre les DPO européens, PostHog doit mettre en avant son hébergement Cloud UE et ses fonctionnalités d’anonymisation.',
    overviewSub: 'Positionnement axé sur la conformité et l’open-source.',
    s2Title: 'Section 2 / Déconstruction de la Conversion',
    b1Title: '01 / Titre Principal (H1)',
    b1Analysis: 'Mettre l’accent sur la plateforme d’analyse conforme au RGPD.',
    b2Title: '02 / Analytics & Anonymisation (H2)',
    b2Analysis: 'Rassurer sur le respect de la vie privée et la gestion sans cookies.',
    b3Title: '03 / Appel à l’Action (CTA)',
    b3Analysis: 'Privilégier "Déployer sur Cloud UE" ou "Tester l’instance".',
    s3Title: 'Section 3 / Audit des Surfaces Appliquées',
    s3Heading: '01 / Télémétrie et Feature Flags',
    s3UsBaseline: 'Autocapture events and session recordings without extra engineering work.',
    s3TradAgencyEs: 'Captura automática de eventos y grabaciones de sesión sin trabajo de ingeniería adicional.',
    s3TradAgencyDe: 'Automatische Ereigniserfassung und Sitzungsaufzeichnungen ohne zusätzlichen Entwicklungsaufwand.',
    s3RefinedEs: 'Reproducción de sesiones con enmascaramiento estricto de PII en el cliente. Captura de eventos sin cookies de terceros ni fuga de datos.',
    s3RefinedDe: 'Session-Replay mit clientseitiger PII-Maskierung. Telemetrie-Erfassung ohne Drittanbieter-Cookies und ohne Datenabfluss.',
    s3Analysis: 'Explicitation claire du masquage des données personnelles dès le navigateur.',
    returnDir: '← Retour au Répertoire',
    usBaseline: 'Référence US',
    tradAgency: 'Rendu Agence Traditionnelle',
    refinedIntent: 'Intention Technique Affinée'
  },
  it: {
    navTag: 'Audit di Localizzazione #08',
    title: 'PostHog: Analisi Prodotto e Conformità GDPR',
    subtitle: 'Adattamento del messaggio analytics ai requisiti di privacy europei.',
    readingTime: '8 min di lettura',
    date: 'Novembre 2026',
    client: 'PostHog',
    markets: 'DACH, EU, LATAM',
    audience: 'DPO e Lead Engineer',
    s1Title: 'Sezione 1 / Prospettiva e Intento',
    overviewHeading: 'Contesto e Obiettivo',
    overviewBody: 'Superare i filtri dei DPO puntando su self-hosting e data sovereignty.',
    overviewSub: 'Riformulazione del valore per il mercato EU.',
    s2Title: 'Sezione 2 / Analisi Strutturale',
    b1Title: '01 / Titolo Principale (H1)',
    b1Analysis: 'Sostituire "Product OS" con concetti chiari di analitica conforme al GDPR.',
    b2Title: '02 / Telemetria e Privacy (H2)',
    b2Analysis: 'Enfatizzare il tracciamento senza cookie e il mascheramento dei dati.',
    b3Title: '03 / Call to Action (CTA)',
    b3Analysis: 'Incentivare il deployment tecnico diretto.',
    s3Title: 'Sezione 3 / Audit Documentazione',
    s3Heading: '01 / Gestione Dati e Session Replay',
    s3UsBaseline: 'Autocapture events and session recordings without extra engineering work.',
    s3TradAgencyEs: 'Captura automática de eventos y grabaciones de sesión sin trabajo de ingeniería adicional.',
    s3TradAgencyDe: 'Automatische Ereigniserfassung und Sitzungsaufzeichnungen ohne zusätzlichen Entwicklungsaufwand.',
    s3RefinedEs: 'Reproducción de sesiones con enmascaramiento estricto de PII en el cliente. Captura de eventos sin cookies de terceros ni fuga de datos.',
    s3RefinedDe: 'Session-Replay mit clientseitiger PII-Maskierung. Telemetrie-Erfassung ohne Drittanbieter-Cookies und ohne Datenabfluss.',
    s3Analysis: 'Accuratezza nelle definizioni di anonimizzazione dei dati per l’approvazione da parte del DPO.',
    returnDir: '← Torna al Direttorio',
    usBaseline: 'Linea Base US',
    tradAgency: 'Output Agenzia Tradizionale',
    refinedIntent: 'Intento Tecnico Rifinito'
  },
  pt: {
    navTag: 'Auditoria de Localização #08',
    title: 'PostHog: Análise de Produto e Soberania de Dados',
    subtitle: 'Readequação de dev-analytics para normas de privacidade RGPD.',
    readingTime: '8 min de leitura',
    date: 'Novembro 2026',
    client: 'PostHog',
    markets: 'DACH, EU, LATAM',
    audience: 'Encarregados de Dados (DPO) e Engenheiros',
    s1Title: 'Seção 1 / Perspectiva e Intenção',
    overviewHeading: 'Contexto e Objetivo',
    overviewBody: 'Foco em soberania de dados e conformidade para aprovação em auditorias corporativas.',
    overviewSub: 'Análise estrutural de conversão.',
    s2Title: 'Seção 2 / Análise de Conversão',
    b1Title: '01 / Título Principal (H1)',
    b1Analysis: 'Substituição de slogans por definições claras de analytics em conformidade legal.',
    b2Title: '02 / Gravação de Sessões e Privacidade (H2)',
    b2Analysis: 'Garantia explícita de anonimização e ausência de cookies de terceiros.',
    b3Title: '03 / Chamada para Ação (CTA)',
    b3Analysis: 'Ações focadas em implantação de instâncias.',
    s3Title: 'Seção 3 / Documentação Técnica',
    s3Heading: '01 / Telemetria e Controle de Recursos',
    s3UsBaseline: 'Autocapture events and session recordings without extra engineering work.',
    s3TradAgencyEs: 'Captura automática de eventos y grabaciones de sesión sin trabajo de ingeniería adicional.',
    s3TradAgencyDe: 'Automatische Ereigniserfassung und Sitzungsaufzeichnungen ohne zusätzlichen Entwicklungsaufwand.',
    s3RefinedEs: 'Reproducción de sesiones con enmascaramiento estricto de PII en el cliente. Captura de eventos sin cookies de terceros ni fuga de datos.',
    s3RefinedDe: 'Session-Replay mit clientseitiger PII-Maskierung. Telemetrie-Erfassung ohne Drittanbieter-Cookies und ohne Datenabfluss.',
    s3Analysis: 'Precisão nos protocolos de proteção de dados e anonimização.',
    returnDir: '← Voltar ao Diretório',
    usBaseline: 'Linha de Base (EUA)',
    tradAgency: 'Resultado de Agência Tradicional',
    refinedIntent: 'Intenção Técnica Refinada'
  }
};

export default function PostHogAuditPage() {
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
                <p className="text-bone-300 italic">"The open source Product OS. How developers build better products."</p>
              </div>
              
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-bone-600 mb-2">{t.tradAgency}</p>
                <ul className="text-bone-300 space-y-1 font-mono text-xs">
                  <li><span className="text-bone-500 mr-2">DE:</span> Das Open-Source-Produkt-Betriebssystem. Wie Entwickler bessere Produkte bauen.</li>
                  <li><span className="text-bone-500 mr-2">ES:</span> El SO de producto de código abierto. Cómo los desarrolladores crean mejores productos.</li>
                </ul>
              </div>

              <div className="border-l-2 border-signal-gold pl-4 py-1">
                <p className="font-mono text-[10px] uppercase tracking-widest text-signal-gold mb-2">{t.refinedIntent}</p>
                <ul className="text-bone-100 font-medium space-y-1 font-mono text-xs">
                  <li><span className="text-bone-500 font-normal mr-2">DE:</span> DSGVO-konforme Produktanalytik und Feature-Flags auf eigener Infrastruktur.</li>
                  <li><span className="text-bone-500 font-normal mr-2">ES:</span> Analítica de producto y Feature Flags compatibles con RGPD y opción de autohospedaje.</li>
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
                <p className="text-bone-300 italic">"Session replay, event autocapture, and product analytics in one tool."</p>
              </div>
              
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-bone-600 mb-2">{t.tradAgency}</p>
                <ul className="text-bone-300 space-y-1 font-mono text-xs">
                  <li><span className="text-bone-500 mr-2">DE:</span> Sitzungsaufzeichnung, automatische Ereigniserfassung und Produktanalytik in einem Tool.</li>
                  <li><span className="text-bone-500 mr-2">ES:</span> Grabación de sesiones, captura automática de eventos y analítica en una sola herramienta.</li>
                </ul>
              </div>

              <div className="border-l-2 border-signal-gold pl-4 py-1">
                <p className="font-mono text-[10px] uppercase tracking-widest text-signal-gold mb-2">{t.refinedIntent}</p>
                <ul className="text-bone-100 font-medium space-y-1 font-mono text-xs">
                  <li><span className="text-bone-500 font-normal mr-2">DE:</span> Anonymisierte Telemetrie, Session-Replays mit Datenmaskierung und volle EU-Datenhoheit.</li>
                  <li><span className="text-bone-500 font-normal mr-2">ES:</span> Telemetría anonimizada, reproducción de sesiones con enmascaramiento de datos y soberanía de datos en la UE.</li>
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
                <p className="text-bone-300 italic">"Get Started Free"</p>
              </div>
              
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-bone-600 mb-2">{t.tradAgency}</p>
                <ul className="text-bone-300 space-y-1 font-mono text-xs">
                  <li><span className="text-bone-500 mr-2">DE:</span> Kostenlos starten</li>
                  <li><span className="text-bone-500 mr-2">ES:</span> Empieza gratis</li>
                </ul>
              </div>

              <div className="border-l-2 border-signal-gold pl-4 py-1">
                <p className="font-mono text-[10px] uppercase tracking-widest text-signal-gold mb-2">{t.refinedIntent}</p>
                <ul className="text-bone-100 font-medium space-y-1 font-mono text-xs">
                  <li><span className="text-bone-500 font-normal mr-2">DE:</span> Instanz bereitstellen / EU-Cloud testen</li>
                  <li><span className="text-bone-500 font-normal mr-2">ES:</span> Desplegar instancia / Probar en Nube UE</li>
                </ul>
              </div>
            </div>

            <p className="text-bone-300 leading-relaxed text-sm">
              {t.b3Analysis}
            </p>
          </div>
        </section>

        {/* Upgraded Section 3 */}
        <section className="mb-20">
          <div className="font-mono text-[10px] uppercase tracking-widest text-signal-gold mb-8">
            {t.s3Title}
          </div>
          
          <div className="mb-12">
            <h3 className="font-mono text-[10px] uppercase tracking-widest text-bone-300 mb-6">
              {t.s3Heading}
            </h3>
            
            <div className="space-y-6 mb-8">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-bone-600 mb-2">{t.usBaseline}</p>
                <p className="text-bone-300 italic">{t.s3UsBaseline}</p>
              </div>
              
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-bone-600 mb-2">{t.tradAgency}</p>
                <ul className="text-bone-300 space-y-1 font-mono text-xs">
                  <li><span className="text-bone-500 mr-2">ES:</span> {t.s3TradAgencyEs}</li>
                  <li><span className="text-bone-500 mr-2">DE:</span> {t.s3TradAgencyDe}</li>
                </ul>
              </div>

              <div className="border-l-2 border-signal-gold pl-4 py-1">
                <p className="font-mono text-[10px] uppercase tracking-widest text-signal-gold mb-2">{t.refinedIntent}</p>
                <ul className="text-bone-100 font-medium space-y-1 font-mono text-xs">
                  <li><span className="text-bone-500 font-normal mr-2">ES:</span> {t.s3RefinedEs}</li>
                  <li><span className="text-bone-500 font-normal mr-2">DE:</span> {t.s3RefinedDe}</li>
                </ul>
              </div>
            </div>

            <p className="text-bone-300 leading-relaxed text-sm">
              {t.s3Analysis}
            </p>
          </div>
        </section>
        
        <div className="mt-32 pt-8 border-t border-ink-700">
          <Link href="/" className="font-mono text-[10px] uppercase tracking-widest text-bone-500 hover:text-signal-gold transition-colors">
            {t.returnDir}
          </Link>
        </div>
      </main>
    </div>
  );
}
