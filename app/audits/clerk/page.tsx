'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const AUDIT_DATA = {
  en: {
    navTag: 'LOCALIZATION AUDIT // 09',
    title: 'Clerk: Developer-First Identity & Enterprise Procurement Friction',
    subtitle: 'Adapting authentication narratives from US friction-free growth copy to European & LATAM compliance, data residency, and enterprise multi-tenancy frameworks.',
    readingTime: '10 min read',
    date: 'October 2026',
    client: 'Clerk Inc.',
    markets: ['EU', 'DACH', 'LATAM'],
    audience: 'CISOs, Enterprise Buyers & SaaS Architects',

    overviewHeading: 'Executive Context & Strategic Operational Friction',
    overviewBody: 'Clerk has established itself as the gold standard for developer experience (DX) and user management in the React/Next.js ecosystem. However, as client applications cross-border scale into enterprise procurement in Europe (EU) and Latin America (LATAM), Clerk encounters significant friction.',
    overviewSub: 'This audit repositions Clerk’s drop-in auth components around zero-trust identity management, regional data sovereignty (EU-central-1), decoupled SAML/SSO routing, and low-latency edge caching.',

    metrics: [
      { label: 'Primary Obstacle', value: 'Data Residency', status: 'critical' },
      { label: 'Target Region', value: 'EU / DACH / LATAM', status: 'active' },
      { label: 'Compliance Focus', value: 'GDPR / LGPD / SOC2', status: 'optimal' },
      { label: 'Target Audience', value: 'CISO / Enterprise', status: 'active' }
    ],

    frictionPoints: [
      {
        id: '01',
        title: 'Data Residency & GDPR Sovereignty',
        category: 'COMPLIANCE & SOVEREIGNTY',
        problem: 'Enterprise buyers in the EU and LATAM (under regulations like Brazil’s LGPD) require strict data residency. Authenticated user PII defaults to being stored or processed through US-centric primary database clusters.',
        impact: 'European procurement teams flag non-EU PII storage during compliance audits, halting enterprise SaaS deals before sales integration can even begin.',
        solution: 'Native region-bound project instances (EU-central-1 database hosting for metadata) without requiring expensive enterprise custom setups.',
        usBaseline: 'More than authentication. Complete user management for modern web apps.',
        tradAgency: 'Mehr als Authentifizierung. Vollständige Benutzerverwaltung für moderne Web-Apps.',
        refinedIntent: 'DSGVO-konforme Identitätsinfrastruktur mit regionaler Datenspeicherung (EU-central-1) und lokaler Mandantentrennung.'
      },
      {
        id: '02',
        title: 'Enterprise Multi-Tenancy & B2B Sub-Organizations',
        category: 'ENTERPRISE ARCHITECTURE',
        problem: 'Clerk’s Organizations feature handles basic team management well, but enterprise B2B customers demand granular Role-Based Access Control (RBAC), custom SAML/SSO mapping per sub-tenant, and isolated audit logging.',
        impact: 'Scaling B2B SaaS products run into architectural limits when mapping complex corporate hierarchies or custom enterprise identity providers (IdPs) directly through standard Clerk dashboard flows.',
        solution: 'Decoupled, API-first enterprise SSO routing that allows tenant-level SAML configuration without manual administrative intervention.',
        usBaseline: 'Frictionless B2B team management and Organization switching.',
        tradAgency: 'Gestión de equipos B2B sin fricción y cambio de organizaciones.',
        refinedIntent: 'Control de acceso basado en roles (RBAC) con enrutamiento SSO/SAML autoservicio para entornos B2B corporativos.'
      },
      {
        id: '03',
        title: 'Edge Session Synchronization & Latency',
        category: 'INFRASTRUCTURE & EDGE',
        problem: 'While Clerk middleware operates at the edge, verifying session tokens and syncing state across globally distributed users can introduce cold-start latency or token stale-state issues when checking database-backed permissions in real time.',
        impact: 'UI jitter or minor latency spikes during initial page loads and route protection checks in regions distant from primary US regions (such as Southern LATAM).',
        solution: 'Optimized JWT claim caching at the edge paired with localized session revocation webhooks.',
        usBaseline: 'Drop-in UI components and edge middleware for rapid integration.',
        tradAgency: 'Composants UI prêts à l’emploi et middleware edge pour une intégration rapide.',
        refinedIntent: 'Synchronisation de session à très faible latence sur les réseaux Edge avec gestion distribuée des jetons JWT.'
      }
    ],

    matrix: [
      { core: 'Fastest React/Next DX', bottleneck: 'EU/LATAM Compliance', strategicPivot: 'Regional PII (EU-central-1)' },
      { core: 'Pre-built Auth UI', bottleneck: 'SAML/SSO Procurement', strategicPivot: 'Self-serve Enterprise SAML' },
      { core: 'Edge Middleware Support', bottleneck: 'Global Edge Latency', strategicPivot: 'Local JWT Caching & Webhooks' }
    ],

    summaryHeading: 'Strategic Procurement Narrative',
    summaryText: 'To capture enterprise contracts in Europe and LATAM, Clerk must bridge the gap between "indie-hacker favorite" and "enterprise-compliant identity platform." Marketing and documentation must emphasize GDPR, LGPD, SOC2 Type II, and explicit regional data guarantees alongside React code snippets.'
  },
  de: {
    navTag: 'LOKALISIERUNGS-AUDIT // 09',
    title: 'Clerk: Identitätsinfrastruktur & Enterprise-Beschaffungshürden',
    subtitle: 'Anpassung von Authentifizierungs-Narrativen an europäische DSGVO-Standards, regionale Datenhaltung und Mandantentrennung.',
    readingTime: '10 Min. Lesezeit',
    date: 'Oktober 2026',
    client: 'Clerk Inc.',
    markets: ['EU', 'DACH', 'LATAM'],
    audience: 'CISOs, Enterprise-Einkäufer & SaaS-Architekten',

    overviewHeading: 'Kontext & Strategische Reibungspunkte',
    overviewBody: 'Clerk ist der Goldstandard für Entwicklerfreundlichkeit (DX) im React/Next.js-Ökosystem. Beim Skalieren in europäische und lateinamerikanische Märkte stößt Clerk jedoch auf strukturelle Grenzen.',
    overviewSub: 'Dieses Audit strukturiert die Positionierung auf Zero-Trust-Architektur, EU-Datenspeicherung (EU-central-1), entkoppeltes SAML/SSO-Routing und latenzarme Edge-Validierung um.',

    metrics: [
      { label: 'Hauptproblem', value: 'Datenresidenz', status: 'critical' },
      { label: 'Zielregion', value: 'EU / DACH / LATAM', status: 'active' },
      { label: 'Compliance-Fokus', value: 'DSGVO / LGPD', status: 'optimal' },
      { label: 'Zielgruppe', value: 'CISO / Einkäufer', status: 'active' }
    ],

    frictionPoints: [
      {
        id: '01',
        title: 'Datenresidenz & DSGVO-Souveränität',
        category: 'COMPLIANCE & SOUVERÄNITÄT',
        problem: 'Europäische Einkäufer verlangen strikte Datenhaltung. Personenenbezogene Daten (PII) werden bei US-Zentralisierung bemängelt.',
        impact: 'Sicherheits-Audits stoppen Verträge vor der technischen Integration.',
        solution: 'Regionale Instanzen (EU-central-1 Datenbank-Cluster für Metadaten) ohne Enterprise-Sonderverträge.',
        usBaseline: 'More than authentication. Complete user management.',
        tradAgency: 'Mehr als Authentifizierung. Vollständige Benutzerverwaltung.',
        refinedIntent: 'DSGVO-konforme Identitätsinfrastruktur mit lokaler Datenhaltung (EU-central-1) und Mandantentrennung.'
      },
      {
        id: '02',
        title: 'Enterprise Multi-Tenancy & SAML/SSO',
        category: 'ENTERPRISE ARCHITEKTUR',
        problem: 'Komplexe B2B-Hierarchien erfordern granulares RBAC, individuelles SAML-Mapping pro Sub-Tenant und isolierte Audit-Logs.',
        impact: 'Skalierende SaaS-Anbieter stoßen im Standard-Dashboard an architektonische Grenzen.',
        solution: 'Entkoppeltes, API-basiertes Enterprise SSO-Routing für Self-Serve-SAML-Konfiguration.',
        usBaseline: 'Frictionless B2B team management.',
        tradAgency: 'Reibungsloses B2B-Teammanagement.',
        refinedIntent: 'Granulare Rollenkonzepte (RBAC) und nahtlose Okta/Azure AD-Anbindung für B2B-Enterprise-Kunden.'
      },
      {
        id: '03',
        title: 'Edge-Sitzungssynchronisation & Latenz',
        category: 'INFRASTRUKTUR & EDGE',
        problem: 'Echtzeit-Berechtigungsprüfungen gegen US-Datenbanken erzeugen Cold-Starts und Latenzspitzen.',
        impact: 'UI-Ruckeln bei der Routenprüfung in weit entfernten Regionen (z. B. Süd-LATAM).',
        solution: 'Optimiertes JWT-Claim-Caching am Edge gepaart mit regionalen Revokation-Webhooks.',
        usBaseline: 'Drop-in UI components and edge middleware.',
        tradAgency: 'Fertige UI-Komponenten und Edge-Middleware.',
        refinedIntent: 'Latenzfreie Edge-Sitzungsvalidierung durch lokales JWT-Caching und verteilte Token-Widerrufe.'
      }
    ],

    matrix: [
      { core: 'Schnellste React/Next DX', bottleneck: 'EU/LATAM-Compliance', strategicPivot: 'Regionale PII (EU-central-1)' },
      { core: 'Pre-built Auth UI', bottleneck: 'SAML/SSO Procurement', strategicPivot: 'Self-Serve Enterprise SAML' },
      { core: 'Edge Middleware Support', bottleneck: 'Globale Edge-Latenz', strategicPivot: 'Lokales JWT-Caching' }
    ],

    summaryHeading: 'Strategisches Fazit',
    summaryText: 'Um Großkunden in Europa zu gewinnen, muss Clerk vom "Indie-Liebling" zur "Enterprise-Sicherheitsplattform" reifen. Marketing und Dokumentation müssen DSGVO, SOC2 Type II und regionale Garantien gleichrangig mit Code-Beispielen präsentieren.'
  }
};

