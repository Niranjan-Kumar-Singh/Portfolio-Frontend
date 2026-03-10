import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiTerminal, FiMaximize2, FiMinimize2 } from 'react-icons/fi';
import { useSound } from '../hooks/useSound';

const Terminal = ({ isOpen, onClose }) => {
    const { playSound } = useSound();
    const [input, setInput] = useState('');
    const [history, setHistory] = useState([
        { type: 'system', text: 'Niranjan OS v2.0.4 initialized.' },
        { type: 'system', text: 'Type "help" to see available commands.' }
    ]);
    const [isMaximized, setIsMaximized] = useState(false);
    const endOfTerminalRef = useRef(null);
    const inputRef = useRef(null);

    // Auto-scroll to bottom when history changes
    useEffect(() => {
        if (endOfTerminalRef.current) {
            endOfTerminalRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [history, isOpen]);

    // Focus input when opened
    useEffect(() => {
        if (isOpen && inputRef.current) {
            setTimeout(() => inputRef.current.focus(), 100);
        }
    }, [isOpen]);

    const handleCommand = (cmd) => {
        const trimmedCmd = cmd.trim().toLowerCase();
        let response = [];

        switch (trimmedCmd) {
            case 'help':
                response = [
                    'Available commands:',
                    '  whoami    - Display author information',
                    '  projects  - List major tech deployments',
                    '  contact   - Show communication protocols',
                    '  clear     - Clear terminal output',
                    '  date      - Display current system time',
                    '  sudo      - Administrator execution'
                ];
                break;
            case 'whoami':
                response = [
                    'Name: Niranjan Kumar Singh',
                    'Role: Full Stack Software Engineer Consultant',
                    'Location: Bengaluru, Karnataka',
                    'Instagram: niranjan.ks.in',
                    'Status: Actively building the future.'
                ];
                break;
            case 'projects':
                response = [
                    '[1] SpicyyFood - Full Stack Food Delivery Platform',
                    '[2] NoteBook App - Secure Cloud Note Management',
                    '[3] TaskBuddy - Interactive Task Organization',
                    '[4] Rock Paper Scissors - Logic Based Mini-Game',
                    '[5] Tic Tac Toe - Classic Strategy Game',
                    'Type exit to return to graphical interface.'
                ];
                break;
            case 'contact':
                response = [
                    'Email: niranjansingh1419@gmail.com',
                    'GitHub: github.com/Niranjan-Kumar-Singh',
                    'LinkedIn: linkedin.com/in/niranjan-kumar-singh'
                ];
                break;
            case 'date':
                response = [new Date().toString()];
                break;
            case 'sudo':
                response = ['Nice try. This incident has been reported.'];
                playSound('error');
                break;
            case 'sudo rm -rf /':
                response = ['CRITICAL ERROR: SYSTEM COMPROMISED. INITIATING SELF-DESTRUCT... just kidding.'];
                playSound('error');
                break;
            case 'clear':
                setHistory([]);
                return;
            case '':
                return;
            default:
                response = [`Command not found: ${trimmedCmd}. Type "help" for a list of commands.`];
                playSound('error');
                break;
        }

        if (trimmedCmd !== 'clear' && trimmedCmd !== 'sudo' && trimmedCmd !== 'sudo rm -rf /') {
            playSound('click');
        }

        setHistory(prev => [
            ...prev,
            { type: 'user', text: `root@niranjan:~$ ${cmd}` },
            ...response.map(text => ({ type: 'response', text }))
        ]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleCommand(input);
        setInput('');
    };

    const handleClose = () => {
        playSound('close');
        onClose();
    };

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            handleClose();
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 md:p-8"
                    onClick={handleOverlayClick}
                >
                    <motion.div
                        initial={{ scale: 0.9, y: 20, opacity: 0 }}
                        animate={{ scale: 1, y: 0, opacity: 1 }}
                        exit={{ scale: 0.9, y: 20, opacity: 0 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className={`bg-background/95 border border-primary/40 shadow-[0_0_30px_rgba(59,130,246,0.2)] flex flex-col overflow-hidden relative ${isMaximized ? 'w-full h-full' : 'w-full max-w-3xl h-[60vh]'
                            }`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Terminal Header */}
                        <div className="h-10 bg-surface border-b border-white/10 flex items-center justify-between px-4 select-none">
                            <div className="flex items-center gap-2 text-textMuted font-mono text-xs">
                                <FiTerminal />
                                <span>terminal - root@niranjan:~</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <button onClick={() => { playSound('hover'); setIsMaximized(!isMaximized) }} className="text-textMuted hover:text-white transition-colors">
                                    {isMaximized ? <FiMinimize2 size={14} /> : <FiMaximize2 size={14} />}
                                </button>
                                <button onClick={handleClose} className="text-textMuted hover:text-red-500 transition-colors">
                                    <FiX size={16} />
                                </button>
                            </div>
                        </div>

                        {/* Terminal Body */}
                        <div className="flex-grow p-4 overflow-y-auto font-mono text-sm bg-transparent scrollbar-hide" onClick={() => inputRef.current?.focus()}>
                            {history.map((log, i) => (
                                <div key={i} className={`mb-1 ${log.type === 'user' ? 'text-primary' : log.type === 'system' ? 'text-textMuted' : 'text-textMain'}`}>
                                    {log.text}
                                </div>
                            ))}

                            <form onSubmit={handleSubmit} className="flex items-center mt-2">
                                <span className="text-primary mr-2">root@niranjan:~$</span>
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    className="flex-grow bg-transparent border-none outline-none text-textMain font-mono focus:ring-0 p-0"
                                    autoComplete="off"
                                    spellCheck="false"
                                />
                            </form>
                            <div ref={endOfTerminalRef} />
                        </div>

                        {/* Scanline Effect overlay on terminal */}
                        <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[size:100%_4px] pointer-events-none opacity-50"></div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Terminal;
