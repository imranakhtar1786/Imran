'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { profile } from '@/data/profile';
import { projects } from '@/data/projects';
import { Terminal, FolderKanban, FileText, Mail, User } from 'lucide-react';
import TerminalComponent from '@/components/terminal/Terminal';
import ProjectsApp from '@/components/apps/ProjectsApp';
import ResumeApp from '@/components/apps/ResumeApp';
import ContactApp from '@/components/apps/ContactApp';
import AboutApp from '@/components/apps/AboutApp';
import { useOs } from '@/context/OsContext';

const TABS = [
  { id: 'terminal', label: 'Terminal', icon: Terminal },
  { id: 'projects', label: 'Projects', icon: FolderKanban },
  { id: 'resume', label: 'Resume', icon: FileText },
  { id: 'contact', label: 'Contact', icon: Mail },
  { id: 'about', label: 'About', icon: User },
];

export default function MobileLayout() {
  const { state, openApp } = useOs();
  const [tab, setTab] = useState('resume');

  const terminalWindow = state.windows.find((w) => w.appId === 'terminal');

  useEffect(() => {
    if (!terminalWindow) openApp('terminal');
  }, [terminalWindow, openApp]);

  const winId = terminalWindow?.id;

  return (
    <div className="h-screen flex flex-col overflow-hidden" style={{ background: 'var(--os-wallpaper)' }}>
      <header className="px-4 py-3 border-b border-[var(--os-glass-border)] bg-[var(--os-taskbar)] shrink-0">
        <div className="text-accent font-bold text-sm">ImranOS</div>
        <div className="text-[10px] text-muted">{profile.name} — {profile.role}</div>
      </header>

      <main className="flex-1 min-h-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            className="h-full"
          >
            {tab === 'terminal' && winId && (
              <div className="h-full">
                <TerminalComponent windowId={winId} />
              </div>
            )}
            {tab === 'projects' && <ProjectsApp />}
            {tab === 'resume' && <ResumeApp />}
            {tab === 'contact' && <ContactApp />}
            {tab === 'about' && <AboutApp />}
          </motion.div>
        </AnimatePresence>
      </main>

      <nav className="flex border-t border-[var(--os-glass-border)] bg-[var(--os-taskbar)] shrink-0">
        {TABS.map((t) => {
          const Icon = t.icon;
          const active = tab === t.id;
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => setTab(t.id)}
              className={`flex-1 flex flex-col items-center gap-0.5 py-2 text-[10px] border-0 bg-transparent cursor-pointer ${
                active ? 'text-accent' : 'text-muted'
              }`}
            >
              <Icon size={18} />
              {t.label}
            </button>
          );
        })}
      </nav>
    </div>
  );
}
