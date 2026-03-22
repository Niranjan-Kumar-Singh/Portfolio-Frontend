import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';
import { useSound } from '../hooks/useSound';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { playSound } = useSound();

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        playSound('click');
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 50, transition: { duration: 0.2 } }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    onClick={scrollToTop}
                    onMouseEnter={() => playSound('hover')}
                    className="fixed bottom-24 left-6 md:bottom-8 md:left-8 z-50 w-14 h-14 bg-[#020610]/90 backdrop-blur-xl border border-primary/40 flex flex-col items-center justify-center text-primary hover:text-white hover:bg-primary/20 hover:border-primary hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] transition-all duration-300 group overflow-hidden cursor-crosshair shadow-[0_0_15px_rgba(0,0,0,0.8)] rounded-none"
                    aria-label="Scroll to top"
                >
                    {/* Animated Neon Scanner Line */}
                    <motion.div
                        className="absolute top-0 left-0 w-full h-[2px] bg-primary/70 shadow-[0_0_8px_rgba(59,130,246,1)]"
                        animate={{ y: [0, 56, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />

                    {/* Faint Grid Background */}
                    <div 
                        className="absolute inset-0 opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity" 
                        style={{ backgroundImage: "linear-gradient(rgba(59,130,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,1) 1px, transparent 1px)", backgroundSize: "10px 10px" }}
                    />

                    {/* Corner accents (expanding on hover) */}
                    <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-primary opacity-50 group-hover:opacity-100 group-hover:w-3 group-hover:h-3 transition-all duration-300" />
                    <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-primary opacity-50 group-hover:opacity-100 group-hover:w-3 group-hover:h-3 transition-all duration-300" />
                    <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-primary opacity-50 group-hover:opacity-100 group-hover:w-3 group-hover:h-3 transition-all duration-300" />
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-primary opacity-50 group-hover:opacity-100 group-hover:w-3 group-hover:h-3 transition-all duration-300" />

                    {/* Icon Container with infinite floating bounce */}
                    <motion.div
                        animate={{ y: [-2, 2, -2] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="relative z-10 flex flex-col items-center justify-center"
                    >
                        <FiArrowUp size={22} className="group-hover:-translate-y-1 transition-transform duration-300" />
                    </motion.div>

                    {/* Bottom Indicator Dash */}
                    <div className="absolute bottom-2 w-4 h-[2px] bg-primary/40 group-hover:w-6 group-hover:bg-primary transition-all duration-300" />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTop;
