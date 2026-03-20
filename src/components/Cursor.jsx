import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const Cursor = () => {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Slightly softer spring for smoother trailing outer ring
    const springConfig = { damping: 28, stiffness: 650, mass: 0.1 };
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
                e.target.closest('[class*="cursor-crosshair"]')
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

    // Hide on touch devices
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
        return null;
    }

    return (
        <>
            {/* Outer trailing ring */}
            <motion.div
                className="fixed top-0 left-0 w-6 h-6 border border-white/40 mix-blend-difference pointer-events-none z-[9999]"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    scale: isClicking ? 0.7 : isHovering ? 1.6 : 1,
                    rotate: isHovering ? 45 : 0,
                    borderColor: isHovering
                        ? "rgba(59, 130, 246, 1)"
                        : "rgba(255, 255, 255, 0.4)",
                    opacity: isHovering ? 1 : 0.7,
                }}
                transition={{ type: "tween", duration: 0.12 }}
            />
            {/* Inner precision dot — no spring, tracks exactly */}
            <motion.div
                className="fixed top-0 left-0 w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_6px_rgba(59,130,246,0.9)] pointer-events-none z-[10000]"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{ scale: isClicking ? 1.8 : 1 }}
                transition={{ type: "tween", duration: 0.08 }}
            />
        </>
    );
};

export default Cursor;

