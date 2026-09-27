'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const AUDIT_CONTENT = {
  en: {
    navTag: 'Localization Audit #06',
    title: 'Supabase: Managed Postgres & RLS Regional Audit',
    subtitle: 'Shifting US conversational abstractions into declarative database vernacular for EU & LATAM technical leads.',
    readingTime: '8 min read',
    date: 'October 2026',
    client: 'Supabase',
    markets: 'LATAM, EU, DACH',
    audience: 'Principal Database Architects & CTOs',
    s1Title: 'Section 1 / Perspective & Intent',
    overviewHeading: 'Context & Intent',
    overviewBody: 'Supabase’s iconic baseline "Build in a weekend. Scale to millions." captures startup speed in North America. However, conservative European and Latin American engineering leads often interpret "weekend project" as an indicator of amateur or hobby-tier tooling unfit for core enterprise workloads.',
    overviewSub: 'This audit repositions Supabase around ACID compliance, native Row Level Security (RLS), automated read-replicas, and open-source database sovereignty.',
    s2Title: 'Section 2 / Core Acquisition Teardown',
    b1Title: '01 / The Primary Headline (H1)',
    b1Analysis: 'Translating "Build in a weekend" literally undermines enterprise authority. Technical evaluators require direct framing around managed PostgreSQL, connection pooling, and real-time database CDC (Change Data Capture).',
    b2Title: '02 / Core Value Proposition (H2)',
    b2Analysis: 'US marketing framing highlights "Firebase Alternative". In European markets, anti-lock-in sentiment is strong; framing the product directly on open-source Postgres standards and data sovereignty delivers higher conversion signal.',
    b3Title: '03 / Primary Call to Action (CTA)',
    b3Analysis: 'Generic CTAs like "Start your project" sound like a casual hobby workflow. B2B buyers respond to explicit database provisioning actions like "Provision Postgres Instance".',
    s3Title: 'Section 3 / Applied Surface Audits',
    s3Heading: '01 / Realtime Replication & RLS Security Policies',
    s3Body: 'Security policies written in SQL require exact terminological parity when explained in documentation. Agency mistranslations of security terms create compliance risks for European financial and healthcare SaaS teams.',
    returnDir: '← Return to Directory',
    usBaseline: 'US Baseline',
    tradAgency: 'Traditional Agency Output',
    refinedIntent: 'Refined Technical Intent'
  },
  es: {
    navTag: 'Auditoría de Localización #06',
    title: 'Supabase: Infraestructura Postgres y Seguridad RLS',
    subtitle: 'Transformando abstracciones de desarrollo rápido en vocabulario declarativo para líderes de ingeniería.',
    readingTime: '8 min de lectura',
    date: 'Octubre 2026',
    client: 'Supabase',
    markets: 'LATAM, EU, DACH',
    audience: 'Arquitectos de Bases de Datos y CTOs',
    s1Title: 'Sección 1 / Perspectiva e Intención',
    overviewHeading: 'Contexto y Objetivo',
    overviewBody: 'La frase "Construye en un fin de semana" evoca agilidad en EE. UU. En LATAM y Europa, los directores de tecnología asocian "proyecto de fin de semana" con herramientas no preparadas para entornos de producción críticos.',
    overviewSub: 'Esta auditoría reestructura la propuesta de Supabase resaltando el cumplimiento ACID, políticas RLS nativas y soberanía de datos sobre código abierto.',
    s2Title: 'Sección 2 / Desglose Estructural de Adquisición',
    b1Title: '01 / El Titular Principal (H1)',
    b1Analysis: 'Sustituir referencias a proyectos informales por la definición formal de Postgres administrado y replicación en tiempo real restaura el prestigio técnico.',
    b2Title: '02 / Propuesta de Valor Central (H2)',
    b2Analysis: 'En lugar de definirse solo como "Alternativa a Firebase", enfatizar la portabilidad de datos sin bloqueo de proveedor resuena con decisiones de arquitectura corporativa.',
    b3Title: '03 / Llamada a la Acción Principal (CTA)',
    b3Analysis: 'Reemplazar "Crear proyecto" por acciones precisas de aprovisionamiento de bases de datos.',
    s3Title: 'Sección 3 / Auditoría de Superficies Aplicadas',
    s3Heading: '01 / Replicación en Tiempo Real y Políticas RLS',
    s3Body: 'La traducción precisa de las políticas de seguridad a nivel de fila garantiza que los equipos de cumplimiento legal aprueben la migración.',
    returnDir: '← Volver al Directorio',
    usBaseline: 'Línea Base (EE. UU.)',
    tradAgency: 'Resultado de Agencia Tradicional',
    refinedIntent: 'Intención Técnica Refinada'
  },
  de: {
    navTag: 'Lokalisierungs-Audit #06',
    title: 'Supabase: Verwaltetes Postgres & RLS-Sicherheitsarchitektur',
    subtitle: 'Übertragung von US-Startup-Slogans in präzise Datenbank-Fachsprache.',
    readingTime: '8 Min. Lesezeit',
    date: 'Oktober 2026',
    client: 'Supabase',
    markets: 'LATAM, EU, DACH',
    audience: 'Datenbank-Architects & CTOs',
    s1Title: 'Abschnitt 1 / Perspektive & Intent',
    overviewHeading: 'Kontext & Zielsetzung',
    overviewBody: 'Der US-Slogan „Build in a weekend“ wird im DACH-Raum oft als Unreife missverstanden. Enterprise-Entscheider suchen nach ACID-Konformität, PostgreSQL-Standardtreue und datenschutzkonformer Mandantenfähigkeit.',
    overviewSub: 'Dieses Audit positioniert Supabase als vollwertige PostgreSQL-Plattform mit gewohntem Open-Source-Standard und integrierter Zeilensicherheit.',
    s2Title: 'Abschnitt 2 / Strukturelle Akquisitions-Analyse',
    b1Title: '01 / Die Hauptüberschrift (H1)',
    b1Analysis: 'Klarheit schlägt Marketing: Technische Einkäufer verlangen direkte Angaben zu Postgres-Versionen, Verbindungspooling und skalierbarer Datenhaltung.',
    b2Title: '02 / Das zentrale Wertversprechen (H2)',
    b2Analysis: 'Die Positionierung gegen Vendor-Lock-in überzeugt deutsche Architekten mehr als ein diffuser Vergleich mit proprietären US-Clouddiensten.',
    b3Title: '03 / Primärer Call-to-Action (CTA)',
    b3Analysis: 'Anstelle von „Projekt starten“ generiert „Postgres-Instanz bereitstellen“ deutlich höhere Relevanz bei professionellen Entwicklern.',
    s3Title: 'Abschnitt 3 / Angewandte Oberflächen-Audits',
    s3Heading: '01 / Echtzeit-Replikation & Row-Level Security',
    s3Body: 'Präzise Fachbegriffe bei Zeilensicherheits-Regeln (RLS) sichern die Einhaltung europäischer Compliance-Vorgaben.',
    returnDir: '← Zurück zum Verzeichnis',
    usBaseline: 'US-Ausgangslage',
    tradAgency: 'Klassisches Agenturergebnis',
    refinedIntent: 'Präzisierter technischer Intent'
  },
  fr: {
    navTag: 'Audit de Localisation #06',
    title: 'Supabase : Postgres Géré & Sécurité RLS',
    subtitle: 'Conversion des métaphores rapides US en terminologie base de données déclarative.',
    readingTime: '8 min de lecture',
    date: 'Octobre 2026',
    client: 'Supabase',
    markets: 'LATAM, EU, DACH',
    audience: 'Architectes Données & CTOs',
    s1Title: 'Section 1 / Perspective & Intention',
    overviewHeading: 'Contexte & Objectif',
    overviewBody: 'Traduire littéralement "Construisez en un week-end" affaiblit la crédibilité auprès des décideurs IT européens que recherchent la conformité ACID et l’absence de verrouillage propriétaire.',
    overviewSub: 'Reconstitution de la valeur autour de PostgreSQL géré, des politiques RLS et de la réplication de données en temps réel.',
    s2Title: 'Section 2 / Déconstruction de la Conversion',
    b1Title: '01 / Titre Principal (H1)',
    b1Analysis: 'Mettre l’accent sur la robustesse de l’infrastructure PostgreSQL gérée plutôt que sur la vitesse de bricolage du week-end.',
    b2Title: '02 / Proposition de Valeur (H2)',
    b2Analysis: 'Mettre en avant la souveraineté des données et l’open-source face aux solutions propriétaires.',
    b3Title: '03 / Appel à l’Action (CTA)',
    b3Analysis: 'Privilégier un CTA explicite : "Provisionner une instance Postgres".',
    s3Title: 'Section 3 / Audit des Surfaces Appliquées',
    s3Heading: '01 / Sécurité RLS et Politiques d’Accès',
    s3Body: 'Traduction rigoureuse des concepts de sécurité au niveau des lignes SQL pour garantir la conformité.',
    returnDir: '← Retour au Répertoire',
    usBaseline: 'Référence US',
    tradAgency: 'Rendu Agence Traditionnelle',
    refinedIntent: 'Intention Technique Affinée'
  },
  it: {
    navTag: 'Audit di Localizzazione #06',
    title: 'Supabase: Gestione Postgres e Sicurezza RLS',
    subtitle: 'Traduzione dei concetti rapida US in terminologia dichiarativa per database enterprise.',
    readingTime: '8 min di lettura',
    date: 'Ottobre 2026',
    client: 'Supabase',
    markets: 'LATAM, EU, DACH',
    audience: 'Database Architect & CTO',
    s1Title: 'Sezione 1 / Prospettiva e Intento',
    overviewHeading: 'Contesto e Obiettivo',
    overviewBody: 'Sostituire la narrazione dei progetti informali con garanzie formali su ACID compliance, sicurezza a livello di riga e assenza di lock-in.',
    overviewSub: 'Riorganizzazione del messaggio per decisori tecnici europei e latini.',
    s2Title: 'Sezione 2 / Analisi Conversione',
    b1Title: '01 / Titolo Principale (H1)',
    b1Analysis: 'Focalizzarsi sull’architettura di Postgres gestito e real-time CDC.',
    b2Title: '02 / Valore Centrale (H2)',
    b2Analysis: 'Evidenziare la sovranità dei dati e l’interoperabilità Open Source.',
    b3Title: '03 / Call to Action (CTA)',
    b3Analysis: 'Utilizzare un linguaggio orientato alla configurazione dell’infrastruttura.',
    s3Title: 'Sezione 3 / Audit Documentazione',
    s3Heading: '01 / Replicazione Realtime e RLS',
    s3Body: 'Massima accuratezza nei termini SQL e nelle politiche di sicurezza.',
    returnDir: '← Torna al Direttorio',
    usBaseline: 'Linea Base US',
    tradAgency: 'Output Agenzia Tradizionale',
    refinedIntent: 'Intento Tecnico Rifinito'
  },
  pt: {
    navTag: 'Auditoria de Localização #06',
    title: 'Supabase: Infraestrutura Postgres e Segurança RLS',
    subtitle: 'Conversão de slogans de desenvolvimento rápido para vocabulário declarativo de banco de dados.',
    readingTime: '8 min de leitura',
    date: 'Outubro 2026',
    client: 'Supabase',
    markets: 'LATAM, EU, DACH',
    audience: 'Arquitetos de Banco de Dados & CTOs',
    s1Title: 'Seção 1 / Perspectiva e Intenção',
    overviewHeading: 'Contexto e Objetivo',
    overviewBody: 'A expressão "Construa em um fim de semana" transmite falta de maturidade enterprise para diretores de TI na Europa e América Latina.',
    overviewSub: 'Auditoria focada em estabelecer o Supabase como infraestrutura PostgreSQL totalmente gerenciada e segura.',
    s2Title: 'Seção 2 / Análise de Conversão',
    b1Title: '01 / Título Principal (H1)',
    b1Analysis: 'Definição precisa de banco de dados relacional gerenciado e replicação em tempo real.',
    b2Title: '02 / Proposta de Valor (H2)',
    b2Analysis: 'Enfase na liberdade de código aberto e controle total dos datos.',
    b3Title: '03 / Chamada para Ação (CTA)',
    b3Analysis: 'Substituição por ações diretas de provisionamento de banco de dados.',
    s3Title: 'Seção 3 / Documentação Técnica',
    s3Heading: '01 / Políticas de Segurança a Nível de Linha (RLS)',
    s3Body: 'Precisão absoluta na tradução de termos SQL e controle de acesso.',
    returnDir: '← Voltar ao Diretório',
    usBaseline: 'Linha de Base (EUA)',
    tradAgency: 'Resultado de Agência Tradicional',
    refinedIntent: 'Intenção Técnica Refinada'
  }
};

