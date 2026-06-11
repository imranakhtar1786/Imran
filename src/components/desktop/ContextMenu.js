'use client';

import { useEffect } from 'react';
import { Terminal, Settings, User, RefreshCw } from 'lucide-react';
import { useOs } from '@/context/OsContext';

export default function ContextMenu() {
  const { state, dispatch, openApp } = useOs();
  const menu = state.contextMenu;

  useEffect(() => {
    if (!menu) return;
    function close() {
      dispatch({ type: 'SET_CONTEXT_MENU', menu: null });
    }
    window.addEventListener('click', close);
    window.addEventListener('contextmenu', close);
    return () => {
      window.removeEventListener('click', close);
      window.removeEventListener('contextmenu', close);
    };
  }, [menu, dispatch]);

  if (!menu) return null;

  const items = [
    { label: 'New Terminal', icon: Terminal, action: () => openApp('terminal') },
    { label: 'About ImranOS', icon: User, action: () => openApp('about') },
    { label: 'Settings', icon: Settings, action: () => openApp('settings') },
    { separator: true },
    { label: 'Refresh Desktop', icon: RefreshCw, action: () => window.location.reload() },
  ];

  return (
    <div
      className="os-context-menu fixed z-[9500]"
      style={{ left: menu.x, top: menu.y }}
      onClick={(e) => e.stopPropagation()}
    >
      {items.map((item, i) =>
        item.separator ? (
          <div key={i} className="os-context-separator" />
        ) : (
          <button
            key={i}
            type="button"
            className="os-context-item w-full border-0 bg-transparent text-left"
            onClick={() => {
              item.action();
              dispatch({ type: 'SET_CONTEXT_MENU', menu: null });
            }}
          >
            <item.icon size={15} />
            {item.label}
          </button>
        )
      )}
    </div>
  );
}
