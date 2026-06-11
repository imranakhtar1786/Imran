'use client';

import { motion } from 'framer-motion';
import { useOs } from '@/context/OsContext';
import { themeList } from '@/lib/themes';
import { Check, Palette } from 'lucide-react';

export default function SettingsApp() {
  const { state, setTheme } = useOs();

  return (
    <div className="h-full overflow-y-auto p-4">
      <div className="flex items-center gap-2 mb-5">
        <Palette size={18} className="text-accent" />
        <h2 className="text-sm font-semibold">Appearance</h2>
      </div>

      <p className="text-xs text-muted mb-4">Choose a desktop theme. Your preference is saved automatically.</p>

      <div className="space-y-2">
        {themeList.map((theme, i) => {
          const active = state.theme === theme.id;
          return (
            <motion.button
              key={theme.id}
              type="button"
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              onClick={() => setTheme(theme.id)}
              className={`w-full flex items-center gap-3 p-3 rounded-xl border-0 cursor-pointer transition-all ${
                active ? 'bg-accent/20 ring-2 ring-[var(--os-accent)]' : 'bg-glass hover:bg-white/5'
              }`}
            >
              <div
                className="w-10 h-10 rounded-lg shrink-0"
                style={{ background: theme.preview }}
              />
              <div className="text-left flex-1">
                <div className="text-sm font-medium text-[var(--os-text)]">{theme.name}</div>
                <div className="text-[10px] text-muted">{theme.description}</div>
              </div>
              {active && <Check size={16} className="text-accent" />}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
