'use client';

import React, { useState } from 'react';
import Link from 'next/link';

type Language = 'en' | 'de' | 'es' | 'fr' | 'it' | 'pt' | 'ja';

const AUDIT_CONTENT: Record<Language, {
  navTag: string;
  title: string;
  subtitle: string;
  readingTime: string;
  date: string;
  client: string;
  markets: string;
  audience: string;
  s1Title: string;
  overviewHeading: string;
  overviewBody: string;
  overviewSub: string;
  s2Title: string;
  items: Array<{
    id: string;
    label: string;
    usBaseline: string;
    rejectedLabel: string;
    tradAgency: string;
    shippedLabel: string;
    refinedIntent: string;
    whyFailedHeading: string;
    whyFailedText: string;
    anchorHeading: string;
    anchorHtml: string;
    restructureHeading: string;
    restructureText: string;
  }>;
  s3Title: string;
  s3Heading: string;
  s3Body: string;
  returnDir: string;
  exportPdf: string;
}> = {
  en: {
    navTag: 'Localization Audit #09',
    title: 'Clerk: Identity & User Security Regionalization Audit',
    subtitle: 'Adapting authentication narratives from US friction-free growth copy to European security frameworks.',
    readingTime: '8 min read',
    date: 'December 2026',
    client: 'Clerk',
    markets: 'EU, DACH, LATAM, JP',
    audience: 'Chief Information Security Officers & SaaS Architects',
    s1Title: 'Section 1 / Perspective & Intent',
    overviewHeading: 'Context & Intent',
    overviewBody: 'Clerk’s US copy "More than authentication. Complete user management." focuses on rapid integration and frictionless UI components. In European SaaS security reviews, CISOs evaluate authentication vendors based on OpenID Connect (OIDC) compliance, multi-factor security, SOC2/ISO auditability, and European tenant isolation.',
    overviewSub: 'This audit repositions Clerk’s drop-in auth components around zero-trust identity management and regulatory data protection.',
    s2Title: 'Section 2 / Core Acquisition Teardown',
    items: [
      {
        id: 'h1',
        label: 'asset.headline — us-en → eu-regional',
        usBaseline: 'More than authentication. Complete user management.',
        rejectedLabel: 'direct translation — rejected',
        tradAgency: 'Mehr als Authentifizierung. Vollständige Benutzerverwaltung.',
        shippedLabel: 'structural adaptation — shipped',
        refinedIntent: 'Identitätsinfrastruktur und DSGVO-konforme Benutzerverwaltung für B2B-SaaS.',
        whyFailedHeading: 'Analysis',
        whyFailedText: '"Complete user management" sounds like light consumer CRM software to European procurement officers evaluating auth systems.',
        anchorHeading: 'Contextual anchor',
        anchorHtml: '<span class="text-bone-100">Identitätsinfrastruktur</span> establishes enterprise security posture over consumer-grade convenience.',
        restructureHeading: 'Information architecture',
        restructureText: 'Replaces generic management claims with explicit compliance and infrastructure security framing.'
      },
      {
        id: 'h2',
        label: 'asset.subhead — us-en → eu-regional',
        usBaseline: 'Frictionless sign-in components for modern web apps.',
        rejectedLabel: 'direct translation — rejected',
        tradAgency: 'Reibungslose Anmeldekomponenten für moderne Web-Apps.',
        shippedLabel: 'structural adaptation — shipped',
        refinedIntent: 'Multi-Faktor-Authentifizierung, Session-Schutz und Rollenkonzepte (RBAC) out-of-the-box.',
        whyFailedHeading: 'Analysis',
        whyFailedText: '"Frictionless" raises red flags for CISOs who associate low friction with weak MFA or permissive session handling.',
        anchorHeading: 'Contextual anchor',
        anchorHtml: '<span class="text-bone-100">Rollenkonzepte (RBAC)</span> targets the exact architectural check required in enterprise security evaluations.',
        restructureHeading: 'Information architecture',
        restructureText: 'Leads with multi-factor authentication and access control mechanisms rather than UI ease.'
      },
      {
        id: 'cta',
        label: 'asset.cta — us-en → eu-regional',
        usBaseline: 'Start building for free',
        rejectedLabel: 'direct translation — rejected',
        tradAgency: 'Kostenlos entwickeln',
        shippedLabel: 'structural adaptation — shipped',
        refinedIntent: 'Auth-SDK integrieren / Sicherheitskonzept prüfen',
        whyFailedHeading: 'Analysis',
        whyFailedText: '"Build for free" appeals to hobby developers but causes high bounce rates with security leads seeking technical specs.',
        anchorHeading: 'Contextual anchor',
        anchorHtml: '<span class="text-bone-100">Sicherheitskonzept prüfen</span> offers a friction-free entry point for technical auditors.',
        restructureHeading: 'Information architecture',
        restructureText: 'Provides dual technical tracks: developer SDK integration and CISO compliance verification.'
      }
    ],
    s3Title: 'Section 3 / Applied Surface Audits',
    s3Heading: '01 / Multi-Factor Authentication & OIDC Protocols',
    s3Body: 'Exact technical terminology for session token management, passkey implementation, and regional tenant isolation.',
    returnDir: '← Return to Directory',
    exportPdf: 'Export PDF'
  },
  de: {
    navTag: 'Lokalisierungs-Audit #09',
    title: 'Clerk: Identitätsinfrastruktur & Sicherheitsarchitektur',
    subtitle: 'Anpassung von Authentifizierungs-Narrativen an europäische Sicherheitsstandards.',
    readingTime: '8 Min. Lesezeit',
    date: 'Dezember 2026',
    client: 'Clerk',
    markets: 'EU, DACH, LATAM, JP',
    audience: 'CISOs & SaaS-Architekten',
    s1Title: 'Abschnitt 1 / Perspektive & Intent',
    overviewHeading: 'Kontext & Zielsetzung',
    overviewBody: 'In europäischen Sicherheitsüberprüfungen bewerten CISOs Authentifizierungsdienste nach OIDC-Standardtreue, Rollenkonzepten (RBAC) und Mandantentrennung. „Benutzerverwaltung“ klingt zu banal.',
    overviewSub: 'Dieses Audit strukturiert die Ansprache auf Zero-Trust-Identitätsarchitektur um.',
    s2Title: 'Abschnitt 2 / Strukturelle Akquisitions-Analyse',
    items: [
      {
        id: 'h1',
        label: 'asset.headline — us-en → de-de',
        usBaseline: 'More than authentication. Complete user management.',
        rejectedLabel: 'Wörtliche Übersetzung — verworfen',
        tradAgency: 'Mehr als Authentifizierung. Vollständige Benutzerverwaltung.',
        shippedLabel: 'Strukturelle Anpassung — implementiert',
        refinedIntent: 'Identitätsinfrastruktur und DSGVO-konforme Benutzerverwaltung für B2B-SaaS.',
        whyFailedHeading: 'Analyse',
        whyFailedText: '„Benutzerverwaltung“ klingt für IT-Einkäufer nach einfacher Nutzerdatenbank statt nach sicherer Authentifizierungsschicht.',
        anchorHeading: 'Kontextueller Anker',
        anchorHtml: '<span class="text-bone-100">Identitätsinfrastruktur</span> signalisiert höchste Enterprise-Sicherheitsstandards.',
        restructureHeading: 'Informationsarchitektur',
        restructureText: 'Ersetzt allgemeine Marketingversprechen durch konkrete Compliance- und Sicherheitsmerkmale.'
      },
      {
        id: 'h2',
        label: 'asset.subhead — us-en → de-de',
        usBaseline: 'Frictionless sign-in components for modern web apps.',
        rejectedLabel: 'Wörtliche Übersetzung — verworfen',
        tradAgency: 'Reibungslose Anmeldekomponenten für moderne Web-Apps.',
        shippedLabel: 'Strukturelle Anpassung — implementiert',
        refinedIntent: 'Multi-Faktor-Authentifizierung, Session-Schutz und Rollenkonzepte (RBAC) out-of-the-box.',
        whyFailedHeading: 'Analyse',
        whyFailedText: '„Reibungslos“ weckt bei CISOs die Befürchtung unzureichender Sicherheit oder fehlender MFA-Erzwingung.',
        anchorHeading: 'Kontextueller Anker',
        anchorHtml: '<span class="text-bone-100">Rollenkonzepte (RBAC)</span> bedient die Kernanforderung europäischer Sicherheitsaudits.',
        restructureHeading: 'Informationsarchitektur',
        restructureText: 'Fokussiert auf Autorisierungsmodelle und Session-Integrität statt vereinfachter Login-Flows.'
      },
      {
        id: 'cta',
        label: 'asset.cta — us-en → de-de',
        usBaseline: 'Start building for free',
        rejectedLabel: 'Wörtliche Übersetzung — verworfen',
        tradAgency: 'Kostenlos entwickeln',
        shippedLabel: 'Strukturelle Anpassung — implementiert',
        refinedIntent: 'Auth-SDK integrieren / Sicherheitskonzept prüfen',
        whyFailedHeading: 'Analyse',
        whyFailedText: '„Kostenlos entwickeln“ wirkt auf Entscheidungsträger im Enterprise-Bereich unprofessionell.',
        anchorHeading: 'Kontextueller Anker',
        anchorHtml: '<span class="text-bone-100">Sicherheitskonzept prüfen</span> erlaubt Auditoren den direkten Zugriff auf technische Spezifikationen.',
        restructureHeading: 'Informationsarchitektur',
        restructureText: 'Bietet zwei Pfade: Entwickler-Integration und IT-Security-Prüfung.'
      }
    ],
    s3Title: 'Abschnitt 3 / Angewandte Oberflächen-Audits',
    s3Heading: '01 / Multi-Faktor-Authentifizierung & OIDC-Protokolle',
    s3Body: 'Abschließende Klärung von Token-Handhabung, Passkey-Implementierung und regionaler Datenspeicherung.',
    returnDir: '← Zurück zum Verzeichnis',
    exportPdf: 'PDF Exportieren'
  },
  es: {
    navTag: 'Auditoría de Localización #09',
    title: 'Clerk: Arquitectura de Identidad y Seguridad de Usuarios',
    subtitle: 'Adaptación de componentes de autenticación a marcos de seguridad europeos.',
    readingTime: '8 min de lectura',
    date: 'Diciembre 2026',
    client: 'Clerk',
    markets: 'EU, DACH, LATAM, JP',
    audience: 'Directores de Seguridad de la Información (CISO) y Arquitectos',
    s1Title: 'Sección 1 / Perspectiva e Intención',
    overviewHeading: 'Contexto y Objetivo',
    overviewBody: 'Reemplazar afirmaciones informales por garantías formales de control de acceso (RBAC), protocolos OIDC e aislamiento de datos.',
    overviewSub: 'Auditoría enfocada en clientes corporativos B2B.',
    s2Title: 'Sección 2 / Desglose Estructural de Adquisición',
    items: [
      {
        id: 'h1',
        label: 'asset.headline — us-en → es-es',
        usBaseline: 'More than authentication. Complete user management.',
        rejectedLabel: 'traducción directa — descartada',
        tradAgency: 'Más que autenticación. Gestión completa de usuarios.',
        shippedLabel: 'adaptación estructural — implementada',
        refinedIntent: 'Infraestructura de gestión de identidad y autenticación segura con estándar OIDC.',
        whyFailedHeading: 'Análisis',
        whyFailedText: '"Gestión completa" carece de peso técnico en decisiones de compra corporativa.',
        anchorHeading: 'Anclaje contextual',
        anchorHtml: '<span class="text-bone-100">Estándar OIDC</span> garantiza interoperabilidad institucional.',
        restructureHeading: 'Arquitectura de información',
        restructureText: 'Prioriza protocolos de seguridad sobre conceptos generales de gestión.'
      },
      {
        id: 'h2',
        label: 'asset.subhead — us-en → es-es',
        usBaseline: 'Frictionless sign-in components for modern web apps.',
        rejectedLabel: 'traducción directa — descartada',
        tradAgency: 'Componentes de inicio de sesión sin fricción para aplicaciones web modernas.',
        shippedLabel: 'adaptación estructural — implementada',
        refinedIntent: 'Autenticación multifactor nativa, gestión de sesiones y control de acceso basado en roles (RBAC).',
        whyFailedHeading: 'Análisis',
        whyFailedText: '"Sin fricción" sugiere vulnerabilidades de seguridad a los equipos de auditoría.',
        anchorHeading: 'Anclaje contextual',
        anchorHtml: '<span class="text-bone-100">Control de acceso (RBAC)</span> posiciona la solución a nivel empresarial.',
        restructureHeading: 'Arquitectura de información',
        restructureText: 'Enfatiza la gestión de privilegios y tokens de sesión.'
      },
      {
        id: 'cta',
        label: 'asset.cta — us-en → es-es',
        usBaseline: 'Start building for free',
        rejectedLabel: 'traducción directa — descartada',
        tradAgency: 'Empieza a construir gratis',
        shippedLabel: 'adaptación estructural — implementada',
        refinedIntent: 'Integrar SDK de Auth / Revisar documentación de seguridad',
        whyFailedHeading: 'Análisis',
        whyFailedText: 'Los llamadas gratuitas genéricas reducen la conversión en equipos de arquitectura.',
        anchorHeading: 'Anclaje contextual',
        anchorHtml: '<span class="text-bone-100">Revisar documentación</span> ofrece validación previa sin compromiso.',
        restructureHeading: 'Arquitectura de información',
        restructureText: 'Ofrece rutas claras para ingenieros y responsables de seguridad.'
      }
    ],
    s3Title: 'Sección 3 / Auditoría de Superficies Aplicadas',
    s3Heading: '01 / Autenticación Multifactor y Estándares OIDC',
    s3Body: 'Terminología precisa en gestión de tokens de sesión y residencia regional de datos.',
    returnDir: '← Volver al Directorio',
    exportPdf: 'Exportar PDF'
  },
  fr: {
    navTag: 'Audit de Localisation #09',
    title: 'Clerk : Architecture d’Identité & Sécurité Utilisateur',
    subtitle: 'Adaptation du discours d’authentification aux exigences de sécurité IT européennes.',
    readingTime: '8 min de lecture',
    date: 'Décembre 2026',
    client: 'Clerk',
    markets: 'EU, DACH, LATAM, JP',
    audience: 'CISO & Architectes SaaS',
    s1Title: 'Section 1 / Perspective & Intention',
    overviewHeading: 'Contexte & Objectif',
    overviewBody: 'Restructuration du message vers l’infrastructure d’identité, les normes OIDC et le contrôle d’accès basé sur les rôles (RBAC).',
    overviewSub: 'Positionnement axé sur la sécurité B2B.',
    s2Title: 'Section 2 / Déconstruction de la Conversion',
    items: [
      {
        id: 'h1',
        label: 'asset.headline — us-en → fr-fr',
        usBaseline: 'More than authentication. Complete user management.',
        rejectedLabel: 'traduction directe — rejetée',
        tradAgency: 'Plus que de l’authentification. Gestion complète des utilisateurs.',
        shippedLabel: 'adaptation structurelle — déployée',
        refinedIntent: 'Infrastructure d’identité et gestion des utilisateurs conforme au RGPD pour SaaS B2B.',
        whyFailedHeading: 'Analyse',
        whyFailedText: '« Gestion complète » paraît trop simpliste pour des acheteurs IT grands comptes.',
        anchorHeading: 'Ancrage contextuel',
        anchorHtml: '<span class="text-bone-100">Conforme au RGPD</span> établit une preuve de conformité légale.',
        restructureHeading: 'Architecture de l’information',
        restructureText: 'Remplace les formules marketing par des garanties d’infrastructure.'
      },
      {
        id: 'h2',
        label: 'asset.subhead — us-en → fr-fr',
        usBaseline: 'Frictionless sign-in components for modern web apps.',
        rejectedLabel: 'traduction directe — rejetée',
        tradAgency: 'Composants de connexion sans friction pour applications web modernes.',
        shippedLabel: 'adaptation structurelle — déployée',
        refinedIntent: 'Authentification multifacteur, protection des sessions et contrôle d’accès (RBAC) clés en main.',
        whyFailedHeading: 'Analyse',
        whyFailedText: '« Sans friction » évoque une sécurité amoindrie pour les responsables de la sécurité.',
        anchorHeading: 'Ancrage contextuel',
        anchorHtml: '<span class="text-bone-100">Contrôle d’accès (RBAC)</span> répond aux critères d’audit technique.',
        restructureHeading: 'Architecture de l’information',
        restructureText: 'Met en avant la rigueur des autorisations plutôt que la simplicité d’interface.'
      },
      {
        id: 'cta',
        label: 'asset.cta — us-en → fr-fr',
        usBaseline: 'Start building for free',
        rejectedLabel: 'traduction directe — rejetée',
        tradAgency: 'Commencer gratuitement',
        shippedLabel: 'adaptation structurelle — déployée',
        refinedIntent: 'Intégrer le SDK Auth / Consulter la documentation de sécurité',
        whyFailedHeading: 'Analyse',
        whyFailedText: 'L’incitation à la gratuité dévalue l’offre auprès des décideurs B2B.',
        anchorHeading: 'Ancrage contextuel',
        anchorHtml: '<span class="text-bone-100">Documentation de sécurité</span> facilite la vérification préalable.',
        restructureHeading: 'Architecture de l’information',
        restructureText: 'Propose deux accès ciblés pour développeurs et auditeurs sécurité.'
      }
    ],
    s3Title: 'Section 3 / Audit des Surfaces Appliquées',
    s3Heading: '01 / MFA & Protocole OIDC',
    s3Body: 'Rigueur absolue sur la terminologie de sécurité et le stockage des jetons de session.',
    returnDir: '← Retour au Répertoire',
    exportPdf: 'Exporter en PDF'
  },
  it: {
    navTag: 'Audit di Localizzazione #09',
    title: 'Clerk: Architettura di Identità e Sicurezza Utente',
    subtitle: 'Riorganizzazione delle narrative di autenticazione per i framework di sicurezza europei.',
    readingTime: '8 min di lettura',
    date: 'Dicembre 2026',
    client: 'Clerk',
    markets: 'EU, DACH, LATAM, JP',
    audience: 'CISO e Architetti Software',
    s1Title: 'Sezione 1 / Prospettiva e Intento',
    overviewHeading: 'Contesto e Obiettivo',
    overviewBody: 'Focalizzarsi sugli standard OIDC, RBAC e sull’isolamento dei dati dei tenant.',
    overviewSub: 'Analisi per i mercati ad alta conformità.',
    s2Title: 'Sezione 2 / Analisi Strutturale',
    items: [
      {
        id: 'h1',
        label: 'asset.headline — us-en → it-it',
        usBaseline: 'More than authentication. Complete user management.',
        rejectedLabel: 'traduzione diretta — scartata',
        tradAgency: 'Più che autenticazione. Gestione utenti completa.',
        shippedLabel: 'adattamento strutturale — distribuito',
        refinedIntent: 'Infrastruttura di identità e gestione utenti conforme GDPR per SaaS B2B.',
        whyFailedHeading: 'Analisi',
        whyFailedText: '«Gestione utenti» risulta generico e privo di valore infrastrutturale.',
        anchorHeading: 'Ancoraggio contestuale',
        anchorHtml: '<span class="text-bone-100">Infrastruttura di identità</span> qualifica il sistema per utilizzi enterprise.',
        restructureHeading: 'Architettura informativa',
        restructureText: 'Sostituisce i claim commerciali con specifiche di compliance.'
      },
      {
        id: 'h2',
        label: 'asset.subhead — us-en → it-it',
        usBaseline: 'Frictionless sign-in components for modern web apps.',
        rejectedLabel: 'traduzione diretta — scartata',
        tradAgency: 'Componenti di accesso senza attrito per app web moderne.',
        shippedLabel: 'adattamento strutturale — distribuito',
        refinedIntent: 'Autenticazione a più fattori, protezione sessioni e controllo accessi (RBAC).',
        whyFailedHeading: 'Analisi',
        whyFailedText: 'L’espressione «senza attrito» viene interpretata come potenziale vulnerabilità.',
        anchorHeading: 'Ancoraggio contestuale',
        anchorHtml: '<span class="text-bone-100">Protezione sessioni</span> evidenzia la sicurezza attiva.',
        restructureHeading: 'Architettura informativa',
        restructureText: 'Priorità ai meccanismi di autorizzazione e gestione dei token.'
      },
      {
        id: 'cta',
        label: 'asset.cta — us-en → it-it',
        usBaseline: 'Start building for free',
        rejectedLabel: 'traduzione diretta — scartata',
        tradAgency: 'Inizia gratis',
        shippedLabel: 'adattamento strutturale — distribuito',
        refinedIntent: 'Integra SDK Auth / Esamina documentazione di sicurezza',
        whyFailedHeading: 'Analisi',
        whyFailedText: 'Le call-to-action generiche perdono efficacia con i lead tecnici.',
        anchorHeading: 'Ancoraggio contestuale',
        anchorHtml: '<span class="text-bone-100">Esamina documentazione</span> attiva il canale di valutazione tecnica.',
        restructureHeading: 'Architettura informativa',
        restructureText: 'Percorsi separati per sviluppatori e responsabili della sicurezza.'
      }
    ],
    s3Title: 'Sezione 3 / Audit Documentazione',
    s3Heading: '01 / Autenticazione Multifattore e OIDC',
    s3Body: 'Terminologia precisa per la sicurezza informatica e la residenza dei dati.',
    returnDir: '← Torna al Direttorio',
    exportPdf: 'Esporta PDF'
  },
  pt: {
    navTag: 'Auditoria de Localização #09',
    title: 'Clerk: Arquitetura de Identidade e Segurança de Usuários',
    subtitle: 'Adequação de componentes de autenticação para normas de segurança europeias.',
    readingTime: '8 min de leitura',
    date: 'Dezembro 2026',
    client: 'Clerk',
    markets: 'EU, DACH, LATAM, JP',
    audience: 'CISOs e Arquitetos SaaS',
    s1Title: 'Seção 1 / Perspectiva e Intenção',
    overviewHeading: 'Contexto e Objetivo',
    overviewBody: 'Adequação de narrativas de autenticação para auditorias técnicas de segurança.',
    overviewSub: 'Reestruturação de posicionamento.',
    s2Title: 'Seção 2 / Análise de Conversão',
    items: [
      {
        id: 'h1',
        label: 'asset.headline — us-en → pt-br/pt',
        usBaseline: 'More than authentication. Complete user management.',
        rejectedLabel: 'tradução direta — descartada',
        tradAgency: 'Mais que autenticação. Gestão completa de usuários.',
        shippedLabel: 'adaptação estrutural — implementada',
        refinedIntent: 'Infraestrutura de identidade e gestão de usuários em conformidade com o GDPR.',
        whyFailedHeading: 'Análise',
        whyFailedText: '"Gestão completa" Soa simplista para compradores corporativos de TI.',
        anchorHeading: 'Âncora contextual',
        anchorHtml: '<span class="text-bone-100">Infraestrutura de identidade</span> atribui rigor institucional.',
        restructureHeading: 'Arquitetura da informação',
        restructureText: 'Substitui frases promocionais por especificações de segurança.'
      },
      {
        id: 'h2',
        label: 'asset.subhead — us-en → pt-br/pt',
        usBaseline: 'Frictionless sign-in components for modern web apps.',
        rejectedLabel: 'tradução direta — descartada',
        tradAgency: 'Componentes de login sem fricção para apps web modernas.',
        shippedLabel: 'adaptação estrutural — implementada',
        refinedIntent: 'Autenticação multifator, proteção de sessão e controle de acesso (RBAC).',
        whyFailedHeading: 'Análise',
        whyFailedText: '"Sem fricção" sugere atalhos na verificação de segurança.',
        anchorHeading: 'Âncora contextual',
        anchorHtml: '<span class="text-bone-100">Controle de acesso (RBAC)</span> atende aos requisitos de auditoria.',
        restructureHeading: 'Arquitetura da informação',
        restructureText: 'Foca no controle de privilégios em vez da facilidade da interface.'
      },
      {
        id: 'cta',
        label: 'asset.cta — us-en → pt-br/pt',
        usBaseline: 'Start building for free',
        rejectedLabel: 'tradução direta — descartada',
        tradAgency: 'Comece a construir grátis',
        shippedLabel: 'adaptação estrutural — implementada',
        refinedIntent: 'Integrar SDK de Auth / Analisar documentação de segurança',
        whyFailedHeading: 'Análise',
        whyFailedText: 'CTAs focadas em gratuidade perdem força no segmento B2B.',
        anchorHeading: 'Âncora contextual',
        anchorHtml: '<span class="text-bone-100">Analisar documentação</span> habilita o processo de avaliação técnica.',
        restructureHeading: 'Arquitetura da informação',
        restructureText: 'Oferece direcionamentos específicos para engenharia e segurança.'
      }
    ],
    s3Title: 'Seção 3 / Documentação Técnica',
    s3Heading: '01 / Autenticação Multifator e Protocolos OIDC',
    s3Body: 'Precisão nos protocolos de segurança de sessão e conformidade regional.',
    returnDir: '← Voltar ao Diretório',
    exportPdf: 'Exportar PDF'
  },
  ja: {
    navTag: 'ローカリゼーション監査 #09',
    title: 'Clerk: 認証基盤およびアイデンティティセキュリティの構造化',
    subtitle: '米国型のシームレス重視メッセージから、厳格なセキュリティ・コンプライアンス要件への最適化。',
    readingTime: '読了時間: 8分',
    date: '2026年12月',
    client: 'Clerk',
    markets: 'EU, DACH, LATAM, JP',
    audience: 'CISO（最高情報セキュリティ責任者）およびSaaSアーキテクト',
    s1Title: 'セクション1 / 視点と導入目的',
    overviewHeading: '文脈と意図',
    overviewBody: '米国版の「認証以上の機能。完全なユーザー管理」という訴求は、手軽な組み込みを強調しています。しかしエンタープライズの技術審査では、OpenID Connect (OIDC) 適合性、マルチファクタ認証、RBAC（ロールベースアクセス制御）、データ分離基盤が評価基準となります。',
    overviewSub: '本監査では、Clerkのコンポーネントをゼロトラスト認証基盤として再定義します。',
    s2Title: 'セクション2 / 構造的検証 teardown',
    items: [
      {
        id: 'h1',
        label: 'asset.headline — us-en → ja-jp',
        usBaseline: 'More than authentication. Complete user management.',
        rejectedLabel: '直訳パターン — 却下',
        tradAgency: '単なる認証ではありません。完全なユーザー管理を提供します。',
        shippedLabel: '構造的適応 — 採用',
        refinedIntent: 'B2B SaaSのためのアイデンティティ基盤とエンタープライズ統合管理',
        whyFailedHeading: '分析',
        whyFailedText: '「完全なユーザー管理」という直訳は、簡易的なCRMのような印象を与え、堅牢な認証層を求める決定権者に響きません。',
        anchorHeading: 'コンテキストのアンカー',
        anchorHtml: '<span class="text-bone-100">アイデンティティ基盤</span> という表現により、セキュリティ製品としての格格を確立します。',
        restructureHeading: '情報アーキテクチャ',
        restructureText: '抽象的な管理機能の強調を排除し、堅牢な認証基盤としての仕様を前面に配置。'
      },
      {
        id: 'h2',
        label: 'asset.subhead — us-en → ja-jp',
        usBaseline: 'Frictionless sign-in components for modern web apps.',
        rejectedLabel: '直訳パターン — 却下',
        tradAgency: 'モダンなWebアプリのためのフリクションレスなサインインコンポーネント。',
        shippedLabel: '構造的適応 — 採用',
        refinedIntent: '多要素認証（MFA）、セッション制御、RBAC権限管理を標準実装。',
        whyFailedHeading: '分析',
        whyFailedText: '「フリクションレス」はセキュリティ統制の緩さを連想させ、CISOの警戒感を招きます。',
        anchorHeading: 'コンテキストのアンカー',
        anchorHtml: '<span class="text-bone-100">RBAC権限管理</span> が、エンタープライズ評価の必須チェック項目をカバーします。',
        restructureHeading: '情報アーキテクチャ',
        restructureText: '単なるUIの簡易性ではなく、認可モデルとセッション保護構造を中心に再構成。'
      },
      {
        id: 'cta',
        label: 'asset.cta — us-en → ja-jp',
        usBaseline: 'Start building for free',
        rejectedLabel: '直訳パターン — 却下',
        tradAgency: '無料で開発を開始',
        shippedLabel: '構造적適応 — 採用',
        refinedIntent: '認証SDKの組み込み / セキュリティ仕様の確認',
        whyFailedHeading: '分析',
        whyFailedText: '「無料で開始」というフレーズは個人の趣味開発者向けに見え、技術監査でのCVRを低下させます。',
        anchorHeading: 'コンテキストのアンカー',
        anchorHtml: '<span class="text-bone-100">セキュリティ仕様の確認</span> により、技術審査層の離脱を防止します。',
        restructureHeading: '情報アーキテクチャ',
        restructureText: '開発者向けSDK導入と、セキュリティ担当者向け資料確認の二段階の行動喚起を設定。'
      }
    ],
    s3Title: 'セクション3 / 適用面の個別監査',
    s3Heading: '01 / 多要素認証およびOIDC標準プロトコル',
    s3Body: 'セッショントークン管理、パスキー実装、リージョン内データ隔離における正確な技術用語の適用。',
    returnDir: '← ディレクトリに戻る',
    exportPdf: 'PDFを出力'
  }
};

