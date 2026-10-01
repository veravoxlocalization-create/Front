export interface TeardownCase {
  id: string;
  category: string;
  title: string;
  usBase: string;
  nativeOutput: {
    de: string;
    es: string;
    diagnosis: string;
  };
  veravoxOutput: {
    de: string;
    es: string;
    impact: string;
  };
}

export interface ComparisonRow {
  criterion: string;
  tms: string;
  veravox: string;
}

export const TEARDOWN_CASE: TeardownCase = {
  id: "01",
  category: "POSITIONING AUDIT",
  title: "Caso 01: Mensaje de Infraestructura SaaS",
  usBase: "The open-source product operating system. How developers build better products.",
  nativeOutput: {
    de: "Das Open-Source-Produkt-Betriebssystem. Wie Entwickler bessere Produkte bauen.",
    es: "El SO de producto de código abierto. Cómo los desarrolladores crean mejores productos.",
    diagnosis: "Traduce 'operating system' de forma literal (Betriebssystem / SO), desviando la percepción hacia un sistema operativo de escritorio. Mantiene claims de marketing vacíos ('build better products') que restan rigor técnico."
  },
  veravoxOutput: {
    de: "Die Open-Source-Plattform für Produktentwicklung — abgestimmt auf die Anforderungen von Engineering-Teams.",
    es: "Plataforma de desarrollo de producto en código abierto. Diseñada para arquitecturas de software rigurosas.",
    impact: "Elimina la adjetivación vacía, reorienta el término hacia infraestructura (Plattform / Arquitectura) y alinea la propuesta con los criterios de evaluación de un equipo de ingeniería local."
  }
};

export const COMPARISON_DATA: ComparisonRow[] = [
  {
    criterion: "Enfoque Operativo",
    tms: "Procesamiento por cadenas aisladas (string-by-string), dependiente de memorias de traducción y LLMs genéricos.",
    veravox: "Reingeniería de la arquitectura del mensaje y verificación de la intención técnica según el mercado."
  },
  {
    criterion: "Vocabulario Técnico",
    tms: "Conversión literal de términos (p. ej., \"Operating System\" → \"Betriebssystem\" / \"SO\").",
    veravox: "Mapeo de terminología conforme al vocabulario de evaluación de software del comprador local."
  },
  {
    criterion: "Tratamiento del Hype US",
    tms: "Preserva la adjetivación vacía y afirmaciones de marketing no verificables (\"build better products\").",
    veravox: "Sustituye el hype por anclas de valor pragmático y métricas de verificación técnica."
  },
  {
    criterion: "Modelo de Ejecución",
    tms: "Suscripción recurrente ($3.000–$5.000/mes) más costes de mantenimiento de pipelines y conectores.",
    veravox: "Auditoría puntual de alto impacto o retención enfocada directamente en conversión."
  }
];
