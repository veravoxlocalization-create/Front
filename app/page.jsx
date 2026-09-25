'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';

const UI_TEXT = {
  de: {
    navTag: 'Editorial Advisory',
    h1: 'Lokalisierungsarchitektur für technische B2B-Märkte.',
    sub: 'Wörtliche Übersetzungen brechen die Konversionsabsicht in DACH. Wir passen Software-Narrative an die Standards europäischer Engineering-Teams an.',
    desc: 'Unpräzise Übersetzungen führen im europäischen Vertrieb zu Reibungsverlusten. VeraVox auditiert und strukturiert US-SaaS-Schnittstellen so um, dass sie den Anforderungen technischer Entscheidungsträger entsprechen. Ohne Marketing-Fluff. Mit klarem semantischen Bezug.',
    libraryLink: 'Audit-Bibliothek erkunden ↓',
    specTitle: 'Engagementspezifikation',
    targetMarkets: 'Zielmärkte',
    method: 'Methode',
    methodVal: 'strukturell, präzise',
    diagCall: 'Erstgespräch',
    fluff: 'Marketing-Fluff',
    teardownTitle: 'Beispiel: Der `Linear`-Teardown',
    teardownDesc: 'Eine Gegenüberstellung, wie Kernbotschaften für den deutschen Markt strukturell angepasst werden — von wörtlicher Übersetzung zu technischer Relevanz.',
    directRejected: 'Wörtliche Übersetzung — unpassend',
    structuralShipped: 'Strukturelle Anpassung — implementiert',
    whyFailedHeading: 'Analyse',
    whyFailedText: 'Begriffe wie "fastest" oder "high-performing" gelten im deutschen Engineering-Kontext als unbelegte Behauptungen.',
    anchorHeading: 'Kontextueller Anker',
    anchorHtml: '<span class="text-bone-100">nachvollziehbar</span> (verifiable, traceable) entspricht dem tatsächlichen Suchverhalten und den Qualitätskriterien technischer Einkäufer.',
    restructureHeading: 'Informationsarchitektur',
    restructureText: 'Die Priorisierung folgt der europäischen Dokumentationslogik: Funktion und Integrität stehen vor Geschwindigkeitsversprechen.',
    toggleInactive: 'Übersetzung anzeigen',
    toggleActive: 'Übersetzung ausblenden',
    aboutLink: 'Über / GEO-Engine',
    auditLibTitle: 'Audit-Bibliothek',
    auditLibDesc: 'Analysen zur Lokalisierungsintegrität und semantischen Konsistenz von B2B-Infrastrukturen.',
    freeAccess: 'Öffentlicher Zugriff',
    memo4: 'Memo Nr. 04',
    resendTitle: 'Resend',
    resendDesc: 'Auswertung der technischen Intent-Verteilung auf regionalen Konversionsflächen. Gegenüberstellung der US-Basisausrichtung gegenüber traditionellen Agenturausgaben.',
    readMemo: 'Resend-Audit lesen →',
    premium: 'Premium',
    memo5: 'Memo Nr. 05',
    memo6: 'Memo Nr. 06',
    subscriberOnly: 'Nur für Abonnenten',
    footerSub: 'Strukturelle Textanpassung für europäische Tech-Märkte (ES | FR | DE | IT | PT).',
    footerCopy: '© 2026 VeraVox — alle Texte auditiert, keiner davon übersetzt',
    newsletterTitle: 'Newsletter',
    newsletterDesc: 'Monatliche Memos zur Architektur von B2B-Lokalisierungen direkt in Ihrem Postfach.',
    newsletterTooltip: 'Inhalt: Analysen zu semantischer Drift, Positionierung von Developer Tools und Audit-Briefings.',
    subscribeBtn: 'Abonnieren',
    overrideBtn: 'US Original (Override)',
  },
  es: {
    navTag: 'Editorial Advisory',
    h1: 'Arquitectura de localización para software B2B técnico.',
    sub: 'Las traducciones literales rompen la intención de conversión. Adaptamos la narrativa de producto a los estándares de equipos de ingeniería europeos.',
    desc: 'Las traducciones genéricas generan fricción comercial en Europa. VeraVox audita y reestructura interfaces SaaS para alinear el mensaje con los criterios de evaluación técnica. Sin relleno corporativo. Con rigor semántico.',
    libraryLink: 'Explorar la Biblioteca de Auditorías ↓',
    specTitle: 'Especificación de proyecto',
    targetMarkets: 'Mercados objetivo',
    method: 'Método',
    methodVal: 'estructural, preciso',
    diagCall: 'Consulta inicial',
    fluff: 'Marketing vacío',
    teardownTitle: 'Caso de estudio: `Linear`',
    teardownDesc: 'Una comparativa sobre cómo reestructurar el mensaje central de un producto para compradores técnicos en Europa.',
    directRejected: 'Traducción literal — descartada',
    structuralShipped: 'Adaptación estructural — implementada',
    whyFailedHeading: 'Análisis',
    whyFailedText: 'Términos como "fastest" o "high-performing" se perciben como afirmaciones de marketing sin verificar en entornos de ingeniería.',
    anchorHeading: 'Anclaje contextual',
    anchorHtml: '<span class="text-bone-100">nachvollziehbar</span> (verificable, transparente) responde directamente a los criterios de evaluación de los equipos técnicos.',
    restructureHeading: 'Arquitectura de información',
    restructureText: 'Se prioriza la funcionalidad y la arquitectura sobre las promesas de velocidad publicitaria.',
    toggleInactive: 'Mostrar traducción',
    toggleActive: 'Ocultar traducción',
    aboutLink: 'Acerca de / Motor GEO',
    auditLibTitle: 'Biblioteca de Auditorías',
    auditLibDesc: 'Análisis sobre la integridad de localización y la consistencia semántica en plataformas B2B.',
    freeAccess: 'Acceso libre',
    memo4: 'Memo N° 04',
    resendTitle: 'Resend',
    resendDesc: 'Evaluación de la intención técnica en superficies de conversión regionales. Contraste de la intención base de EE. UU. frente al enfoque de agencias tradicionales.',
    readMemo: 'Leer auditoría Resend →',
    premium: 'Premium',
    memo5: 'Memo N° 05',
    memo6: 'Memo N° 06',
    subscriberOnly: 'Exclusivo para suscriptores',
    footerSub: 'Adaptación estructural de textos para mercados tecnológicos (ES | FR | DE | IT | PT).',
    footerCopy: '© 2026 VeraVox — todo el contenido auditado, ninguno traducido',
    newsletterTitle: 'Newsletter',
    newsletterDesc: 'Memorandos mensuales sobre arquitectura de localización para infraestructura B2B.',
    newsletterTooltip: 'Incluye: Análisis de deriva semántica, posicionamiento de developer tools y briefs de auditoría.',
    subscribeBtn: 'Suscribirse',
    overrideBtn: 'US Original (Override)',
  },
  fr: {
    navTag: 'Editorial Advisory',
    h1: 'Architecture de localisation pour logiciels B2B techniques.',
    sub: 'Les traductions littérales brisent l’intention de conversion. Nous adaptons la narration produit aux exigences des équipes d’ingénierie.',
    desc: 'Les traductions approximatives créent des frictions commerciales en Europe. VeraVox audite et restructure les interfaces SaaS pour aligner le message sur les critères d’évaluation technique. Sans jargon marketing. Avec une rigueur sémantique.',
    libraryLink: 'Explorer la bibliothèque d’audits ↓',
    specTitle: 'Spécification de mission',
    targetMarkets: 'Marchés cibles',
    method: 'Méthode',
    methodVal: 'structurelle, précise',
    diagCall: 'Entretien initial',
    fluff: 'Jargon marketing',
    teardownTitle: 'Étude de cas : `Linear`',
    teardownDesc: 'Une analyse comparative de la restructuration du message central pour un public technique européen.',
    directRejected: 'Traduction littérale — rejetée',
    structuralShipped: 'Adaptation structurelle — déployée',
    whyFailedHeading: 'Analyse',
    whyFailedText: 'Des termes comme "fastest" ou "high-performing" sont perçus comme des arguments marketing non vérifiables.',
    anchorHeading: 'Ancrage contextuel',
    anchorHtml: '<span class="text-bone-100">nachvollziehbar</span> (vérifiable, traçable) correspond aux critères de recherche réels des acheteurs techniques.',
    restructureHeading: 'Architecture de l’information',
    restructureText: 'L’organisation privilégie la clarté fonctionnelle et l’intégrité technique.',
    toggleInactive: 'Afficher la traduction',
    toggleActive: 'Masquer la traduction',
    aboutLink: 'À propos / Moteur GEO',
    auditLibTitle: 'Bibliothèque d’Audits',
    auditLibDesc: 'Analyses de l’intégrité de localisation et de la cohérence sémantique des environnements B2B.',
    freeAccess: 'Accès libre',
    memo4: 'Mémo n° 04',
    resendTitle: 'Resend',
    resendDesc: 'Évaluation de l’intention technique sur les surfaces de conversion régionales. Contraste entre intention américaine et agences traditionnelles.',
    readMemo: 'Lire l’audit Resend →',
    premium: 'Premium',
    memo5: 'Mémo n° 05',
    memo6: 'Mémo n° 06',
    subscriberOnly: 'Exclusif abonnés',
    footerSub: 'Adaptation textuelle structurelle pour les marchés tech (ES | FR | DE | IT | PT).',
    footerCopy: '© 2026 VeraVox — tout le contenu audité, aucun traduit',
    newsletterTitle: 'Newsletter',
    newsletterDesc: 'Mémos mensuels sur l’architecture de localisation directement dans votre boîte.',
    newsletterTooltip: 'Contenu : Analyses de dérive sémantique, positionnement d’outils dev et briefs d’audit.',
    subscribeBtn: 'S’inscrire',
    overrideBtn: 'US Original (Override)',
  },
  it: {
    navTag: 'Editorial Advisory',
    h1: 'Architettura di localizzazione per mercati B2B tecnici.',
    sub: 'Le traduzioni letterali rompono l’intenzione di conversione. Allineiamo le narrative di prodotto con le aspettative ingegneristiche.',
    desc: 'Traduzioni imprecise introducono attriti nei cicli di vendita tecnica. VeraVox audita e ristruttura le interfacce SaaS per riflettere i criteri di valutazione degli acquirenti tecnici. Zero fronzoli marketing. Rigore semantico.',
    libraryLink: 'Esplora la libreria di audit ↓',
    specTitle: 'Specifiche di progetto',
    targetMarkets: 'Mercati target',
    method: 'Metodo',
    methodVal: 'strutturale, preciso',
    diagCall: 'Consulenza iniziale',
    fluff: 'Marketing vuoto',
    teardownTitle: 'Caso studio: Il teardown di `Linear`',
    teardownDesc: 'Un esame di come il messaggio chiave viene adattato strutturalmente per acquirenti tecnici.',
    directRejected: 'Traduzione letterale — inadatta',
    structuralShipped: 'Adattamento strutturale — distribuito',
    whyFailedHeading: 'Analisi',
    whyFailedText: 'Superlativi come "fastest" e "high-performing" sono percepiti come affermazioni di marketing non verificate.',
    anchorHeading: 'Ancoraggio contestuale',
    anchorHtml: '<span class="text-bone-100">nachvollziehbar</span> (verificabile, tracciabile) riflette direttamente i criteri di convalida dei lead ingegneristici.',
    restructureHeading: 'Architettura informativa',
    restructureText: 'La priorità rispecchia la documentazione europea standard: funzione e integrità precedono le promesse di velocità.',
    toggleInactive: 'Mostra traduzione',
    toggleActive: 'Nascondi traduzione',
    aboutLink: 'Chi siamo / Motore GEO',
    auditLibTitle: 'Libreria Audit',
    auditLibDesc: 'Memorandum completi che valutano l’integrità della localizzazione e la coerenza semantica.',
    freeAccess: 'Accesso libero',
    memo4: 'Memo N. 04',
    resendTitle: 'Resend',
    resendDesc: 'Valutazione dell’intento tecnico sulle superfici di conversione regionali rispetto agli standard tradizionali.',
    readMemo: 'Leggi l’audit di Resend →',
    premium: 'Premium',
    memo5: 'Memo N. 05',
    memo6: 'Memo N. 06',
    subscriberOnly: 'Riservato agli abbonati',
    footerSub: 'Adattamento strutturale dei testi per i mercati tecnologici europei (ES | FR | DE | IT | PT).',
    footerCopy: '© 2026 VeraVox — tutti i contenuti auditati, nessuno tradotto',
    newsletterTitle: 'Newsletter',
    newsletterDesc: 'Memorandum mensili sull’architettura di localizzazione direttamente nella tua casella di posta.',
    newsletterTooltip: 'Include: Analisi della deriva semantica, posizionamento developer tools e brief di audit.',
    subscribeBtn: 'Iscriviti',
    overrideBtn: 'US Original (Override)',
  },
  pt: {
    navTag: 'Editorial Advisory',
    h1: 'Arquitetura de localização para mercados B2B técnicos.',
    sub: 'Traduções literais quebram a intenção de conversão. Alinhamos narrativas de produtos às expectativas de engenharia.',
    desc: 'Traduções não calibradas introduzem atrito nos ciclos de vendas técnicas. A VeraVox audita e estrutura interfaces SaaS para atender aos critérios de avaliação de compradores técnicos. Zero marketing vazio. Rigor semântico estrito.',
    libraryLink: 'Explorar a Biblioteca de Auditorias ↓',
    specTitle: 'Especificação do Projeto',
    targetMarkets: 'Mercados-alvo',
    method: 'Método',
    methodVal: 'estrutural, preciso',
    diagCall: 'Consulta inicial',
    fluff: 'Marketing superficial',
    teardownTitle: 'Estudo de caso: O teardown da `Linear`',
    teardownDesc: 'Uma análise de como a mensagem central é estruturalmente adaptada para compradores técnicos na Europa.',
    directRejected: 'Tradução literal — inadequada',
    structuralShipped: 'Adaptação estrutural — implementada',
    whyFailedHeading: 'Análise',
    whyFailedText: 'Termos superlativos são lidos como alegações de marketing sem verificação em contextos de engenharia.',
    anchorHeading: 'Âncora contextual',
    anchorHtml: '<span class="text-bone-100">nachvollziehbar</span> (verificável, rastreável) reflete diretamente os critérios de validação de equipes técnicas.',
    restructureHeading: 'Arquitetura da informação',
    restructureText: 'A priorização espelha a documentação europeia padrão: função e integridade vêm antes de promessas de velocidade.',
    toggleInactive: 'Mostrar tradução',
    toggleActive: 'Ocultar tradução',
    aboutLink: 'Sobre / Motor GEO',
    auditLibTitle: 'Biblioteca de Auditorias',
    auditLibDesc: 'Memorandos completos avaliando a integridade de localização e consistência semântica em superfícies B2B.',
    freeAccess: 'Acesso Livre',
    memo4: 'Memo Nº 04',
    resendTitle: 'Resend',
    resendDesc: 'Avaliação da intenção técnica em superfícies de conversão regionais e contraste com agências tradicionais.',
    readMemo: 'Ler auditoria da Resend →',
    premium: 'Premium',
    memo5: 'Memo Nº 05',
    memo6: 'Memo Nº 06',
    subscriberOnly: 'Exclusivo para assinantes',
    footerSub: 'Adaptação estrutural de texto para mercados tecnológicos europeus (ES | FR | DE | IT | PT).',
    footerCopy: '© 2026 VeraVox — todo o conteúdo auditado, nenhum traduzido',
    newsletterTitle: 'Newsletter',
    newsletterDesc: 'Memorandos mensais sobre arquitetura de localização entregues diretamente na sua caixa de entrada.',
    newsletterTooltip: 'Inclui: Análise de desvio semântico, posicionamento de ferramentas de desenvolvedor e resumos de auditoria.',
    subscribeBtn: 'Inscrever-se',
    overrideBtn: 'US Original (Override)',
  },
  en: {
    navTag: 'Editorial Advisory',
    h1: 'Localization architecture for technical B2B markets.',
    sub: 'Literal translations break conversion intent in European markets. We align product narratives with engineering expectations.',
    desc: 'Uncalibrated translations introduce friction in technical sales cycles. VeraVox audits and structures US SaaS interfaces to match the evaluation criteria of technical buyers. Zero marketing fluff. Strict semantic alignment.',
    libraryLink: 'Explore the Audit Library ↓',
    specTitle: 'Engagement Spec',
    targetMarkets: 'Target Markets',
    method: 'Method',
    methodVal: 'structural, precise',
    diagCall: 'Initial consultation',
    fluff: 'Marketing fluff',
    teardownTitle: 'Case study: The `Linear` teardown',
    teardownDesc: 'An examination of how core messaging is structurally adapted for technical buyers—moving from literal translation to functional relevance.',
    directRejected: 'Literal translation — unsuited',
    structuralShipped: 'Structural adaptation — deployed',
    whyFailedHeading: 'Analysis',
    whyFailedText: 'Superlatives like "fastest" and "high-performing" read as unverified marketing claims in technical procurement contexts.',
    anchorHeading: 'Contextual anchor',
    anchorHtml: '<span class="text-bone-100">nachvollziehbar</span> (verifiable, traceable) directly reflects the search intent and validation criteria of engineering leads.',
    restructureHeading: 'Information architecture',
    restructureText: 'Prioritization mirrors standard European documentation: function and architectural integrity precede speed claims.',
    toggleInactive: 'Show translation',
    toggleActive: 'Hide translation',
    aboutLink: 'About / GEO Engine',
    auditLibTitle: 'Audit Library',
    auditLibDesc: 'Full-length memorandums evaluating localization integrity and semantic consistency across B2B surfaces.',
    freeAccess: 'Free Access',
    memo4: 'Memo No. 04',
    resendTitle: 'Resend',
    resendDesc: 'Evaluating technical intent across regional conversion surfaces. Contrasting US baseline intent against traditional agency output.',
    readMemo: 'Read Resend audit →',
    premium: 'Premium',
    memo5: 'Memo No. 05',
    memo6: 'Memo No. 06',
    subscriberOnly: 'Subscriber-only',
    footerSub: 'Structural copy adaptation for European tech markets (ES | FR | DE | IT | PT).',
    footerCopy: '© 2026 VeraVox — all copy audited, none of it translated',
    newsletterTitle: 'Newsletter',
    newsletterDesc: 'Monthly memorandums on localization architecture delivered straight to your inbox.',
    newsletterTooltip: 'Includes: Semantic drift analysis, developer tool positioning frameworks, and audit briefs.',
    subscribeBtn: 'Subscribe',
    overrideBtn: 'View in Local Language',
  }
};

  

