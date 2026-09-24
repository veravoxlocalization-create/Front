'use client';

import React, { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    // Check if user previously forced light mode
    if (document.documentElement.classList.contains('theme-light')) {
      setIsLight(true);
    }
  }, []);

  const handleToggle = () => {
    if (!isLight) {
      const proceed = window.confirm("WARNING: Light mode is high-contrast and highly bright. Are you sure you want to proceed?");
      if (!proceed) return;
    }
    
    const newTheme = !isLight;
    setIsLight(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add('theme-light');
    } else {
      document.documentElement.classList.remove('theme-light');
    }
  };

  return (
    <button
      onClick={handleToggle}
      className="fixed bottom-6 right-6 px-3 py-1.5 bg-ink-900 border border-ink-700 text-bone-500 font-mono text-[10px] uppercase tracking-widest hover:border-signal-gold hover:text-signal-gold transition-colors z-50 rounded-sm"
    >
      {isLight ? 'Revert to Dark' : 'Force Light Mode'}
    </button>
  );
}
