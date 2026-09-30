'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const AUDIT_CONTENT = {
  en: {
    navTag: 'Localization Audit #05',
    title: 'Vercel: Edge Caching & Serverless Regionalization Audit',
    subtitle: 'Deconstructing US frontend cloud narratives for strict DACH operational compliance.',
    readingTime: '9 min read',
    date: 'October 2026',
    client: 'Vercel',
    markets: 'DACH, EU, LATAM',
    audience: 'VP Engineering & Infrastructure Leads',
    s1Title: 'Section 1 / Perspective & Intent',
    overviewHeading: 'Context & Intent',
    overviewBody: 'Vercel’s US tagline "Develop. Preview. Ship." relies on active verb acceleration that works natively in Silicon Valley. However, when entering DACH and European enterprise procurement, literal translations like "Ausliefern" or "Expédier" connote physical logistics or transportation rather than high-availability edge infrastructure.',
    overviewSub: 'This audit re-architects Vercel’s core value proposition for enterprise architects who evaluate edge platforms based on latency guarantees, cache-control header precision, and regional data routing compliance.',
    s2Title: 'Section 2 / Core Acquisition Teardown',
    b1Title: '01 / The Primary Headline (H1)',
    b1Analysis: 'In German-speaking markets, "The Frontend Cloud" reads as an overly broad marketing abstraction. Lead engineers require precise infrastructural positioning. Replacing vague slogans with explicit edge network architecture establishes technical credibility during security and architecture reviews.',
    b2Title: '02 / Serverless & Caching Narrative (H2)',
    b2Analysis: 'US copy highlights speed and developer delight ("Instant deployments"). European procurement leads focus on fault tolerance, edge cache invalidate rules, and fallback stability under heavy payload loads.',
    b3Title: '03 / Primary Call to Action (CTA)',
    b3Analysis: 'Slogans like "Start Deploying" feel non-committal to technical decision-makers. High-intent enterprise leads respond to functional, diagnostic actions such as deploying a sandbox payload or testing edge routing latency.',
    s3Title: 'Section 3 / Applied Surface Audits',
    s3Heading: '01 / Incremental Static Regeneration (ISR) & Cache Directives',
    s3UsBaseline: 'Instant static regeneration and stale-while-revalidate headers out of the box.',
    s3TradAgencyEs: 'Regeneración estática instantánea y encabezados stale-while-revalidate listos para usar.',
    s3TradAgencyDe: 'Sofortige statische Regenerierung und Stale-while-revalidate-Header direkt einsatzbereit.',
    s3RefinedEs: 'Invalidación asíncrona de caché en el borde (ISR) y directivas Cache-Control deterministas sin purgas manuales.',
    s3RefinedDe: 'Asynchrone Edge-Cache-Invalidierung (ISR) und deterministische Cache-Control-Header ohne manuelle Purgings.',
    s3Analysis: 'US marketing framing presents ISR as a magic trick ("instant"). European DevOps leads demand explicit technical clarity on asynchronous cache purging, edge TTL behavior, and stale-while-revalidate fallbacks under high load.',
    returnDir: '← Return to Directory',
    usBaseline: 'US Baseline',
    tradAgency: 'Traditional Agency Output',
    refinedIntent: 'Refined Technical Intent'
  },
  de: {
    navTag: 'Lokalisierungs-Audit #05',
    title: 'Vercel: Edge-Caching & Serverless-Regionalisierung',
    subtitle: 'Dekonstruktion von US-Frontend-Cloud-Narrativen für DACH-Compliance-Standards.',
    readingTime: '9 Min. Lesezeit',
    date: 'Oktober 2026',
    client: 'Vercel',
    markets: 'DACH, EU, LATAM',
    audience: 'VP Engineering & Infrastruktur-Leiter',
    s1Title: 'Abschnitt 1 / Perspektive & Intent',
    overviewHeading: 'Kontext & Zielsetzung',
    overviewBody: 'Der US-Slogan „Develop. Preview. Ship.“ nutzt in den USA funktionierende Aktionsverben. Im deutschen Enterprise-Einkauf wirkt „Ausliefern“ jedoch wie physische Logistik statt hochverfügbarer Edge-Infrastruktur.',
    overviewSub: 'Dieses Audit strukturiert Vercels Versprechen für Enterprise-Architekten um, die Plattformen nach Latenzgarantien, Cache-Control-Präzision und DSGVO-Konformität bewerten.',
    s2Title: 'Abschnitt 2 / Strukturelle Akquisitions-Analyse',
    b1Title: '01 / Die Hauptüberschrift (H1)',
    b1Analysis: 'Im DACH-Raum ist „Frontend Cloud“ zu unkonkret. Technische Einkäufer benötigen direkte Zuordnung zu Edge-Netzwerken, Serverless-Laufzeiten und Next.js-Infrastruktur.',
    b2Title: '02 / Serverless- & Caching-Narrativ (H2)',
    b2Analysis: 'US-Texte betonen „Instant Deployments“. Europäische Engineering-Leads prüfen Failover-Sicherheit, Cache-Invalidierung und Edge-Routing unter Last.',
    b3Title: '03 / Primärer Call-to-Action (CTA)',
    b3Analysis: '„Jetzt deployen“ ist für Enterprise-Entscheider ohne Aussagekraft. Erforderlich ist ein klarer Einstieg in technische Tests oder Sandbox-Evaluierungen.',
    s3Title: 'Abschnitt 3 / Angewandte Oberflächen-Audits',
    s3Heading: '01 / Enterprise Cache-Control & ISR Dokumentation',
    s3UsBaseline: 'Instant static regeneration and stale-while-revalidate headers out of the box.',
    s3TradAgencyEs: 'Regeneración estática instantánea y encabezados stale-while-revalidate listos para usar.',
    s3TradAgencyDe: 'Sofortige statische Regenerierung und Stale-while-revalidate-Header direkt einsatzbereit.',
    s3RefinedEs: 'Invalidación asíncrona de caché en el borde (ISR) y directivas Cache-Control deterministas sin purgas manuales.',
    s3RefinedDe: 'Asynchrone Edge-Cache-Invalidierung (ISR) und deterministische Cache-Control-Header ohne manuelle Purgings.',
    s3Analysis: 'Bei Incremental Static Regeneration (ISR) müssen Fachbegriffe exakt sitzen. Wörtliche Übersetzungen verwischen Cache-Zustände und führen zu Unklarheiten bei Sicherheitsaudits.',
    returnDir: '← Zurück zum Verzeichnis',
    usBaseline: 'US-Ausgangslage',
    tradAgency: 'Klassisches Agenturergebnis',
    refinedIntent: 'Präzisierter technischer Intent'
  },
  es: {
    navTag: 'Auditoría de Localización #05',
    title: 'Vercel: Auditoría de Caching en el Borde y Servidor Dedicado',
    subtitle: 'Reestructuración de la narrativa de nube frontend para estándares corporativos en Europa y LATAM.',
    readingTime: '9 min de lectura',
    date: 'Octubre 2026',
    client: 'Vercel',
    markets: 'DACH, EU, LATAM',
    audience: 'VP de Ingeniería y Arquitectos de Sistema',
    s1Title: 'Sección 1 / Perspectiva e Intención',
    overviewHeading: 'Contexto y Objetivo',
    overviewBody: 'El eslogan de EE. UU. "Develop. Preview. Ship." utiliza verbos de aceleración directa. Traducidos literalmente como "Desplegar. Enviar.", pierden peso técnico ante decisores corporativos que evalúan resiliencia y latencia de red.',
    overviewSub: 'Esta auditoría ajusta el posicionamiento de Vercel para arquitectos de software que requieren garantías formales sobre tiempo de actividad, control de caché y enrutamiento regional.',
    s2Title: 'Sección 2 / Desglose Estructural de Adquisición',
    b1Title: '01 / El Titular Principal (H1)',
    b1Analysis: 'En el mercado hispanohablante, "La nube frontend" suena como una abstracción publicitaria. Los líderes técnicos prefieren especificación sobre infraestructura Edge y ejecución Next.js.',
    b2Title: '02 / Propuesta de Caching y Serverless (H2)',
    b2Analysis: 'En lugar de promesas genéricas de velocidad, los evaluadores buscan estabilidad en la invalidación de caché y tolerancia a fallos en el borde.',
    b3Title: '03 / Llamada a la Acción Principal (CTA)',
    b3Analysis: '"Comenzar despliegue" es demasiado pasivo. Se requiere un CTA técnico centrado en pruebas de rendimiento o integración.',
    s3Title: 'Sección 3 / Auditoría de Superficies Aplicadas',
    s3Heading: '01 / Documentación de ISR y Cache-Control',
    s3UsBaseline: 'Instant static regeneration and stale-while-revalidate headers out of the box.',
    s3TradAgencyEs: 'Regeneración estática instantánea y encabezados stale-while-revalidate listos para usar.',
    s3TradAgencyDe: 'Sofortige statische Regenerierung und Stale-while-revalidate-Header direkt einsatzbereit.',
    s3RefinedEs: 'Invalidación asíncrona de caché en el borde (ISR) y directivas Cache-Control deterministas sin purgas manuales.',
    s3RefinedDe: 'Asynchrone Edge-Cache-Invalidierung (ISR) und deterministische Cache-Control-Header ohne manuelle Purgings.',
    s3Analysis: 'La precisión conceptual en la regeneración estática incremental (ISR) evita malentendidos en evaluaciones de infraestructura crítica.',
    returnDir: '← Volver al Directorio',
    usBaseline: 'Línea Base (EE. UU.)',
    tradAgency: 'Resultado de Agencia Tradicional',
    refinedIntent: 'Intención Técnica Refinada'
  },
  fr: {
    navTag: 'Audit de Localisation #05',
    title: 'Vercel : Audit Réseau Edge & Caching Serverless',
    subtitle: 'Déconstruction des discours Cloud Frontend pour les normes d’ingénierie européennes.',
    readingTime: '9 min de lecture',
    date: 'Octobre 2026',
    client: 'Vercel',
    markets: 'DACH, EU, LATAM',
    audience: 'VP Engineering & Architectes Infrastructure',
    s1Title: 'Section 1 / Perspective & Intention',
    overviewHeading: 'Contexte & Objectif',
    overviewBody: 'En France et en Europe, "Ship" traduit par "Expédier" évoque le fret logistique plutôt qu’un déploiement à haute disponibilidad sur réseau Edge.',
    overviewSub: 'Cet audit réaligne le message sur les exigences d’infrastructure : invalidation de cache, temps de réponse Edge et conformité RGPD.',
    s2Title: 'Section 2 / Déconstruction de la Conversion',
    b1Title: '01 / Titre Principal (H1)',
    b1Analysis: 'L’expression "Frontend Cloud" manque de précision technique. La remplacer par une définition explicite de plateforme Edge renforce l’autorité auprès des architectes.',
    b2Title: '02 / Caching & Performances (H2)',
    b2Analysis: 'Les acheteurs techniques recherchent la tolérance aux pannes et la gestion précise des en-têtes HTTP plutôt que du jargon publicitaire.',
    b3Title: '03 / Appel à l’Action (CTA)',
    b3Analysis: 'Un CTA orienté diagnostic ("Tester l’infrastructure Edge") convertit mieux qu’un simple bouton d’inscription.',
    s3Title: 'Section 3 / Audit des Surfaces Appliquées',
    s3Heading: '01 / Documentation ISR & Invalidation de Cache',
    s3UsBaseline: 'Instant static regeneration and stale-while-revalidate headers out of the box.',
    s3TradAgencyEs: 'Regeneración estática instantánea y encabezados stale-while-revalidate listos para usar.',
    s3TradAgencyDe: 'Sofortige statische Regenerierung und Stale-while-revalidate-Header direkt einsatzbereit.',
    s3RefinedEs: 'Invalidación asíncrona de caché en el borde (ISR) y directivas Cache-Control deterministas sin purgas manuales.',
    s3RefinedDe: 'Asynchrone Edge-Cache-Invalidierung (ISR) und deterministische Cache-Control-Header ohne manuelle Purgings.',
    s3Analysis: 'La rigueur terminologique dans la documentation serverless garantit une adoption sans friction par les équipes DevOps.',
    returnDir: '← Retour au Répertoire',
    usBaseline: 'Référence US',
    tradAgency: 'Rendu Agence Traditionnelle',
    refinedIntent: 'Intention Technique Affinée'
  },
  it: {
    navTag: 'Audit di Localizzazione #05',
    title: 'Vercel: Audit Edge Caching e Infrastruttura Serverless',
    subtitle: 'Riconfigurazione delle narrative Frontend Cloud per i requisiti aziendali europei.',
    readingTime: '9 min di lettura',
    date: 'Ottobre 2026',
    client: 'Vercel',
    markets: 'DACH, EU, LATAM',
    audience: 'VP Engineering & Lead Architect',
    s1Title: 'Sezione 1 / Prospettiva e Intento',
    overviewHeading: 'Contesto e Obiettivo',
    overviewBody: 'La traduzione letterale del claim US "Develop. Preview. Ship." perde la sua carica innovativa nei processi di acquisto enterprise europei.',
    overviewSub: 'Questo audit riposiziona la piattaforma enfatizzando la resilienza del network Edge, il controllo delle intestazioni di cache e i tempi di latenza.',
    s2Title: 'Sezione 2 / Analisi Strutturale',
    b1Title: '01 / Titolo Principale (H1)',
    b1Analysis: 'Sostituire concetti generici con specifiche chiare sull’architettura Edge Next.js rassicura i responsabili della sicurezza informatica.',
    b2Title: '02 / Caching e Serverless (H2)',
    b2Analysis: 'Focalizzarsi sulle regole di invalidazione e sulla stabilità del sistema anziché solo sulla velocità superficiale.',
    b3Title: '03 / Call to Action (CTA)',
    b3Analysis: 'Privilegiare azioni ad alto valore tecnico come la verifica delle prestazioni Edge.',
    s3Title: 'Sezione 3 / Audit Documentazione',
    s3Heading: '01 / Controllo Cache ISR',
    s3UsBaseline: 'Instant static regeneration and stale-while-revalidate headers out of the box.',
    s3TradAgencyEs: 'Regeneración estática instantánea y encabezados stale-while-revalidate listos para usar.',
    s3TradAgencyDe: 'Sofortige statische Regenerierung und Stale-while-revalidate-Header direkt einsatzbereit.',
    s3RefinedEs: 'Invalidación asíncrona de caché en el borde (ISR) y directivas Cache-Control deterministas sin purgas manuales.',
    s3RefinedDe: 'Asynchrone Edge-Cache-Invalidierung (ISR) und deterministische Cache-Control-Header ohne manuelle Purgings.',
    s3Analysis: 'Garantire massima chiarezza nei termini relativi allo stato della cache ed all’invalidazione asincrona.',
    returnDir: '← Torna al Direttorio',
    usBaseline: 'Linea Base US',
    tradAgency: 'Output Agenzia Tradizionale',
    refinedIntent: 'Intento Tecnico Rifinito'
  },
  pt: {
    navTag: 'Auditoria de Localização #05',
    title: 'Vercel: Auditoria de Caching Edge e Serverless',
    subtitle: 'Adequação de narrativas Cloud Frontend para conformidade operacional na Europa e LATAM.',
    readingTime: '9 min de leitura',
    date: 'Outubro 2026',
    client: 'Vercel',
    markets: 'DACH, EU, LATAM',
    audience: 'VP de Engenharia & Arquitetos de Infraestrutura',
    s1Title: 'Seção 1 / Perspectiva e Intenção',
    overviewHeading: 'Contexto e Objetivo',
    overviewBody: 'Traduções literais do eslogan "Develop. Preview. Ship." soam como serviços de envio logístico no contexto B2B europeu e latino-americano.',
    overviewSub: 'Esta auditoria reestrutura a comunicação focando em baixa latência, resiliência de cache e distribuição global.',
    s2Title: 'Seção 2 / Análise de Conversão',
    b1Title: '01 / Título Principal (H1)',
    b1Analysis: 'Líderes de engenharia preferem definições diretas de infraestrutura Edge a termos de marketing como "Nuvem Frontend".',
    b2Title: '02 / Proposta de Caching e Invalidação (H2)',
    b2Analysis: 'O foco muda de velocidad genérica para controle de estado de cache e estabilidade sob alta demanda.',
    b3Title: '03 / Chamada para Ação (CTA)',
    b3Analysis: 'Substituir botões genéricos por testes diretos de ambiente e integração.',
    s3Title: 'Seção 3 / Documentação Técnica',
    s3Heading: '01 / Regeneração Estática Incremental (ISR)',
    s3UsBaseline: 'Instant static regeneration and stale-while-revalidate headers out of the box.',
    s3TradAgencyEs: 'Regeneración estática instantánea y encabezados stale-while-revalidate listos para usar.',
    s3TradAgencyDe: 'Sofortige statische Regenerierung und Stale-while-revalidate-Header direkt einsatzbereit.',
    s3RefinedEs: 'Invalidación asíncrona de caché en el borde (ISR) y directivas Cache-Control deterministas sin purgas manuales.',
    s3RefinedDe: 'Asynchrone Edge-Cache-Invalidierung (ISR) und deterministische Cache-Control-Header ohne manuelle Purgings.',
    s3Analysis: 'Alinhamento rigoroso dos vocábulos de engenharia para aprovação em auditorias de TI enterprise.',
    returnDir: '← Voltar ao Diretório',
    usBaseline: 'Linha de Base (EUA)',
    tradAgency: 'Resultado de Agência Tradicional',
    refinedIntent: 'Intenção Técnica Refinada'
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
                  <li><span className="text-bone-500 font-normal mr-2">DE:</span> Die globale Edge-Plattform für Next.js und Frontend-Infrastruktur.</li>
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
                  <li><span className="text-bone-500 font-normal mr-2">DE:</span> Edge-Invalidierung in Echtzeit und deterministische Serverless-Laufzeiten.</li>
                  <li><span className="text-bone-500 font-normal mr-2">ES:</span> Invalidación de caché en el borde y ejecución serverless con latencia mínima.</li>
                </ul>
              </div>
            </div>

            <p className="text-bone-300 leading-relaxed text-sm">
              {t.b1Analysis}
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
                  <li><span className="text-bone-500 font-normal mr-2">DE:</span> Edge-Infrastruktur testen / Projekt importieren</li>
                  <li><span className="text-bone-500 font-normal mr-2">ES:</span> Probar en sandbox / Importar proyecto</li>
                </ul>
              </div>
            </div>

            <p className="text-bone-300 leading-relaxed text-sm">
              {t.b3Analysis}
            </p>
          </div>
        </section>

        {/* Upgraded Section 3 */}
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
        
        <div className="mt-32 pt-8 border-t border-ink-700">
          <Link href="/" className="font-mono text-[10px] uppercase tracking-widest text-bone-500 hover:text-signal-gold transition-colors">
            {t.returnDir}
          </Link>
        </div>
      </main>
    </div>
  );
}
