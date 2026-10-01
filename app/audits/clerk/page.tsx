'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const AUDIT_DATA = {
  en: {
    meta: {
      id: 'DOSSIER // 09',
      date: 'OCTOBER 2026',
      client: 'CLERK INC.',
      scope: 'EU / DACH / LATAM'
    },
    title: 'Enterprise Procurement Friction in Global Markets',
    subtitle: 'A structural localization audit on transitioning Clerk from US developer-first growth copy to European & LATAM enterprise identity infrastructure.',
    
    perspective: {
      number: '01',
      label: 'STRATEGIC PERSPECTIVE',
      heading: 'The Shift from Developer DX to Procurement Compliance',
      body: 'Clerk has mastered developer experience (DX) within the React and Next.js ecosystems. However, when enterprise client applications attempt to expand across borders into European and Latin American markets, sales cycles stall. The friction is not feature completeness—it is data sovereignty, GDPR/LGPD compliance guarantees, and multi-tenant SSO architecture.',
      takeaway: 'Positioning must pivot from "rapid integration" to "zero-trust, region-bound identity governance."'
    },

    nodes: [
      {
        id: '01',
        title: 'Data Residency & GDPR Sovereignty',
        domain: 'DATA GOVERNANCE',
        problem: 'Authenticated user PII (emails, session metadata, IP records) defaults to US-centric primary database clusters.',
        impact: 'European and LATAM procurement teams flag cross-border PII processing during compliance audits, halting deals before trial implementation.',
        fix: 'Native region-bound project instances (EU-central-1 database hosting for metadata) without custom enterprise contract friction.',
        copy: {
          us: 'More than authentication. Complete user management for modern web apps.',
          trad: 'Mehr als Authentifizierung. Vollständige Benutzerverwaltung für moderne Web-Apps.',
          refined: 'DSGVO-konforme Identitätsinfrastruktur mit regionaler Datenspeicherung (EU-central-1) und lokaler Mandantentrennung.'
        }
      },
      {
        id: '02',
        title: 'Enterprise Multi-Tenancy & SAML Routing',
        domain: 'ARCHITECTURE',
        problem: 'B2B enterprise buyers demand granular Role-Based Access Control (RBAC) and tenant-level SAML/SSO mapping.',
        impact: 'Standard dashboard flows break down when attempting to model complex corporate hierarchies or custom enterprise IdPs.',
        fix: 'Decoupled, API-first SSO routing enabling self-serve SAML configuration at the sub-tenant level.',
        copy: {
          us: 'Frictionless B2B team management and Organization switching.',
          trad: 'Gestión de equipos B2B sin fricción y cambio de organizaciones.',
          refined: 'Control de acceso basado en roles (RBAC) con enrutamiento SSO/SAML autoservicio para entornos B2B corporativos.'
        }
      },
      {
        id: '03',
        title: 'Edge Session Synchronization',
        domain: 'LATENCY & PERFORMANCE',
        problem: 'Verifying session state across globally distributed users introduces cold-start latency when querying remote primary databases.',
        impact: 'UI jitter and route protection latency spikes in regions far from US primary datacenters (e.g., Southern LATAM).',
        fix: 'Optimized JWT claim caching at edge nodes paired with localized session revocation webhooks.',
        copy: {
          us: 'Drop-in UI components and edge middleware for rapid integration.',
          trad: 'Composants UI prêts à l’emploi et middleware edge pour une intégration rapide.',
          refined: 'Synchronisation de session à très faible latence sur les réseaux Edge avec gestion distribuée des jetons JWT.'
        }
      }
    ],

    roadmap: [
      { core: 'Fastest React/Next DX', obstacle: 'EU/LATAM Compliance', solution: 'Regional PII (EU-central-1)' },
      { core: 'Pre-built Auth UI', obstacle: 'SAML/SSO Procurement', solution: 'Self-serve Enterprise SAML' },
      { core: 'Edge Middleware Support', obstacle: 'Global Edge Latency', solution: 'Local JWT Caching & Webhooks' }
    ],

    summary: 'To capture enterprise contracts in Europe and LATAM, Clerk must bridge the gap between "indie-hacker favorite" and "enterprise-compliant identity platform." Marketing and documentation must emphasize GDPR, LGPD, SOC2 Type II, and explicit regional data guarantees alongside React code snippets.'
  },
  de: {
    meta: {
      id: 'DOSSIER // 09',
      date: 'OKTOBER 2026',
      client: 'CLERK INC.',
      scope: 'EU / DACH / LATAM'
    },
    title: 'Enterprise-Beschaffungshürden in Globalen Märkten',
    subtitle: 'Ein strukturelles Lokalisierungs-Audit zur Anpassung von Clerk von US-Entwickler-Fokus auf europäische Identitätsinfrastruktur.',
    
    perspective: {
      number: '01',
      label: 'STRATEGISCHE PERSPEKTIVE',
      heading: 'Der Wandel von Entwickler-DX zu Enterprise-Compliance',
      body: 'Clerk ist der Goldstandard für Entwicklerfreundlichkeit im React/Next.js-Ökosystem. Beim Vertrieb an europäische und lateinamerikanische Unternehmen geraten Vertriebsprozesse jedoch ins Stocken. Die Reibung liegt nicht in den Funktionen—sondern in der Datensouveränität, DSGVO-Garantien und SAML-Architektur.',
      takeaway: 'Die Positionierung muss von "schneller Integration" auf "DSGVO-konforme Identitätsarchitektur" umgestellt werden.'
    },

    nodes: [
      {
        id: '01',
        title: 'Datenresidenz & DSGVO-Souveränität',
        domain: 'DATA GOVERNANCE',
        problem: 'Personenbezogene Daten (PII) werden standardmäßig in US-amerikanischen Datenbank-Clustern verarbeitet.',
        impact: 'Europäische Einkäufer stoppen Verträge in Sicherheits-Audits vor Beginn der technischen Integration.',
        fix: 'Regionale Instanzen (EU-central-1 Datenbank-Cluster für Metadaten) ohne Enterprise-Sonderverträge.',
        copy: {
          us: 'More than authentication. Complete user management for modern web apps.',
          trad: 'Mehr als Authentifizierung. Vollständige Benutzerverwaltung für moderne Web-Apps.',
          refined: 'DSGVO-konforme Identitätsinfrastruktur mit regionaler Datenspeicherung (EU-central-1) und lokaler Mandantentrennung.'
        }
      },
      {
        id: '02',
        title: 'Enterprise Multi-Tenancy & SAML Routing',
        domain: 'ARCHITEKTUR',
        problem: 'B2B-Großkunden verlangen granulares RBAC und individuelles SAML/SSO-Mapping pro Sub-Tenant.',
        impact: 'Standard-Dashboards stoßen bei komplexen Unternehmensstrukturen an ihre Grenzen.',
        fix: 'Entkoppeltes, API-basiertes SSO-Routing für Self-Serve-SAML-Konfiguration.',
        copy: {
          us: 'Frictionless B2B team management and Organization switching.',
          trad: 'Reibungsloses B2B-Teammanagement und Organisationswechsel.',
          refined: 'Granulare Rollenkonzepte (RBAC) und nahtlose SAML/SSO-Anbindung für B2B-Enterprise-Kunden.'
        }
      },
      {
        id: '03',
        title: 'Edge-Sitzungssynchronisation',
        domain: 'LATENZ & PERFORMANCE',
        problem: 'Die Überprüfung von Sitzungstokens gegen US-Datenbanken erzeugt Cold-Starts und Latenzspitzen.',
        impact: 'UI-Ruckeln bei der Routenprüfung in weit entfernten Regionen (z. B. Süd-LATAM).',
        fix: 'Optimiertes JWT-Claim-Caching am Edge gepaart mit regionalen Revokation-Webhooks.',
        copy: {
          us: 'Drop-in UI components and edge middleware for rapid integration.',
          trad: 'Fertige UI-Komponenten und Edge-Middleware für schnelle Integration.',
          refined: 'Latenzfreie Edge-Sitzungsvalidierung durch lokales JWT-Caching und verteilte Token-Widerrufe.'
        }
      }
    ],

    roadmap: [
      { core: 'Schnellste React/Next DX', obstacle: 'EU/LATAM-Compliance', solution: 'Regionale PII (EU-central-1)' },
      { core: 'Pre-built Auth UI', obstacle: 'SAML/SSO Procurement', solution: 'Self-Serve Enterprise SAML' },
      { core: 'Edge Middleware Support', obstacle: 'Globale Edge-Latenz', solution: 'Lokales JWT-Caching & Webhooks' }
    ],

    summary: 'Um Großkunden in Europa zu gewinnen, muss Clerk vom "Indie-Liebling" zur "Enterprise-Sicherheitsplattform" reifen. Marketing und Dokumentation müssen DSGVO, SOC2 Type II und regionale Garantien gleichrangig mit Code-Beispielen präsentieren.'
  }
};

