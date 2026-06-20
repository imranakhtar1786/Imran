'use client';

import { useCallback } from 'react';
import { Rnd } from 'react-rnd';
import { useOs } from '@/context/OsContext';
import { appRegistry } from '@/context/appConfig';
import WindowContent from '@/components/window/WindowContent';

export default function Window({ win }) {
  const { state, closeWindow, focusWindow, minimizeWindow, maximizeWindow, updateWindowBounds } = useOs();
  const isActive = state.activeWindowId === win.id;
  const app = appRegistry[win.appId];

  const handleMaximize = useCallback(() => {
    maximizeWindow(win.id, { width: window.innerWidth, height: window.innerHeight });
  }, [maximizeWindow, win.id]);

  if (win.minimized) return null;

  if (win.maximized) {
    return (
      <div
        className="os-window fixed flex flex-col"
        style={{
          left: 0,
          top: 0,
          width: '100vw',
          height: 'calc(100vh - 48px)',
          zIndex: win.zIndex,
          outline: isActive ? '2px solid var(--os-accent)' : 'none',
        }}
        onMouseDown={() => focusWindow(win.id)}
      >
        <TitleBar
          title={win.title}
          icon={app?.icon}
          onClose={() => closeWindow(win.id)}
          onMinimize={() => minimizeWindow(win.id)}
          onMaximize={handleMaximize}
          maximized
        />
        <div className="flex-1 overflow-hidden min-h-0">
          <WindowContent windowId={win.id} appId={win.appId} />
        </div>
      </div>
    );
  }

  return (
    <Rnd
      position={{ x: win.x, y: win.y }}
      size={{ width: win.width, height: win.height }}
      minWidth={320}
      minHeight={200}
      bounds="parent"
      dragHandleClassName="os-titlebar"
      style={{ zIndex: win.zIndex }}
      className={`os-window flex flex-col ${isActive ? 'ring-2 ring-[var(--os-accent)]' : ''}`}
      onMouseDown={() => focusWindow(win.id)}
      onDragStop={(_, d) => updateWindowBounds(win.id, { x: d.x, y: d.y, width: win.width, height: win.height })}
      onResizeStop={(_, __, ref, ___, pos) =>
        updateWindowBounds(win.id, {
          x: pos.x,
          y: pos.y,
          width: parseInt(ref.style.width, 10),
          height: parseInt(ref.style.height, 10),
        })
      }
    >
      <div className="w-full h-full flex flex-col overflow-hidden">
        <TitleBar
          title={win.title}
          icon={app?.icon}
          onClose={() => closeWindow(win.id)}
          onMinimize={() => minimizeWindow(win.id)}
          onMaximize={handleMaximize}
        />
        <div className="flex-1 overflow-hidden min-h-0">
          <WindowContent windowId={win.id} appId={win.appId} />
        </div>
      </div>
    </Rnd>
  );
}

function TitleBar({ title, icon: Icon, onClose, onMinimize, onMaximize, maximized }) {
  return (
    <div className="os-titlebar shrink-0">
      

      <button
        type="button"
        className="os-titlebar-btn os-titlebar-btn--max"
        onClick={onMaximize}
        aria-label={maximized ? "Restore" : "Maximize"}
        title={maximized ? "Restore window" : "Maximize window"}
      />
      

      <button
        type="button"
        className="os-titlebar-btn os-titlebar-btn--min"
        onClick={onMinimize}
        aria-label="Minimize"
        title="Minimize"
      />
      <button
        type="button"
        className="os-titlebar-btn os-titlebar-btn--close"
        onClick={onClose}
        aria-label="Close"
        title="Close"
      />

      {Icon && <Icon size={14} className="text-muted ml-1" />}
      <span className="text-xs font-medium text-[var(--os-text)] ml-1 truncate flex-1">
        {title}
      </span>
    </div>
  );
}
