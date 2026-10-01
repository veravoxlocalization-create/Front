'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const AUDIT_CONTENT = {
  en: {
    navTag: 'Localization Audit #04',
    title: 'Resend: Why US Dev Copy Fails in EU & LATAM Tech Sales',
    subtitle: 'How literal translations turn high-margin developer infrastructure into generic webmail software—and cost you enterprise pipeline.',
    readingTime: '6 min read',
    date: 'September 2026',
    client: 'Resend',
    markets: 'EU, LATAM, DACH',
    audience: 'CTOs & Engineering Leads',
    s1Title: 'Executive Summary / The Commercial Problem',
    overviewHeading: 'Literal Copy Costs You Enterprise Deals',
    overviewBody: 'In Silicon Valley, saying "Email for developers" sounds clean and founder-led. But when you launch in Europe or LATAM, translating that literally into "Correo electrónico" or "E-Mail" drops your brand into the wrong bucket. Buyers think of Gmail or Outlook, not API infrastructure built to handle millions of transactional webhooks without hitting spam filters.',
    overviewSub: 'When CTOs and Senior Devs evaluate email infrastructure, they don\'t buy "vibes"—they buy deliverability, Outlook compatibility without HTML table hacks, and reliable webhooks. This audit shows where current US copy breaks in international sales and how to fix it.',
    s2Title: 'Teardown / Landing Page Conversion Friction',
    b1Title: '01 / The Hero Headline (H1)',
    b1Analysis: 'Translating "Email for developers" word-for-word creates product ambiguity. In EU and LATAM procurement, "correo electrónico" or "E-Mail" sounds like an inbox client. Adding "API" immediately tells technical buyers they are looking at developer infrastructure, while capturing high-intent search traffic.',
    b2Title: '02 / The Value Proposition (H2)',
    b2Analysis: '"Reach humans instead of spam folders" works as a casual US pitch. Translated word-for-word into Spanish ("llegar a humanos") or German, it sounds bizarre and amateurish to B2B buyers. Engineering leads want hard metrics: inbox placement rates, DKIM/SPF setup speed, and bulk delivery performance under load.',
    b3Title: '03 / Primary Call to Action (CTA)',
    b3Analysis: 'Generic CTAs like "Get Started" or "Empezar" have low intent. Developers testing infrastructure don\'t want a slow onboarding survey; they want to copy an API key, run a `curl` request, or test a React Email template in a sandbox.',
    s3Title: 'Real-World Production Impact',
    s3Heading: '01 / React Email & Component Architecture',
    s3UsBaseline: 'Write emails using React components. Modern email templates without HTML tables.',
    s3TradAgencyEs: 'Escribe correos usando componentes React. Plantillas modernas sin tablas HTML.',
    s3TradAgencyDe: 'Schreiben Sie E-Mails mit React-Komponenten. Moderne Vorlagen ohne HTML-Tabellen.',
    s3RefinedEs: 'Componentes React para email con renderizado automático sin tablas HTML en Outlook.',
    s3RefinedDe: 'Code-native E-Mail-Templates mit React. Einwandfreies Rendering ohne HTML-Tabellen-Hacks.',
    s3Analysis: 'Traditional translation makes this sound like a tool for marketing copywriters. Senior frontend leads care about one specific pain point: preventing broken layouts in legacy clients like Outlook 2019 without writing manual fallback tables.',
    ctaTitle: 'Stop losing international developer pipeline',
    ctaBody: 'We audit developer docs, API onboarding flows, and landing pages to eliminate regional messaging friction and drive higher activation across EU and LATAM.',
    ctaPrimary: 'Book a 15-Min Live Teardown',
    ctaSecondary: 'Email Engineering Team',
    returnDir: '← Return to Directory',
    usBaseline: 'Current US Copy',
    tradAgency: 'Standard Agency Translation',
    refinedIntent: 'High-Converting Technical Copy'
  },
  es: {
    navTag: 'Auditoría de Localización #04',
    title: 'Resend: Por qué el Copy Técnico de EE.UU. Falla en Europa y LATAM',
    subtitle: 'Cómo las traducciones literales reducen infraestructura de alto margen a simple webmail y te hacen perder clientes.',
    readingTime: '6 min de lectura',
    date: 'Septiembre 2026',
    client: 'Resend',
    markets: 'EU, LATAM, DACH',
    audience: 'CTOs y Líderes de Ingeniería',
    s1Title: 'Resumen Ejecutivo / El Problema Comercial',
    overviewHeading: 'Las Traducciones Literales te Cuestan Ventas',
    overviewBody: 'En Silicon Valley, "Email for developers" suena simple y directo. Pero en Europa o LATAM, traducir eso literalmente como "Correo electrónico" malinterpreta tu producto. Los compradores piensan en Gmail o Outlook, no en una API creada para procesar millones de webhooks sin caer en la carpeta de spam.',
    overviewSub: 'Los CTOs no compran "sensaciones": compran entregabilidad real, compatibilidad con Outlook sin trucos de tablas HTML y fiabilidad en los webhooks. Esta auditoría muestra dónde falla tu texto actual y cómo solucionarlo.',
    s2Title: 'Desglose / Fricción de Conversión en Landing Page',
    b1Title: '01 / El Titular Principal (H1)',
    b1Analysis: 'Traducir "Email for developers" palabra por palabra genera confusión sobre la categoría del producto. En compras B2B, "correo electrónico" suena a cliente webmail. Añadir "API" deja claro que se trata de infraestructura para desarrolladores y captura búsquedas de alta intención.',
    b2Title: '02 / La Propuesta de Valor (H2)',
    b2Analysis: '"Reach humans" funciona en EE.UU. pero traducido como "llegar a humanos" resulta extraño e informal en LATAM y España. Los ingenieros evalúan infraestructura según métricas reales: tasa de entrega en la bandeja de entrada, configuración rápida de SPF/DKIM y velocidad de envío masivo.',
    b3Title: '03 / Llamada a la Acción Principal (CTA)',
    b3Analysis: 'CTAs genéricos como "Empezar" ofrecen cero impulso técnico. Un desarrollador probando infraestructura no quiere un formulario largo; quiere copiar una clave de API, ejecutar un `curl` o probar una plantilla en tiempo real.',
    s3Title: 'Impacto en Producción Real',
    s3Heading: '01 / Arquitectura de Email con Componentes React',
    s3UsBaseline: 'Write emails using React components. Modern email templates without HTML tables.',
    s3TradAgencyEs: 'Escribe correos usando componentes React. Plantillas modernas sin tablas HTML.',
    s3TradAgencyDe: 'Schreiben Sie E-Mails mit React-Komponenten. Moderne Vorlagen ohne HTML-Tabellen.',
    s3RefinedEs: 'Componentes React para email con renderizado automático sin tablas HTML en Outlook.',
    s3RefinedDe: 'Code-native E-Mail-Templates mit React. Einwandfreies Rendering ohne HTML-Tabellen-Hacks.',
    s3Analysis: 'La traducción tradicional hace que parezca una herramienta de edición para redactores. A los desarrolladores frontend les importa solucionar un problema real: evitar que los correos se rompan en clientes antiguos como Outlook sin escribir tablas HTML a mano.',
    ctaTitle: 'Deja de perder clientes técnicos internacionales',
    ctaBody: 'Auditamos documentación para desarrolladores, flujos de API y landing pages para eliminar la fricción regional y aumentar el registro de usuarios en Europa y LATAM.',
    ctaPrimary: 'Reservar Auditoría en Vivo (15 min)',
    ctaSecondary: 'Contactar al Equipo Técnico',
    returnDir: '← Volver al Directorio',
    usBaseline: 'Texto Actual (EE.UU.)',
    tradAgency: 'Traducción Tradicional',
    refinedIntent: 'Texto Técnico de Alta Conversión'
  },
  de: {
    navTag: 'Lokalisierungs-Audit #04',
    title: 'Resend: Warum US-Tech-Messaging im DACH-Raum scheitert',
    subtitle: 'Wie wortwörtliche Übersetzungen B2B-Infrastruktur in billiges Webmail verwandeln und Leads kosten.',
    readingTime: '6 Min. Lesezeit',
    date: 'September 2026',
    client: 'Resend',
    markets: 'EU, LATAM, DACH',
    audience: 'CTOs & Lead Engineers',
    s1Title: 'Executive Summary / Das kommerzielle Problem',
    overviewHeading: 'Wortwörtliche Texte kosten B2B-Umsatz',
    overviewBody: 'In den USA klingt „Email for developers“ nahbar. Im DACH-Raum führt die Übersetzung „E-Mail für Entwickler“ zu falscher Kategorisierung. Technische Entscheider denken an Postfächer statt an hochverfügbare E-Mail-APIs für transaktionale Workflows.',
    overviewSub: 'CTOs und Senior Engineers kaufen keine Versprechen – sie kaufen Posteingangszustellbarkeit, funktionierende Outlook-Darstellung und zuverlässige Webhooks. Dieses Audit deckt Schwachstellen im aktuellen Auftritt auf.',
    s2Title: 'Teardown / Konvertierungsfrikation auf der Homepage',
    b1Title: '01 / Die Hauptüberschrift (H1)',
    b1Analysis: 'Wortwörtliche Übersetzungen ordnen das Produkt falsch ein. Das Einfügen von „API“ macht sofort klar, dass es sich um Entwickler-Infrastruktur handelt, und bedient direkte B2B-Suchanfragen.',
    b2Title: '02 / Das Wertversprechen (H2)',
    b2Analysis: '„Reach humans“ klingt auf Deutsch („Menschen erreichen“) im B2B-Kontext unprofessionell. Lead Engineers bewerten E-Mail-Infrastruktur nach Posteingangsraten, DKIM/SPF-Einrichtung und Durchsatz unter Volllast.',
    b3Title: '03 / Primärer Call-to-Action (CTA)',
    b3Analysis: 'Ein schwacher CTA wie „Loslegen“ bremst Entwickler ab. Wer eine API testen will, sucht keine Umfragen, sondern will direkt einen API-Key erstellen oder ein Payload-Beispiel ausführen.',
    s3Title: 'Praktischer Auswirkung im Live-Betrieb',
    s3Heading: '01 / React Email & Komponenten-Architektur',
    s3UsBaseline: 'Write emails using React components. Modern email templates without HTML tables.',
    s3TradAgencyEs: 'Escribe correos usando componentes React. Plantillas modernas sin tablas HTML.',
    s3TradAgencyDe: 'Schreiben Sie E-Mails mit React-Komponenten. Moderne Vorlagen ohne HTML-Tabellen.',
    s3RefinedEs: 'Componentes React para email con renderizado automático sin tablas HTML en Outlook.',
    s3RefinedDe: 'Code-native E-Mail-Templates mit React. Einwandfreies Rendering ohne HTML-Tabellen-Hacks.',
    s3Analysis: 'Normale Übersetzungen klingen nach Editoren für Marketingteams. Frontend-Architekten wollen wissen, ob das Tool das fehlerfreie Rendering in Outlook garantiert, ohne dass manuelle HTML-Tabellen geschrieben werden müssen.',
    ctaTitle: 'Internationale Entwickler-Pipelines optimieren',
    ctaBody: 'Wir analysieren Entwickler-Dokumentationen, API-Onboarding-Prozesse und Landingpages, um regionale Frikation zu beseitigen und die Aktivierung in der EU zu steigern.',
    ctaPrimary: '15-Min. Live-Audit buchen',
    ctaSecondary: 'Entwickler-Team kontaktieren',
    returnDir: '← Zurück zum Verzeichnis',
    usBaseline: 'Aktueller US-Text',
    tradAgency: 'Standard-Übersetzung',
    refinedIntent: 'Konvertierender Fachtext'
  }
};

