'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface AuditPageProps {
  params: {
    id: string;
  };
}

const AUDIT_DATA: Record<string, {
  name: string;
  category: string;
  summary: string;
  usBaseline: string;
  tmsOutput: { de: string; es: string };
  veravoxOutput: { de: string; es: string };
  diagnosis: string;
  impact: string;
  tableRows: Array<{ criterion: string; tms: string; veravox: string }>;
}> = {
  clerk: {
    name: 'Clerk',
    category: 'Authentication & User Management',
    summary: 'Auditoría de arquitectura de mensaje para infraestructura de autenticación B2B.',
    usBaseline: 'More than authentication. Complete user management for modern applications.',
    tmsOutput: {
      de: 'Mehr als Authentifizierung. Vollständiges Benutzermanagement für moderne Anwendungen.',
      es: 'Más que autenticación. Gestión completa de usuarios para aplicaciones modernas.'
    },
    veravoxOutput: {
      de: 'Identity-Infrastruktur & Sessions-Verwaltung für Enterprise-SaaS-Architekturen.',
      es: 'Infraestructura de identidad y gestión de sesiones para arquitecturas SaaS de alto rendimiento.'
    },
    diagnosis: 'El software TMS traduce "user management" como "Benutzermanagement/Gestión de usuarios", haciendo que el software parezca un panel administrativo básico en lugar de un motor de identidad seguro.',
    impact: 'Re-orienta el posicionamiento hacia seguridad de sesión e infraestructura enterprise, acelerando la aprobación de equipos DevSecOps locales.',
    tableRows: [
      {
        criterion: 'Categorización Técnica',
        tms: 'Clasifica el software como "gestión de usuarios" estándar.',
        veravox: 'Posiciona la herramienta como "Infraestructura de Identidad y Sesiones".'
      },
      {
        criterion: 'Criterio de Evaluación',
        tms: 'Enfocado en características cosméticas de interfaz de usuario.',
        veravox: 'Enfocado en cumplimiento normativo, latencia y arquitectura de seguridad.'
      },
      {
        criterion: 'Coste Operativo',
        tms: 'Suscripción TMS $3K-$5K/mes acumulando deuda de traducción.',
        veravox: 'Reingeniería puntual de alta conversión para landing de producto.'
      }
    ]
  },
  resend: {
    name: 'Resend',
    category: 'Email Infrastructure',
    summary: 'Auditoría de arquitectura de mensaje para plataformas de envío de email transaccional.',
    usBaseline: 'Email for developers. Reimagined for modern engineering workflows.',
    tmsOutput: {
      de: 'E-Mail für Entwickler. Neu erfunden für moderne Entwicklungs-Workflows.',
      es: 'Email para desarrolladores. Reorganizado para flujos de trabajo modernos.'
    },
    veravoxOutput: {
      de: 'Transaktionale E-Mail-API mit hoher Zustellbarkeit für Entwicklungs-Teams.',
      es: 'API de email transaccional de alta entregabilidad diseñada para pipelines de desarrollo.'
    },
    diagnosis: 'Las plataformas TMS mantienen la adjetivación vacía de marketing ("Neu erfunden / Reorganizado"), sin detallar métricas de entregabilidad ni capacidad de API.',
    impact: 'Pone en primer plano la entregabilidad transaccional y la integración por API, clave para la decisión de ingenieros backend.',
    tableRows: [
      {
        criterion: 'Intención Principal',
        tms: 'Destaca un concepto abstracto de "reinvención".',
        veravox: 'Ancla la propuesta en la entregabilidad de API y fiabilidad del pipeline.'
      },
      {
        criterion: 'Terminología API',
        tms: 'Traducción genérica de "email" y "workflows".',
        veravox: 'Mapeo preciso a "transaktionale E-Mail-API" y "pipelines de desarrollo".'
      },
      {
        criterion: 'Retorno de Inversión',
        tms: 'Gasto recurrente en traducción por palabras sin validación.',
        veravox: 'Garantía de resonancia técnica en la evaluación inicial de desarrolladores.'
      }
    ]
  }
};

