'use client';

import { createContext, useContext, useReducer, useEffect, useCallback, useMemo } from 'react';
import { appRegistry, generateWindowId } from '@/context/appConfig';
import { DEFAULT_THEME, applyTheme } from '@/lib/themes';

const OsContext = createContext(null);

const initialTerminalSession = () => ({
  cwd: '/home/imran',
  history: [],
  historyIndex: -1,
  lines: [
    { type: 'system', text: 'Welcome to ImranOS Terminal. Type "help" for commands.' },
  ],
  matrixActive: false,
  pythonMode: false,
  bootTime: new Date().toISOString(),
});

const initialState = {
  booted: false,
  theme: DEFAULT_THEME,
  windows: [],
  activeWindowId: null,
  nextZIndex: 100,
  launcherOpen: false,
  contextMenu: null,
  selectedIconIds: [],
  desktopIconPositions: {},
  terminalSessions: {},
  explorerPath: '/home/imran',
  projectsSelectedId: null,
};

function createWindow(appId, overrides = {}) {
  const app = appRegistry[appId];
  if (!app) return null;
  const offset = overrides.offset || 0;
  return {
    id: generateWindowId(),
    appId,
    title: app.title,
    x: app.defaultPosition.x + offset * 24,
    y: app.defaultPosition.y + offset * 24,
    width: app.defaultSize.width,
    height: app.defaultSize.height,
    minimized: false,
    maximized: false,
    prevBounds: null,
    zIndex: 0,
    ...overrides.data,
  };
}

function focusWindow(windows, windowId, nextZIndex) {
  return {
    windows: windows.map((w) =>
      w.id === windowId ? { ...w, zIndex: nextZIndex, minimized: false } : w
    ),
    activeWindowId: windowId,
    nextZIndex: nextZIndex + 1,
  };
}

function osReducer(state, action) {
  switch (action.type) {
    case 'BOOT_COMPLETE':
      return { ...state, booted: true };

    case 'SET_THEME': {
      const theme = action.theme;
      if (typeof window !== 'undefined') {
        localStorage.setItem('imranos-theme', theme);
      }
      applyTheme(theme);
      return { ...state, theme };
    }

    case 'TOGGLE_LAUNCHER':
      return { ...state, launcherOpen: action.open ?? !state.launcherOpen };

    case 'SET_CONTEXT_MENU':
      return { ...state, contextMenu: action.menu };

    case 'SELECT_ICONS':
      return { ...state, selectedIconIds: action.ids };

    case 'SET_DESKTOP_ICON_POSITION':
      return {
        ...state,
        desktopIconPositions: {
          ...state.desktopIconPositions,
          [action.appId]: action.position,
        },
      };

    case 'OPEN_WINDOW': {
      const existing = state.windows.find(
        (w) => w.appId === action.appId && !action.allowMultiple
      );
      if (existing) {
        const focused = focusWindow(state.windows, existing.id, state.nextZIndex);
        return { ...state, ...focused, launcherOpen: false };
      }
      const win = createWindow(action.appId, { offset: state.windows.length, data: action.data });
      if (!win) return state;
      win.zIndex = state.nextZIndex;
      const sessions = { ...state.terminalSessions };
      if (action.appId === 'terminal') {
        sessions[win.id] = initialTerminalSession();
      }
      return {
        ...state,
        windows: [...state.windows, win],
        activeWindowId: win.id,
        nextZIndex: state.nextZIndex + 1,
        launcherOpen: false,
        terminalSessions: sessions,
        projectsSelectedId: action.data?.projectId ?? state.projectsSelectedId,
      };
    }

    case 'CLOSE_WINDOW': {
      const sessions = { ...state.terminalSessions };
      delete sessions[action.id];
      const windows = state.windows.filter((w) => w.id !== action.id);
      const activeWindowId =
        state.activeWindowId === action.id
          ? windows.length
            ? windows[windows.length - 1].id
            : null
          : state.activeWindowId;
      return { ...state, windows, activeWindowId, terminalSessions: sessions };
    }

    case 'FOCUS_WINDOW': {
      const focused = focusWindow(state.windows, action.id, state.nextZIndex);
      return { ...state, ...focused };
    }

    case 'MINIMIZE_WINDOW':
      return {
        ...state,
        windows: state.windows.map((w) =>
          w.id === action.id ? { ...w, minimized: true } : w
        ),
        activeWindowId: state.activeWindowId === action.id ? null : state.activeWindowId,
      };

    case 'RESTORE_WINDOW': {
      const focused = focusWindow(
        state.windows.map((w) => (w.id === action.id ? { ...w, minimized: false } : w)),
        action.id,
        state.nextZIndex
      );
      return { ...state, ...focused };
    }

    case 'MAXIMIZE_WINDOW': {
      return {
        ...state,
        windows: state.windows.map((w) => {
          if (w.id !== action.id) return w;
          if (w.maximized) {
            return {
              ...w,
              maximized: false,
              x: w.prevBounds?.x ?? w.x,
              y: w.prevBounds?.y ?? w.y,
              width: w.prevBounds?.width ?? w.width,
              height: w.prevBounds?.height ?? w.height,
              prevBounds: null,
            };
          }
          return {
            ...w,
            maximized: true,
            prevBounds: { x: w.x, y: w.y, width: w.width, height: w.height },
            x: 0,
            y: 0,
            width: action.viewport.width,
            height: action.viewport.height - 48,
          };
        }),
      };
    }

    case 'UPDATE_WINDOW_BOUNDS':
      return {
        ...state,
        windows: state.windows.map((w) =>
          w.id === action.id
            ? { ...w, x: action.x, y: action.y, width: action.width, height: action.height }
            : w
        ),
      };

    case 'TERMINAL_APPEND':
      return {
        ...state,
        terminalSessions: {
          ...state.terminalSessions,
          [action.windowId]: {
            ...state.terminalSessions[action.windowId],
            lines: [...(state.terminalSessions[action.windowId]?.lines || []), ...action.lines],
          },
        },
      };

    case 'TERMINAL_CLEAR':
      return {
        ...state,
        terminalSessions: {
          ...state.terminalSessions,
          [action.windowId]: {
            ...state.terminalSessions[action.windowId],
            lines: [],
          },
        },
      };

    case 'TERMINAL_SET_CWD':
      return {
        ...state,
        terminalSessions: {
          ...state.terminalSessions,
          [action.windowId]: {
            ...state.terminalSessions[action.windowId],
            cwd: action.cwd,
          },
        },
      };

    case 'TERMINAL_ADD_HISTORY':
      return {
        ...state,
        terminalSessions: {
          ...state.terminalSessions,
          [action.windowId]: {
            ...state.terminalSessions[action.windowId],
            history: [...(state.terminalSessions[action.windowId]?.history || []), action.command],
            historyIndex: -1,
          },
        },
      };

    case 'TERMINAL_SET_HISTORY_INDEX':
      return {
        ...state,
        terminalSessions: {
          ...state.terminalSessions,
          [action.windowId]: {
            ...state.terminalSessions[action.windowId],
            historyIndex: action.index,
          },
        },
      };

    case 'TERMINAL_TOGGLE_MATRIX':
      return {
        ...state,
        terminalSessions: {
          ...state.terminalSessions,
          [action.windowId]: {
            ...state.terminalSessions[action.windowId],
            matrixActive: !state.terminalSessions[action.windowId]?.matrixActive,
          },
        },
      };

    case 'INIT_TERMINAL_SESSION':
      if (state.terminalSessions[action.windowId]) return state;
      return {
        ...state,
        terminalSessions: {
          ...state.terminalSessions,
          [action.windowId]: initialTerminalSession(),
        },
      };

    case 'TERMINAL_SET_PYTHON_MODE':
      return {
        ...state,
        terminalSessions: {
          ...state.terminalSessions,
          [action.windowId]: {
            ...state.terminalSessions[action.windowId],
            pythonMode: action.active,
          },
        },
      };

    case 'SET_EXPLORER_PATH':
      return { ...state, explorerPath: action.path };

    case 'SET_PROJECT_SELECTED':
      return { ...state, projectsSelectedId: action.projectId };

    default:
      return state;
  }
}

