import './globals.css';
import React from 'react';

export const metadata = {
  title: 'VeraVox Localization',
  description: 'Institutional localization audit platform for technical B2B SaaS.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-ink-950 text-bone-100 antialiased selection:bg-signal-green selection:text-ink-950">
        {children}
      </body>
    </html>
  );
}
