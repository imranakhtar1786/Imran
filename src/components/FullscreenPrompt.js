'use client';

import { useEffect } from 'react';

export default function FullscreenPrompt() {
    useEffect(() => {
        const handleFirstClick = async () => {
            console.log('Clicked');

            try {
                if (!document.fullscreenElement) {
                    await document.documentElement.requestFullscreen();
                    console.log('Fullscreen entered');
                }
            } catch (err) {
                console.error(err);
            }

            window.removeEventListener('click', handleFirstClick);
        };



        return () => {
            window.removeEventListener('click', handleFirstClick);
        };
    }, []);

    return null;
}