export function OsProvider({ children }) {
  const [state, dispatch] = useReducer(osReducer, initialState);

  useEffect(() => {
    const saved = localStorage.getItem('imranos-theme');
    const theme = saved && saved in { ubuntu: 1, kali: 1, arch: 1, matrix: 1, win95: 1 } ? saved : DEFAULT_THEME;
    dispatch({ type: 'SET_THEME', theme });
  }, []);

  const openApp = useCallback((appId, data = {}) => {
    dispatch({ type: 'OPEN_WINDOW', appId, data, allowMultiple: appId === 'terminal' });
  }, []);

  const closeWindow = useCallback((id) => {
    dispatch({ type: 'CLOSE_WINDOW', id });
  }, []);

  const focusWindowFn = useCallback((id) => {
    dispatch({ type: 'FOCUS_WINDOW', id });
  }, []);

  const minimizeWindow = useCallback((id) => {
    dispatch({ type: 'MINIMIZE_WINDOW', id });
  }, []);

  const restoreWindow = useCallback((id) => {
    dispatch({ type: 'RESTORE_WINDOW', id });
  }, []);

  const maximizeWindow = useCallback((id, viewport) => {
    dispatch({ type: 'MAXIMIZE_WINDOW', id, viewport });
  }, []);

  const updateWindowBounds = useCallback((id, bounds) => {
    dispatch({ type: 'UPDATE_WINDOW_BOUNDS', id, ...bounds });
  }, []);

  const setTheme = useCallback((theme) => {
    dispatch({ type: 'SET_THEME', theme });
  }, []);

  const completeBoot = useCallback(() => {
    dispatch({ type: 'BOOT_COMPLETE' });
  }, []);

  const value = useMemo(
    () => ({
      state,
      dispatch,
      openApp,
      closeWindow,
      focusWindow: focusWindowFn,
      minimizeWindow,
      restoreWindow,
      maximizeWindow,
      updateWindowBounds,
      setTheme,
      completeBoot,
    }),
    [
      state,
      openApp,
      closeWindow,
      focusWindowFn,
      minimizeWindow,
      restoreWindow,
      maximizeWindow,
      updateWindowBounds,
      setTheme,
      completeBoot,
    ]
  );

  return <OsContext.Provider value={value}>{children}</OsContext.Provider>;
}

export function useOs() {
  const ctx = useContext(OsContext);
  if (!ctx) throw new Error('useOs must be used within OsProvider');
  return ctx;
}
