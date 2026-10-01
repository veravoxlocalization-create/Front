// app/page.jsx
'use client';

import { useState } from 'react';

const UI_TEXT = {
  es: {
    heroTag: 'CAPA DE REINGENIERÍA ESTRUCTURAL PARA SAAS B2B',
    heroTitle: 'El software de $3.000/mes no soluciona un problema de lenguaje. Soluciona un problema de cadenas de texto.',
    heroSubtitle: 'Las plataformas de localización de nivel empresarial (AI TMS) traducen palabras a escala. No auditan la coherencia del mensaje ni adaptan la intención técnica al comportamiento de compra de cada mercado.',
    ctaPrimary: 'Solicitar Auditoría Estructural',
    ctaSecondary: 'Ver Casos de Teardown',
    teardownTitle: 'Teardown Analítico de Mensaje',
    teardownSubtitle: 'Casos reales de conversión: Salida de plataformas AI TMS ($3K+/mes) frente a la reingeniería de VeraVox.',
    caseTitle: 'Caso 01: Mensaje de Infraestructura SaaS (Linear Baseline)',
    usBaselineLabel: 'LÍNEA BASE (US EN)',
    usBaselineText: '"The open-source product operating system. How developers build better products."',
    tmsOutputLabel: 'SALIDA ESTÁNDAR AI TMS / PLATAFORMA NATIVA ($3K+/MES) — RECHAZADA',
    tmsTextDE: 'DE: "Das Open-Source-Produkt-Betriebssystem. Wie Entwickler bessere Produkte bauen."',
    tmsTextES: 'ES: "El SO de producto de código abierto. Cómo los desarrolladores crean mejores productos."',
    tmsDiagnosisLabel: 'Diagnóstico de Fallo',
    tmsDiagnosisText: 'Traduce "operating system" de forma literal (Betriebssystem / SO), desviando la percepción hacia un sistema operativo de escritorio. Mantiene claims de marketing vacíos ("build better products") que restan rigor técnico.',
    veravoxOutputLabel: 'ADAPTACIÓN ESTRUCTURAL VERAVOX — IMPLEMENTADA',
    veravoxTextDE: 'DE: "Die Open-Source-Plattform für Produktentwicklung — abgestimmt auf die Anforderungen von Engineering-Teams."',
    veravoxTextES: 'ES: "Plataforma de desarrollo de producto en código abierto. Diseñada para arquitecturas de software rigurosas."',
    veravoxImpactLabel: 'Impacto de Conversión',
    veravoxImpactText: 'Elimina la adjetivación vacía, reorienta el término hacia infraestructura (Plattform / Arquitectura) y alinea la propuesta con los criterios de evaluación de un equipo de ingeniería local.',
    tableTitle: 'Cuadro Comparativo de Arquitectura de Mensaje',
    colCriterion: 'Criterio',
    colTms: 'Plataformas AI TMS / Localización Nativa ($3K+/mes)',
    colVeravox: 'VeraVox (Capa de Reingeniería Estructural)',
    rows: [
      {
        criterion: 'Enfoque Operativo',
        tms: 'Procesamiento por cadenas aisladas (string-by-string), dependiente de memorias de traducción y LLMs genéricos.',
        veravox: 'Reingeniería de la arquitectura del mensaje y verificación de la intención técnica según el mercado.'
      },
      {
        criterion: 'Vocabulario Técnico',
        tms: 'Conversión literal de términos (p. ej., "Operating System" → "Betriebssystem" / "SO").',
        veravox: 'Mapeo de terminología conforme al vocabulario de evaluación de software del comprador local (Plattform, Infraestructura).'
      },
      {
        criterion: 'Tratamiento del Hype US',
        tms: 'Preserva la adjetivación vacía y afirmaciones de marketing no verificables ("build better products").',
        veravox: 'Sustituye el hype por anclas de valor pragmático y métricas de verificación técnica (nachvollziehbar, rigor).'
      },
      {
        criterion: 'Modelo de Ejecución',
        tms: 'Suscripción recurrente ($3.000–$5.000/mes) más costes de mantenimiento de pipelines y conectores.',
        veravox: 'Auditoría puntual de alto impacto (Flat Fee $450–$800) o retención enfocada directamente en conversión.'
      }
    ],
    auditsTitle: 'Auditorías de Infraestructura y Diagnóstico',
    auditsSubtitle: 'Análisis de fricción de conversión aplicados a stacks SaaS de alto rendimiento.',
    auditsList: [
      { id: 'clerk', name: 'Clerk', category: 'Authentication & Identity', status: 'AUDIT COMPLETED' },
      { id: 'resend', name: 'Resend', category: 'Email Infrastructure', status: 'AUDIT COMPLETED' },
      { id: 'vercel', name: 'Vercel', category: 'Deployment Platform', status: 'AUDIT COMPLETED' },
      { id: 'supabase', name: 'Supabase', category: 'Database & Backend', status: 'AUDIT COMPLETED' },
      { id: 'stripe', name: 'Stripe', category: 'Payment Infrastructure', status: 'AUDIT COMPLETED' },
      { id: 'posthog', name: 'PostHog', category: 'Product Analytics', status: 'AUDIT COMPLETED' }
    ]
  },
  de: {
    heroTag: 'STRUCTURAL RE-ENGINEERING LAYER FÜR B2B SAAS',
    heroTitle: 'Eine 3.000-Dollar-Software löst kein Sprachproblem. Sie löst ein Zeichenketten-Problem.',
    heroSubtitle: 'Lokalisierungsplattformen auf Unternehmensebene (AI TMS) übersetzen Wörter in großem Maßstab. Sie auditieren weder die Nachrichtenkohärenz noch passen sie die technische Absicht an das lokale Kaufverhalten an.',
    ctaPrimary: 'Strukturaudit Anfordern',
    ctaSecondary: 'Teardown-Fälle Ansehen',
    teardownTitle: 'Analytischer Message-Teardown',
    teardownSubtitle: 'Echte Konvertierungsfälle: Output von AI-TMS-Plattformen ($3K+/Monat) im Vergleich zur VeraVox-Restrukturierung.',
    caseTitle: 'Fall 01: SaaS-Infrastruktur-Messaging (Linear Baseline)',
    usBaselineLabel: 'US-BENCHMARK (EN)',
    usBaselineText: '"The open-source product operating system. How developers build better products."',
    tmsOutputLabel: 'STANDARD-OUTPUT AI TMS / NATIVE PLATFORM ($3K+/MONAT) — ABGELEHNT',
    tmsTextDE: 'DE: "Das Open-Source-Produkt-Betriebssystem. Wie Entwickler bessere Produkte bauen."',
    tmsTextES: 'ES: "El SO de producto de código abierto. Cómo los desarrolladores crean mejores productos."',
    tmsDiagnosisLabel: 'Fehlerdiagnose',
    tmsDiagnosisText: 'Übersetzt "Operating System" wörtlich ("Betriebssystem") und lenkt die Wahrnehmung auf ein Desktop-Betriebssystem. Behält leere Marketing-Claims bei ("bessere Produkte bauen"), die technische Präzision vermissen lassen.',
    veravoxOutputLabel: 'VERAVOX STRUKTURELLE ANPASSUNG — IMPLEMENTIERT',
    veravoxTextDE: 'DE: "Die Open-Source-Plattform für Produktentwicklung — abgestimmt auf die Anforderungen von Engineering-Teams."',
    veravoxTextES: 'ES: "Plataforma de desarrollo de producto en código abierto. Diseñada para arquitecturas de software rigurosas."',
    veravoxImpactLabel: 'Auswirkung auf die Konvertierung',
    veravoxImpactText: 'Eliminiert leere Adjektive, richtet den Begriff auf Infrastruktur aus (Plattform / Architektur) und richtet das Angebot an den Evaluierungskriterien lokaler Engineering-Teams aus.',
    tableTitle: 'Vergleichsmatrix der Nachrichtenarchitektur',
    colCriterion: 'Kriterium',
    colTms: 'AI-TMS-Plattformen / Native Lokalisierung ($3K+/Monat)',
    colVeravox: 'VeraVox (Strukturelle Re-Engineering-Schicht)',
    rows: [
      {
        criterion: 'Operativer Ansatz',
        tms: 'Isolierte Zeichenkettenverarbeitung (string-by-string), abhängig von Translation Memories und generischen LLMs.',
        veravox: 'Re-Engineering der Nachrichtenarchitektur und Verifizierung der technischen Absicht je Zielmarkt.'
      },
      {
        criterion: 'Technisches Vokabular',
        tms: 'Wörtliche Konvertierung von Begriffen (z. B. "Operating System" → "Betriebssystem").',
        veravox: 'Zuordnung der Terminologie gemäß dem Evaluierungsvokabular lokaler Software-Käufer (Plattform, Infrastruktur).'
      },
      {
        criterion: 'Behandlung von US-Hype',
        tms: 'Bewahrt leere Adjektive und nicht verifizierbare Marketing-Aussagen ("build better products").',
        veravox: 'Ersetzt Hype durch pragmatische Wertanker und technische Verifizierungsmetriken (nachvollziehbar, Präzision).'
      },
      {
        criterion: 'Ausführungsmodell',
        tms: 'Wiederkehrendes Abonnement ($3.000–$5.000/Monat) zzgl. Wartungskosten für Pipelines und Konnektoren.',
        veravox: 'Punktuelles High-Impact-Audit (Pauschalpreis $450–$800) oder konvertierungsorientierter Retainer.'
      }
    ],
    auditsTitle: 'Infrastruktur-Audits und Diagnostik',
    auditsSubtitle: 'Konvertierungs-Reibungsanalysen für hochleistungsfähige SaaS-Stacks.',
    auditsList: [
      { id: 'clerk', name: 'Clerk', category: 'Authentication & Identity', status: 'AUDIT COMPLETED' },
      { id: 'resend', name: 'Resend', category: 'Email Infrastructure', status: 'AUDIT COMPLETED' },
      { id: 'vercel', name: 'Vercel', category: 'Deployment Platform', status: 'AUDIT COMPLETED' },
      { id: 'supabase', name: 'Supabase', category: 'Database & Backend', status: 'AUDIT COMPLETED' },
      { id: 'stripe', name: 'Stripe', category: 'Payment Infrastructure', status: 'AUDIT COMPLETED' },
      { id: 'posthog', name: 'PostHog', category: 'Product Analytics', status: 'AUDIT COMPLETED' }
    ]
  },
  en: {
    heroTag: 'STRUCTURAL RE-ENGINEERING LAYER FOR B2B SAAS',
    heroTitle: 'A $3,000/month software doesn’t solve a language problem. It solves a string problem.',
    heroSubtitle: 'Enterprise localization platforms (AI TMS) translate words at scale. They do not audit message coherence or adapt technical intent to local buyer behaviors.',
    ctaPrimary: 'Request Structural Audit',
    ctaSecondary: 'View Teardown Cases',
    teardownTitle: 'Analytical Message Teardown',
    teardownSubtitle: 'Real conversion cases: Output from AI TMS platforms ($3K+/mo) vs. VeraVox re-engineering.',
    caseTitle: 'Case 01: SaaS Infrastructure Messaging (Linear Baseline)',
    usBaselineLabel: 'US BASELINE (EN)',
    usBaselineText: '"The open-source product operating system. How developers build better products."',
    tmsOutputLabel: 'STANDARD NATIVE PLATFORM / AI TMS OUTPUT ($3K+/MO) — REJECTED',
    tmsTextDE: 'DE: "Das Open-Source-Produkt-Betriebssystem. Wie Entwickler bessere Produkte bauen."',
    tmsTextES: 'ES: "El SO de producto de código abierto. Cómo los desarrolladores crean mejores productos."',
    tmsDiagnosisLabel: 'Failure Diagnosis',
    tmsDiagnosisText: 'Translates "operating system" literally (Betriebssystem / SO), shifting perception toward a desktop OS. Retains empty marketing claims ("build better products") that lack technical rigor.',
    veravoxOutputLabel: 'VERAVOX STRUCTURAL ADAPTATION — IMPLEMENTED',
    veravoxTextDE: 'DE: "Die Open-Source-Plattform für Produktentwicklung — abgestimmt auf die Anforderungen von Engineering-Teams."',
    veravoxTextES: 'ES: "Plataforma de desarrollo de producto en código abierto. Diseñada para arquitecturas de software rigurosas."',
    veravoxImpactLabel: 'Conversion Impact',
    veravoxImpactText: 'Eliminates fluff, re-anchors terms to infrastructure (Plattform / Architecture), and aligns the value proposition with local engineering evaluation criteria.',
    tableTitle: 'Message Architecture Comparison Matrix',
    colCriterion: 'Criterion',
    colTms: 'AI TMS Platforms / Native Localization ($3K+/mo)',
    colVeravox: 'VeraVox (Structural Re-Engineering Layer)',
    rows: [
      {
        criterion: 'Operational Approach',
        tms: 'Isolated string-by-string processing dependent on translation memories and generic LLM prompts.',
        veravox: 'Message architecture re-engineering and technical intent verification per target market.'
      },
      {
        criterion: 'Technical Vocabulary',
        tms: 'Literal term conversion (e.g., "Operating System" → "Betriebssystem" / "SO").',
        veravox: 'Maps terminology to local buyer evaluation vocabulary (Plattform, Infrastructure, Deployments).'
      },
      {
        criterion: 'US Hype Handling',
        tms: 'Preserves empty fluff and non-verifiable marketing claims ("build better products").',
        veravox: 'Replaces hype with pragmatic value anchors and technical verification metrics.'
      },
      {
        criterion: 'Execution Model',
        tms: 'Recurring subscription ($3,000–$5,000/month) plus pipeline and connector maintenance costs.',
        veravox: 'High-impact one-off audit (Flat Fee $450–$800) or growth-focused retention.'
      }
    ],
    auditsTitle: 'Infrastructure Audits & Diagnostics',
    auditsSubtitle: 'Conversion friction analyses applied to high-throughput B2B SaaS stacks.',
    auditsList: [
      { id: 'clerk', name: 'Clerk', category: 'Authentication & Identity', status: 'AUDIT COMPLETED' },
      { id: 'resend', name: 'Resend', category: 'Email Infrastructure', status: 'AUDIT COMPLETED' },
      { id: 'vercel', name: 'Vercel', category: 'Deployment Platform', status: 'AUDIT COMPLETED' },
      { id: 'supabase', name: 'Supabase', category: 'Database & Backend', status: 'AUDIT COMPLETED' },
      { id: 'stripe', name: 'Stripe', category: 'Payment Infrastructure', status: 'AUDIT COMPLETED' },
      { id: 'posthog', name: 'PostHog', category: 'Product Analytics', status: 'AUDIT COMPLETED' }
    ]
  }
};

