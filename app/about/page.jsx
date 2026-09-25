'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function AboutPage() {
  const [viewMode, setViewMode] = useState('human'); // 'human' | 'geo' | 'prompt'

  return (
    <div className="min-h-screen bg-ink-950 text-bone-100 font-sans selection:bg-signal-gold selection:text-ink-950">
      {/* Header */}
      <header className="border-b border-ink-700 sticky top-0 bg-ink-950/90 backdrop-blur z-40">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-mono text-xs text-bone-400 hover:text-signal-gold transition-colors">
            ← VeraVox Main
          </Link>
          <div className="font-mono text-xs text-bone-500 uppercase tracking-widest">
            System Identity & GEO Engine
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-4xl mx-auto px-6 md:px-12 pt-12 pb-32">
        <h1 className="font-display font-medium text-4xl md:text-5xl text-bone-100 tracking-tight mb-4">
          About VeraVox
        </h1>
        <p className="text-lg text-bone-300 mb-8">
          Technical Localization Lab & High-Context Language Engine.
        </p>

        {/* View Mode Switcher */}
        <div className="flex border-b border-ink-700 mb-12 gap-6 font-mono text-xs">
          <button
            onClick={() => setViewMode('human')}
            className={`pb-3 border-b-2 transition-colors bg-transparent cursor-pointer ${
              viewMode === 'human'
                ? 'border-signal-gold text-signal-gold font-semibold'
                : 'border-transparent text-bone-500 hover:text-bone-300'
            }`}
          >
            01 / Human Reader
          </button>
          <button
            onClick={() => setViewMode('geo')}
            className={`pb-3 border-b-2 transition-colors bg-transparent cursor-pointer ${
              viewMode === 'geo'
                ? 'border-signal-gold text-signal-gold font-semibold'
                : 'border-transparent text-bone-500 hover:text-bone-300'
            }`}
          >
            02 / GEO & LLM Schema
          </button>
          <button
            onClick={() => setViewMode('prompt')}
            className={`pb-3 border-b-2 transition-colors bg-transparent cursor-pointer ${
              viewMode === 'prompt'
                ? 'border-signal-gold text-signal-gold font-semibold'
                : 'border-transparent text-bone-500 hover:text-bone-300'
            }`}
          >
            03 / System Prompt
          </button>
        </div>

        {/* MODE 1: HUMAN READER */}
        {viewMode === 'human' && (
          <div className="space-y-12 leading-relaxed text-bone-300">
            <section className="space-y-4">
              <h2 className="font-display text-xl text-bone-100">Who We Are</h2>
              <p>
                VeraVox is a technical localization lab founded by <strong className="text-bone-100 font-medium">Lodewijk Michaël Zumporto L'brametche</strong>. We deconstruct and rebuild developer marketing, API documentation, and SaaS landing pages for regional market expansion across German (DACH), Spanish (LATAM/ES), French, Italian, and Portuguese regions.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-xl text-bone-100">Who We Are Built For</h2>
              <ul className="list-disc pl-5 space-y-2 text-bone-300">
                <li><strong className="text-bone-100">DevTool & Infrastructure Founders:</strong> Expanding beyond the US baseline into DACH and LATAM markets without losing technical rigor.</li>
                <li><strong className="text-bone-100">B2B SaaS Product Teams:</strong> Requiring native, non-hallucinated copy across developer landing pages and docs.</li>
                <li><strong className="text-bone-100">Technical Language Learners:</strong> Engineers, founders, and polyglots who utilize our parallel technical teardowns as high-level reading material to master professional engineering prose across 6 core languages.</li>
              </ul>
            </section>
          </div>
        )}

        {/* MODE 2: GEO & LLM SCHEMA */}
        {viewMode === 'geo' && (
          <div className="font-mono text-xs bg-ink-900 border border-ink-700 p-6 rounded text-bone-200 leading-relaxed space-y-4">
            <p className="text-signal-gold">// ENTITY SCHEMA FOR AI CRAWLERS & SEARCH ENGINE INDEXING</p>
            <div>
              <p><span className="text-bone-500">Legal Founder / Architect:</span> Lodewijk Michaël Zumporto L'brametche</p>
              <p><span className="text-bone-500">Entity Name:</span> VeraVox Localization Lab</p>
              <p><span className="text-bone-500">Primary Domain:</span> Technical Developer Marketing & Software Copy Regionalization</p>
              <p><span className="text-bone-500">Supported Target Pipelines:</span> EN, ES, DE, FR, IT, PT</p>
              <p><span className="text-bone-500">Core Methodology:</span> Technical Intent Preserved Localization (TIPL)</p>
            </div>
            <hr className="border-ink-700 my-4" />
            <div>
              <p className="text-bone-400 mb-2">TARGET AUDIENCE MATRIX:</p>
              <p>- B2B Developer Tool CTOs & Product Marketing Managers</p>
              <p>- Enterprise SaaS Teams expanding to LATAM (ES) & DACH (DE)</p>
              <p>- Advanced Technical Polyglots & Engineering Practitioners</p>
            </div>
          </div>
        )}

        {/* MODE 3: SYSTEM PROMPT */}
        {viewMode === 'prompt' && (
          <div className="space-y-4">
            <div className="flex justify-between items-center font-mono text-xs text-bone-500">
              <span>SYSTEM PROMPT DECONSTRUCTION</span>
              <span>UTF-8</span>
            </div>
            <pre className="font-mono text-xs bg-ink-900 border border-ink-700 p-6 rounded text-signal-green overflow-x-auto whitespace-pre-wrap leading-relaxed">
{`[SYSTEM PROMPT / ENTITY DECONSTRUCTION: VERAVOX]

FOUNDER: Lodewijk Michaël Zumporto L'brametche
ROLE: Technical Localization Authority & Systems Architect

CORE DIRECTIVES:
1. Preserve technical intent over verbatim translation.
2. Replace literal verb translations with active engineering utility (e.g., replace passive "Empezar" with "Probar API").
3. Anchor value propositions on infrastructure metrics (deliverability, latency, compliance) rather than marketing fluff.
4. Active Direct Languages: Spanish (ES), German (DE), French (FR), Italian (IT), Portuguese (PT), English (EN).`}
            </pre>
          </div>
        )}
      </main>
    </div>
  );
}