export default function SupabaseAuditPage() {
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
                <p className="text-bone-300 italic">"Build in a weekend. Scale to millions."</p>
              </div>
              
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-bone-600 mb-2">{t.tradAgency}</p>
                <ul className="text-bone-300 space-y-1 font-mono text-xs">
                  <li><span className="text-bone-500 mr-2">ES:</span> Construye en un fin de semana. Escala a millones.</li>
                  <li><span className="text-bone-500 mr-2">DE:</span> Bauen Sie an einem Wochenende. Skalieren Sie auf Millionen.</li>
                </ul>
              </div>

              <div className="border-l-2 border-signal-gold pl-4 py-1">
                <p className="font-mono text-[10px] uppercase tracking-widest text-signal-gold mb-2">{t.refinedIntent}</p>
                <ul className="text-bone-100 font-medium space-y-1 font-mono text-xs">
                  <li><span className="text-bone-500 font-normal mr-2">ES:</span> Infraestructura Postgres gestionada. Seguridad a nivel de fila y escalabilidad distribuida.</li>
                  <li><span className="text-bone-500 font-normal mr-2">DE:</span> Verwaltete Postgres-Infrastruktur mit automatischer Skalierung und Zeilensicherheit.</li>
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
                <p className="text-bone-300 italic">"The Open Source Firebase Alternative."</p>
              </div>
              
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-bone-600 mb-2">{t.tradAgency}</p>
                <ul className="text-bone-300 space-y-1 font-mono text-xs">
                  <li><span className="text-bone-500 mr-2">ES:</span> La alternativa de código abierto a Firebase.</li>
                  <li><span className="text-bone-500 mr-2">DE:</span> Die Open-Source-Alternative zu Firebase.</li>
                </ul>
              </div>

              <div className="border-l-2 border-signal-gold pl-4 py-1">
                <p className="font-mono text-[10px] uppercase tracking-widest text-signal-gold mb-2">{t.refinedIntent}</p>
                <ul className="text-bone-100 font-medium space-y-1 font-mono text-xs">
                  <li><span className="text-bone-500 font-normal mr-2">ES:</span> La suite de base de datos Open Source nativa en PostgreSQL. Sin bloqueo de proveedor.</li>
                  <li><span className="text-bone-500 font-normal mr-2">DE:</span> Die quelloffene Postgres-Plattform ohne Vendor-Lock-in. Full-Stack Data Engine.</li>
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
                <p className="text-bone-300 italic">"Start your project"</p>
              </div>
              
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-bone-600 mb-2">{t.tradAgency}</p>
                <ul className="text-bone-300 space-y-1 font-mono text-xs">
                  <li><span className="text-bone-500 mr-2">ES:</span> Iniciar tu proyecto</li>
                  <li><span className="text-bone-500 mr-2">DE:</span> Starten Sie Ihr Projekt</li>
                </ul>
              </div>

              <div className="border-l-2 border-signal-gold pl-4 py-1">
                <p classN
