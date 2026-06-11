'use client';

import { useEffect } from 'react';

export default function ServiceWorkerRegister() {
    useEffect(() => {
        if (
            process.env.NODE_ENV === 'production' &&
            'serviceWorker' in navigator
        ) {
            navigator.serviceWorker
                .register('/sw.js')
                .then(() => {
                    console.log('Service Worker registered');
                })
                .catch((error) => {
                    console.error('Service Worker registration failed:', error);
                });
        }
    }, []);

    return null;
}