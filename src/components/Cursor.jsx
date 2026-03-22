import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const Cursor = () => {
    // Exact tracking for inner precision core
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Smooth spring physics for trailing outer brackets (extremely responsive and snappy)
    const springConfig = { damping: 20, stiffness: 2000, mass: 0.05 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);

    useEffect(() => {
        const mouseMove = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleMouseOver = (e) => {
            if (
                e.target.tagName.toLowerCase() === 'button' ||
                e.target.tagName.toLowerCase() === 'a' ||
                e.target.tagName.toLowerCase() === 'input' ||
                e.target.tagName.toLowerCase() === 'textarea' ||
                e.target.closest('button') ||
                e.target.closest('a') ||
                e.target.closest('.glass-card') ||
                e.target.closest('[class*="cursor-crosshair"]') ||
                e.target.closest('[class*="cursor-pointer"]')
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        window.addEventListener("mousemove", mouseMove);
        window.addEventListener("mouseover", handleMouseOver);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
            window.removeEventListener("mouseover", handleMouseOver);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, []);

    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
        return null;
    }

    return (
        <>
            <style>{`
                * {
                    cursor: none !important;
                }
            `}</style>

            {/* ── Outer Cyberpunk Targeting Brackets ── */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center mix-blend-difference"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    width: isHovering ? 20 : 36,
                    height: isHovering ? 20 : 36,
                    rotate: isHovering ? 90 : 0,
                    opacity: isClicking ? 0.4 : isHovering ? 1 : 0.6,
                }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
                {/* 4 Corner Brackets */}
                <span className={`absolute top-0 left-0 w-2.5 h-2.5 border-t-[1.5px] border-l-[1.5px] transition-colors duration-300 ${isHovering ? 'border-primary' : 'border-white'}`} />
                <span className={`absolute top-0 right-0 w-2.5 h-2.5 border-t-[1.5px] border-r-[1.5px] transition-colors duration-300 ${isHovering ? 'border-primary' : 'border-white'}`} />
                <span className={`absolute bottom-0 left-0 w-2.5 h-2.5 border-b-[1.5px] border-l-[1.5px] transition-colors duration-300 ${isHovering ? 'border-primary' : 'border-white'}`} />
                <span className={`absolute bottom-0 right-0 w-2.5 h-2.5 border-b-[1.5px] border-r-[1.5px] transition-colors duration-300 ${isHovering ? 'border-primary' : 'border-white'}`} />
                
                {/* Faint Crosshairs (Appear only on hover to "lock" target) */}
                <motion.div 
                    className="absolute top-1/2 left-1/2 w-8 h-[1px] bg-primary/40 -translate-x-1/2 -translate-y-1/2"
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: isHovering ? 1 : 0, opacity: isHovering ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                />
                <motion.div 
                    className="absolute top-1/2 left-1/2 w-[1px] h-8 bg-primary/40 -translate-x-1/2 -translate-y-1/2"
                    initial={{ scaleY: 0, opacity: 0 }}
                    animate={{ scaleY: isHovering ? 1 : 0, opacity: isHovering ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                />
            </motion.div>
            
            {/* ── Inner Precision Core (Zero Lag) ── */}
            <motion.div
                className="fixed top-0 left-0 w-[3px] h-[3px] bg-primary shadow-[0_0_8px_rgba(59,130,246,1)] pointer-events-none z-[10000]"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{ 
                    scale: isClicking ? 2.5 : isHovering ? 0 : 1,
                    rotate: 45 // Sharp diamond shape instead of circle
                }}
                transition={{ type: "tween", duration: 0.1 }}
            />
        </>
    );
};

export default Cursor;
