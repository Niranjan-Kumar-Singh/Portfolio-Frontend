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
                // Extremely subtle, high-pitched glassy tick for rapid hovering
                oscillator.type = 'sine';
                oscillator.frequency.setValueAtTime(1200, now);
                gainNode.gain.setValueAtTime(0, now);
                gainNode.gain.linearRampToValueAtTime(0.015, now + 0.005);
                gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.03);
                oscillator.start(now);
                oscillator.stop(now + 0.03);
                break;

            case 'click':
                // Premium soft UI click (like a high-end clean UI switch)
                oscillator.type = 'sine';
                oscillator.frequency.setValueAtTime(400, now);
                oscillator.frequency.exponentialRampToValueAtTime(200, now + 0.05);
                
                gainNode.gain.setValueAtTime(0, now);
                gainNode.gain.linearRampToValueAtTime(0.06, now + 0.005);
                gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

                // Add a second transient oscillator for a richer "click" snap
                const osc2 = audioCtx.createOscillator();
                osc2.type = 'triangle';
                osc2.frequency.setValueAtTime(800, now);
                osc2.frequency.exponentialRampToValueAtTime(100, now + 0.03);
                osc2.connect(gainNode);
                osc2.start(now);
                osc2.stop(now + 0.03);

                oscillator.start(now);
                oscillator.stop(now + 0.08);
                break;

            case 'open':
                // Smooth, airy, ambient UI ascent
                oscillator.type = 'sine';
                oscillator.frequency.setValueAtTime(300, now);
                oscillator.frequency.exponentialRampToValueAtTime(600, now + 0.15);
                gainNode.gain.setValueAtTime(0, now);
                gainNode.gain.linearRampToValueAtTime(0.04, now + 0.05);
                gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
                oscillator.start(now);
                oscillator.stop(now + 0.15);
                break;

            case 'close':
                // Smooth, airy, ambient UI descent
                oscillator.type = 'sine';
                oscillator.frequency.setValueAtTime(600, now);
                oscillator.frequency.exponentialRampToValueAtTime(300, now + 0.15);
                gainNode.gain.setValueAtTime(0, now);
                gainNode.gain.linearRampToValueAtTime(0.04, now + 0.05);
                gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
                oscillator.start(now);
                oscillator.stop(now + 0.15);
                break;

            case 'error':
                // Soft, muted, muffled double-thud instead of a harsh piercing buzzer
                oscillator.type = 'triangle';
                oscillator.frequency.setValueAtTime(150, now);
                oscillator.frequency.linearRampToValueAtTime(100, now + 0.1);
                
                const filter = audioCtx.createBiquadFilter();
                filter.type = 'lowpass';
                filter.frequency.setValueAtTime(600, now);
                filter.frequency.exponentialRampToValueAtTime(150, now + 0.1);

                oscillator.disconnect(gainNode);
                oscillator.connect(filter);
                filter.connect(gainNode);

                gainNode.gain.setValueAtTime(0, now);
                gainNode.gain.linearRampToValueAtTime(0.05, now + 0.02);
                gainNode.gain.linearRampToValueAtTime(0.01, now + 0.05);
                gainNode.gain.linearRampToValueAtTime(0.05, now + 0.08);
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