export default function HomePage() {
  const [lang, setLang] = useState('es');
  const [usOverride, setUsOverride] = useState(false);

  const activeLang = usOverride ? 'en' : lang;
  const content = UI_TEXT[activeLang] || UI_TEXT.es;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-emerald-500 selection:text-slate-950">
      {/* Navigation Header */}
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-mono text-lg font-bold tracking-wider text-emerald-400">VERAVOX</span>
            <span className="text-xs font-mono uppercase bg-slate-900 border border-slate-700 px-2 py-0.5 rounded text-slate-400">
              LOCALIZATION
            </span>
          </div>

          <div className="flex items-center gap-4">
            {/* US Override Toggle */}
            <button
              onClick={() => setUsOverride(!usOverride)}
              className={`text-xs font-mono px-3 py-1.5 rounded border transition-colors ${
                usOverride
                  ? 'bg-amber-500/10 border-amber-500 text-amber-400'
                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
              }`}
            >
              [US OVERRIDE: {usOverride ? 'ACTIVE' : 'OFF'}]
            </button>

            {/* Language Switcher */}
            <div className="flex items-center gap-1 bg-slate-900 border border-slate-800 p-1 rounded font-mono text-xs">
              {['es', 'de', 'en'].map((l) => (
                <button
                  key={l}
                  onClick={() => {
                    setUsOverride(false);
                    setLang(l);
                  }}
                  className={`px-2 py-1 rounded uppercase transition-colors ${
                    !usOverride && lang === l
                      ? 'bg-emerald-500 text-slate-950 font-bold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {l}
                </button>
              ))}
              <span className="px-1 text-slate-600">|</span>
              <span className="px-2 py-1 text-slate-600 cursor-not-allowed uppercase" title="Japan Engine Pending">
                JA
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-16">
        <div className="inline-block font-mono text-xs tracking-widest text-emerald-400 bg-emerald-950/40 border border-emerald-800/60 px-3 py-1 rounded mb-6">
          {content.heroTag}
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-50 leading-tight max-w-4xl mb-6">
          {content.heroTitle}
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-3xl leading-relaxed mb-10">
          {content.heroSubtitle}
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#audits"
            className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold rounded font-mono text-sm transition-colors"
          >
            {content.ctaPrimary}
          </a>
          <a
            href="#teardown"
            className="px-6 py-3 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 font-semibold rounded font-mono text-sm transition-colors"
          >
            {content.ctaSecondary}
          </a>
        </div>
      </section>

      {/* Teardown Section */}
      <section id="teardown" className="border-t border-slate-800 bg-slate-900/40 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-3">{content.teardownTitle}</h2>
            <p className="text-slate-400">{content.teardownSubtitle}</p>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-lg p-6 md:p-8">
            <h3 className="font-mono text-sm font-semibold text-emerald-400 mb-6 uppercase tracking-wider">
              {content.caseTitle}
            </h3>

            {/* US Baseline */}
            <div className="mb-8 p-4 rounded bg-slate-900/80 border border-slate-800 font-mono text-sm">
              <span className="text-xs text-slate-500 block mb-1">{content.usBaselineLabel}</span>
              <p className="text-slate-200 font-medium">{content.usBaselineText}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Native TMS Output (Rejected) */}
              <div className="p-5 rounded border border-rose-900/50 bg-rose-950/10">
                <span className="inline-block text-xs font-mono text-rose-400 font-bold mb-3 bg-rose-950/60 border border-rose-800/40 px-2 py-0.5 rounded">
                  {content.tmsOutputLabel}
                </span>
                <div className="space-y-2 font-mono text-sm text-slate-300 mb-4">
                  <p>{content.tmsTextDE}</p>
                  <p>{content.tmsTextES}</p>
                </div>
                <div className="border-t border-rose-900/40 pt-3">
                  <span className="text-xs font-mono text-rose-400 block font-semibold mb-1">
                    {content.tmsDiagnosisLabel}
                  </span>
                  <p className="text-xs text-slate-400 leading-relaxed">{content.tmsDiagnosisText}</p>
                </div>
              </div>

              {/* VeraVox Adaptation (Implemented) */}
              <div className="p-5 rounded border border-emerald-900/50 bg-emerald-950/10">
                <span className="inline-block text-xs font-mono text-emerald-400 font-bold mb-3 bg-emerald-950/60 border border-emerald-800/40 px-2 py-0.5 rounded">
                  {content.veravoxOutputLabel}
                </span>
                <div className="space-y-2 font-mono text-sm text-slate-100 font-medium mb-4">
                  <p>{content.veravoxTextDE}</p>
                  <p>{content.veravoxTextES}</p>
                </div>
                <div className="border-t border-emerald-900/40 pt-3">
                  <span className="text-xs font-mono text-emerald-400 block font-semibold mb-1">
                    {content.veravoxImpactLabel}
                  </span>
                  <p className="text-xs text-slate-400 leading-relaxed">{content.veravoxImpactText}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-20 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-8">{content.tableTitle}</h2>

          <div className="overflow-x-auto border border-slate-800 rounded-lg">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 border-b border-slate-800 font-mono text-xs text-slate-400 uppercase">
                  <th className="p-4 w-1/4">{content.colCriterion}</th>
                  <th className="p-4 w-3/8 text-rose-300/80">{content.colTms}</th>
                  <th className="p-4 w-3/8 text-emerald-400">{content.colVeravox}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-sm">
                {content.rows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-900/30 transition-colors">
                    <td className="p-4 font-mono font-semibold text-slate-200">{row.criterion}</td>
                    <td className="p-4 text-slate-400 leading-relaxed">{row.tms}</td>
                    <td className="p-4 text-slate-200 leading-relaxed bg-emerald-950/5 font-medium">{row.veravox}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Audits Grid Section */}
      <section id="audits" className="py-20 border-t border-slate-800 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-3">{content.auditsTitle}</h2>
            <p className="text-slate-400">{content.auditsSubtitle}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.auditsList.map((audit) => (
              <a
                key={audit.id}
                href={`/audits/${audit.id}`}
                className="group p-6 bg-slate-950 border border-slate-800 hover:border-emerald-500/50 rounded-lg transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-slate-100 group-hover:text-emerald-400 transition-colors">
                      {audit.name}
                    </h3>
                    <span className="font-mono text-[10px] text-emerald-400 bg-emerald-950/60 border border-emerald-800/50 px-2 py-0.5 rounded">
                      {audit.status}
                    </span>
                  </div>
                  <p className="text-xs font-mono text-slate-500 mb-6">{audit.category}</p>
                </div>
                <div className="flex items-center text-xs font-mono text-emerald-400 font-semibold group-hover:translate-x-1 transition-transform">
                  EXPLORER AUDIT &rarr;
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-10 bg-slate-950 text-xs font-mono text-slate-500">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <span className="text-slate-300 font-bold">VERAVOX LOCALIZATION</span> &mdash; B2B SaaS Structural Message Layer
          </div>
          <div className="flex gap-6">
            <a href="/about" className="hover:text-slate-300 transition-colors">
              [SYSTEM PROMPT & GEO]
            </a>
            <span>SYSTEM STATUS: OPERATIONAL</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
