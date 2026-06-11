'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useOs } from '@/context/OsContext';
import { launcherApps } from '@/context/appConfig';

export default function AppLauncher() {
  const { state, dispatch, openApp } = useOs();
  const open = state.launcherOpen;

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/50 z-[9100] backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => dispatch({ type: 'TOGGLE_LAUNCHER', open: false })}
          />
          <motion.div
            className="fixed bottom-14 left-1/2 -translate-x-1/2 z-[9200] os-panel rounded-2xl p-6 w-[min(90vw,520px)] shadow-2xl"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-sm font-semibold text-accent">Applications</h2>
              <button
                type="button"
                onClick={() => dispatch({ type: 'TOGGLE_LAUNCHER', open: false })}
                className="p-1 rounded-lg hover:bg-glass text-muted border-0 bg-transparent cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>
            <div className="os-app-grid">
              {launcherApps.map((app) => {
                const Icon = app.icon;
                return (
                  <button
                    key={app.id}
                    type="button"
                    onClick={() => openApp(app.id)}
                    className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-glass border-0 bg-transparent cursor-pointer transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-glass flex items-center justify-center text-accent">
                      <Icon size={24} />
                    </div>
                    <span className="text-xs text-center text-muted">{app.title}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
