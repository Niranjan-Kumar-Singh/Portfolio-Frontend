import React from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaJs, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMongodb, SiMysql, SiPostman } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const techCategories = [
    {
        title: "Languages",
        skills: [
            { name: "Java", icon: FaJava, color: "#f89820" },
            { name: "JavaScript", icon: FaJs, color: "#f7df1e" },
            { name: "SQL", icon: SiMysql, color: "#4479A1" }
        ]
    },
    {
        title: "Frontend",
        skills: [
            { name: "React.js", icon: FaReact, color: "#61dafb" },
            { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06b6d4" },
            { name: "HTML5", icon: FaHtml5, color: "#e34f26" },
            { name: "CSS3", icon: FaCss3Alt, color: "#1572b6" }
        ]
    },
    {
        title: "Backend",
        skills: [
            { name: "Node.js", icon: FaNodeJs, color: "#339933" },
            { name: "Express.js", icon: SiExpress, color: "#ffffff" },
            { name: "REST APIs", icon: FaNodeJs, color: "#8b5cf6" } // Using Node icon for REST as generic backend concept
        ]
    },
    {
        title: "Database",
        skills: [
            { name: "MySQL", icon: SiMysql, color: "#4479A1" },
            { name: "MongoDB", icon: SiMongodb, color: "#47A248" }
        ]
    },
    {
        title: "Tools & Platforms",
        skills: [
            { name: "Git", icon: FaGithub, color: "#ffffff" },
            { name: "VS Code", icon: VscVscode, color: "#007acc" },
            { name: "Postman", icon: SiPostman, color: "#ff6c37" }
        ]
    }
];

const TechStack = () => {
    return (
        <section id="skills" className="pt-12 pb-24 relative">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-6 mb-16 relative"
                >
                    <div className="flex flex-col relative">
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-wide">
                            <span className="text-primary font-mono text-lg md:text-2xl mr-4 opacity-70">{'//'} 02</span>
                            Tech_Stack
                        </h2>
                        {/* Cyberpunk Bracket Detail */}
                        <div className="absolute -left-4 -top-4 w-4 h-4 border-t-2 border-l-2 border-accent/50"></div>
                    </div>
                    <div className="h-[1px] bg-gradient-to-r from-primary/50 to-transparent flex-grow max-w-md relative mt-2">
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-[2px] bg-primary shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-primary/50 rotate-45"></div>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {techCategories.map((category, idx) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="p-6 rounded-none border border-primary/20 hover:border-primary/60 transition-colors group relative overflow-hidden bg-[#030712]/60 filter backdrop-blur-md cursor-crosshair shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]"
                        >
                            {/* Animated Background Data Pulse */}
                            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                            {/* Advanced Corner HUD framing */}
                            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-accent transition-all duration-300 group-hover:w-5 group-hover:h-5"></div>
                            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-accent transition-all duration-300 group-hover:w-5 group-hover:h-5"></div>
                            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-accent transition-all duration-300 group-hover:w-5 group-hover:h-5"></div>
                            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-accent transition-all duration-300 group-hover:w-5 group-hover:h-5"></div>

                            {/* Section Top Border Line */}
                            <div className="absolute top-0 left-8 right-8 h-[1px] bg-primary/30 group-hover:bg-primary transition-colors duration-300"></div>

                            <h3 className="text-xl font-mono text-white tracking-[0.1em] mb-8 flex items-center relative z-10 uppercase text-sm">
                                <span className="text-accent mr-3 font-bold group-hover:animate-pulse">{'> '}</span>
                                {category.title}
                            </h3>

                            <div className="grid grid-cols-3 gap-4 relative z-10">
                                {category.skills.map((skill) => (
                                    <motion.div
                                        key={skill.name}
                                        className="relative flex items-center justify-center p-4 rounded-none bg-surfaceLight/10 border border-white/5 cursor-crosshair group/item hover:bg-surfaceLight/30 transition-colors overflow-hidden"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ type: "tween", duration: 0.2 }}
                                    >
                                        <skill.icon size={32} style={{ color: skill.color }} className="relative z-10 group-hover/item:scale-110 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(255,255,255,0.2)] group-hover/item:drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />

                                        {/* Targeting Brackets */}
                                        <div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-primary opacity-0 group-hover/item:opacity-100 transition-opacity duration-200 pointer-events-none"></div>
                                        <div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-primary opacity-0 group-hover/item:opacity-100 transition-opacity duration-200 pointer-events-none"></div>

                                        {/* Cyber Tooltip Data Readout */}
                                        <div className="absolute -top-10 bg-black/90 border border-primary/50 px-3 py-1.5 rounded-none text-[9px] font-mono uppercase tracking-widest text-primary opacity-0 group-hover/item:opacity-100 transition-opacity duration-200 pointer-events-none w-max shadow-[0_0_15px_rgba(59,130,246,0.5)] z-20 flex flex-col">
                                            <span className="text-white border-b border-white/20 pb-1 mb-1">{skill.name}</span>
                                            <span className="text-accent">MODULE_ACTIVE</span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Cyber Section Demarcation */}
            <div className="absolute bottom-0 left-0 w-full flex items-center justify-center pointer-events-none opacity-50">
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                <div className="absolute w-32 h-[1px] bg-primary shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
                <div className="absolute w-2 h-[3px] bg-accent"></div>
            </div>
        </section>
    );
};

export default TechStack;
