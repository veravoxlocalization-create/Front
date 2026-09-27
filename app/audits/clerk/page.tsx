'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const AUDIT_CONTENT = {
  en: {
    navTag: 'Localization Audit #09',
    title: 'Clerk: Identity & User Security Regionalization Audit',
    subtitle: 'Adapting authentication narratives from US friction-free growth copy to European security frameworks.',
    readingTime: '8 min read',
    date: 'December 2026',
    client: 'Clerk',
    markets: 'EU, DACH, LATAM',
    audience: 'Chief Information Security Officers & SaaS Architects',
    s1Title: 'Section 1 / Perspective & Intent',
    overviewHeading: 'Context & Intent',
    overviewBody: 'Clerk’s US copy "More than authentication. Complete user management." focuses on rapid integration and frictionless UI components. In European SaaS security reviews, CISOs evaluate authentication vendors based on OpenID Connect (OIDC) compliance, multi-factor security, SOC2/ISO auditability, and European tenant isolation.',
    overviewSub: 'This audit repositions Clerk’s drop-in auth components around zero-trust identity management and regulatory data protection.',
    s2Title: 'Section 2 / Core Acquisition Teardown',
    b1Title: '01 / The Primary Headline (H1)',
    b1Analysis: 'In European procurement, casual claims like "Complete user management" sound like light consumer software. Anchoring on identity infrastructure, OAuth2/OIDC standards, and session security drives higher conversion.',
    b2Title: '02 / Security & Session Narrative (H2)',
    b2Analysis: 'US copy highlights "frictionless sign-in". European tech buyers require explicit reassurance on multi-tenant security, RBAC (Role-Based Access Control), and data residency.',
    b3Title: '03 / Primary Call to Action (CTA)',
    b3Analysis: 'Replacing "Start building for free" with "Integrate Auth SDK / Review Security Docs" matches the rigor expected by software architects.',
    s3Title: 'Section 3 / Applied Surface Audits',
    s3Heading: '01 / Multi-Factor Authentication & OIDC Protocols',
    s3Body: 'Exact technical terminology for session token management and passkey implementation.',
    returnDir: '← Return to Directory',
    usBaseline: 'US Baseline',
    tradAgency: 'Traditional Agency Output',
    refinedIntent: 'Refined Technical Intent'
  },
  de: {
    navTag: 'Lokalisierungs-Audit #09',
    title: 'Clerk: Identitätsinfrastruktur & Sicherheitsarchitektur',
    subtitle: 'Anpassung von Authentifizierungs-Narrativen an europäische Sicherheitsstandards.',
    readingTime: '8 Min. Lesezeit',
    date: 'Dezember 2026',
    client: 'Clerk',
    markets: 'EU, DACH, LATAM',
    audience: 'CISOs & SaaS-Architekten',
    s1Title: 'Abschnitt 1 / Perspektive & Intent',
    overviewHeading: 'Kontext & Zielsetzung',
    overviewBody: 'In europäischen Sicherheitsüberprüfungen bewerten CISOs Authentifizierungsdienste nach OIDC-Standardtreue, Rollenkonzepten (RBAC) und Mandantentrennung. „Benutzerverwaltung“ klingt zu banal.',
    overviewSub: 'Dieses Audit strukturiert die Ansprache auf Zero-Trust-Identitätsarchitektur um.',
    s2Title: 'Abschnitt 2 / Strukturelle Akquisitions-Analyse',
    b1Title: '01 / Die Hauptüberschrift (H1)',
    b1Analysis: 'Direkte Positionierung als Identitätsinfrastruktur für Enterprise-SaaS-Anwendungen.',
    b2Title: '02 / Sicherheits- & Sitzungs-Narrativ (H2)',
    b2Analysis: 'MFA, Session-Management und datenschutzkonforme Benutzerisolation statt bloßer Bequemlichkeit beim Login.',
    b3Title: '03 / Primärer Call-to-Action (CTA)',
    b3Analysis: '„Auth-SDK integrieren / Dokumentation lesen“ statt unverbindlichem Gratis-Slogan.',
    s3Title: 'Abschnitt 3 / Angewandte Oberflächen-Audits',
    s3Heading: '01 / Multi-Faktor-Authentifizierung & OIDC-Protokolle',
    s3Body: 'Abschließende Klärung von Token-Handhabung und Passkey-Implementierung.',
    returnDir: '← Zurück zum Verzeichnis',
    usBaseline: 'US-Ausgangslage',
    tradAgency: 'Klassisches Agenturergebnis',
    refinedIntent: 'Präzisierter technischer Intent'
  },
  es: {
    navTag: 'Auditoría de Localización #09',
    title: 'Clerk: Arquitectura de Identidad y Seguridad de Usuarios',
    subtitle: 'Adaptación de componentes de autenticación a marcos de seguridad europeos.',
    readingTime: '8 min de lectura',
    date: 'Diciembre 2026',
    client: 'Clerk',
    markets: 'EU, DACH, LATAM',
    audience: 'Directores de Seguridad de la Información (CISO) y Arquitectos',
    s1Title: 'Sección 1 / Perspectiva e Intención',
    overviewHeading: 'Contexto y Objetivo',
    overviewBody: 'Reemplazar afirmaciones informales por garantías formales de control de acceso (RBAC), protocolos OIDC e aislamiento de datos.',
    overviewSub: 'Auditoría enfocada en clientes corporativos B2B.',
    s2Title: 'Sección 2 / Desglose Estructural de Adquisición',
    b1Title: '01 / El Titular Principal (H1)',
    b1Analysis: 'Posicionamiento como infraestructura de gestión de identidad para aplicaciones SaaS.',
    b2Title: '02 / Narrativa de Seguridad (H2)',
    b2Analysis: 'Énfasis en autenticación multifactor y residencia de datos en la UE.',
    b3Title: '03 / Llamada a la Acción Principal (CTA)',
    b3Analysis: 'Acciones orientadas a la integración del SDK y revisión técnica.',
    s3Title: 'Sección 3 / Auditoría de Superficies Aplicadas',
    s3Heading: '01 / Autenticación Multifactor y Estándares OIDC',
    s3Body: 'Terminología precisa en gestión de tokens de sesión.',
    returnDir: '← Volver al Directorio',
    usBaseline: 'Línea Base (EE. UU.)',
    tradAgency: 'Resultado de Agencia Tradicional',
    refinedIntent: 'Intención Técnica Refinada'
  },
  fr: {
    navTag: 'Audit de Localisation #09',
    title: 'Clerk : Architecture d’Identité & Sécurité Utilisateur',
    subtitle: 'Adaptation du discours d’authentification aux exigences de sécurité IT européennes.',
    readingTime: '8 min de lecture',
    date: 'Décembre 2026',
    client: 'Clerk',
    markets: 'EU, DACH, LATAM',
    audience: 'CISO & Architectes SaaS',
    s1Title: 'Section 1 / Perspective & Intention',
    overviewHeading: 'Contexte & Objectif',
    overviewBody: 'Restructuration du message vers l’infrastructure d’identité, les normes OIDC et le contrôle d’accès basé sur les rôles (RBAC).',
    overviewSub: 'Positionnement axé sur la sécurité B2B.',
    s2Title: 'Section 2 / Déconstruction de la Conversion',
    b1Title: '01 / Titre Principal (H1)',
    b1Analysis: 'Sustituir la gestion utilisateur simpliste par l’infrastructure d’identité globale.',
    b2Title: '02 / Sécurité et Sessions (H2)',
    b2Analysis: 'Focus sur le MFA, la protection des tokens et la souveraineté des données.',
    b3Title: '03 / Appel à l’Action (CTA)',
    b3Analysis: 'Privilégier "Intégrer le SDK Auth".',
    s3Title: 'Section 3 / Audit des Surfaces Appliquées',
    s3Heading: '01 / MFA & Protocole OIDC',
    s3Body: 'Rigueure absolue sur la terminologie de sécurité.',
    returnDir: '← Retour au Répertoire',
    usBaseline: 'Référence US',
    tradAgency: 'Rendu Agence Traditionnelle',
    refinedIntent: 'Intention Technique Affinée'
  },
  it: {
    navTag: 'Audit di Localizzazione #09',
    title: 'Clerk: Architettura di Identità e Sicurezza Utente',
    subtitle: 'Riorganizzazione delle narrative di autenticazione per i framework di sicurezza europei.',
    readingTime: '8 min di lettura',
    date: 'Dicembre 2026',
    client: 'Clerk',
    markets: 'EU, DACH, LATAM',
    audience: 'CISO e Architetti Software',
    s1Title: 'Sezione 1 / Prospettiva e Intento',
    overviewHeading: 'Contesto e Obiettivo',
    overviewBody: 'Focalizzarsi sugli standard OIDC, RBAC e sull’isolamento dei dati dei tenant.',
    overviewSub: 'Analisi per i mercati ad alta conformità.',
    s2Title: 'Sezione 2 / Analisi Strutturale',
    b1Title: '01 / Titolo Principale (H1)',
    b1Analysis: 'Infrastruttura di gestione delle identità per software B2B.',
    b2Title: '02 / Sicurezza e Autenticazione (H2)',
    b2Analysis: 'Enfasi sulla protezione delle sessioni e sull’autenticazione a più fattori.',
    b3Title: '03 / Call to Action (CTA)',
    b3Analysis: 'Invito all’integrazione tecnica diretta del SDK.',
    s3Title: 'Sezione 3 / Audit Documentazione',
    s3Heading: '01 / Autenticazione Multifattore e OIDC',
    s3Body: 'Terminologia precisa per la sicurezza informatica.',
    returnDir: '← Torna al Direttorio',
    usBaseline: 'Linea Base US',
    tradAgency: 'Output Agenzia Tradizionale',
    refinedIntent: 'Intento Tecnico Rifinito'
  },
  pt: {
    navTag: 'Auditoria de Localização #09',
    title: 'Clerk: Arquitetura de Identidade e Segurança de Usuários',
    subtitle: 'Adequação de componentes de autenticação para normas de segurança europeias.',
    readingTime: '8 min de leitura',
    date: 'Dezembro 2026',
    client: 'Clerk',
    markets: 'EU, DACH, LATAM',
    audience: 'CISOs e Arquitetos SaaS',
    s1Title: 'Seção 1 / Perspectiva e Intenção',
    overviewHeading: 'Contexto e Objetivo',
    overviewBody: 'Adequação de narrativas de autenticação para auditorias técnicas de segurança.',
    overviewSub: 'Reestruturação de posicionamento.',
    s2Title: 'Seção 2 / Análise de Conversão',
    b1Title: '01 / Título Principal (H1)',
    b1Analysis: 'Posicionamento como infraestrutura de identidade corporativa.',
    b2Title: '02 / Segurança e Sessões (H2)',
    b2Analysis: 'Foco em MFA, RBAC e isolamento de dados de usuários.',
    b3Title: '03 / Chamada para Ação (CTA)',
    b3Analysis: 'Ações voltadas para integração do SDK.',
    s3Title: 'Seção 3 / Documentação Técnica',
    s3Heading: '01 / Autenticação Multifator e Protocolos OIDC',
    s3Body: 'Precisão nos protocolos de segurança de sessão.',
    returnDir: '← Voltar ao Diretório',
    usBaseline: 'Linha de Base (EUA)',
    tradAgency: 'Resultado de Agência Tradicional',
    refinedIntent: 'Intenção Técnica Refinada'
  }
};

