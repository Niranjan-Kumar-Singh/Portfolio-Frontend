import React from 'react';
import { motion } from 'framer-motion';

const Background = () => {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-background">
            {/* Pure Dark Cyberpunk Base Grid */}
            <div className="absolute inset-0 bg-[#030712]"></div>

            {/* Base Grid Lines - Sharp & Technical */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] opacity-40 pointer-events-none" />

            {/* Grid Intersections - Crosshairs */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20px_20px,#3b82f6_1px,transparent_1px)] bg-[size:40px_40px] opacity-30 pointer-events-none" />

            {/* Slowly Scrolling Vertical Laser Scanline */}
            <motion.div
                className="absolute top-0 left-0 w-full h-[2px] shadow-[0_0_15px_rgba(59,130,246,0.8)] z-0 pointer-events-none"
                style={{
                    background: 'linear-gradient(90deg, transparent 0%, var(--color-primary) 50%, transparent 100%)'
                }}
                animate={{
                    y: ['0vh', '100vh', '0vh'],
                    opacity: [0, 0.5, 0]
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />

            {/* Floating Geometric HUD Node 1 */}
            <motion.div
                className="absolute top-[10%] left-[10%] w-[20vw] h-[20vw] border border-primary/20 pointer-events-none"
                animate={{
                    rotate: [0, 90, 0],
                    scale: [1, 1.05, 1],
                }}
                transition={{
                    duration: 40,
                    repeat: Infinity,
                    ease: "linear"
                }}
            >
                {/* HUD Brackets */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary/40"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary/40"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary/40"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary/40"></div>
            </motion.div>

            {/* Floating Geometric HUD Node 2 */}
            <motion.div
                className="absolute bottom-[10%] right-[10%] w-[30vw] h-[30vw] border border-secondary/10 opacity-50 pointer-events-none"
                animate={{
                    rotate: [0, -90, 0],
                    x: [0, -50, 0],
                    y: [0, -30, 0]
                }}
                transition={{
                    duration: 50,
                    repeat: Infinity,
                    ease: "linear"
                }}
            >
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-secondary/20 border-dashed border-b border-secondary/20"></div>
                <div className="absolute top-0 left-1/2 w-[1px] h-full bg-secondary/20 border-dashed border-r border-secondary/20"></div>
            </motion.div>

            {/* Dark Vignette to ground the edges */}
            <div className="absolute inset-0 bg-background/80 [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)] pointer-events-none z-0"></div>
        </div>
    );
};

export default Background;
