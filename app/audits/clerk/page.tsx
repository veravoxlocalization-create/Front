'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const AUDIT_CONTENT = {
  en: {
    navTag: 'Localization Audit #09',
    title: 'Clerk: Developer-First Identity & Enterprise Procurement Friction',
    subtitle: 'Adapting authentication narratives from US friction-free growth copy to European & LATAM compliance, data residency, and enterprise multi-tenancy frameworks.',
    readingTime: '10 min read',
    date: 'October 2026',
    client: 'Clerk',
    markets: 'EU, DACH, LATAM',
    audience: 'Chief Information Security Officers, Enterprise Buyers & SaaS Architects',
    
    s1Title: 'Section 1 / Perspective & Intent',
    overviewHeading: 'Executive Context & Strategic Operational Friction',
    overviewBody: 'Clerk has established itself as the gold standard for developer experience (DX) and user management in the React/Next.js ecosystem. However, as client applications cross-border scale into enterprise procurement in Europe (EU) and Latin America (LATAM), Clerk encounters significant friction. Unlike email infrastructure providers whose friction lies in deliverability, Clerk’s bottlenecks stem from data residency, strict GDPR sovereignty compliance, enterprise-grade multi-tenancy constraints, and session synchronization across localized legal jurisdictions.',
    overviewSub: 'This audit repositions Clerk’s drop-in auth components around zero-trust identity management, regional data sovereignty (EU-central-1), decoupled SAML/SSO routing, and low-latency edge caching.',

    s2Title: 'Section 2 / Architectural Breakdown & Friction Points',
    
    b1Title: '01 / Data Residency & GDPR Sovereignty',
    b1Problem: 'Enterprise buyers in the EU and LATAM (under regulations like Brazil’s LGPD) require strict data residency. Authenticated user PII (emails, names, phone numbers, IP logs, session tokens) often defaults to being stored or processed through US-centric primary database clusters.',
    b1Impact: 'European procurement teams flag non-EU PII storage during compliance audits, halting enterprise SaaS deals before sales integration can even begin.',
    b1Fix: 'Native region-bound project instances (EU-central-1 database hosting for metadata) without requiring expensive enterprise custom setups.',
    b1Us: 'US Baseline: "More than authentication. Complete user management for modern web apps."',
    b1Trad: 'Traditional Translation: "Mehr als Authentifizierung. Vollständige Benutzerverwaltung für moderne Web-Apps."',
    b1Refined: 'Refined Technical Intent (DE): "DSGVO-konforme Identitätsinfrastruktur mit regionaler Datenspeicherung (EU-central-1) und lokaler Mandantentrennung."',

    b2Title: '02 / Enterprise Multi-Tenancy & B2B Sub-Organizations',
    b2Problem: 'Clerk’s Organizations feature handles basic team management well, but enterprise B2B customers demand granular Role-Based Access Control (RBAC), custom SAML/SSO mapping per sub-tenant, and isolated audit logging.',
    b2Impact: 'Scaling B2B SaaS products run into architectural limits when mapping complex corporate hierarchies or custom enterprise identity providers (IdPs) directly through standard Clerk dashboard flows.',
    b2Fix: 'Decoupled, API-first enterprise SSO routing that allows tenant-level SAML configuration without manual administrative intervention.',
    b2Us: 'US Baseline: "Frictionless B2B team management and Organization switching."',
    b2Trad: 'Traditional Translation: "Gestión de equipos B2B sin fricción y cambio de organizaciones."',
    b2Refined: 'Refined Technical Intent (ES): "Control de acceso basado en roles (RBAC) con enrutamiento SSO/SAML autoservicio para entornos B2B corporativos."',

    b3Title: '03 / Edge Session Synchronization & Latency',
    b3Problem: 'While Clerk middleware operates at the edge (Vercel Edge Functions, Cloudflare Workers), verifying session tokens and syncing state across globally distributed users can introduce cold-start latency or token stale-state issues when checking database-backed permissions in real time.',
    b3Impact: 'UI jitter or minor latency spikes during initial page loads and route protection checks in regions distant from primary US regions (such as Southern LATAM).',
    b3Fix: 'Optimized JWT claim caching at the edge paired with localized session revocation webhooks.',
    b3Us: 'US Baseline: "Drop-in UI components and edge middleware for rapid integration."',
    b3Trad: 'Traditional Translation: "Composants UI prêts à l’emploi et middleware edge pour une intégration rapide."',
    b3Refined: 'Refined Technical Intent (FR): "Sychronisation de session à très faible latence sur les réseaux Edge avec gestion distribuée des jetons JWT."',

    s3Title: 'Section 3 / Expansion Roadmap & Strategic Matrix',
    s3Heading: 'Repositioning for Enterprise Procurement & Self-Serve Growth',
    r1Strength: 'Fastest React/Next DX',
    r1Bottleneck: 'EU/LATAM Compliance',
    r1Solution: 'Regional PII (EU-central-1)',
    r2Strength: 'Pre-built Auth UI',
    r2Bottleneck: 'SAML/SSO Procurement',
    r2Solution: 'Self-serve Enterprise SAML',
    r3Strength: 'Edge Middleware Support',
    r3Bottleneck: 'Global Edge Latency',
    r3Solution: 'Local JWT Caching & Webhooks',

    summaryHeading: 'Strategic Procurement Narrative',
    summaryText: 'To capture enterprise contracts in Europe and LATAM, Clerk must bridge the gap between "indie-hacker favorite" and "enterprise-compliant identity platform." Marketing and documentation must emphasize GDPR, LGPD, SOC2 Type II, and explicit regional data guarantees alongside React code snippets. Offering self-serve enterprise SSO (Okta, Azure AD, Ping Identity) and zero-latency auth state resolution will allow B2B SaaS builders to close corporate customers without custom enterprise friction.',

    returnDir: '← Return to Directory',
    lblProblem: 'Problem',
    lblImpact: 'Procurement Impact',
    lblFix: 'Architectural Solution',
    usBaseline: 'US Baseline',
    tradAgency: 'Traditional Agency',
    refinedIntent: 'Refined Intent'
  },
  de: {
    navTag: 'Lokalisierungs-Audit #09',
    title: 'Clerk: Identitätsinfrastruktur & Enterprise-Beschaffungshürden',
    subtitle: 'Anpassung von Authentifizierungs-Narrativen an europäische DSGVO-Standards, regionale Datenhaltung und Mandantentrennung.',
    readingTime: '10 Min. Lesezeit',
    date: 'Oktober 2026',
    client: 'Clerk',
    markets: 'EU, DACH, LATAM',
    audience: 'CISOs, Enterprise-Einkäufer & SaaS-Architekten',
    
    s1Title: 'Abschnitt 1 / Perspektive & Intent',
    overviewHeading: 'Kontext & Strategische Reibungspunkte',
    overviewBody: 'Clerk ist der Goldstandard für Entwicklerfreundlichkeit (DX) im React/Next.js-Ökosystem. Beim Skalieren in europäische und lateinamerikanische Märkte stößt Clerk jedoch auf strukturelle Grenzen: Datenresidenz, strikte DSGVO-Souveränität, komplexe B2B-Mandantentrennung und globale Sitzungssynchronisation.',
    overviewSub: 'Dieses Audit strukturiert die Positionierung auf Zero-Trust-Architektur, EU-Datenspeicherung (EU-central-1), entkoppeltes SAML/SSO-Routing und latenzarme Edge-Validierung um.',

    s2Title: 'Abschnitt 2 / Strukturelle Sicherheits-Analyse',
    
    b1Title: '01 / Datenresidenz & DSGVO-Souveränität',
    b1Problem: 'Europäische Einkäufer verlangen strikte Datenhaltung. Personenenbezogene Daten (PII) werden bei US-Zentralisierung bemängelt.',
    b1Impact: 'Sicherheits-Audits stoppen Verträge vor der technischen Integration.',
    b1Fix: 'Regionale Instanzen (EU-central-1 Datenbank-Cluster für Metadaten) ohne Enterprise-Sonderverträge.',
    b1Us: 'US-Ausgangslage: "More than authentication. Complete user management."',
    b1Trad: 'Klassisches Ergebnis: "Mehr als Authentifizierung. Vollständige Benutzerverwaltung."',
    b1Refined: 'Präzisierter Intent: "DSGVO-konforme Identitätsinfrastruktur mit lokaler Datenhaltung (EU-central-1) und Mandantentrennung."',

    b2Title: '02 / Enterprise Multi-Tenancy & SAML/SSO',
    b2Problem: 'Komplexe B2B-Hierarchien erfordern granulares RBAC, individuelles SAML-Mapping pro Sub-Tenant und isolierte Audit-Logs.',
    b2Impact: 'Skalierende SaaS-Anbieter stoßen im Standard-Dashboard an architektonische Grenzen.',
    b2Fix: 'Entkoppeltes, API-basiertes Enterprise SSO-Routing für Self-Serve-SAML-Konfiguration.',
    b2Us: 'US-Ausgangslage: "Frictionless B2B team management."',
    b2Trad: 'Klassisches Ergebnis: "Reibungsloses B2B-Teammanagement."',
    b2Refined: 'Präzisierter Intent: "Granulare Rollenkonzepte (RBAC) und nahtlose Okta/Azure AD-Anbindung für B2B-Enterprise-Kunden."',

    b3Title: '03 / Edge-Sitzungssynchronisation & Latenz',
    b3Problem: 'Echtzeit-Berechtigungsprüfungen gegen US-Datenbanken erzeugen Cold-Starts und Latenzspitzen.',
    b3Impact: 'UI-Ruckeln bei der Routenprüfung in weit entfernten Regionen (z. B. Süd-LATAM).',
    b3Fix: 'Optimiertes JWT-Claim-Caching am Edge gepaart mit regionalen Revokation-Webhooks.',
    b3Us: 'US-Ausgangslage: "Drop-in UI components and edge middleware."',
    b3Trad: 'Klassisches Ergebnis: "Fertige UI-Komponenten und Edge-Middleware."',
    b3Refined: 'Präzisierter Intent: "Latenzfreie Edge-Sitzungsvalidierung durch lokales JWT-Caching und verteilte Token-Widerrufe."',

    s3Title: 'Abschnitt 3 / Expansions-Roadmap',
    s3Heading: 'Strategische Neupositionierung für Enterprise-Sales',
    r1Strength: 'Schnellste React/Next DX',
    r1Bottleneck: 'EU/LATAM-Compliance',
    r1Solution: 'Regionale PII (EU-central-1)',
    r2Strength: 'Pre-built Auth UI',
    r2Bottleneck: 'SAML/SSO Procurement',
    r2Solution: 'Self-Serve Enterprise SAML',
    r3Strength: 'Edge Middleware Support',
    r3Bottleneck: 'Globale Edge-Latenz',
    r3Solution: 'Lokales JWT-Caching',

    summaryHeading: 'Strategisches Fazit',
    summaryText: 'Um Großkunden in Europa zu gewinnen, muss Clerk vom "Indie-Liebling" zur "Enterprise-Sicherheitsplattform" reifen. Marketing und Dokumentation müssen DSGVO, SOC2 Type II und regionale Garantien gleichrangig mit Code-Beispielen präsentieren.',

    returnDir: '← Zurück zum Verzeichnis',
    lblProblem: 'Problem',
    lblImpact: 'Auswirkung',
    lblFix: 'Lösung',
    usBaseline: 'US-Ausgangslage',
    tradAgency: 'Klassisch',
    refinedIntent: 'Präzisiert'
  },
  es: {
    navTag: 'Auditoría de Localización #09',
    title: 'Clerk: Arquitectura de Identidad y Fricción de Ventas Enterprise',
    subtitle: 'Adaptación de narrativa desde la simplicidad de integración en EE. UU. hacia cumplimiento normativo, residencia de datos e identidad B2B en Europa y LATAM.',
    readingTime: '10 min de lectura',
    date: 'Octubre 2026',
    client: 'Clerk',
    markets: 'EU, DACH, LATAM',
    audience: 'Directores de Seguridad (CISO), Compradores Corporativos y Arquitectos',
    
    s1Title: 'Sección 1 / Perspectiva e Intención',
    overviewHeading: 'Contexto Ejecutivo y Fricción Operativa',
    overviewBody: 'Clerk es el estándar de experiencia de desarrollo (DX) en Next.js/React. Sin embargo, al expandirse en Europa y Latinoamérica (LGPD en Brasil), enfrenta cuellos de botella en residencia de datos, cumplimiento de soberanía normativo y sincronización de sesiones en el Edge.',
    overviewSub: 'Esta auditoría reestructura la narrativa hacia gestión de identidad Zero-Trust, soberanía de datos en la UE (EU-central-1) y enrutamiento SAML/SSO autoservicio.',

    s2Title: 'Sección 2 / Desglose Estructural de Fricción',
    
    b1Title: '01 / Residencia de Datos y Soberanía GDPR / LGPD',
    b1Problem: 'Los compradores corporativos exigen almacenamiento estricto de PII dentro de la jurisdicción regional.',
    b1Impact: 'Las auditorías de seguridad bloquean contratos de SaaS B2B si la información reside en servidores centralizados en EE. UU.',
    b1Fix: 'Instancias nativas regionales (EU-central-1) sin necesidad de contratos Enterprise a medida.',
    b1Us: 'Línea Base (EE. UU.): "More than authentication. Complete user management."',
    b1Trad: 'Agencia Tradicional: "Más que autenticación. Gestión completa de usuarios."',
    b1Refined: 'Intención Técnica: "Infraestructura de identidad compatible con GDPR/LGPD con residencia de datos regional (EU-central-1)."',

    b2Title: '02 / Arquitectura Multi-Inquilino y SAML/SSO Enterprise',
    b2Problem: 'Las empresas B2B requieren mapeo personalizado de SAML/SSO por sub-organización y control de acceso RBAC granular.',
    b2Impact: 'Límites arquitectónicos al mapear jerarquías complejas en el panel estándar.',
    b2Fix: 'Enrutamiento SSO desacoplado vía API para configuración autoservicio de proveedores de identidad (Okta, Azure AD).',
    b2Us: 'Línea Base (EE. UU.): "Frictionless B2B team management."',
    b2Trad: 'Agencia Tradicional: "Gestión de equipos B2B sin fricción."',
    b2Refined: 'Intención Técnica: "Control de acceso basado en roles (RBAC) y enrutamiento SAML/SSO autoservicio para B2B."',

    b3Title: '03 / Sincronización de Sesiones en el Edge y Latencia',
    b3Problem: 'Validar tokens de sesión en bases de datos remotas añade latencia en regiones distantes (como LATAM).',
    b3Impact: 'Picos de latencia y bloqueos de interfaz durante la verificación de rutas protegidas.',
    b3Fix: 'Caché optimizado de claims JWT en el Edge con webhooks locales de revocación.',
    b3Us: 'Línea Base (EE. UU.): "Drop-in UI components and edge middleware."',
    b3Trad: 'Agencia Tradicional: "Componentes UI listos para usar y middleware Edge."',
    b3Refined: 'Intención Técnica: "Validación de sesión de ultra baja latencia en redes Edge mediante caché distribuido de JWT."',

    s3Title: 'Sección 3 / Matriz de Expansión',
    s3Heading: 'Alineación para Ventas Corporativas',
    r1Strength: 'Mejor DX en React/Next',
    r1Bottleneck: 'Cumplimiento EU/LATAM',
    r1Solution: 'Residencia de PII (EU-central-1)',
    r2Strength: 'Componentes UI Listos',
    r2Bottleneck: 'Ventas SAML/SSO',
    r2Solution: 'SAML Autoservicio B2B',
    r3Strength: 'Soporte Edge Middleware',
    r3Bottleneck: 'Latencia Edge Global',
    r3Solution: 'Caché Local JWT y Webhooks',

    summaryHeading: 'Narrativa Estratégica',
    summaryText: 'Clerk debe pasar de ser la herramienta favorita de proyectos independientes a una plataforma de identidad corporativa. Garantizar residencia de datos local y autoservicio SSO permitirá a sus clientes cerrar contratos Enterprise sin fricciones.',

    returnDir: '← Volver al Directorio',
    lblProblem: 'Problema',
    lblImpact: 'Impacto',
    lblFix: 'Solución',
    usBaseline: 'Línea Base (EE. UU.)',
    tradAgency: 'Agencia Tradicional',
    refinedIntent: 'Intención Refinada'
  },
  fr: {
    navTag: 'Audit de Localisation #09',
    title: 'Clerk : Architecture d’Identité & Friction de Vente Enterprise',
    subtitle: 'Adaptation de la narration vers la souveraineté des données, la conformité RGPD et l’architecture multi-tenant B2B en Europe.',
    readingTime: '10 min de lecture',
    date: 'Octobre 2026',
    client: 'Clerk',
    markets: 'EU, DACH, LATAM',
    audience: 'Responsables Sécurité (CISO) & Architectes Logiciels',
    
    s1Title: 'Section 1 / Perspective & Intention',
    overviewHeading: 'Contexte Exécutif & Freins Opérationnels',
    overviewBody: 'Bien que Clerk soit la référence DX sur React/Next.js, son expansion auprès des grands comptes européens heurte des obstacles stricts : résidence des données PII, conformité RGPD et latence Edge lors de la vérification des sessions à distance.',
    overviewSub: 'Cet audit réoriente la proposition de valeur vers une architecture Zero-Trust, un hébergement régional (EU-central-1) et le routage SSO/SAML en libre-service.',

    s2Title: 'Section 2 / Analyse Détaillée des Contraintes',
    
    b1Title: '01 / Résidence des Données & Souveraineté RGPD',
    b1Problem: 'Stockage des données PII d’utilisateurs sur des clusters centrés aux États-Unis.',
    b1Impact: 'Rejet lors des audits de conformité menés par les équipes Achats en Europe.',
    b1Fix: 'Instances projet ancrées localement (EU-central-1) sans surcoût Enterprise sur mesure.',
    b1Us: 'Référence US : "More than authentication. Complete user management."',
    b1Trad: 'Traduction Agence : "Plus que l’authentification. Gestion complète des utilisateurs."',
    b1Refined: 'Intention Affinée : "Infrastructure d’identité conforme au RGPD avec hébergement régional des données (EU-central-1)."',

    b2Title: '02 / Multi-Tenancy B2B & Routage SAML/SSO',
    b2Problem: 'Exigence de contrôle d’accès basé sur les rôles (RBAC) et d’isolation des journaux d’audit.',
    b2Impact: 'Blocage lors de la modélisation de hiérarchies d’entreprise complexes.',
    b2Fix: 'Routage SSO/SAML découplé via API pour une configuration en autonomie.',
    b2Us: 'Référence US : "Frictionless B2B team management."',
    b2Trad: 'Traduction Agence : "Gestion d’équipe B2B sans friction."',
    b2Refined: 'Intention Affinée : "Contrôle d’accès (RBAC) et intégration SSO/SAML en libre-service pour clients B2B Enterprise."',

    b3Title: '03 / Synchronisation des Sessions Edge & Latence',
    b3Problem: 'Interrogation de bases primaires distantes entraînant des pics de latence.',
    b3Impact: 'Légers ralentissements de l’interface lors du contrôle des routes protégées.',
    b3Fix: 'Mise en cache optimisée des jetons JWT au plus près des utilisateurs (Edge).',
    b3Us: 'Référence US : "Drop-in UI components and edge middleware."',
    b3Trad: 'Traduction Agence : "Composants UI intégrés et middleware Edge."',
    b3Refined: 'Intention Affinée : "Validation de session à très faible latence sur les réseaux Edge avec gestion distribuée des jetons JWT."',

    s3Title: 'Section 3 / Feuille de Route Expansive',
    s3Heading: 'Positionnement pour le Marché Enterprise',
    r1Strength: 'Meilleure DX React/Next',
    r1Bottleneck: 'Conformité UE/LATAM',
    r1Solution: 'PII Régionalisé (EU-central-1)',
    r2Strength: 'Composants Auth Clé en Main',
    r2Bottleneck: 'Ventes SAML/SSO',
    r2Solution: 'SAML Enterprise en Autonomie',
    r3Strength: 'Support Middleware Edge',
    r3Bottleneck: 'Latence Edge Globale',
    r3Solution: 'Cache JWT & Webhooks Locaux',

    summaryHeading: 'Conclusion Stratégique',
    summaryText: 'Pour convaincre les acheteurs grands comptes en Europe, Clerk doit mettre en avant la souveraineté des données et les fonctionnalités SSO en libre-service aux côtés de ses exemples de code React.',

    returnDir: '← Retour au Répertoire',
    lblProblem: 'Problème',
    lblImpact: 'Impact',
    lblFix: 'Solution',
    usBaseline: 'Référence US',
    tradAgency: 'Agence Trad',
    refinedIntent: 'Intention Affinée'
  },
  it: {
    navTag: 'Audit di Localizzazione #09',
    title: 'Clerk: Architettura di Identità e Frizione di Procurement',
    subtitle: 'Riorganizzazione delle narrative di autenticazione per la conformità GDPR, la residenza dei dati e il multi-tenant aziendale in Europa e LATAM.',
    readingTime: '10 min di lettura',
    date: 'Ottobre 2026',
    client: 'Clerk',
    markets: 'EU, DACH, LATAM',
    audience: 'CISO, Buyer Aziendali e Architetti SaaS',
    
    s1Title: 'Sezione 1 / Prospettiva e Intento',
    overviewHeading: 'Contesto Esecutivo e Frizioni Operative',
    overviewBody: 'Clerk è il punto di riferimento per la Developer Experience (DX) in ambiente React/Next.js. Tuttavia, la vendita verso grandi aziende in Europa e LATAM incontra ostacoli legati alla residenza dei dati personali (PII), al GDPR e alla latenza delle sessioni via Edge.',
    overviewSub: 'Questo audit riposiziona i componenti di Clerk su architetture Zero-Trust, hosting dei dati in Europa (EU-central-1) e SSO/SAML self-service.',

    s2Title: 'Sezione 2 / Analisi Strutturale dei Problemi',
    
    b1Title: '01 / Residenza dei Dati & Conformità GDPR',
    b1Problem: 'I dati personali (PII) sono memorizzati in cluster statunitensi di default.',
    b1Impact: 'I team di sicurezza aziendali bloccano l’adozione prima dell’integrazione.',
    b1Fix: 'Istanze regionali native (cluster EU-central-1) senza costi Enterprise su misura.',
    b1Us: 'Linea Base US: "More than authentication. Complete user management."',
    b1Trad: 'Output Agenzia: "Più dell’autenticazione. Gestione utenti completa."',
    b1Refined: 'Intento Tecnico: "Infrastruttura d’identità conforme al GDPR con residenza regionale dei dati (EU-central-1)."',

    b2Title: '02 / Multi-Tenancy B2B & Integrazione SSO',
    b2Problem: 'Gestione limitata di gerarchie aziendali complesse e ruoli RBAC personalizzati.',
    b2Impact: 'Limiti architetturali nella configurazione di Enterprise Identity Provider (IdP).',
    b2Fix: 'Routing SSO/SAML via API disaccoppiato per configurazioni in autonomia.',
    b2Us: 'Linea Base US: "Frictionless B2B team management."',
    b2Trad: 'Output Agenzia: "Gestione dei team B2B senza attriti."',
    b2Refined: 'Intento Tecnico: "Controllo degli accessi basato sui ruoli (RBAC) e routing SSO/SAML self-service per clientela B2B."',

    b3Title: '03 / Sincronizzazione Sessioni Edge & Latenza',
    b3Problem: 'Latenza nella verifica dei token da regioni lontane dai server centrali.',
    b3Impact: 'Rallentamenti della UI durante il controllo dei permessi delle pagine.',
    b3Fix: 'Caching dei claim JWT ottimizzato sull’Edge con webhook di revoca locali.',
    b3Us: 'Linea Base US: "Drop-in UI components and edge middleware."',
    b3Trad: 'Output Agenzia: "Componenti UI pronti all’uso e middleware Edge."',
    b3Refined: 'Intento Tecnico: "Validazione delle sessioni Edge a bassissima latenza tramite caching distribuito dei JWT."',

    s3Title: 'Sezione 3 / Matrice di Espansione',
    s3Heading: 'Strategia per il Mercato Enterprise',
    r1Strength: 'Migliore DX su React/Next',
    r1Bottleneck: 'Conformità EU/LATAM',
    r1Solution: 'Dati PII Regionali (EU-central-1)',
    r2Strength: 'Componenti UI Pranti',
    r2Bottleneck: 'Vendite SSO/SAML',
    r2Solution: 'SAML B2B Self-Service',
    r3Strength: 'Supporto Middleware Edge',
    r3Bottleneck: 'Latenza Edge Globale',
    r3Solution: 'Caching JWT Locale',

    summaryHeading: 'Sintesi Strategica',
    summaryText: 'Per conquistare i mercati europei, Clerk deve affiancare alle sue funzionalità per desarrollatori solide garanzie di sovranità dei dati e gestione SSO aziendale.',

    returnDir: '← Torna al Direttorio',
    lblProblem: 'Problema',
    lblImpact: 'Impatto',
    lblFix: 'Soluzione',
    usBaseline: 'Linea Base US',
    tradAgency: 'Output Agenzia',
    refinedIntent: 'Intento Rifinito'
  },
  pt: {
    navTag: 'Auditoria de Localização #09',
    title: 'Clerk: Arquitetura de Identidade e Fricção de Vendas Corporativas',
    subtitle: 'Adequação de narrativas de autenticação para conformidade com LGPD/GDPR, residência de dados e suporte multi-tenant B2B na Europa e LATAM.',
    readingTime: '10 min de leitura',
    date: 'Outubro 2026',
    client: 'Clerk',
    markets: 'EU, DACH, LATAM',
    audience: 'CISOs, Compradores Corporativos e Arquitetos SaaS',
    
    s1Title: 'Seção 1 / Perspectiva e Intenção',
    overviewHeading: 'Contexto Executivo e Gargalos Operacionais',
    overviewBody: 'O Clerk é referência em experiência do desenvolvedor (DX) em React/Next.js. Porém, ao expandir para clientes corporativos na Europa e na América Latina (LGPD), enfrenta restrições em residência de PII, governança de dados e latência na validação de sessões via Edge.',
    overviewSub: 'Esta auditoria reestrutura a proposta para foco em arquitetura de identidade Zero-Trust, residência local de dados (EU-central-1) e roteamento SSO/SAML autosserviço.',

    s2Title: 'Seção 2 / Análise Detalhada dos Pontos de Fricção',
    
    b1Title: '01 / Residência de Dados e Soberania LGPD / GDPR',
    b1Problem: 'Armazenamento de PII em clusters centralizados nos EUA.',
    b1Impact: 'Bloqueio em auditorias de segurança antes do início da integração.',
    b1Fix: 'Instâncias regionais nativas (EU-central-1) sem necessidade de planos corporativos customizados.',
    b1Us: 'Linha de Base EUA: "More than authentication. Complete user management."',
    b1Trad: 'Resultado de Agência: "Mais que autenticação. Gestão completa de usuários."',
    b1Refined: 'Intenção Técnica: "Infraestrutura de identidade em conformidade com LGPD/GDPR e residência de dados regional (EU-central-1)."',

    b2Title: '02 / Multi-Tenancy B2B e Roteamento SSO/SAML',
    b2Problem: 'Exigência de controle de acesso RBAC granular e mapeamento de SSO por cliente corporativo.',
    b2Impact: 'Limitações arquiteturais ao mapear estruturas complexas no painel padrão.',
    b2Fix: 'Roteamento SSO/SAML desacoplado via API para configuração em autosserviço.',
    b2Us: 'Linha de Base EUA: "Frictionless B2B team management."',
    b2Trad: 'Resultado de Agência: "Gestão de equipes B2B sem fricção."',
    b2Refined: 'Intenção Técnica: "Controle de acesso baseado em funções (RBAC) e integração SSO/SAML em autosserviço para B2B."',

    b3Title: '03 / Sincronização de Sessões no Edge e Latência',
    b3Problem: 'Consultas em bancos primários remotos geram picos de latência na verificação de permissões.',
    b3Impact: 'Instabilidade na interface do usuário durante a verificação de rotas em regiões distantes.',
    b3Fix: 'Cache otimizado de claims JWT no Edge combinado com webhooks de revogação local.',
    b3Us: 'Linha de Base EUA: "Drop-in UI components and edge middleware."',
    b3Trad: 'Resultado de Agência: "Componentes UI prontos e middleware Edge."',
    b3Refined: 'Intenção Técnica: "Validação de sessão de ultrabaixa latência em redes Edge com gerenciamento distribuído de tokens JWT."',

    s3Title: 'Seção 3 / Matriz de Expansão',
    s3Heading: 'Estratégia de Posicionamento Enterprise',
    r1Strength: 'Melhor DX React/Next',
    r1Bottleneck: 'Conformidade UE/LATAM',
    r1Solution: 'Dados PII Regionais (EU-central-1)',
    r2Strength: 'Componentes UI Prontos',
    r2Bottleneck: 'Vendas SSO/SAML',
    r2Solution: 'SAML B2B Autosserviço',
    r3Strength: 'Suporte Middleware Edge',
    r3Bottleneck: 'Latência Edge Global',
    r3Solution: 'Cache JWT Local',

    summaryHeading: 'Resumo Estratégico',
    summaryText: 'Para conquistar grandes clientes na Europa e LATAM, o Clerk deve evoluir de uma ferramenta para desenvolvedores independentes para uma plataforma de identidade corporativa sólida, garantindo soberania de dados e autosserviço SSO.',

    returnDir: '← Voltar ao Diretório',
    lblProblem: 'Problema',
    lblImpact: 'Impacto',
    lblFix: 'Solução',
    usBaseline: 'Linha de Base (EUA)',
    tradAgency: 'Agência Tradicional',
    refinedIntent: 'Intenção Refinada'
  }
};

