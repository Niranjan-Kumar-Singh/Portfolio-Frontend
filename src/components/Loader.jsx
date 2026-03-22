import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiCode } from 'react-icons/fi';

const Loader = ({ onLoadingComplete }) => {
    const [progress, setProgress] = useState(0);
    const [statusText, setStatusText] = useState("INITIALIZING SECURE CONNECTION...");
    const [logs, setLogs] = useState([]);

    const generateLog = () => {
        const commands = [
            "Mounting virtual DOM...",
            "Establishing neural link with server...",
            "Bypassing mainframe security protocols...",
            "Decrypting CSS stylesheets...",
            "Loading React fiber architecture...",
            "Injecting Cyberpunk HUD matrices...",
            "Synchronizing Framer Motion physics...",
            "Compiling user experience vectors..."
        ];
        return `> ${commands[Math.floor(Math.random() * commands.length)]} [OK]`;
    };

    useEffect(() => {
        // Stop scrolling while loading
        document.body.style.overflow = 'hidden';

        const duration = 2500; // 2.5 seconds total loading time
        const intervalTime = 50;
        const steps = duration / intervalTime;
        let currentStep = 0;

        const timer = setInterval(() => {
            currentStep++;
            const newProgress = Math.min((currentStep / steps) * 100, 100);
            setProgress(newProgress);

            // Add fake terminal logs randomly
            if (Math.random() > 0.7) {
                setLogs(prev => [...prev.slice(-4), generateLog()]); // Keep last 5 logs
            }

            if (newProgress > 30) setStatusText("LOADING ASSETS...");
            if (newProgress > 60) setStatusText("COMPILING MODULES...");
            if (newProgress > 90) setStatusText("SYSTEM READY. EXECUTING...");

            if (newProgress === 100) {
                clearInterval(timer);
                setTimeout(() => {
                    document.body.style.overflow = 'auto'; // Re-enable scrolling
                    onLoadingComplete();
                }, 400); // Tiny pause at 100% before clearing
            }
        }, intervalTime);

        return () => {
            clearInterval(timer);
            document.body.style.overflow = 'auto';
        };
    }, [onLoadingComplete]);

    return (
        <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background overflow-hidden"
        >
            {/* Background Grid for Loader */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

            <div className="w-full max-w-2xl px-8 relative z-10 flex flex-col items-center">

                {/* Logo/Icon */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-24 h-24 mb-12 border border-primary/50 flex items-center justify-center relative bg-primary/5"
                >
                    <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-primary -translate-x-[2px] -translate-y-[2px]"></div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-primary translate-x-[2px] -translate-y-[2px]"></div>
                    {/* Central User Matrix Portrait */}
                    <img 
                        src="/Niranjan.png" 
                        alt="Node Identity Core" 
                        className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] object-cover rounded-none grayscale opacity-80 mix-blend-screen"
                    />
                </motion.div>

                {/* Terminal Output */}
                <div className="w-full h-32 mb-6 font-mono text-xs text-textMuted flex flex-col justify-end text-left border-l-2 border-white/10 pl-4 opacity-70">
                    {logs.map((log, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="mb-1"
                        >
                            {log}
                        </motion.div>
                    ))}
                </div>

                {/* Progress Bar Container */}
                <div className="w-full h-[2px] bg-white/10 relative overflow-hidden mb-4">
                    <motion.div
                        className="absolute top-0 left-0 h-full bg-primary shadow-[0_0_15px_rgba(59,130,246,0.8)]"
                        style={{ width: `${progress}%` }}
                    />
                </div>

                {/* Status Text & Percentage */}
                <div className="w-full flex justify-between font-mono text-xs uppercase tracking-widest text-primary">
                    <span>{statusText}</span>
                    <span>{Math.floor(progress)}%</span>
                </div>

            </div>
        </motion.div>
    );
};

export default Loader;
