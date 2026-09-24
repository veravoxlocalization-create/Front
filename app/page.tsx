'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-ink-950 text-bone-100">
      {/* Your Main Landing Page Content */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold">Re-engineer your US SaaS copy for European technical buyers.</h1>
        
        {/* Link pointing to the audit */}
        <div className="mt-10">
          <Link href="/audits/resend" className="text-signal-green underline">
            Read the Resend Audit Memorandum →
          </Link>
        </div>
      </section>
    </main>
  );
}

