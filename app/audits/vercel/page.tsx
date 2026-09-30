'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const AUDIT_CONTENT = {
  en: {
    navTag: 'Localization Audit #05',
    title: 'Vercel: Fixing European Enterprise Caching & Edge Messaging',
    subtitle: 'Why Silicon Valley speed slogans alienate European DevOps leads and fail corporate compliance reviews.',
    readingTime: '7 min read',
    date: 'October 2026',
    client: 'Vercel',
    markets: 'DACH, EU, LATAM',
    audience: 'VP Engineering & Infrastructure Leads',
    s1Title: 'Executive Summary / The Commercial Problem',
    overviewHeading: 'Action Slogans Don\'t Pass Enterprise Procurement',
    overviewBody: 'Vercel’s US tagline "Develop. Preview. Ship." relies on fast action verbs. But in German-speaking Europe (DACH), translating "Ship" literally into "Ausliefern" connotes physical logistics and shipping boxes rather than high-availability Edge infrastructure.',
    overviewSub: 'Enterprise architects in Germany and France don\'t buy "instant speed"—they buy zero-downtime cache invalidation, predictable latency across Frankfurt nodes, and strict GDPR data routing guarantees.',
    s2Title: 'Teardown / Landing Page Conversion Friction',
    b1Title: '01 / The Primary Headline (H1)',
    b1Analysis: 'In European procurement, "The Frontend Cloud" sounds like marketing fluff. Infrastructure leads want explicit clarity: "Global Edge Infrastructure for Next.js". This passes architectural review faster and sets clear expectations for DevOps teams.',
    b2Title: '02 / Serverless & Caching Narrative (H2)',
    b2Analysis: 'US marketing highlights "Instant deployments, zero configuration". European DevOps leads view "zero configuration" as a risk—they need explicit details on background cache purging, stale-while-revalidate fallback behavior under heavy traffic, and edge node routing.',
    b3Title: '03 / Primary Call to Action (CTA)',
    b3Analysis: 'Buttons like "Start Deploying" feel vague to enterprise decision-makers. High-intent buyers want actionable technical steps, such as deploying a sandbox project or running a global latency benchmark.',
    s3Title: 'Real-World Production Impact',
    s3Heading: '01 / Incremental Static Regeneration (ISR)',
    s3UsBaseline: 'Instant static regeneration and stale-while-revalidate headers out of the box.',
    s3TradAgencyEs: 'Regeneración estática instantánea y encabezados stale-while-revalidate listos para usar.',
    s3TradAgencyDe: 'Sofortige statische Regenerierung und Stale-while-revalidate-Header direkt einsatzbereit.',
    s3RefinedEs: 'Invalidación de caché en el Edge (ISR) para Next.js sin configurar clústeres Redis.',
    s3RefinedDe: 'Automatisches Cache-Invalideren im Edge (ISR) ohne externe Redis-Cluster.',
    s3Analysis: 'Translating "instant static regeneration" word-for-word sounds like magic tricks. European DevOps engineers care about the underlying architecture: updating static pages in the background without building custom Redis caching infrastructure.',
    ctaTitle: 'Optimize your European enterprise pipeline',
    ctaBody: 'We refactor developer messaging, backend docs, and regional landing pages to help US cloud platforms win European and LATAM enterprise deals.',
    ctaPrimary: 'Book a 15-Min Live Teardown',
    ctaSecondary: 'Email Engineering Team',
    returnDir: '← Return to Directory',
    usBaseline: 'Current US Copy',
    tradAgency: 'Standard Agency Translation',
    refinedIntent: 'High-Converting Technical Copy'
  },
  de: {
    navTag: 'Lokalisierungs-Audit #05',
    title: 'Vercel: Caching- & Edge-Messaging für DACH-Enterprise-Kunden',
    subtitle: 'Warum US-Slogans bei deutschen DevOps-Teams Skepsis erzeugen und Audits verfehlen.',
    readingTime: '7 Min. Lesezeit',
    date: 'Oktober 2026',
    client: 'Vercel',
    markets: 'DACH, EU, LATAM',
    audience: 'VP Engineering & Infrastruktur-Leiter',
    s1Title: 'Executive Summary / Das kommerzielle Problem',
    overviewHeading: 'Marketing-Slogans bestehen keine IT-Audits',
    overviewBody: 'Der US-Slogan „Develop. Preview. Ship.“ nutzt direkte Handlungsverben. Im deutschen Enterprise-Einkauf wirkt „Ausliefern“ jedoch wie Paketlogistik statt hochverfügbarer Edge-Infrastruktur.',
    overviewSub: 'Enterprise-Architekten im DACH-Raum suchen keine „Verheißungen“, sondern verlässliche Cache-Invalidierung, Ausfallsicherheit in Frankfurt-Rechenzentren und DSGVO-Konformität.',
    s2Title: 'Teardown / Frikation in der Conversion',
    b1Title: '01 / Die Hauptüberschrift (H1)',
    b1Analysis: '„Die Frontend-Cloud“ ist für deutsche IT-Leiter zu abstrakt. Präzise Formulierungen wie „Globale Edge-Infrastruktur für Next.js“ bestehen interne Architektur-Reviews deutlich schneller.',
    b2Title: '02 / Serverless & Caching Narrative (H2)',
    b2Analysis: 'US-Texte werben mit „Zero Configuration“. Für deutsche DevOps-Leads klingt das nach fehlender Steuerung. Sie benötigen konkrete Angaben zu Hintergrund-Cache-Pufferung und Ausfallkonzepten.',
    b3Title: '03 / Primärer Call-to-Action (CTA)',
    b3Analysis: '„Jetzt bereitstellen“ ist unkonkret. Technische Einkäufer reagieren besser auf direkte Evaluierungsschritte wie „Sandbox-Projekt testen“ oder „Latenz-Benchmark ausführen“.',
    s3Title: 'Praktischer Auswirkung im Live-Betrieb',
    s3Heading: '01 / Incremental Static Regeneration (ISR)',
    s3UsBaseline: 'Instant static regeneration and stale-while-revalidate headers out of the box.',
    s3TradAgencyEs: 'Regeneración estática instantánea y encabezados stale-while-revalidate listos para usar.',
    s3TradAgencyDe: 'Sofortige statische Regenerierung und Stale-while-revalidate-Header direkt einsatzbereit.',
    s3RefinedEs: 'Invalidación de caché en el Edge (ISR) para Next.js sin configurar clústeres Redis.',
    s3RefinedDe: 'Automatisches Cache-Invalideren im Edge (ISR) ohne externe Redis-Cluster.',
    s3Analysis: 'Wortwörtliche Übersetzungen von ISR klingen nach Marketing-Versprechen. Ingenieure wollen wissen: Kann ich statische Seiten im Hintergrund aktualisieren, ohne eigene Redis-Cluster zu betreiben?',
    ctaTitle: 'B2B-Conversion im DACH-Raum steigern',
    ctaBody: 'Wir optimieren Entwickler-Dokumentationen und Enterprise-Landingpages für den europäischen Markt.',
    ctaPrimary: '15-Min. Live-Audit buchen',
    ctaSecondary: 'Entwickler-Team kontaktieren',
    returnDir: '← Zurück zum Verzeichnis',
    usBaseline: 'Aktueller US-Text',
    tradAgency: 'Standard-Übersetzung',
    refinedIntent: 'Konvertierender Fachtext'
  },
  es: {
    navTag: 'Auditoría de Localización #05',
    title: 'Vercel: Caching en el Borde y Mensajería para Empresas en Europa',
    subtitle: 'Por qué los eslóganes de velocidad de EE.UU. no superan las revisiones de TI en Europa.',
    readingTime: '7 min de lectura',
    date: 'Octubre 2026',
    client: 'Vercel',
    markets: 'DACH, EU, LATAM',
    audience: 'VP de Ingeniería y Arquitectos de Sistema',
    s1Title: 'Resumen Ejecutivo / El Problema Comercial',
    overviewHeading: 'Los Eslóganes No Pasan las Revisiones de Seguridad',
    overviewBody: 'El eslogan "Develop. Preview. Ship." funciona en EE.UU. pero traducido literalmente como "Desplegar. Previsualizar. Enviar" pierde valor técnico ante decisores corporativos en España y LATAM que evalúan resiliencia y latencia de red.',
    overviewSub: 'Los directores de TI buscan garantías concretas: invalidación de caché sin caídas, rendimiento constante en nodos locales y cumplimiento de privacidad de datos.',
    s2Title: 'Desglose / Fricción de Conversión',
    b1Title: '01 / El Titular Principal (H1)',
    b1Analysis: 'En español, "La nube frontend" suena publicitario. Definir el producto como "Infraestructura Edge global para Next.js" transmite autoridad técnica y supera los controles de arquitectura B2B.',
    b2Title: '02 / Propuesta de Caching y Serverless (H2)',
    b2Analysis: 'En lugar de promesas genéricas como "Cero configuración", los equipos de DevOps necesitan detalles claros sobre cómo funciona la invalidación de caché en segundo plano bajo tráfico alto.',
    b3Title: '03 / Llamada a la Acción Principal (CTA)',
    b3Analysis: 'Un CTA como "Empezar despliegue" es demasiado informal. Se requiere una acción directa como "Probar en sandbox" o "Medir latencia en nodos Edge".',
    s3Title: 'Impacto en Producción Real',
    s3Heading: '01 / Regeneración Estática Incremental (ISR)',
    s3UsBaseline: 'Instant static regeneration and stale-while-revalidate headers out of the box.',
    s3TradAgencyEs: 'Regeneración estática instantánea y encabezados stale-while-revalidate listos para usar.',
    s3TradAgencyDe: 'Sofortige statische Regenerierung und Stale-while-revalidate-Header direkt einsatzbereit.',
    s3RefinedEs: 'Invalidación de caché en el Edge (ISR) para Next.js sin configurar clústeres Redis.',
    s3RefinedDe: 'Automatisches Cache-Invalideren im Edge (ISR) ohne externe Redis-Cluster.',
    s3Analysis: 'Traducir ISR palabra por palabra no explica el beneficio real. A los desarrolladores les interesa saber que pueden actualizar contenido estático sin tener que administrar clústeres de Redis propios.',
    ctaTitle: 'Mejora la conversión de tu infraestructura en Europa y LATAM',
    ctaBody: 'Auditamos y optimizamos mensajes técnicos para ayudar a empresas cloud a cerrar acuerdos corporativos.',
    ctaPrimary: 'Reservar Auditoría en Vivo (15 min)',
    ctaSecondary: 'Contactar al Equipo Técnico',
    returnDir: '← Volver al Directorio',
    usBaseline: 'Texto Actual (EE.UU.)',
    tradAgency: 'Traducción Tradicional',
    refinedIntent: 'Texto Técnico de Alta Conversión'
  }
};

