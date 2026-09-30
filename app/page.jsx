'use client';

import { useState } from 'react';

const UI_TEXT = {
  de: {
    teardownTitle: 'Linear Teardown',
    teardownDesc: 'Wie direkte Übersetzung auf deutschem Boden versagt — und wie man es richtig macht.',
    directRejected: 'DIREKT ÜBERSETZT (ABGELEHNT)',
    structuralShipped: 'STRUKTURELL ADAPTIERT (VERSENDET)',
    whyFailedHeading: 'WARUM DIES FEHLGESCHLAGEN IST',
    whyFailedText: 'Eine wörtliche Übersetzung klingt im Deutschen holprig und verliert den präzisen, professionellen Ton.',
    anchorHeading: 'DER ANKER',
    anchorHtml: 'Fokus auf <strong className="text-bone-100 font-semibold">Geschwindigkeit und Präzision</strong> anstelle von reinen Schlagwörtern.',
    restructureHeading: 'NEUSTRUKTURIERUNG',
    restructureText: 'Neu formuliert für natürliche Eleganz und maximale Überzeugungskraft im Zielmarkt.',
  },
  es: {
    teardownTitle: 'Análisis de Linear',
    teardownDesc: 'Cómo la traducción directa falla en el mercado español y cómo solucionarlo.',
    directRejected: 'TRADUCCIÓN DIRECTA (RECHAZADA)',
    structuralShipped: 'ADAPTACIÓN ESTRUCTURAL (APROBADA)',
    whyFailedHeading: 'POR QUÉ FALLÓ',
    whyFailedText: 'Una traducción literal suena forzada en español y pierde el tono profesional y preciso.',
    anchorHeading: 'EL ANCLA',
    anchorHtml: 'Enfoque en <strong className="text-bone-100 font-semibold">velocidad y precisión</strong> en lugar de modismos ajenos.',
    restructureHeading: 'REESTRUCTURACIÓN',
    restructureText: 'Reorganizado para sonar natural, fluido y persuasivo para el público comprador.',
  },
  fr: {
    teardownTitle: 'Analyse de Linear',
    teardownDesc: 'Pourquoi la traduction directe échoue et comment l’adapter avec précision.',
    directRejected: 'TRADUCTION DIRECTE (REJETÉE)',
    structuralShipped: 'ADAPTATION ESTRUCTURELLE (EXPÉDIÉE)',
    whyFailedHeading: 'POURQUOI CELA A ÉCHOUÉ',
    whyFailedText: 'Le mot-à-mot manque de fluidité en français et dégrade l’image de marque haute gamme.',
    anchorHeading: 'L’ANCRAGE',
    anchorHtml: 'Accent mis sur la <strong className="text-bone-100 font-semibold">rapidité et la précision</strong> opérationnelle.',
    restructureHeading: 'RESTRUCTURATION',
    restructureText: 'Reformulé pour offrir une élégance naturelle et une efficacité maximale.',
  },
  it: {
    teardownTitle: 'Analisi di Linear',
    teardownDesc: 'Come la traduzione diretta fallisce e come renderla efficace in italiano.',
    directRejected: 'TRADUZIONE DIRETTA (RIFIUTATA)',
    structuralShipped: 'ADATTAMENTO STRUTTURALE (APPROVATO)',
    whyFailedHeading: 'PERCHÉ HA FALLITO',
    whyFailedText: 'Una traduzione letterale risulta innaturale in italiano e perde l’impatto professionale.',
    anchorHeading: 'L’ANCORA',
    anchorHtml: 'Focus su <strong className="text-bone-100 font-semibold">velocità e precisione</strong> anziché su calchi inglesi.',
    restructureHeading: 'RISTRUTTURAZIONE',
    restructureText: 'Riscritto per garantire fluidità, autorevolezza e massima chiarezza.',
  },
  pt: {
    teardownTitle: 'Análise do Linear',
    teardownDesc: 'Como a tradução direta falha no mercado e como fazer da maneira certa.',
    directRejected: 'TRADUÇÃO DIRETA (REJEITADA)',
    structuralShipped: 'ADAPTAÇÃO ESTRUTURAL (PUBLICADA)',
    whyFailedHeading: 'POR QUE FALHOU',
    whyFailedText: 'A tradução literal soa artificial em português e perde a clareza técnica.',
    anchorHeading: 'O ÂNCORA',
    anchorHtml: 'Foco na <strong className="text-bone-100 font-semibold">velocidade e precisão</strong> das equipes.',
    restructureHeading: 'REESTRUTURAÇÃO',
    restructureText: 'Reescrito para soar natural, profissional e altamente persuasivo.',
  },
  en: {
    teardownTitle: 'Linear Teardown',
    teardownDesc: 'How direct translation fails in local markets — and how structural adaptation succeeds.',
    directRejected: 'DIRECT TRANSLATION (REJECTED)',
    structuralShipped: 'STRUCTURAL ADAPTATION (SHIPPED)',
    whyFailedHeading: 'WHY THIS FAILED',
    whyFailedText: 'Literal word-for-word translation creates awkward phrasing and loses professional impact.',
    anchorHeading: 'THE ANCHOR',
    anchorHtml: 'Focus on <strong className="text-bone-100 font-semibold">speed and precision</strong> over vague marketing jargon.',
    restructureHeading: 'RESTRUCTURE',
    restructureText: 'Rephrased to sound natural, authoritative, and persuasive for native decision makers.',
  },
};