export default function ClerkAuditPage() {
  const [lang, setLang] = useState('en');
  const t = AUDIT_CONTENT[lang] || AUDIT_CONTENT.en;

  const blocks = [
    {
      title: t.b1Title,
      problem: t.b1Problem,
      impact: t.b1Impact,
      fix: t.b1Fix,
      us: t.b1Us,
      trad: t.b1Trad,
      refined: t.b1Refined
    },
    {
      title: t.b2Title,
      problem: t.b2Problem,
      impact: t.b2Impact,
      fix: t.b2Fix,
      us: t.b2Us,
      trad: t.b2Trad,
      refined: t.b2Refined
    },
    {
      title: t.b3Title,
      problem: t.b3Problem,
      impact: t.b3Impact,
      fix: t.b3Fix,
      us: t.b3Us,
      trad: t.b3Trad,
      refined: t.b3Refined
    }
  ];

  return (
    <div className="min-h-screen bg-ink-950 text-bone-100 font-sans selection:bg-bone-100 selection:text-ink-950 print:bg-white print:text-black">
      <style jsx global>{`
        @media print {
          body {
            background-color: #ffffff !important;
            color: #000000 !important;
          }
          .print\\:hidden {
            display: none !important;
          }
          .print\\:border-gray-300 {
            border-color: #d1d5db !important;
          }
          .print\\:text-black {
            color: #000000 !important;
          }
        }
      `}</style>

      {/* MINIMAL TOP NAV */}
      <header className="border-b border-ink-800 sticky top-0 bg-ink-950/95 backdrop-blur z-40 print:hidden">
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between font-mono text-xs text-bone-400">
          <Link href="/" className="hover:text-bone-100 transition-colors">
            ← VeraVox
          </Link>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              {['es', 'fr', 'de', 'it', 'pt', 'en'].map((l) => (
                <React.Fragment key={l}>
                  <button
                    onClick={() => setLang(l)}
                    className={`bg-transparent border-0 p-0 cursor-pointer transition-colors ${
                      lang === l ? 'text-bone-100 font-bold underline underline-offset-4' : 'text-bone-500 hover:text-bone-300'
                    }`}
                  >
                    {l.toUpperCase()}
                  </button>
                  {l !== 'en' && <span className="text-ink-700">/</span>}
                </React.Fragment>
              ))}
            </div>

            <button 
              onClick={() => window.print()}
              className="text-[10px] uppercase tracking-widest text-bone-500 hover:text-bone-100 transition-colors cursor-pointer bg-transparent border-0"
            >
              Export PDF
            </button>
          </div>
        </div>
      </header>

      {/* DOCUMENT BODY */}
      <main className="max-w-4xl mx-auto px-6 pt-12 pb-24 print:pt-0 print:pb-0 print:px-0">
        
        {/* HEADER */}
        <header className="mb-16 border-b border-ink-800 pb-10 print:border-gray-300">
          <div className="font-mono text-xs text-bone-500 mb-4 print:text-gray-600">
            {t.navTag} — {t.date}
          </div>

          <h1 className="font-display font-medium text-3xl md:text-4xl text-bone-100 tracking-tight mb-4 print:text-black">
            {t.title}
          </h1>
          <p className="text-base text-bone-300 mb-8 leading-relaxed print:text-gray-700">
            {t.subtitle}
          </p>
          
          <div className="grid grid-cols-3 gap-4 font-mono text-[11px] text-bone-400 border-t border-ink-800 pt-6 print:border-gray-300 print:text-gray-700">
            <div>
              <span className="text-bone-600 block uppercase tracking-wider text-[9px] mb-1 print:text-gray-500">Client</span>
              {t.client}
            </div>
            <div>
              <span className="text-bone-600 block uppercase tracking-wider text-[9px] mb-1 print:text-gray-500">Markets</span>
              {t.markets}
            </div>
            <div>
              <span className="text-bone-600 block uppercase tracking-wider text-[9px] mb-1 print:text-gray-500">Audience</span>
              {t.audience}
            </div>
          </div>
        </header>

        {/* SECTION 1 */}
        <section className="mb-16">
          <h2 className="font-mono text-xs uppercase tracking-widest text-bone-500 mb-4 print:text-black print:font-bold">
            {t.s1Title}
          </h2>
          <div className="space-y-4 text-bone-200 leading-relaxed text-sm print:text-gray-800">
            <h3 className="font-display text-lg text-bone-100 print:text-black">
              {t.overviewHeading}
            </h3>
            <p className="text-bone-300">{t.overviewBody}</p>
            <p className="text-bone-400 italic text-xs border-l border-ink-700 pl-4 py-1 print:border-gray-400 print:text-gray-600">
              {t.overviewSub}
            </p>
          </div>
        </section>

        {/* SECTION 2: EDITORIAL BREAKDOWN */}
        <section className="mb-20">
          <h2 className="font-mono text-xs uppercase tracking-widest text-bone-500 mb-8 print:text-black print:font-bold">
            {t.s2Title}
          </h2>

          <div className="space-y-16">
            {blocks.map((item, idx) => (
              <div key={idx} className="border-t border-ink-800 pt-6 print:border-gray-300">
                <h3 className="font-mono text-sm font-semibold text-bone-100 mb-6 print:text-black">
                  {item.title}
                </h3>

                {/* ARCHITECTURAL TRIO */}
                <div className="space-y-4 text-xs leading-relaxed mb-8">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-bone-500 block mb-1 print:text-gray-600">
                      {t.lblProblem}
                    </span>
                    <p className="text-bone-300 print:text-gray-800">{item.problem}</p>
                  </div>

                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-bone-500 block mb-1 print:text-gray-600">
                      {t.lblImpact}
                    </span>
                    <p className="text-bone-300 print:text-gray-800">{item.impact}</p>
                  </div>

                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-bone-500 block mb-1 print:text-gray-600">
                      {t.lblFix}
                    </span>
                    <p className="text-bone-200 print:text-black">{item.fix}</p>
                  </div>
                </div>

                {/* COPY COMPARISON */}
                <div className="bg-ink-900/60 p-4 border-l border-ink-700 space-y-3 text-xs print:bg-gray-50 print:border-gray-400">
                  <div>
                    <span className="font-mono text-[9px] text-bone-500 block print:text-gray-500">{t.usBaseline}</span>
                    <p className="text-bone-400 italic print:text-gray-700">{item.us}</p>
                  </div>
                  <div>
                    <span className="font-mono text-[9px] text-bone-500 block print:text-gray-500">{t.tradAgency}</span>
                    <p className="text-bone-400 font-mono print:text-gray-700">{item.trad}</p>
                  </div>
                  <div>
                    <span className="font-mono text-[9px] text-bone-300 block print:text-black">{t.refinedIntent}</span>
                    <p className="text-bone-100 font-mono font-medium print:text-black">{item.refined}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: ROADMAP & MATRIX */}
        <section className="mb-20">
          <h2 className="font-mono text-xs uppercase tracking-widest text-bone-500 mb-6 print:text-black print:font-bold">
            {t.s3Title}
          </h2>
          
          <h3 className="font-display text-lg text-bone-100 mb-6 print:text-black">{t.s3Heading}</h3>
          
          {/* MINIMAL ROADMAP LIST */}
          <div className="border-t border-ink-800 divide-y divide-ink-800 font-mono text-xs mb-12 print:border-gray-300 print:divide-gray-300">
            <div className="py-4 grid grid-cols-1 md:grid-cols-3 gap-2">
              <span className="text-bone-100 print:text-black">{t.r1Strength}</span>
              <span className="text-bone-400 print:text-gray-600">{t.r1Bottleneck}</span>
              <span className="text-bone-200 font-medium print:text-black">{t.r1Solution}</span>
            </div>
            <div className="py-4 grid grid-cols-1 md:grid-cols-3 gap-2">
              <span className="text-bone-100 print:text-black">{t.r2Strength}</span>
              <span className="text-bone-400 print:text-gray-600">{t.r2Bottleneck}</span>
              <span className="text-bone-200 font-medium print:text-black">{t.r2Solution}</span>
            </div>
            <div className="py-4 grid grid-cols-1 md:grid-cols-3 gap-2">
              <span className="text-bone-100 print:text-black">{t.r3Strength}</span>
              <span className="text-bone-400 print:text-gray-600">{t.r3Bottleneck}</span>
              <span className="text-bone-200 font-medium print:text-black">{t.r3Solution}</span>
            </div>
          </div>

          <div className="space-y-3 border-t border-ink-800 pt-6 print:border-gray-300">
            <h4 className="font-mono text-xs uppercase tracking-widest text-bone-400 print:text-black print:font-bold">
              {t.summaryHeading}
            </h4>
            <p className="text-bone-300 leading-relaxed text-sm print:text-gray-800">
              {t.summaryText}
            </p>
          </div>
        </section>

        {/* FOOTER LINK */}
        <div className="mt-20 pt-8 border-t border-ink-800 print:hidden">
          <Link href="/" className="font-mono text-xs text-bone-500 hover:text-bone-100 transition-colors">
            {t.returnDir}
          </Link>
        </div>
      </main>
    </div>
  );
}
