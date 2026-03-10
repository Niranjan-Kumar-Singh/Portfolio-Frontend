import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSettings, FiVolume2, FiVolumeX, FiMonitor } from 'react-icons/fi'; // or whatever icon pack we use, assuming Fi from react-icons/fi
import { useTheme } from '../context/ThemeContext';
import { useSound } from '../hooks/useSound';

const ThemeSwitcher = () => {
    const { theme, changeTheme, soundEnabled, toggleSound } = useTheme();
    const { playSound } = useSound();
    const [isOpen, setIsOpen] = useState(false);

    const themes = [
        { id: 'blue', name: 'NEON_BLUE', hex: '#3b82f6' },
        { id: 'green', name: 'HACKER_GREEN', hex: '#10b981' },
        { id: 'magenta', name: 'CYBER_PINK', hex: '#d946ef' },
        { id: 'orange', name: 'WARNING_ORANGE', hex: '#f97316' },
    ];

    const toggleOpen = () => {
        playSound(isOpen ? 'close' : 'open');
        setIsOpen(!isOpen);
    };

    const handleThemeChange = (id) => {
        if (theme !== id) {
            playSound('click');
            changeTheme(id);
        }
    };

    const handleSoundToggle = () => {
        playSound('click');
        setTimeout(() => toggleSound(), 50); // Delay toggle so the click sound can actually play before sound is disabled
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                        className="absolute bottom-16 right-0 mb-2 p-4 bg-surface/90 backdrop-blur-md border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)] flex flex-col gap-4 w-48"
                    >
                        {/* HUD Corners */}
                        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary/50"></div>
                        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-primary/50"></div>
                        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-primary/50"></div>
                        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary/50"></div>

                        <div className="text-[10px] font-mono text-textMuted uppercase tracking-widest border-b border-white/5 pb-2">
                            System_Config
                        </div>

                        {/* Theme Selectors */}
                        <div className="flex flex-col gap-2">
                            {themes.map((t) => (
                                <button
                                    key={t.id}
                                    onClick={() => handleThemeChange(t.id)}
                                    onMouseEnter={() => playSound('hover')}
                                    className={`flex items-center gap-3 px-2 py-1.5 transition-colors font-mono text-xs text-left ${theme === t.id ? 'text-textMain bg-white/5' : 'text-textMuted hover:text-textMain hover:bg-white/5'
                                        }`}
                                >
                                    <span
                                        className="w-3 h-3 rounded-none border border-white/20"
                                        style={{ backgroundColor: t.hex, boxShadow: theme === t.id ? `0 0 10px ${t.hex}` : 'none' }}
                                    ></span>
                                    {t.name}
                                </button>
                            ))}
                        </div>

                        {/* Audio Toggle */}
                        <div className="border-t border-white/5 pt-3">
                            <button
                                onClick={handleSoundToggle}
                                onMouseEnter={() => playSound('hover')}
                                className="flex items-center justify-between w-full px-2 py-1.5 text-xs font-mono text-textMuted hover:text-textMain transition-colors hover:bg-white/5"
                            >
                                <span>AUDIO_SYS</span>
                                <span className={soundEnabled ? 'text-primary' : 'text-red-500'}>
                                    {soundEnabled ? 'ON' : 'OFF'}
                                </span>
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Toggle Button */}
            <motion.button
                onClick={toggleOpen}
                onMouseEnter={() => playSound('hover')}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 bg-surface/80 backdrop-blur-sm border border-white/10 flex items-center justify-center text-textMain hover:text-primary hover:border-primary/50 transition-colors shadow-lg"
            >
                {/* Fallback svg if react-icons/fi isn't imported above correctly. Using standard SVG to be safe */}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                </svg>
            </motion.button>
        </div>
    );
};

export default ThemeSwitcher;