const TEARDOWN_CONTENT = {
  de: {
    label: 'asset.headline — us-en → de-de',
    buyerLang: 'German',
    direct: 'Linear ist der schnellste Weg, moderne Software zu planen, zu verfolgen und auszuliefern — gebaut für die Geschwindigkeit leistungsstarker Teams.',
    structural: 'Linear strukturiert Planung, Entwicklung und Auslieferung in einem System — nachvollziehbar für Teams, die Präzision brauchen.',
  },
  es: {
    label: 'asset.headline — us-en → es-es',
    buyerLang: 'Spanish',
    direct: 'Linear es la forma más rápida de planificar, rastrear y enviar software moderno — construido para la velocidad de equipos de alto rendimiento.',
    structural: 'Linear estructura la planificación, el desarrollo y la entrega en un solo sistema — comprensible para equipos que exigen precisión.',
  },
  fr: {
    label: 'asset.headline — us-en → fr-fr',
    buyerLang: 'French',
    direct: 'Linear est le moyen le plus rapide de planifier, suivre et livrer des logiciels modernes — conçu pour la vitesse des équipes performantes.',
    structural: 'Linear structure la planification, le développement et la livraison en un seul système — traçable pour les équipes exigeant de la précision.',
  },
  it: {
    label: 'asset.headline — us-en → it-it',
    buyerLang: 'Italian',
    direct: 'Linear è il modo più veloce per pianificare, tracciare e rilasciare software moderno — creato per la velocità di team ad alte prestazioni.',
    structural: 'Linear struttura pianificazione, sviluppo e rilascio in un unico sistema — tracciabile per i team che richiedono precisione.',
  },
  pt: {
    label: 'asset.headline — us-en → pt-pt',
    buyerLang: 'Portuguese',
    direct: 'Linear é a maneira mais rápida de planejar, rastrear e entregar software moderno — construído para a velocidade de equipes de alto desempenho.',
    structural: 'Linear estrutura o planejamento, desenvolvimento e entrega em um único sistema — rastreável para equipes que exigem precisão.',
  },
  en: {
    label: 'asset.headline — us-en → en-us',
    buyerLang: 'English',
    direct: 'Linear is the fastest way to plan, track, and ship modern software — built for the speed of high-performing teams.',
    structural: 'Linear structures planning, development, and delivery in one system — traceable for teams that require precision.',
  },
};

