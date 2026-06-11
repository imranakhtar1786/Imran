'use client';

import { Folder, HardDrive, Home, FileText } from 'lucide-react';

const QUICK_PATHS = [
  { label: 'Home', path: '/home/imran', icon: Home },
  { label: 'Desktop', path: '/home/imran/Desktop', icon: HardDrive },
  { label: 'Documents', path: '/home/imran/Documents', icon: FileText },
  { label: 'Projects', path: '/home/imran/Projects', icon: Folder },
];

export default function Sidebar({ currentPath, onNavigate }) {
  return (
    <div className="w-44 shrink-0 border-r border-[var(--os-glass-border)] p-2 space-y-1 overflow-y-auto">
      <div className="text-[10px] uppercase tracking-wider text-dim px-2 py-1">Places</div>
      {QUICK_PATHS.map((item) => {
        const Icon = item.icon;
        const active = currentPath === item.path;
        return (
          <button
            key={item.path}
            type="button"
            onClick={() => onNavigate(item.path)}
            className={`w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-xs border-0 cursor-pointer transition-colors ${
              active ? 'bg-accent/20 text-accent' : 'bg-transparent text-muted hover:bg-glass'
            }`}
          >
            <Icon size={14} />
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
