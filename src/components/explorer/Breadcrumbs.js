'use client';

import { ChevronRight, Home } from 'lucide-react';
import { normalizePath } from '@/lib/filesystem';

export default function Breadcrumbs({ path, onNavigate }) {
  const normalized = normalizePath(path);
  const parts = normalized === '/' ? [] : normalized.split('/').filter(Boolean);

  const crumbs = [{ label: 'Home', path: '/home/imran' }];
  let built = '';
  parts.forEach((part) => {
    built += `/${part}`;
    crumbs.push({ label: part, path: built });
  });

  return (
    <div className="flex items-center gap-1 text-xs text-muted overflow-x-auto py-2 px-3 border-b border-[var(--os-glass-border)]">
      {crumbs.map((crumb, i) => (
        <span key={crumb.path} className="flex items-center gap-1 shrink-0">
          {i > 0 && <ChevronRight size={12} />}
          <button
            type="button"
            onClick={() => onNavigate(crumb.path)}
            className="hover:text-accent border-0 bg-transparent cursor-pointer flex items-center gap-1 text-muted"
          >
            {i === 0 && <Home size={12} />}
            {crumb.label}
          </button>
        </span>
      ))}
    </div>
  );
}
