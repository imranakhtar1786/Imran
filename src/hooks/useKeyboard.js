'use client';

import { useEffect } from 'react';

export function useKeyboard({ onShortcut }) {
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.ctrlKey || e.metaKey) {
        switch (e.key.toLowerCase()) {
          case 't':
            e.preventDefault();
            onShortcut?.('terminal');
            break;
          case 'e':
            e.preventDefault();
            onShortcut?.('explorer');
            break;
          case ',':
            e.preventDefault();
            onShortcut?.('settings');
            break;
          default:
            break;
        }
      }
      if (e.key === 'Escape') {
        onShortcut?.('escape');
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onShortcut]);
}