export default function ClerkAuditPage() {
  const [lang, setLang] = useState<Language>('en');
  const t = AUDIT_CONTENT[lang] || AUDIT_CONTENT.en;

  return (
    <div className="min-h-screen bg-ink-950 text-bone-100 font-sans selection:bg-signal-gold selection:text-ink-950 print:bg-white print:text-black">
      {/* Header */}
      <header className="border-b border-ink-700 sticky top-0 bg-ink-950/90 backdrop-blur z-40 print:hidden">
        <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <Link href="/" className="font-mono text-xs text-bone-400 hover:text-signal-gold transition-colors">
            ← VeraVox Main
          </Link>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 font-mono text-xs">
              {(['es', 'fr', 'de', 'it', 'pt', 'ja', 'en'] as Language[]).map((l) => (
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
              {t.exportPdf}
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-6 md:px-10 pt-12 pb-32 print:p-0 print:max-w-none">
        
        {/* Audit Header */}
        <header className="mb-16 border-b border-ink-700 pb-12 print:border-black">
          <div className="flex items-center gap-3 font-mono text-xs text-signal-green mb-4 print:text-black">
            <span>{t.navTag}</span>
            <span className="text-ink-600 print:text-gray-400">·</span>
            <span className="text-bone-500 print:text-gray-600">{t.date}</span>
            <span className="text-ink-600 print:text-gray-400">·</span>
            <span className="text-bone-500 print:text-gray-600">{t.readingTime}</span>
          </div>

          <h1 className="font-display font-medium text-3xl md:text-5xl text-bone-100 tracking-tight mb-4 print:text-black">
            {t.title}
          </h1>
          <p className="text-lg text-bone-300 max-w-3xl leading-relaxed print:text-gray-700">
            {t.subtitle}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 mt-8 border-t border-ink-700 font-mono text-xs text-bone-500 leading-relaxed print:border-gray-300 print:text-black">
            <div>
              <span className="text-bone-400 block mb-1 uppercase tracking-widest text-[10px] print:text-gray-500">Client</span>
              {t.client}
            </div>
            <div>
              <span className="text-bone-400 block mb-1 uppercase tracking-widest text-[10px] print:text-gray-500">Markets</span>
              {t.markets}
            </div>
            <div>
              <span className="text-bone-400 block mb-1 uppercase tracking-widest text-[10px] print:text-gray-500">Audience</span>
              {t.audience}
            </div>
          </div>
        </header>

        {/* Section 1: Overview */}
        <section className="mb-20 print:mb-12">
          <div className="font-mono text-[10px] uppercase tracking-widest text-signal-gold mb-6 print:text-black">
            {t.s1Title}
          </div>
          <div className="max-w-3xl text-bone-300 leading-relaxed space-y-4 print:text-gray-800">
            <h2 className="font-display font-semibold text-2xl text-bone-100 print:text-black">
              {t.overviewHeading}
            </h2>
            <p className="text-base leading-relaxed">
              {t.overviewBody}
            </p>
            <p className="text-sm text-bone-400 leading-relaxed print:text-gray-600">
              {t.overviewSub}
            </p>
          </div>
        </section>

        {/* Section 2: Core Teardowns matching Hero Grid */}
        <section className="mb-20 print:mb-12">
          <div className="font-mono text-[10px] uppercase tracking-widest text-signal-gold mb-8 print:text-black">
            {t.s2Title}
          </div>

          <div className="space-y-12">
            {t.items.map((item) => (
              <div key={item.id} className="border border-ink-700 bg-ink-950 print:border-gray-300 print:bg-white print:break-inside-avoid">
                {/* Panel Label Header */}
                <div className="flex items-center justify-between px-5 py-3 border-b border-ink-700 print:border-gray-300 bg-ink-900/50 print:bg-gray-100">
                  <span className="font-mono text-xs text-bone-500 print:text-gray-700">{item.label}</span>
                  <span className="font-mono text-xs text-bone-500 print:text-gray-500">US Baseline: "{item.usBaseline}"</span>
                </div>

                {/* Main Teardown Grid */}
                <div className="grid md:grid-cols-[1fr_280px] divide-y md:divide-y-0 md:divide-x divide-ink-700 print:divide-gray-300">
                  
                  {/* Left Column: Direct vs Structural */}
                  <div className="divide-y divide-ink-700 print:divide-gray-300">
                    <div className="flex gap-4 px-5 py-5">
                      <span className="font-mono text-signal-red select-none mt-0.5 print:text-red-700">−</span>
                      <div>
                        <p className="font-mono text-xs text-signal-red mb-2 print:text-red-700">{item.rejectedLabel}</p>
                        <p className="text-bone-500 line-through decoration-signal-red/60 leading-relaxed text-sm print:text-gray-500">
                          {item.tradAgency}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 px-5 py-5">
                      <span className="font-mono text-signal-green select-none mt-0.5 print:text-green-700">+</span>
                      <div>
                        <p className="font-mono text-xs text-signal-green mb-2 print:text-green-700">{item.shippedLabel}</p>
                        <p className="text-bone-100 leading-relaxed text-sm print:text-black font-medium">
                          {item.refinedIntent}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Reasoning & Anchors */}
                  <div className="px-5 py-5 bg-ink-900/20 print:bg-gray-50 space-y-5">
                    <div>
                      <p className="font-mono text-xs text-bone-500 mb-1 print:text-gray-600">{item.whyFailedHeading}</p>
                      <p className="text-xs text-bone-300 leading-relaxed print:text-gray-800">{item.whyFailedText}</p>
                    </div>
                    <div>
                      <p className="font-mono text-xs text-bone-500 mb-1 print:text-gray-600">{item.anchorHeading}</p>
                      <p className="text-xs text-bone-300 leading-relaxed print:text-gray-800" dangerouslySetInnerHTML={{ __html: item.anchorHtml }} />
                    </div>
                    <div>
                      <p className="font-mono text-xs text-bone-500 mb-1 print:text-gray-600">{item.restructureHeading}</p>
                      <p className="text-xs text-bone-300 leading-relaxed print:text-gray-800">{item.restructureText}</p>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Technical Context */}
        <section className="mb-20 print:mb-12">
          <div className="font-mono text-[10px] uppercase tracking-widest text-signal-gold mb-6 print:text-black">
            {t.s3Title}
          </div>
          <div className="space-y-4 text-bone-300 leading-relaxed max-w-3xl print:text-gray-800">
            <h3 className="font-display text-xl text-bone-100 print:text-black">{t.s3Heading}</h3>
            <p className="text-sm leading-relaxed">
              {t.s3Body}
            </p>
          </div>
        </section>
        
        {/* Footer Link */}
        <div className="pt-8 border-t border-ink-700 print:hidden">
          <Link href="/" className="font-mono text-xs uppercase tracking-widest text-bone-500 hover:text-signal-gold transition-colors">
            {t.returnDir}
          </Link>
        </div>
      </main>
    </div>
  );
}
