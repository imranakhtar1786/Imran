'use client';

import { useEffect } from 'react';
import { OsProvider, useOs } from '@/context/OsContext';
import Desktop from '@/components/desktop/Desktop';
import MobileLayout from '@/components/mobile/MobileLayout';
import { useMediaQuery } from '@/hooks/useMediaQuery';

function OsShell() {
  const isMobile = useMediaQuery('(max-width: 767px)');
  const { state, completeBoot } = useOs();

  useEffect(() => {
    if (isMobile && !state.booted) completeBoot();
  }, [isMobile, state.booted, completeBoot]);

  if (isMobile) return <MobileLayout />;

  return <Desktop />;
}

export default function OsRoot() {
  return (
    <OsProvider>
      <OsShell />
    </OsProvider>
  );
}
