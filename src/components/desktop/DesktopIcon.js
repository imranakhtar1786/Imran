'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useOs } from '@/context/OsContext';

export default function DesktopIcon({ app, position, selected, onSelect }) {
  const { openApp, dispatch } = useOs();
  const clickRef = useRef({ count: 0, timer: null });
  const Icon = app.icon;

  function handleClick(e) {
    e.stopPropagation();
    onSelect(app.id);
    clickRef.current.count += 1;
    if (clickRef.current.timer) clearTimeout(clickRef.current.timer);
    clickRef.current.timer = setTimeout(() => {
      clickRef.current.count = 0;
    }, 400);
    if (clickRef.current.count >= 2) {
      openApp(app.id);
      clickRef.current.count = 0;
    }
  }

  function handleDragEnd(_, info) {
    dispatch({
      type: 'SET_DESKTOP_ICON_POSITION',
      appId: app.id,
      position: {
        x: (position?.x || 0) + info.offset.x,
        y: (position?.y || 0) + info.offset.y,
      },
    });
  }

  return (
    <motion.div
      drag
      dragMomentum={false}
      dragElastic={0}
      onDragEnd={handleDragEnd}
      onClick={handleClick}
      className={`os-desktop-icon absolute ${selected ? 'selected' : ''}`}
      style={{
        left: position?.x ?? 24,
        top: position?.y ?? 24,
      }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="w-12 h-12 rounded-xl bg-glass flex items-center justify-center text-accent shadow-lg">
        <Icon size={26} strokeWidth={1.5} />
      </div>
      <span className="os-desktop-icon-label">{app.title}</span>
    </motion.div>
  );
}