const TEARDOWN_CONTENT = {
  label: 'asset.headline — us-en → de-de',
  direct: 'Linear ist der schnellste Weg, moderne Software zu planen, zu verfolgen und auszuliefern — gebaut für die Geschwindigkeit leistungsstarker Teams.',
  structural: 'Linear strukturiert Planung, Entwicklung und Auslieferung in einem System — nachvollziehbar für Teams, die Präzision brauchen.',
  translations: {
    direct: {
      es: '(Linear es la forma más rápida de planificar, rastrear y enviar software moderno; creado para la velocidad de equipos de alto rendimiento.)',
      fr: '(Linear est le moyen le plus rapide de planifier, suivre et livrer des logiciels modernes — conçu pour la vitesse des équipes performantes.)',
      it: '(Linear è il modo più veloce per pianificare, tracciare e rilasciare software moderno — creato per la velocità di team ad alte prestazioni.)',
      pt: '(Linear é a maneira mais rápida de planejar, rastrear e entregar software moderno — construído para a velocidade de equipes de alto desempenho.)',
      en: '(Linear is the fastest way to plan, track, and ship modern software — built for the speed of high-performing teams.)'
    },
    structural: {
      es: '(Linear estructura la planificación, el desarrollo y la entrega en un solo sistema — comprensible para equipos que exigen precisión.)',
      fr: '(Linear structure la planification, le développement et la livraison en un seul système — traçable pour les équipes exigeant de la précision.)',
      it: '(Linear struttura pianificazione, sviluppo e rilascio in un unico sistema — tracciabile per i team che richiedono precisione.)',
      pt: '(Linear estrutura o planejamento, desenvolvimento e entrega em um único sistema — rastreável para equipes que exigem precisão.)',
      en: '(Linear structures planning, development, and delivery in one system — traceable for teams that require precision.)'
    }
  }
};

