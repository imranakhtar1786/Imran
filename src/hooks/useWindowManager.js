'use client';

import { useOs } from '@/context/OsContext';

export function useWindowManager() {
  const {
    state,
    openApp,
    closeWindow,
    focusWindow,
    minimizeWindow,
    restoreWindow,
    maximizeWindow,
    updateWindowBounds,
  } = useOs();

  return {
    windows: state.windows,
    activeWindowId: state.activeWindowId,
    openApp,
    closeWindow,
    focusWindow,
    minimizeWindow,
    restoreWindow,
    maximizeWindow,
    updateWindowBounds,
    getWindow: (id) => state.windows.find((w) => w.id === id),
    isActive: (id) => state.activeWindowId === id,
  };
}