export default function VercelAuditPage() {
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
              {['es', 'de', 'en'].map((l) => (
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
              <span className="text-bone-300 block mb-1">Target Client</span>
              {t.client}
            </div>
            <div>
              <span className="text-bone-300 block mb-1">Key Markets</span>
              {t.markets}
            </div>
            <div>
              <span className="text-bone-300 block mb-1">Target Audience</span>
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
                <p className="text-bone-300 italic">"The Frontend Cloud. Develop. Preview. Ship."</p>
              </div>
              
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-bone-600 mb-2">{t.tradAgency}</p>
                <ul className="text-bone-300 space-y-1 font-mono text-xs">
                  <li><span className="text-bone-500 mr-2">DE:</span> Die Frontend-Cloud. Entwickeln. Vorschau. Ausliefern.</li>
                  <li><span className="text-bone-500 mr-2">ES:</span> La nube frontend. Desarrollar. Previsualizar. Enviar.</li>
                </ul>
              </div>

              <div className="border-l-2 border-signal-gold pl-4 py-1">
                <p className="font-mono text-[10px] uppercase tracking-widest text-signal-gold mb-2">{t.refinedIntent}</p>
                <ul className="text-bone-100 font-medium space-y-1 font-mono text-xs">
                  <li><span className="text-bone-500 font-normal mr-2">DE:</span> Globale Edge-Infrastruktur für Next.js und High-Performance Webapps.</li>
                  <li><span className="text-bone-500 font-normal mr-2">ES:</span> Infraestructura Edge global para Next.js y aplicaciones web de alto rendimiento.</li>
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
                <p className="text-bone-300 italic">"Instant deployments, zero configuration, global speed."</p>
              </div>
              
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-bone-600 mb-2">{t.tradAgency}</p>
                <ul className="text-bone-300 space-y-1 font-mono text-xs">
                  <li><span className="text-bone-500 mr-2">DE:</span> Sofortige Bereitstellungen, null Konfiguration, globale Geschwindigkeit.</li>
                  <li><span className="text-bone-500 mr-2">ES:</span> Despliegues instantáneos, cero configuración, velocidad global.</li>
                </ul>
              </div>

              <div className="border-l-2 border-signal-gold pl-4 py-1">
                <p className="font-mono text-[10px] uppercase tracking-widest text-signal-gold mb-2">{t.refinedIntent}</p>
                <ul className="text-bone-100 font-medium space-y-1 font-mono text-xs">
                  <li><span className="text-bone-500 font-normal mr-2">DE:</span> Cache-Invalidierung in Echtzeit und deterministische Serverless-Laufzeiten.</li>
                  <li><span className="text-bone-500 font-normal mr-2">ES:</span> Control de caché en el Edge y ejecución serverless con latencia mínima.</li>
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
                <p className="text-bone-300 italic">"Start Deploying"</p>
              </div>
              
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-bone-600 mb-2">{t.tradAgency}</p>
                <ul className="text-bone-300 space-y-1 font-mono text-xs">
                  <li><span className="text-bone-500 mr-2">DE:</span> Jetzt bereitstellen</li>
                  <li><span className="text-bone-500 mr-2">ES:</span> Empezar despliegue</li>
                </ul>
              </div>

              <div className="border-l-2 border-signal-gold pl-4 py-1">
                <p className="font-mono text-[10px] uppercase tracking-widest text-signal-gold mb-2">{t.refinedIntent}</p>
                <ul className="text-bone-100 font-medium space-y-1 font-mono text-xs">
                  <li><span className="text-bone-500 font-normal mr-2">DE:</span> Sandbox testen / Projekt importieren</li>
                  <li><span className="text-bone-500 font-normal mr-2">ES:</span> Probar en Sandbox / Medir latencia Edge</li>
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

        {/* Commercial Conversion Call to Action */}
        <section className="mt-20 p-8 border border-signal-gold/40 bg-ink-900">
          <div className="font-mono text-[10px] text-signal-gold uppercase tracking-widest mb-2">
            Diagnostic & Implementation
          </div>
          <h3 className="font-display font-medium text-2xl text-bone-100 mb-4">
            {t.ctaTitle}
          </h3>
          <p className="text-bone-300 text-sm leading-relaxed mb-6">
            {t.ctaBody}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 font-mono text-xs">
            <a 
              href="https://veravox.io/book" 
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 bg-signal-gold text-ink-950 font-bold uppercase tracking-wider text-center hover:bg-bone-100 transition-colors no-underline"
            >
              {t.ctaPrimary}
            </a>
            <a 
              href="mailto:contact@veravox.io?subject=Technical%20Localization%20Audit" 
              className="px-6 py-3 border border-ink-700 text-bone-300 font-bold uppercase tracking-wider text-center hover:border-bone-400 transition-colors no-underline"
            >
              {t.ctaSecondary}
            </a>
          </div>
        </section>
        
        <div className="mt-20 pt-8 border-t border-ink-700">
          <Link href="/" className="font-mono text-[10px] uppercase tracking-widest text-bone-500 hover:text-signal-gold transition-colors">
            {t.returnDir}
          </Link>
        </div>
      </main>
    </div>
  );
}