export default function AuditDetailPage({ params }: AuditPageProps) {
  const [activeLang, setActiveLang] = useState<'es' | 'de' | 'en'>('es');
  
  const auditId = params.id.toLowerCase();
  const data = AUDIT_DATA[auditId] || AUDIT_DATA.clerk;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950">
      {/* Header Navigation */}
      <header className="border-b border-slate-800 bg-slate-950/90 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="font-mono text-lg font-bold tracking-wider text-emerald-400 hover:opacity-80">
              VERAVOX
            </Link>
            <span className="text-slate-600 font-mono text-sm">/</span>
            <span className="font-mono text-xs uppercase text-slate-400">AUDITS</span>
            <span className="text-slate-600 font-mono text-sm">/</span>
            <span className="font-mono text-xs uppercase text-emerald-400">{data.name}</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => window.print()}
              className="px-3 py-1 bg-slate-900 border border-slate-700 hover:border-slate-500 rounded font-mono text-xs text-slate-300 transition-colors"
            >
              [EXPORT PDF]
            </button>
            <div className="flex items-center gap-1 bg-slate-900 border border-slate-800 p-1 rounded font-mono text-xs">
              {(['es', 'de', 'en'] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setActiveLang(l)}
                  className={`px-2 py-1 rounded uppercase transition-colors ${
                    activeLang === l ? 'bg-emerald-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Title and Meta */}
        <div className="mb-10 border-b border-slate-800 pb-8">
          <div className="inline-block font-mono text-xs text-emerald-400 bg-emerald-950/60 border border-emerald-800 px-3 py-1 rounded mb-4">
            AUDITORÍA TÉCNICA COMPLETADA &bull; ID: {auditId.toUpperCase()}
          </div>
          <h1 className="text-4xl font-extrabold text-slate-50 mb-3">
            Informe de Auditoría Estructural: {data.name}
          </h1>
          <p className="text-slate-400 text-lg max-w-3xl">
            {data.summary}
          </p>
        </div>

        {/* 3-Column Comparison Teardown */}
        <section className="mb-12">
          <h2 className="font-mono text-sm font-bold text-slate-400 uppercase tracking-wider mb-6">
            Teardown de Mensaje: AI TMS ($3K+/mes) vs. VeraVox Layer
          </h2>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6">
            {/* US Baseline */}
            <div className="mb-6 p-4 rounded bg-slate-950 border border-slate-800">
              <span className="font-mono text-xs text-slate-500 block mb-1">
                [01] LÍNEA BASE ORIGINAL (US EN)
              </span>
              <p className="font-mono text-sm text-slate-200 font-semibold">
                "{data.usBaseline}"
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Native AI TMS Output */}
              <div className="p-5 rounded-lg bg-rose-950/10 border border-rose-900/40">
                <span className="font-mono text-xs font-bold text-rose-400 bg-rose-950/80 border border-rose-800/60 px-2 py-1 rounded block w-fit mb-3">
                  [02] PLATAFORMA AI TMS / LOKALISE / PHRASE ($3K+/MES)
                </span>
                <div className="space-y-2 font-mono text-xs text-slate-300 mb-4 bg-slate-950 p-3 rounded border border-rose-950">
                  <p><strong className="text-rose-400">DE:</strong> "{data.tmsOutput.de}"</p>
                  <p><strong className="text-rose-400">ES:</strong> "{data.tmsOutput.es}"</p>
                </div>
                <div className="border-t border-rose-900/30 pt-3">
                  <span className="font-mono text-xs text-rose-400 font-semibold block mb-1">Fallo de Conversión:</span>
                  <p className="text-xs text-slate-400 leading-relaxed">{data.diagnosis}</p>
                </div>
              </div>

              {/* VeraVox Adaptation */}
              <div className="p-5 rounded-lg bg-emerald-950/10 border border-emerald-900/40">
                <span className="font-mono text-xs font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-800/60 px-2 py-1 rounded block w-fit mb-3">
                  [03] REINGENIERÍA DE MENSAJE ESTRUCTURAL VERAVOX
                </span>
                <div className="space-y-2 font-mono text-xs text-slate-100 mb-4 bg-slate-950 p-3 rounded border border-emerald-950 font-medium">
                  <p><strong className="text-emerald-400">DE:</strong> "{data.veravoxOutput.de}"</p>
                  <p><strong className="text-emerald-400">ES:</strong> "{data.veravoxOutput.es}"</p>
                </div>
                <div className="border-t border-emerald-900/30 pt-3">
                  <span className="font-mono text-xs text-emerald-400 font-semibold block mb-1">Impacto Técnico:</span>
                  <p className="text-xs text-slate-400 leading-relaxed">{data.impact}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Matrix Table */}
        <section className="mb-12">
          <h2 className="font-mono text-sm font-bold text-slate-400 uppercase tracking-wider mb-6">
            Matriz de Evaluación de Arquitectura
          </h2>
          <div className="overflow-x-auto border border-slate-800 rounded-lg">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 border-b border-slate-800 font-mono text-xs text-slate-400 uppercase">
                  <th className="p-4 w-1/4">Criterio</th>
                  <th className="p-4 w-3/8 text-rose-300">Stack AI TMS ($3K+/mes)</th>
                  <th className="p-4 w-3/8 text-emerald-400">Capa VeraVox</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-sm">
                {data.tableRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-900/30">
                    <td className="p-4 font-mono font-semibold text-slate-200">{row.criterion}</td>
                    <td className="p-4 text-slate-400 leading-relaxed">{row.tms}</td>
                    <td className="p-4 text-slate-200 leading-relaxed bg-emerald-950/5 font-medium">{row.veravox}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Call To Action */}
        <div className="p-8 bg-slate-900 border border-slate-800 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-slate-100 mb-2">¿Necesitas auditar tu stack de conversión técnico?</h3>
            <p className="text-slate-400 text-sm">Revisa tu propuesta antes de invertir miles de dólares en suscripciones recurrentes de traducción automática.</p>
          </div>
          <Link
            href="/#audits"
            className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-mono font-bold text-sm rounded whitespace-nowrap transition-colors"
          >
            SOLICITAR AUDITORÍA ($450)
          </Link>
        </div>
      </main>
    </div>
  );
}
