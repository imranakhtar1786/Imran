'use client';

import { launcherIcon as LauncherIcon } from '@/context/appConfig';
import { useOs } from '@/context/OsContext';
import { useClock } from '@/hooks/useClock';
import { themes } from '@/lib/themes';
import { Wifi, Battery } from 'lucide-react';

export default function Taskbar() {
  const { state, dispatch, openApp, restoreWindow, focusWindow } = useOs();
  const { formatted, date } = useClock();

  return (
    <div className="os-taskbar">
      <button
        type="button"
        onClick={() => dispatch({ type: 'TOGGLE_LAUNCHER' })}
        className={`flex items-center justify-center w-10 h-10 rounded-xl border-0 cursor-pointer transition-colors ${state.launcherOpen ? 'bg-accent text-white' : 'bg-glass hover:bg-white/10 text-accent'
          }`}
        aria-label="App launcher"
      >
        <LauncherIcon size={20} />
      </button>

      <div className="flex-1 flex items-center gap-1 overflow-x-auto px-1">
        {state.windows.map((win) => (
          <button
            key={win.id}
            type="button"
            onClick={() => {
              if (win.minimized) restoreWindow(win.id);
              else focusWindow(win.id);
            }}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs border-0 cursor-pointer transition-colors whitespace-nowrap ${state.activeWindowId === win.id && !win.minimized
              ? 'bg-accent/30 text-accent'
              : 'bg-glass hover:bg-white/10 text-muted'
              }`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${win.minimized ? 'bg-yellow-400' : 'bg-green-400'}`} />
            {win.title}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-3 text-xs text-muted shrink-0">
        <div className="hidden sm:flex items-center gap-2">
          <Wifi size={14} />
          <Battery size={14} />
        </div>
        <button
          type="button"
          onClick={() => openApp('settings')}
          className="w-3 h-3 rounded-full border-0 cursor-pointer p-0"
          style={{ background: themes[state.theme]?.accent || '#e95420' }}
          title={`Theme: ${themes[state.theme]?.name}`}
          aria-label="Open settings"
        />
        <div className="text-right hidden sm:block">
          <div className="font-medium text-[var(--os-text)]">{formatted}</div>
          <div className="text-[10px]">{date}</div>
        </div>
        <div className="sm:hidden font-medium text-[var(--os-text)]">{formatted}</div>
      </div>
    </div>
  );
}
