import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiTerminal, FiMaximize2, FiMinimize2 } from 'react-icons/fi';
import { useSound } from '../hooks/useSound';
import { useTheme } from '../context/ThemeContext';

const Terminal = ({ isOpen, onClose }) => {
    const { playSound } = useSound();
    const { changeTheme } = useTheme();
    const [input, setInput] = useState('');
    const [history, setHistory] = useState([
        { type: 'system', text: 'Niranjan OS v2.0.4 initialized.' },
        { type: 'system', text: 'Type "help" to see available commands.' },
        { type: 'system', text: 'Hint: Explore the system using "ls" and read files with "cat"!' }
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

    // Focus input when opened and lock scroll
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            if (inputRef.current) setTimeout(() => inputRef.current.focus(), 100);
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    const handleCommand = (cmd) => {
        const trimmedCmd = cmd.trim();
        if (!trimmedCmd) return;

        const argsArray = trimmedCmd.split(' ').filter(Boolean);
        const command = argsArray[0].toLowerCase();
        const argStr = argsArray.slice(1).join(' ');

        let response = [];
        let isError = false;

        switch (command) {
            case 'help':
                response = [
                    'Available commands:',
                    '  whoami    - Display author information',
                    '  about     - Brief summary of my background',
                    '  experience- Show work history and timeline',
                    '  projects  - List major tech deployments',
                    '  skills    - Output technical capabilities',
                    '  contact   - Show communication protocols',
                    '  date      - Display current system time',
                    '  ls        - List directory contents',
                    '  pwd       - Print working directory',
                    '  cat       - Read file contents (e.g. cat resume.pdf)',
                    '  echo      - Write text to output (e.g. echo hello)',
                    '  ping      - Check network host (e.g. ping google.com)',
                    '-----------',
                    '  theme     - UI customization instructions',
                    '  matrix    - Enter the simulation',
                    '  sudo      - Administrator execution',
                    '  clear     - Clear terminal output',
                    '  exit      - Close terminal connection'
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
            case 'about':
                response = [
                    'Hi! I am Niranjan, a Full Stack Developer driven by creating software that lives on the internet.',
                    'My expertise bridges robust backend architectures (Java, Node.js) and sleek frontends (React).'
                ];
                break;
            case 'experience':
                response = [
                    'EXPERIENCE LOG:',
                    '------------------------------------------------',
                    '[✓] Software Consultant @ Supai Infotech',
                    '    TIMEFRAME: Mar 2026 - Present',
                    '    STATUS: Active Enterprise Developer (OpenText, Java, React)',
                    '------------------------------------------------',
                    '[✓] React.js Developer Training @ Euphoria GenX',
                    '    TIMEFRAME: Aug 2024 - Sep 2024',
                    '    STATUS: Completed Intensive Frontend Program'
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
            case 'skills':
                response = [
                    'FRONTEND:  React.js, Tailwind CSS, HTML5, JavaScript',
                    'BACKEND:   Node.js, Express, REST APIs',
                    'DATABASE:  MongoDB, MySQL',
                    'LANGUAGES: Java, C, Python (Basic)',
                    'TOOLS:     Git, GitHub, VS Code, OpenText Platforms'
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
            case 'ls':
                if (argsArray.length > 1) {
                    response = [`ls: cannot access '${argsArray[1]}': No such file or directory`];
                    isError = true;
                } else {
                    response = [
                        'about.txt   skills.json   projects.dir   experience.log',
                        'contact.sh  resume.pdf    secret.enc'
                    ];
                }
                break;
            case 'pwd':
                response = ['/home/niranjan/portfolio'];
                break;
            case 'theme':
                if (argsArray.length === 1) {
                    response = [
                        'Usage: theme <color>',
                        'Available themes: blue, green, magenta, orange',
                        '[INFO] You can also use the gear icon settings menu on the bottom right.'
                    ];
                    isError = true;
                } else {
                    const selectedTheme = argsArray[1].toLowerCase();
                    if (['blue', 'green', 'magenta', 'orange'].includes(selectedTheme)) {
                        changeTheme(selectedTheme);
                        response = [`[SUCCESS] System primary visual aesthetic updated to: ${selectedTheme.toUpperCase()}`];
                    } else {
                        response = [`Invalid theme: ${selectedTheme}`, 'Available themes: blue, green, magenta, orange'];
                        isError = true;
                    }
                }
                break;
            case 'sudo':
                if (argStr === 'rm -rf /') {
                    response = ['CRITICAL ERROR: SYSTEM COMPROMISED. INITIATING SELF-DESTRUCT... just kidding.'];
                } else {
                    response = [`sudo: ${argsArray[1] || 'root'} incident has been reported.`];
                }
                isError = true;
                break;
            case 'clear':
                setHistory([]);
                return;
            case 'matrix':
                response = ['Wake up, Neo...', 'The Matrix has you...', 'Follow the white rabbit.'];
                break;
            case 'exit':
                handleClose();
                return;
            case 'echo':
                if (argsArray.length === 1) {
                    response = ['Usage: echo <text>'];
                    isError = true;
                } else {
                    response = [argStr];
                }
                break;
            case 'ping':
                if (argsArray.length === 1) {
                    response = ['Usage: ping <host>'];
                    isError = true;
                } else {
                    const target = argsArray[1];
                    response = [
                        `PING ${target} (192.168.1.1): 56 data bytes`,
                        `64 bytes from 192.168.1.1: icmp_seq=0 ttl=118 time=14.2 ms`,
                        `64 bytes from 192.168.1.1: icmp_seq=1 ttl=118 time=13.5 ms`,
                        `64 bytes from 192.168.1.1: icmp_seq=2 ttl=118 time=14.8 ms`,
                        `--- ${target} ping statistics ---`,
                        `3 packets transmitted, 3 packets received, 0.0% packet loss`
                    ];
                }
                break;
            case 'cat':
                if (argsArray.length === 1) {
                    response = ['Usage: cat <filename>'];
                    isError = true;
                } else {
                    const file = argsArray[1];
                    if (file === 'resume.pdf') {
                        response = ['Downloading resume.pdf... Opening external viewer.'];
                        setTimeout(() => window.open('/resume.pdf', '_blank'), 800);
                    } else if (file === 'about.txt') {
                        response = ['Hi! I am Niranjan, a Full Stack Developer driven by creating software that lives on the internet.'];
                    } else if (file === 'secret.enc') {
                        response = ['[ERROR] Failed to read secret.enc: Requires 256-bit decryption key.'];
                        isError = true;
                    } else if (['skills.json', 'projects.dir', 'experience.log', 'contact.sh'].includes(file)) {
                        response = [`[INFO] Executable or binary file. Type "${file.split('.')[0]}" to run the command directly.`];
                    } else {
                        response = [`cat: ${file}: No such file or directory`];
                        isError = true;
                    }
                }
                break;
            case 'cd':
                if (argsArray.length === 1 || argsArray[1] === '~') {
                    response = [''];
                } else {
                    response = [`bash: cd: ${argsArray[1]}: Permission denied`];
                    isError = true;
                }
                break;
            default:
                response = [`bash: ${command}: command not found. Type "help" for a list of commands.`];
                isError = true;
                break;
        }

        if (isError) {
            playSound('error');
        } else if (command !== 'clear') {
            playSound('click');
        }

        setHistory(prev => [
            ...prev,
            { type: 'user', text: `root@niranjan:~$ ${trimmedCmd}` },
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