export default function Home() {
  const [lang, setLang] = useState('de');
  const [showInline, setShowInline] = useState(false);
  const t = UI_TEXT[lang] || UI_TEXT.en;

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(() => {});
    }
  }, []);

  return (
    <>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#09090b" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="apple-touch-icon" href="/icon.png" />
      </Head>

      <header className="border-b border-ink-700">
        <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <div className="flex items-baseline gap-6">
  <Link href="#top" className="font-display font-semibold text-lg tracking-tight text-bone-100">VeraVox</Link>
  <Link href="/about" className="hidden md:block font-mono text-xs text-bone-500 hover:text-signal-gold transition-colors">{t.aboutLink}</Link>
</div>


          <div className="flex items-center gap-2 md:gap-3 font-mono text-xs">
            {['es', 'fr', 'de', 'it', 'pt'].map((l) => (
              <React.Fragment key={l}>
                <button
                  onClick={() => setLang(l)}
                                    className={`bg-transparent border-0 p-0 cursor-pointer transition-colors hover:text-bone-300 ${lang === l ? 'text-signal-gold' : 'text-bone-500'}`}
                >
                  {l.toUpperCase()}
                </button>
                <span className="text-ink-600">/</span>
              </React.Fragment>
            ))}
            
            {/* Japanese Coming Soon with Hover Tooltip */}
            <div className="group relative cursor-not-allowed inline-flex items-center">
              <span className="text-bone-600">JA...</span>
              <div className="absolute bottom-full right-0 mb-2 w-48 p-2.5 bg-ink-900 border border-ink-700 font-mono text-[10px] text-bone-300 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-30 text-left">
                Future release including Japanese localization modules.
              </div>
            </div>

            <button
              onClick={() => setLang(lang === 'en' ? 'de' : 'en')}
              className={`ml-2 px-2.5 py-1 border font-mono text-[10px] uppercase tracking-wider transition-colors cursor-pointer rounded-sm ${
                lang === 'en' 
                  ? 'bg-signal-gold text-ink-950 border-signal-gold font-medium' 
                  : 'bg-transparent text-signal-gold border-signal-gold/40 hover:border-signal-gold'
              }`}
            >
              {lang === 'en' ? 'EN (Active) ⟲' : 'US Override'}
            </button>
          </div>
        </div>
      </header>

      <section id="top" className="max-w-6xl mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-20 md:pb-28">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          <div className="lg:col-span-7">
            <h1 className="hero-in d1 font-display font-semibold text-4xl sm:text-5xl md:text-[3.4rem] leading-[1.08] tracking-tight text-bone-100 max-w-xl">
              {t.h1}
            </h1>
            <p className="hero-in d2 mt-6 text-lg md:text-xl text-bone-300 max-w-lg leading-relaxed">
              {t.sub}
            </p>
            <p className="hero-in d3 mt-8 text-base text-bone-500 max-w-md leading-relaxed">
              {t.desc}
            </p>
            <div className="hero-in d4 mt-10">
              <Link href="#audits" className="rule-hover inline-block text-sm font-medium text-bone-100 pb-0.5">
                {t.libraryLink}
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 lg:pt-2">
            <div className="hero-in d3 border border-ink-700 bg-ink-900">
              <div className="px-5 py-3 border-b border-ink-700 font-mono text-xs text-bone-500">
                {t.specTitle}
              </div>
              <dl className="divide-y divide-ink-700">
                <div className="flex items-center justify-between px-5 py-4">
                  <dt className="text-sm text-bone-500">{t.targetMarkets}</dt>
                  <dd className="font-mono text-sm text-bone-100">ES · FR · DE · IT · PT</dd>
                </div>
                <div className="flex items-center justify-between px-5 py-4">
                  <dt className="text-sm text-bone-500">{t.method}</dt>
                  <dd className="font-mono text-sm text-bone-100">{t.methodVal}</dd>
                </div>
                <div className="flex items-center justify-between px-5 py-4">
                  <dt className="text-sm text-bone-500">{t.diagCall}</dt>
                  <dd className="font-mono text-sm text-bone-100">60 min</dd>
                </div>
                <div className="flex items-center justify-between px-5 py-4">
                  <dt className="text-sm text-bone-500">{t.fluff}</dt>
                  <dd className="font-mono text-sm text-signal-green">0%</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section id="teardown" className="border-t border-ink-700 bg-ink-900/40">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="max-w-xl mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="font-display font-semibold text-3xl md:text-4xl tracking-tight text-bone-100">
                {t.teardownTitle}
              </h2>
              <p className="mt-4 text-base text-bone-500 leading-relaxed">
                {t.teardownDesc}
              </p>
            </div>
            {lang !== 'de' && (
              <button 
  onClick={() => setShowInline(!showInline)}
  className="font-mono text-xs text-signal-gold bg-transparent border border-signal-gold/30 px-3 py-1.5 cursor-pointer hover:border-signal-gold transition-colors self-start sm:self-auto rounded-sm"
>
  {showInline ? `✕ ${t.toggleActive}` : `+ ${t.toggleInactive}`}
</button>


            )}
          </div>
          
          <div className="border border-ink-700 bg-ink-950">
            <div className="flex items-center justify-between px-5 py-3 border-b border-ink-700">
              <span className="font-mono text-xs text-bone-500">{TEARDOWN_CONTENT.label}</span>
              <span className="font-mono text-xs text-bone-500">illustrative example</span>
            </div>
            <div className="grid md:grid-cols-[1fr_auto] divide-y md:divide-y-0 divide-ink-700">
              <div className="divide-y divide-ink-700">
                <div className="flex gap-4 px-5 py-5">
                  <span className="font-mono text-signal-red select-none mt-0.5">−</span>
                  <div>
                    <p className="font-mono text-xs text-signal-red mb-2">{t.directRejected}</p>
                    <p className="text-bone-500 line-through decoration-signal-red/60 leading-relaxed">
                      {TEARDOWN_CONTENT.direct}
                      {showInline && lang !== 'de' && (
                        <span className="block mt-1.5 text-xs text-signal-red/80 font-mono">
                          {TEARDOWN_CONTENT.translations.direct[lang] || TEARDOWN_CONTENT.translations.direct.en}
                        </span>
                      )}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 px-5 py-5">
                  <span className="font-mono text-signal-green select-none mt-0.5">+</span>
                  <div>
                    <p className="font-mono text-xs text-signal-green mb-2">{t.structuralShipped}</p>
                    <p className="text-bone-100 leading-relaxed">
                      {TEARDOWN_CONTENT.structural}
                      {showInline && lang !== 'de' && (
                        <span className="block mt-1.5 text-xs text-signal-green/80 font-mono">
                          {TEARDOWN_CONTENT.translations.structural[lang] || TEARDOWN_CONTENT.translations.structural.en}
                        </span>
                      )}
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-5 py-5 md:w-72 md:border-l border-ink-700 space-y-5">
                <div>
                  <p className="font-mono text-xs text-bone-500 mb-1">{t.whyFailedHeading}</p>
                  <p className="text-sm text-bone-300 leading-relaxed">{t.whyFailedText}</p>
                </div>
                <div>
                  <p className="font-mono text-xs text-bone-500 mb-1">{t.anchorHeading}</p>
                  <p className="text-sm text-bone-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: t.anchorHtml }} />
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

      <section id="audits" className="border-t border-ink-700 bg-ink-950">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="max-w-xl mb-12">
            <h2 className="font-display font-semibold text-3xl md:text-4xl tracking-tight text-bone-100">
              {t.auditLibTitle}
            </h2>
            <p className="mt-4 text-base text-bone-500 leading-relaxed">
              {t.auditLibDesc}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/audits/resend" className="group block border border-ink-700 bg-ink-900 p-6 hover:border-signal-gold transition-colors flex flex-col justify-between h-full">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="font-mono text-xs text-signal-green uppercase tracking-wider">{t.freeAccess}</span>
                  <span className="font-mono text-xs text-bone-500">{t.memo4}</span>
                </div>
                <h3 className="font-display text-xl text-bone-100 mb-2 group-hover:text-signal-gold transition-colors">{t.resendTitle}</h3>
                <p className="text-sm text-bone-500 leading-relaxed mb-6">{t.resendDesc}</p>
              </div>
              <div className="font-mono text-xs text-bone-300 flex items-center gap-2">
                {t.readMemo}
              </div>
            </Link>

            <div className="border border-ink-700 bg-ink-900/50 p-6 flex flex-col justify-between h-full opacity-75">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="font-mono text-xs text-bone-500 uppercase tracking-wider">{t.premium}</span>
                  <span className="font-mono text-xs text-bone-500">{t.memo5}</span>
                </div>
                <h3 className="font-display text-xl text-bone-300 mb-2">Vercel</h3>
                <p className="text-sm text-bone-600 leading-relaxed mb-6">Deconstructing enterprise caching documentation for strict DACH compliance and operational rigor.</p>
              </div>
              <div className="font-mono text-xs text-bone-600">
                {t.subscriberOnly}
              </div>
            </div>

            <div className="border border-ink-700 bg-ink-900/50 p-6 flex flex-col justify-between h-full opacity-75">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="font-mono text-xs text-bone-500 uppercase tracking-wider">{t.premium}</span>
                  <span className="font-mono text-xs text-bone-500">{t.memo6}</span>
                </div>
                <h3 className="font-display text-xl text-bone-300 mb-2">Supabase</h3>
                <p className="text-sm text-bone-600 leading-relaxed mb-6">Shifting US conversational abstractions into declarative database management vernacular for LATAM engineering teams.</p>
              </div>
              <div className="font-mono text-xs text-bone-600">
                {t.subscriberOnly}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-ink-700 bg-ink-950 py-20">
        <div className="max-w-xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="font-mono text-[10px] uppercase tracking-widest text-signal-gold">{t.newsletterTitle}</div>
            <div className="group relative cursor-help inline-block">
              <span className="font-mono text-[10px] text-bone-500 border border-ink-700 rounded-full px-1.5 py-0.2 hover:border-signal-gold transition-colors">i</span>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-ink-900 border border-ink-700 font-mono text-[11px] text-bone-300 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 text-left leading-relaxed">
                {t.newsletterTooltip}
              </div>
            </div>
          </div>
          
          <h3 className="font-display text-2xl text-bone-100 mb-2">{t.newsletterTitle}</h3>
          <p className="text-sm text-bone-400 mb-8 max-w-md mx-auto">{t.newsletterDesc}</p>
          
          <form onSubmit={(e) => { e.preventDefault(); alert('Subscribed successfully.'); }} className="flex gap-2 max-w-md mx-auto">
            <input 
              type="email" 
              required 
              placeholder="name@company.com" 
              className="bg-ink-900 border border-ink-700 px-4 py-2.5 text-sm text-bone-100 focus:outline-none focus:border-signal-gold flex-1 font-mono rounded-none"
            />
            <button 
              type="submit" 
              className="bg-ink-900 border border-ink-700 px-6 py-2.5 font-mono text-xs text-bone-200 hover:border-signal-gold hover:text-signal-gold transition-colors cursor-pointer uppercase tracking-wider rounded-none"
            >
              {t.subscribeBtn}
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-ink-700">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-14">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
  <p className="font-display font-semibold text-lg text-bone-100">VeraVox Localization</p>
  <div className="flex items-center gap-4 mt-1">
    <p className="text-sm text-bone-500">Audits &amp; native re-engineering.</p>
    <span className="text-ink-700">|</span>
    <Link href="/about" className="text-sm font-mono text-bone-400 hover:text-signal-gold transition-colors">{t.aboutLink}</Link>
  </div>
  <p className="text-sm text-bone-500 mt-4 max-w-sm leading-relaxed">{t.footerSub}</p>
</div>


            <div className="font-mono text-xs text-bone-500">
              {t.footerCopy}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