export default function BespokeEditorialAudit() {
  const [lang, setLang] = useState<'en' | 'de'>('en');
  const [activeNodeId, setActiveNodeId] = useState<string>('01');
  const [inspectorView, setInspectorView] = useState<'architecture' | 'linguistics'>('architecture');

  const content = AUDIT_DATA[lang] || AUDIT_DATA.en;
  const activeNode = content.nodes.find((n) => n.id === activeNodeId) || content.nodes[0];

  return (
    <div className="min-h-screen bg-[#090A0C] text-[#E2E8F0] font-sans antialiased selection:bg-[#E2E8F0] selection:text-[#090A0C]">
      
      {/* TOP APPARATUS BAR */}
      <header className="w-full py-6 px-8 flex justify-between items-center text-xs font-mono border-b border-[#1A1D24]/60">
        <Link href="/" className="text-[#8A99AD] hover:text-[#FFFFFF] transition-colors tracking-widest uppercase">
          ← VeraVox / Publication
        </Link>
        
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-3">
            {(['en', 'de'] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`transition-colors uppercase tracking-widest ${
                  lang === l ? 'text-[#FFFFFF] font-bold underline underline-offset-4' : 'text-[#4A5568] hover:text-[#A0AEC0]'
                }`}
              >
                [{l}]
              </button>
            ))}
          </div>

          <button
            onClick={() => window.print()}
            className="text-[#4A5568] hover:text-[#FFFFFF] transition-colors tracking-widest uppercase"
          >
            PDF // PRINT
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-8 pt-16 pb-32">
        
        {/* MASTHEAD / METADATA HEADER */}
        <section className="mb-24">
          <div className="flex flex-wrap items-center justify-between font-mono text-xs text-[#525E71] mb-8 pb-4 border-b border-[#1A1D24]/60 gap-4">
            <span>{content.meta.id}</span>
            <span>CLIENT: {content.meta.client}</span>
            <span>SCOPE: {content.meta.scope}</span>
            <span>{content.meta.date}</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-light text-[#FFFFFF] tracking-tight leading-[1.1] mb-8 max-w-4xl">
            {content.title}
          </h1>
          <p className="text-lg md:text-xl text-[#8C9BAE] font-light leading-relaxed max-w-3xl">
            {content.subtitle}
          </p>
        </section>

        {/* SECTION 01: EDITORIAL OVERVIEW */}
        <section className="mb-28 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-3 font-mono text-xs tracking-widest text-[#525E71]">
            <div>{content.perspective.number} //</div>
            <div>{content.perspective.label}</div>
          </div>

          <div className="lg:col-span-9 space-y-6">
            <h2 className="text-2xl font-normal text-[#FFFFFF]">
              {content.perspective.heading}
            </h2>
            <p className="text-base text-[#9DAEC2] leading-relaxed font-light">
              {content.perspective.body}
            </p>
            <div className="pt-4 border-l-2 border-[#3182CE] pl-6 italic text-sm text-[#E2E8F0] font-light">
              "{content.perspective.takeaway}"
            </div>
          </div>
        </section>

        {/* SECTION 02: DYNAMIC INSPECTOR WORKBENCH */}
        <section className="mb-28">
          <div className="flex flex-wrap items-baseline justify-between mb-12 pb-4 border-b border-[#1A1D24]/60 gap-4">
            <div className="font-mono text-xs tracking-widest text-[#525E71]">
              02 // ARCHITECTURAL & COPY ANALYSIS
            </div>

            {/* PERSPECTIVE SWITCHER */}
            <div className="flex items-center space-x-6 font-mono text-xs">
              <button
                onClick={() => setInspectorView('architecture')}
                className={`transition-colors tracking-wider uppercase ${
                  inspectorView === 'architecture' ? 'text-[#FFFFFF] font-bold underline underline-offset-4' : 'text-[#4A5568] hover:text-[#A0AEC0]'
                }`}
              >
                01. Architecture
              </button>
              <button
                onClick={() => setInspectorView('linguistics')}
                className={`transition-colors tracking-wider uppercase ${
                  inspectorView === 'linguistics' ? 'text-[#FFFFFF] font-bold underline underline-offset-4' : 'text-[#4A5568] hover:text-[#A0AEC0]'
                }`}
              >
                02. Translation Intent
              </button>
            </div>
          </div>

          {/* ASYMMETRICAL NODE EXPLORER */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* NODE CONTROLS */}
            <div className="lg:col-span-4 space-y-8">
              {content.nodes.map((node) => {
                const isActive = node.id === activeNodeId;
                return (
                  <div
                    key={node.id}
                    onClick={() => setActiveNodeId(node.id)}
                    className="group cursor-pointer"
                  >
                    <div className="flex items-center space-x-4 mb-2">
                      <span className={`font-mono text-xs transition-colors ${isActive ? 'text-[#3182CE] font-bold' : 'text-[#4A5568] group-hover:text-[#8C9BAE]'}`}>
                        [{node.id}]
                      </span>
                      <span className="font-mono text-[10px] tracking-widest text-[#4A5568] uppercase">
                        {node.domain}
                      </span>
                    </div>
                    <h3 className={`text-lg transition-colors font-light ${isActive ? 'text-[#FFFFFF] font-normal' : 'text-[#718096] group-hover:text-[#E2E8F0]'}`}>
                      {node.title}
                    </h3>
                  </div>
                );
              })}
            </div>

            {/* NODE DISPLAY CANVAS */}
            <div className="lg:col-span-8 bg-[#0D0F14] p-8 md:p-12 border border-[#1A1D24] relative">
              <div className="font-mono text-xs text-[#525E71] mb-8 flex justify-between items-center">
                <span>NODE INSPECTOR // {activeNode.id}</span>
                <span>{activeNode.domain}</span>
              </div>

              {inspectorView === 'architecture' ? (
                <div className="space-y-10">
                  <div>
                    <span className="font-mono text-[10px] tracking-widest uppercase text-[#E53E3E] block mb-2">
                      Systemic Friction Point
                    </span>
                    <p className="text-base text-[#E2E8F0] font-light leading-relaxed">
                      {activeNode.problem}
                    </p>
                  </div>

                  <div>
                    <span className="font-mono text-[10px] tracking-widest uppercase text-[#DD6B20] block mb-2">
                      Procurement Impact
                    </span>
                    <p className="text-base text-[#CBD5E0] font-light leading-relaxed">
                      {activeNode.impact}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-[#1A1D24]">
                    <span className="font-mono text-[10px] tracking-widest uppercase text-[#38A169] block mb-2">
                      Architectural Resolution
                    </span>
                    <p className="text-base text-[#FFFFFF] font-normal leading-relaxed">
                      {activeNode.fix}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-8 font-mono">
                  <div>
                    <span className="text-[10px] text-[#525E71] uppercase block mb-2">US Baseline Copy</span>
                    <p className="text-sm text-[#A0AEC0] italic font-sans font-light">"{activeNode.copy.us}"</p>
                  </div>

                  <div>
                    <span className="text-[10px] text-[#DD6B20] uppercase block mb-2">Literal Agency Translation</span>
                    <p className="text-sm text-[#DD6B20] font-sans font-light">"{activeNode.copy.trad}"</p>
                  </div>

                  <div className="pt-6 border-t border-[#1A1D24]">
                    <span className="text-[10px] text-[#38A169] uppercase block mb-2">Refined Technical Intent</span>
                    <p className="text-base text-[#38A169] font-sans font-normal">"{activeNode.copy.refined}"</p>
                  </div>
                </div>
              )}
            </div>

          </div>
        </section>

        {/* SECTION 03: STRATEGIC ROADMAP TABLE */}
        <section className="mb-28">
          <div className="font-mono text-xs tracking-widest text-[#525E71] mb-8 pb-4 border-b border-[#1A1D24]/60">
            03 // STRATEGIC ALIGNMENT MATRIX
          </div>

          <div className="space-y-6 font-mono text-xs">
            {content.roadmap.map((item, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-3 gap-6 py-4 border-b border-[#1A1D24]/40 items-center">
                <div>
                  <span className="text-[10px] text-[#525E71] block uppercase mb-1">US Feature</span>
                  <span className="text-[#E2E8F0]">{item.core}</span>
                </div>
                <div>
                  <span className="text-[10px] text-[#E53E3E] block uppercase mb-1">Regional Obstacle</span>
                  <span className="text-[#E53E3E]">{item.obstacle}</span>
                </div>
                <div>
                  <span className="text-[10px] text-[#38A169] block uppercase mb-1">Target Position</span>
                  <span className="text-[#38A169] font-bold">{item.solution}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 04: CLOSING NARRATIVE */}
        <section className="max-w-3xl">
          <div className="font-mono text-xs tracking-widest text-[#525E71] mb-6">
            04 // STRATEGIC CONCLUSION
          </div>
          <p className="text-base md:text-lg text-[#CBD5E0] font-light leading-relaxed mb-12">
            {content.summary}
          </p>

          <Link href="/" className="font-mono text-xs text-[#8A99AD] hover:text-[#FFFFFF] transition-colors tracking-widest uppercase">
            ← Return to Directory
          </Link>
        </section>

      </main>
    </div>
  );
}
