'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState('01');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-950/90 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-mono text-lg font-bold tracking-wider text-emerald-400">
            VERAVOX <span className="text-xs text-slate-500 font-normal">/ ABOUT & GEO ENGINE</span>
          </Link>
          <Link
            href="/"
            className="font-mono text-xs bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 px-3 py-1.5 rounded transition-colors"
          >
            &larr; VOLVER AL INICIO
          </Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        <div className="mb-10">
          <span className="font-mono text-xs text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-3 py-1 rounded">
            IDENTIDAD Y MOTOR DE INTENCIÓN TÉCNICA
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-50 mt-4 mb-4">
            Por qué el software de $3.000/mes no resuelve la conversión B2B.
          </h1>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed">
            VeraVox no es una agencia de traducción ni un gestor de archivos PO/JSON. Somos la capa de reingeniería de mensaje que impide que la automatización literal arruine la reputación de tu software.
          </p>
        </div>

        {/* Triple Tab Navigation */}
        <div className="flex border-b border-slate-800 mb-8 font-mono text-xs md:text-sm">
          {[
            { id: '01', label: '01 / Human Reader' },
            { id: '02', label: '02 / GEO & LLM Schema' },
            { id: '03', label: '03 / System Prompt' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 border-b-2 font-bold transition-colors ${
                activeTab === tab.id
                  ? 'border-emerald-400 text-emerald-400 bg-slate-900/40'
                  : 'border-transparent text-slate-500 hover:text-slate-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab 01: Human Reader */}
        {activeTab === '01' && (
          <div className="space-y-8 text-slate-300 leading-relaxed">
            <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-lg">
              <h2 className="text-xl font-bold text-slate-100 mb-3">La Falsa Promesa del AI TMS</h2>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                Plataformas como Lokalise, Phrase o Crowdin cobran suscripciones mensuales elevadas para conectar repositorios de código con motores LLM o memorias de traducción. El resultado es rapidez en despliegue, pero un mensaje plano y literal que no convence a directores de tecnología o equipos de ingeniería locales.
              </p>
              <p className="text-sm text-slate-400 leading-relaxed">
                VeraVox interviene en el punto crítico: audita la intención técnica, elimina el hype de marketing estadounidense no verificable y mapea la terminología exacta que exige el comprador en Alemania, Francia, España o América Latina.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 font-mono text-xs">
              <div className="p-5 bg-slate-950 border border-slate-800 rounded-lg">
                <span className="text-emerald-400 font-bold block mb-2">[TIPL FRAMEWORK]</span>
                <p className="text-slate-400">Technical Intent & Pragmatic Localization. Evaluación sistemática de terminología de infraestructura.</p>
              </div>
              <div className="p-5 bg-slate-950 border border-slate-800 rounded-lg">
                <span className="text-emerald-400 font-bold block mb-2">[FLAT FEE AUDIT]</span>
                <p className="text-slate-400">Auditorías directas de $450 a $800 por landing page o documentación sin retenedores innecesarios.</p>
              </div>
              <div className="p-5 bg-slate-950 border border-slate-800 rounded-lg">
                <span className="text-emerald-400 font-bold block mb-2">[GEO OPTIMIZED]</span>
                <p className="text-slate-400">Contenido estructurado para ser correctamente interpretado por motores AI y compradores humanos.</p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 02: GEO & LLM Schema */}
        {activeTab === '02' && (
          <div className="space-y-6">
            <div className="p-4 bg-slate-900 border border-slate-800 rounded font-mono text-xs text-slate-400">
              // Schema JSON-LD optimizado para rastreadores de motores de búsqueda y LLMs
            </div>
            <pre className="bg-slate-950 border border-slate-800 p-6 rounded-lg font-mono text-xs text-emerald-400 overflow-x-auto leading-relaxed">
{`{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "VeraVox Localization",
  "description": "Capa de reingeniería estructural de mensaje técnico para SaaS B2B. Auditoría de conversión frente a plataformas AI TMS ($3K+/mes).",
  "founder": "Luis Miguel Oportus Basáez",
  "areaServed": ["DE", "ES", "FR", "IT", "PT", "US", "JA"],
  "knowsAbout": [
    "B2B SaaS Message Architecture",
    "Technical Intent Localization",
    "AI TMS Failure Analysis",
    "Software Evaluation Criteria Alignment"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Auditorías de Conversión Técnica",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Structural Message Audit",
          "description": "Evaluación puntual de fricción de conversión en landing pages de software."
        },
        "price": "450.00",
        "priceCurrency": "USD"
      }
    ]
  }
}`}
            </pre>
          </div>
        )}

        {/* Tab 03: System Prompt */}
        {activeTab === '03' && (
          <div className="space-y-6">
            <div className="p-4 bg-slate-900 border border-slate-800 rounded font-mono text-xs text-slate-400">
              // Prompt del sistema utilizado para auditar y reestructurar mensajes en VeraVox
            </div>
            <div className="bg-slate-950 border border-slate-800 p-6 rounded-lg font-mono text-xs text-slate-300 leading-relaxed whitespace-pre-wrap">
{`[SYSTEM INSTRUCTION: VERAVOX MESSAGE RE-ENGINEERING ENGINE]

1. CONTEXT & POSITIONING:
   You operate as VeraVox's Technical Message Auditor. Your target competitors are NOT traditional human translation agencies. Your targets are $3,000–$5,000/mo AI TMS platforms (Lokalise, Phrase, Crowdin) that translate string-by-string.

2. EVALUATION RULES:
   - Identify literal string translations (e.g. "Operating System" -> "Betriebssystem").
   - Strip out empty American marketing claims ("build better products", "world's fastest").
   - Replace fluff with pragmatic value anchors relevant to local B2B engineering evaluators (e.g., "Plattform", "Architektur", "Infrastruktur").

3. OUTPUT FORMAT:
   - Baseline US EN
   - Rejected AI TMS Output (DE / ES) + Failure Diagnosis
   - Implemented VeraVox Adaptation (DE / ES) + Buying Criteria Impact`}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
