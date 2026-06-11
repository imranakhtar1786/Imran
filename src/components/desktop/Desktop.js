'use client';

import { useState } from 'react';
import { useOs } from '@/context/OsContext';
import { desktopApps } from '@/context/appConfig';
import DesktopIcon from '@/components/desktop/DesktopIcon';
import Taskbar from '@/components/desktop/Taskbar';
import AppLauncher from '@/components/desktop/AppLauncher';
import ContextMenu from '@/components/desktop/ContextMenu';
import BootScreen from '@/components/desktop/BootScreen';
import Window from '@/components/window/Window';
import MatrixRain from '@/components/terminal/MatrixRain';
import { useKeyboard } from '@/hooks/useKeyboard';

export default function Desktop() {
  const { state, dispatch, openApp } = useOs();
  const [selectedId, setSelectedId] = useState(null);

  useKeyboard({
    onShortcut: (action) => {
      if (action === 'escape') dispatch({ type: 'TOGGLE_LAUNCHER', open: false });
      else if (action === 'terminal' || action === 'explorer' || action === 'settings') openApp(action);
    },
  });

  const hasMatrix = Object.values(state.terminalSessions).some((s) => s.matrixActive);

  function handleDesktopClick() {
    setSelectedId(null);
    dispatch({ type: 'SET_CONTEXT_MENU', menu: null });
  }

  function handleContextMenu(e) {
    e.preventDefault();
    dispatch({ type: 'SET_CONTEXT_MENU', menu: { x: e.clientX, y: e.clientY } });
  }

  if (!state.booted) return <BootScreen />;

  return (
    <div
      className="relative w-screen h-screen overflow-hidden"
      style={{ background: 'var(--os-wallpaper)' }}
      onClick={handleDesktopClick}
      onContextMenu={handleContextMenu}
    >
      {hasMatrix && <MatrixRain />}

      <div className="absolute inset-0 bottom-12">
        {desktopApps.map((app, i) => {
          const pos = state.desktopIconPositions[app.id] || {
            x: 24 + (i % 2) * 96,
            y: 24 + Math.floor(i / 2) * 96,
          };
          return (
            <DesktopIcon
              key={app.id}
              app={app}
              position={pos}
              selected={selectedId === app.id}
              onSelect={setSelectedId}
            />
          );
        })}

        {state.windows.map((win) => (
          <Window key={win.id} win={win} />
        ))}
      </div>

      <ContextMenu />
      <AppLauncher />
      <Taskbar />
    </div>
  );
}
