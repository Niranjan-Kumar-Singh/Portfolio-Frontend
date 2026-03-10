import { useCallback } from 'react';
import { useTheme } from '../context/ThemeContext';

let audioCtx = null;
let isUnlocked = false;

// Web Audio API requires a user gesture to initialize or resume context to prevent auto-play spam.
if (typeof window !== 'undefined') {
    const unlockAudio = () => {
        if (!audioCtx) {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
        isUnlocked = true;
        // Clean up listeners once unlocked
        ['click', 'touchstart', 'keydown'].forEach(evt =>
            document.removeEventListener(evt, unlockAudio)
        );
    };

    // Attach to first interactions
    ['click', 'touchstart', 'keydown'].forEach(evt =>
        document.addEventListener(evt, unlockAudio, { once: true })
    );
}

export const useSound = () => {
    const { soundEnabled } = useTheme();

    const playSound = useCallback((type = 'hover') => {
        if (!soundEnabled) return;

        if (!audioCtx) {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }

        // Only attempt to start oscillators if the browser has allowed the context to run
        if (audioCtx.state === 'suspended') {
            // Attempt to resume it, but if this wasn't a user gesture, the promise will just stay suspended
            audioCtx.resume().catch(() => { });
            return; // Exit early if it's still suspended to avoid stacking up silent nodes
        }

        if (!audioCtx || audioCtx.state !== 'running') return;

        const oscillator = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);

        const now = audioCtx.currentTime;

        switch (type) {
            case 'hover':
                // High, short, subtle blip
                oscillator.type = 'sine';
                oscillator.frequency.setValueAtTime(800, now);
                oscillator.frequency.exponentialRampToValueAtTime(1200, now + 0.05);
                gainNode.gain.setValueAtTime(0, now);
                gainNode.gain.linearRampToValueAtTime(0.05, now + 0.01);
                gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
                oscillator.start(now);
                oscillator.stop(now + 0.05);
                break;

            case 'click':
                // Deep, mechanical thud/click
                oscillator.type = 'square';
                oscillator.frequency.setValueAtTime(150, now);
                oscillator.frequency.exponentialRampToValueAtTime(40, now + 0.1);

                // Filter for mechanical feel
                const filter = audioCtx.createBiquadFilter();
                filter.type = 'lowpass';
                filter.frequency.setValueAtTime(1000, now);
                filter.frequency.exponentialRampToValueAtTime(100, now + 0.1);

                oscillator.disconnect(gainNode);
                oscillator.connect(filter);
                filter.connect(gainNode);

                gainNode.gain.setValueAtTime(0, now);
                gainNode.gain.linearRampToValueAtTime(0.1, now + 0.02);
                gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
                oscillator.start(now);
                oscillator.stop(now + 0.1);
                break;

            case 'open':
                // Ascending sci-fi sweep (for modals/terminal opening)
                oscillator.type = 'triangle';
                oscillator.frequency.setValueAtTime(200, now);
                oscillator.frequency.exponentialRampToValueAtTime(800, now + 0.2);
                gainNode.gain.setValueAtTime(0, now);
                gainNode.gain.linearRampToValueAtTime(0.1, now + 0.05);
                gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
                oscillator.start(now);
                oscillator.stop(now + 0.2);
                break;

            case 'close':
                // Descending sci-fi sweep (for closing)
                oscillator.type = 'triangle';
                oscillator.frequency.setValueAtTime(800, now);
                oscillator.frequency.exponentialRampToValueAtTime(200, now + 0.2);
                gainNode.gain.setValueAtTime(0, now);
                gainNode.gain.linearRampToValueAtTime(0.1, now + 0.05);
                gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
                oscillator.start(now);
                oscillator.stop(now + 0.2);
                break;

            case 'error':
                // Harsh double buzz
                oscillator.type = 'sawtooth';
                oscillator.frequency.setValueAtTime(100, now);
                oscillator.frequency.linearRampToValueAtTime(80, now + 0.1);
                gainNode.gain.setValueAtTime(0, now);
                gainNode.gain.linearRampToValueAtTime(0.1, now + 0.02);
                gainNode.gain.linearRampToValueAtTime(0, now + 0.05);
                gainNode.gain.linearRampToValueAtTime(0.1, now + 0.06);
                gainNode.gain.linearRampToValueAtTime(0.001, now + 0.15);
                oscillator.start(now);
                oscillator.stop(now + 0.15);
                break;

            default:
                break;
        }
    }, [soundEnabled]);

    return { playSound };
};
