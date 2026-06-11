'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useOs } from '@/context/OsContext';

const BOOT_LINES = [
  '[    0.000000] ImranOS 1.0 — Linux-inspired portfolio kernel',
  '[    0.001234] Loading Next.js 16.2.7 runtime...',
  '[    0.045678] Initializing React 19 reconciler',
  '[    0.089012] Mounting Tailwind CSS v4 design system',
  '[    0.134567] Loading Framer Motion animation engine',
  '[    0.178901] Starting window manager (react-rnd)',
  '[    0.223456] Mounting virtual filesystem at /home/imran',
  '[    0.267890] Registering portfolio applications...',
  '[    0.312345] Starting terminal emulator (imranos-sh)',
  '[    0.356789] Loading theme engine [ubuntu, kali, arch, matrix, win95]',
  '[    0.401234] Network: eth0 link up — imranos.dev',
  '[    0.445678] imranos login: imran',
  '[    0.490123] Welcome to ImranOS — Full Stack Developer Portfolio',
];

export default function BootScreen() {
  const { completeBoot } = useOs();
  const [lines, setLines] = useState([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < BOOT_LINES.length) {
        setLines((prev) => [...prev, BOOT_LINES[index]]);
        index += 1;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setDone(true);
          setTimeout(completeBoot, 600);
        }, 400);
      }
    }, 180);
    return () => clearInterval(interval);
  }, [completeBoot]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="os-boot-screen"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-8 text-center"
          >
            <div className="text-accent text-2xl font-bold tracking-widest mb-2">ImranOS</div>
            <div className="text-muted text-xs">v1.0 — Full Stack Developer Portfolio</div>
          </motion.div>

          <div className="w-full max-w-xl px-8 text-left">
            {lines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-xs text-green-400 mb-1 font-mono"
              >
                {line}
              </motion.div>
            ))}
            <span className="inline-block w-2 h-3 bg-green-400 animate-pulse mt-2" />
          </div>

          <motion.div
            className="absolute bottom-12 w-64 h-1 bg-white/10 rounded-full overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              className="h-full bg-accent rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: BOOT_LINES.length * 0.18 + 0.4, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