export default function AdvancedClerkAudit() {
  const [lang, setLang] = useState<'en' | 'de'>('en');
  const [activeFriction, setActiveFriction] = useState<string>('01');
  const [compareMode, setCompareMode] = useState<'refined' | 'side-by-side'>('side-by-side');

  const content = AUDIT_DATA[lang] || AUDIT_DATA.en;
  const activeBlock = content.frictionPoints.find((p) => p.id === activeFriction) || content.frictionPoints[0];

  return (
    <div className="min-h-screen bg-[#07090E] text-[#D8DFE9] font-sans selection:bg-[#20344E] selection:text-[#FFFFFF] pb-32">
      
      {/* SYSTEM HEADER BAR */}
      <header className="sticky top-0 z-50 bg-[#07090E]/90 backdrop-blur-md border-b border-[#161F2E] px-6 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between font-mono text-xs">
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-[#8395A7] hover:text-[#FFFFFF] transition-colors flex items-center space-x-2">
              <span className="inline-block w-2 h-2 bg-[#2E86DE]"></span>
              <span className="font-bold tracking-wider">VERAVOX // METRICS</span>
            </Link>
            <span className="text-[#324558]">|</span>
            <span className="text-[#576574]">{content.navTag}</span>
          </div>

          <div className="flex items-center space-x-6">
            {/* INTERACTIVE LANGUAGE SELECTOR */}
            <div className="flex items-center bg-[#0F1722] p-1 rounded-sm border border-[#1E2C3D]">
              {(['en', 'de'] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-3 py-1 font-mono text-[11px] uppercase tracking-wider rounded-sm transition-all ${
                    lang === l
                      ? 'bg-[#1E2E42] text-[#FFFFFF] font-semibold shadow-inner'
                      : 'text-[#627589] hover:text-[#A0B1C5]'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>

            <button
              onClick={() => window.print()}
              className="text-[#627589] hover:text-[#FFFFFF] font-mono text-xs uppercase tracking-widest transition-colors"
            >
              PRINT_EXEC_PDF
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 pt-12">
        
        {/* HERO TITLE SECTION WITH ASYMMETRICAL DATA GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center space-x-2 bg-[#121D2B] text-[#38ADA9] font-mono text-[11px] px-3 py-1 rounded-sm border border-[#1A2E44] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38ADA9] animate-pulse"></span>
              <span>CONFIDENTIAL AUDIT DOSSIER</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#FFFFFF] leading-tight mb-6">
              {content.title}
            </h1>
            <p className="text-base md:text-lg text-[#8A9BAE] leading-relaxed max-w-3xl">
              {content.subtitle}
            </p>
          </div>

          {/* DYNAMIC TELEMETRY STATUS PANEL */}
          <div className="lg:col-span-4 bg-[#0B1017] border border-[#162232] p-6 rounded-sm space-y-4">
            <div className="font-mono text-[10px] uppercase tracking-widest text-[#4B6584] border-b border-[#162232] pb-2">
              AUDIT METRICS & SCOPE
            </div>
            <div className="grid grid-cols-2 gap-4">
              {content.metrics.map((m, i) => (
                <div key={i} className="bg-[#0F1722] p-3 rounded-sm border border-[#182638]">
                  <div className="font-mono text-[9px] uppercase text-[#576574] mb-1">{m.label}</div>
                  <div className="font-mono text-xs font-semibold text-[#E1E8F0]">{m.value}</div>
                </div>
              ))}
            </div>
            <div className="font-mono text-[10px] text-[#4B6584] pt-2 flex justify-between items-center">
              <span>MARKETS: {content.markets.join(', ')}</span>
              <span className="text-[#38ADA9]">VERIFIED 2026</span>
            </div>
          </div>
        </div>

        {/* EXECUTIVE SUMMARY DISCLOSURE CARD */}
        <section className="mb-20 bg-gradient-to-r from-[#0E1724] to-[#0A101A] border-l-2 border-[#2E86DE] p-8 rounded-r-sm">
          <h2 className="font-mono text-xs uppercase tracking-widest text-[#2E86DE] mb-3">
            01 // EXECUTIVE STRATEGIC OVERVIEW
          </h2>
          <h3 className="text-xl font-bold text-[#FFFFFF] mb-4">{content.overviewHeading}</h3>
          <p className="text-sm text-[#A0B0C0] leading-relaxed max-w-4xl mb-4">
            {content.overviewBody}
          </p>
          <p className="text-xs font-mono text-[#576574] bg-[#070B10] p-3 rounded-sm inline-block border border-[#141E2B]">
            {content.overviewSub}
          </p>
        </section>

        {/* INTERACTIVE FRICTION POINT STATE MACHINE */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 pb-4 border-b border-[#162232]">
            <div>
              <h2 className="font-mono text-xs uppercase tracking-widest text-[#2E86DE] mb-1">
                02 // ARCHITECTURAL FRICTION ANALYSIS
              </h2>
              <p className="text-sm text-[#8A9BAE]">Select a domain node to inspect localized translation intent and systemic impact.</p>
            </div>

            {/* CONTROLS TO TOGGLE COMPARISON VIEW */}
            <div className="mt-4 md:mt-0 flex items-center bg-[#0F1722] p-1 rounded-sm border border-[#1E2C3D] font-mono text-xs">
              <button
                onClick={() => setCompareMode('side-by-side')}
                className={`px-3 py-1 rounded-sm transition-all ${
                  compareMode === 'side-by-side' ? 'bg-[#1E2E42] text-[#FFFFFF]' : 'text-[#576574]'
                }`}
              >
                SIDE-BY-SIDE
              </button>
              <button
                onClick={() => setCompareMode('refined')}
                className={`px-3 py-1 rounded-sm transition-all ${
                  compareMode === 'refined' ? 'bg-[#1E2E42] text-[#FFFFFF]' : 'text-[#576574]'
                }`}
              >
                REFINED ONLY
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* NODE SELECTOR SIDEBAR */}
            <div className="lg:col-span-4 space-y-3">
              {content.frictionPoints.map((pt) => {
                const isActive = pt.id === activeFriction;
                return (
                  <div
                    key={pt.id}
                    onClick={() => setActiveFriction(pt.id)}
                    className={`p-5 rounded-sm cursor-pointer transition-all border ${
                      isActive
                        ? 'bg-[#111A28] border-[#2E86DE] shadow-lg'
                        : 'bg-[#0A0F17] border-[#141F2E] hover:border-[#1E2E42]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className={`font-mono text-xs font-bold ${isActive ? 'text-[#2E86DE]' : 'text-[#576574]'}`}>
                        NODE // {pt.id}
                      </span>
                      <span className="font-mono text-[9px] uppercase tracking-wider text-[#4B6584] bg-[#070B10] px-2 py-0.5 rounded-sm">
                        {pt.category}
                      </span>
                    </div>
                    <h3 className={`text-sm font-bold ${isActive ? 'text-[#FFFFFF]' : 'text-[#A0B0C0]'}`}>
                      {pt.title}
                    </h3>
                  </div>
                );
              })}
            </div>

            {/* ACTIVE NODE DETAIL INSPECTOR */}
            <div className="lg:col-span-8 bg-[#0B1017] border border-[#182638] p-8 rounded-sm">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#162232]">
                <span className="font-mono text-xs text-[#38ADA9] font-semibold">
                  ACTIVE ANALYSIS: NODE {activeBlock.id}
                </span>
                <span className="font-mono text-xs text-[#576574]">
                  CATEGORY: {activeBlock.category}
                </span>
              </div>

              {/* THREE-COLUMN DIAGNOSTIC METRIC TILES */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-[#070B10] p-4 rounded-sm border-t-2 border-[#E74C3C]">
                  <span className="font-mono text-[10px] uppercase text-[#E74C3C] block mb-2 font-bold">CORE PROBLEM</span>
                  <p className="text-xs text-[#C2D1E0] leading-relaxed">{activeBlock.problem}</p>
                </div>

                <div className="bg-[#070B10] p-4 rounded-sm border-t-2 border-[#E67E22]">
                  <span className="font-mono text-[10px] uppercase text-[#E67E22] block mb-2 font-bold">PROCUREMENT IMPACT</span>
                  <p className="text-xs text-[#C2D1E0] leading-relaxed">{activeBlock.impact}</p>
                </div>

                <div className="bg-[#070B10] p-4 rounded-sm border-t-2 border-[#2ECC71]">
                  <span className="font-mono text-[10px] uppercase text-[#2ECC71] block mb-2 font-bold">ARCHITECTURAL FIX</span>
                  <p className="text-xs text-[#C2D1E0] leading-relaxed">{activeBlock.solution}</p>
                </div>
              </div>

              {/* DYNAMIC COPY COMPARISON WORKBENCH */}
              <div className="bg-[#070B10] p-6 rounded-sm border border-[#141F2E]">
                <div className="font-mono text-[10px] uppercase tracking-widest text-[#4B6584] mb-4">
                  COPY ADAPTATION & INTENT MAPPING
                </div>

                {compareMode === 'side-by-side' ? (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
                    <div>
                      <span className="text-[9px] text-[#576574] uppercase block mb-1">US Baseline Copy</span>
                      <div className="p-3 bg-[#0C131D] text-[#8A9BAE] rounded-sm italic border border-[#162232]">
                        "{activeBlock.usBaseline}"
                      </div>
                    </div>
                    <div>
                      <span className="text-[9px] text-[#E67E22] uppercase block mb-1">Literal Translation</span>
                      <div className="p-3 bg-[#0C131D] text-[#E67E22] rounded-sm border border-[#2A1B10]">
                        "{activeBlock.tradAgency}"
                      </div>
                    </div>
                    <div>
                      <span className="text-[9px] text-[#2ECC71] uppercase block mb-1">Refined Technical Intent</span>
                      <div className="p-3 bg-[#0C131D] text-[#2ECC71] font-semibold rounded-sm border border-[#102B1D]">
                        "{activeBlock.refinedIntent}"
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="font-mono text-xs">
                    <span className="text-[9px] text-[#2ECC71] uppercase block mb-1">Refined Technical Intent</span>
                    <div className="p-4 bg-[#0C131D] text-[#2ECC71] font-semibold text-sm rounded-sm border border-[#102B1D]">
                      "{activeBlock.refinedIntent}"
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* STRATEGIC ROADMAP GRID & FINAL STATEMENT */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <div className="lg:col-span-7 bg-[#0B1017] border border-[#182638] p-8 rounded-sm">
            <h2 className="font-mono text-xs uppercase tracking-widest text-[#2E86DE] mb-6">
              03 // STRATEGIC PIVOT MATRIX
            </h2>
            <div className="space-y-4 font-mono text-xs">
              {content.matrix.map((row, i) => (
                <div key={i} className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-[#070B10] border border-[#141F2E] rounded-sm gap-4">
                  <div>
                    <span className="text-[9px] text-[#576574] uppercase block">US Core Feature</span>
                    <span className="text-[#C2D1E0] font-semibold">{row.core}</span>
                  </div>
                  <div className="text-[#576574] hidden md:block">→</div>
                  <div>
                    <span className="text-[9px] text-[#E74C3C] uppercase block">EU/LATAM Bottleneck</span>
                    <span className="text-[#E74C3C]">{row.bottleneck}</span>
                  </div>
                  <div className="text-[#576574] hidden md:block">→</div>
                  <div>
                    <span className="text-[9px] text-[#2ECC71] uppercase block">Strategic Positioning</span>
                    <span className="text-[#2ECC71] font-semibold">{row.strategicPivot}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#0B1017] border border-[#182638] p-8 rounded-sm flex flex-col justify-between">
            <div>
              <h2 className="font-mono text-xs uppercase tracking-widest text-[#2E86DE] mb-4">
                04 // CONCLUSION
              </h2>
              <h3 className="text-lg font-bold text-[#FFFFFF] mb-4">{content.summaryHeading}</h3>
              <p className="text-xs text-[#8A9BAE] leading-relaxed mb-6">
                {content.summaryText}
              </p>
            </div>

            <div className="pt-6 border-t border-[#162232] flex items-center justify-between font-mono text-xs">
              <Link href="/" className="text-[#2E86DE] hover:text-[#FFFFFF] transition-colors">
                ← RETURN_TO_DIRECTORY
              </Link>
              <span className="text-[#4B6584]">VERAVOX DOSSIER #09</span>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
