'use client';

import { useState, useEffect } from 'react';

export function useClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const h12 = hours % 12 || 12;

  return {
    time,
    formatted: `${h12}:${minutes} ${ampm}`,
    date: time.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }),
  };
}