export default function ClerkAuditPage() {
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
                <p className="text-bone-300 italic">"More than authentication. Complete user management."</p>
              </div>
              
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-bone-600 mb-2">{t.tradAgency}</p>
                <ul className="text-bone-300 space-y-1 font-mono text-xs">
                  <li><span className="text-bone-500 mr-2">DE:</span> Mehr als Authentifizierung. Vollständige Benutzerverwaltung.</li>
                  <li><span className="text-bone-500 mr-2">ES:</span> Más que autenticación. Gestión completa de usuarios.</li>
                </ul>
              </div>

              <div className="border-l-2 border-signal-gold pl-4 py-1">
                <p className="font-mono text-[10px] uppercase tracking-widest text-signal-gold mb-2">{t.refinedIntent}</p>
                <ul className="text-bone-100 font-medium space-y-1 font-mono text-xs">
                  <li><span className="text-bone-500 font-normal mr-2">DE:</span> Identitätsinfrastruktur und DSGVO-konforme Benutzerverwaltung für B2B-SaaS.</li>
                  <li><span className="text-bone-500 font-normal mr-2">ES:</span> Infraestructura de gestión de identidad y autenticación segura con estándar OIDC.</li>
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
                <p className="text-bone-300 italic">"Frictionless sign-in components for modern web apps."</p>
              </div>
              
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-bone-600 mb-2">{t.tradAgency}</p>
                <ul className="text-bone-300 space-y-1 font-mono text-xs">
                  <li><span className="text-bone-500 mr-2">DE:</span> Reibungslose Anmeldekomponenten für moderne Web-Apps.</li>
                  <li><span className="text-bone-500 mr-2">ES:</span> Componentes de inicio de sesión sin fricción para aplicaciones web modernas.</li>
                </ul>
              </div>

              <div className="border-l-2 border-signal-gold pl-4 py-1">
                <p className="font-mono text-[10px] uppercase tracking-widest text-signal-gold mb-2">{t.refinedIntent}</p>
                <ul className="text-bone-100 font-medium space-y-1 font-mono text-xs">
                  <li><span className="text-bone-500 font-normal mr-2">DE:</span> Multi-Faktor-Authentifizierung, Session-Schutz und Rollenkonzepte (RBAC) out-of-the-box.</li>
                  <li><span className="text-bone-500 font-normal mr-2">ES:</span> Autenticación multifactor nativa, gestión de sesiones y control de acceso basado en roles (RBAC).</li>
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
                <p className="text-bone-300 italic">"Start building for free"</p>
              </div>
              
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-bone-600 mb-2">{t.tradAgency}</p>
                <ul className="text-bone-300 space-y-1 font-mono text-xs">
                  <li><span className="text-bone-500 mr-2">DE:</span> Kostenlos entwickeln</li>
                  <li><span className="text-bone-500 mr-2">ES:</span> Empieza a construir gratis</li>
                </ul>
              </div>

              <div className="border-l-2 border-signal-gold pl-4 py-1">
                <p className="font-mono text-[10px] uppercase tracking-widest text-signal-gold mb-2">{t.refinedIntent}</p>
                <ul className="text-bone-100 font-medium space-y-1 font-mono text-xs">
                  <li><span className="text-bone-500 font-normal mr-2">DE:</span> Auth-SDK integrieren / Sicherheitskonzept prüfen</li>
                  <li><span className="text-bone-500 font-normal mr-2">ES:</span> Integrar SDK de Auth / Revisar documentación de seguridad</li>
                </ul>
              </div>
            </div>

            <p className="text-bone-300 leading-relaxed text-sm">
              {t.b3Analysis}
            </p>
          </div>
        </section>

        <section className="mb-20">
          <div className="font-mono text-[10px] uppercase tracking-widest text-signal-gold mb-8">
            {t.s3Title}
          </div>
          <div className="space-y-6 text-bone-300 leading-relaxed">
            <h3 className="font-display text-xl text-bone-100 mb-2">{t.s3Heading}</h3>
            <p className="text-sm">
              {t.s3Body}
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
    