export default function Home() {
  const [lang, setLang] = useState('de');

  const t = UI_TEXT[lang] || UI_TEXT.en;
  const teardown = TEARDOWN_CONTENT[lang] || TEARDOWN_CONTENT.de;

  const languages = [
    { code: 'de', label: 'DE' },
    { code: 'es', label: 'ES' },
    { code: 'fr', label: 'FR' },
    { code: 'it', label: 'IT' },
    { code: 'pt', label: 'PT' },
    { code: 'en', label: 'EN' },
  ];

  return (
    <main className="min-h-screen bg-ink-950 text-bone-100 font-sans antialiased">
      {/* Header with Language Selector */}
      <header className="border-b border-ink-700 bg-ink-900/60 sticky top-0 z-50 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <span className="font-mono text-sm tracking-widest text-bone-100 uppercase font-semibold">
            GTM LOCALIZATION
          </span>

          <nav className="flex items-center gap-1 bg-ink-950 border border-ink-700 p-1 rounded">
            {languages.map((item) => (
              <button
                key={item.code}
                onClick={() => setLang(item.code)}
                className={`px-2.5 py-1 text-xs font-mono rounded transition-colors ${
                  lang === item.code
                    ? 'bg-ink-700 text-bone-100 font-semibold'
                    : 'text-bone-500 hover:text-bone-300'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Linear Teardown Section */}
      <section id="teardown" className="border-t border-ink-700 bg-ink-900/40">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="max-w-xl mb-12">
            <h2 className="font-display font-semibold text-3xl md:text-4xl tracking-tight text-bone-100">
              {t.teardownTitle}
            </h2>
            <p className="mt-4 text-base text-bone-500 leading-relaxed">
              {t.teardownDesc}
            </p>
          </div>

          <div className="border border-ink-700 bg-ink-950">
            {/* Asset Metadata Bar */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-ink-700">
              <span className="font-mono text-xs text-bone-500">{teardown.label}</span>
              <span className="font-mono text-xs text-bone-500">illustrative example</span>
            </div>

            {/* Comparison Split Grid */}
            <div className="grid md:grid-cols-[1fr_auto] divide-y md:divide-y-0 divide-ink-700">
              {/* Left Column: Direct vs Structural Output */}
              <div className="divide-y divide-ink-700">
                {/* Rejected Direct Translation */}
                <div className="flex gap-4 px-5 py-5">
                  <span className="font-mono text-signal-red select-none mt-0.5">−</span>
                  <div>
                    <p className="font-mono text-xs text-signal-red mb-2">{t.directRejected}</p>
                    <p className="text-bone-500 line-through decoration-signal-red/60 leading-relaxed">
                      {teardown.direct}
                    </p>
                  </div>
                </div>

                {/* Shipped Structural Adaptation */}
                <div className="flex gap-4 px-5 py-5">
                  <span className="font-mono text-signal-green select-none mt-0.5">+</span>
                  <div>
                    <p className="font-mono text-xs text-signal-green mb-2">{t.structuralShipped}</p>
                    <p className="text-bone-100 leading-relaxed">
                      {teardown.structural}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Strategic Analysis Notes */}
              <div className="px-5 py-5 md:w-72 md:border-l border-ink-700 space-y-5">
                <div>
                  <p className="font-mono text-xs text-bone-500 mb-1">{t.whyFailedHeading}</p>
                  <p className="text-sm text-bone-300 leading-relaxed">{t.whyFailedText}</p>
                </div>
                <div>
                  <p className="font-mono text-xs text-bone-500 mb-1">{t.anchorHeading}</p>
                  <p
                    className="text-sm text-bone-300 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: t.anchorHtml }}
                  />
                </div>
                <div>
                  <p className="font-mono text-xs text-bone-500 mb-1">{t.restructureHeading}</p>
                  <p className="text-sm text-bone-300 leading-relaxed">{t.restructureText}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
