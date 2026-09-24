import './globals.css';
import React from 'react';
import ThemeToggle from '../components/ThemeToggle';

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
      <body className="antialiased selection:bg-signal-gold selection:text-ink-950">
        {children}
        <ThemeToggle />
      </body>
    </html>
  );
}