export default function ResendAuditPage() {
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
                <p className="text-bone-300 italic">"Email for developers."</p>
              </div>
              
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-bone-600 mb-2">{t.tradAgency}</p>
                <ul className="text-bone-300 space-y-1 font-mono text-xs">
                  <li><span className="text-bone-500 mr-2">ES:</span> Correo electrónico para desarrolladores.</li>
                  <li><span className="text-bone-500 mr-2">DE:</span> E-Mail für Entwickler.</li>
                </ul>
              </div>

              <div className="border-l-2 border-signal-gold pl-4 py-1">
                <p className="font-mono text-[10px] uppercase tracking-widest text-signal-gold mb-2">{t.refinedIntent}</p>
                <ul className="text-bone-100 font-medium space-y-1 font-mono text-xs">
                  <li><span className="text-bone-500 font-normal mr-2">ES:</span> La API de email para desarrolladores.</li>
                  <li><span className="text-bone-500 font-normal mr-2">DE:</span> Die E-Mail-API für Entwickler.</li>
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
                <p className="text-bone-300 italic">"The best API to reach humans instead of spam folders. Build, test, and deliver transactional emails at scale."</p>
              </div>
              
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-bone-600 mb-2">{t.tradAgency}</p>
                <ul className="text-bone-300 space-y-1 font-mono text-xs">
                  <li><span className="text-bone-500 mr-2">ES:</span> La mejor API para llegar a humanos en lugar de carpetas de spam...</li>
                  <li><span className="text-bone-500 mr-2">DE:</span> Die beste API, um Menschen statt Spam-Ordner zu erreichen...</li>
                </ul>
              </div>

              <div className="border-l-2 border-signal-gold pl-4 py-1">
                <p className="font-mono text-[10px] uppercase tracking-widest text-signal-gold mb-2">{t.refinedIntent}</p>
                <ul className="text-bone-100 font-medium space-y-1 font-mono text-xs">
                  <li><span className="text-bone-500 font-normal mr-2">ES:</span> Entregabilidad directa al inbox. Envía correos transaccionales a escala con soporte para React.</li>
                  <li><span className="text-bone-500 font-normal mr-2">DE:</span> Maximale Posteingangszustellbarkeit. Transaktionale E-Mails im großen Stil versenden.</li>
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
                <p className="text-bone-300 italic">"Get Started"</p>
              </div>
              
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-bone-600 mb-2">{t.tradAgency}</p>
                <ul className="text-bone-300 space-y-1 font-mono text-xs">
                  <li><span className="text-bone-500 mr-2">ES:</span> Empezar</li>
                  <li><span className="text-bone-500 mr-2">DE:</span> Loslegen</li>
                </ul>
              </div>

              <div className="border-l-2 border-signal-gold pl-4 py-1">
                <p className="font-mono text-[10px] uppercase tracking-widest text-signal-gold mb-2">{t.refinedIntent}</p>
                <ul className="text-bone-100 font-medium space-y-1 font-mono text-xs">
                  <li><span className="text-bone-500 font-normal mr-2">ES:</span> Generar clave API gratis / Probar en Sandbox</li>
                  <li><span className="text-bone-500 font-normal mr-2">DE:</span> Gratis API-Key erstellen / Sandbox testen</li>
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
