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
        <section id="skills" className="py-24 relative">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-4 mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-heading font-bold"><span className="text-primary font-mono text-xl md:text-3xl mr-2">02.</span>Tech Stack</h2>
                    <div className="h-[1px] bg-white/10 flex-grow max-w-sm"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {techCategories.map((category, idx) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="glass-card p-6 rounded-none hover:border-primary/50 border-white/5 transition-colors group relative overflow-hidden bg-background/50"
                        >
                            {/* Corner HUD framing */}
                            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary/50"></div>
                            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-primary/50"></div>
                            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-primary/50"></div>
                            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary/50"></div>

                            <h3 className="text-xl font-heading font-semibold mb-8 flex items-center relative z-10">
                                <span className="w-8 h-[2px] bg-gradient-premium mr-3 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
                                {category.title}
                            </h3>

                            <div className="grid grid-cols-3 gap-4 relative z-10">
                                {category.skills.map((skill) => (
                                    <motion.div
                                        key={skill.name}
                                        className="relative flex items-center justify-center p-4 rounded-none bg-surfaceLight/30 border border-white/5 cursor-pointer group/item hover:bg-primary/5 transition-colors"
                                        whileHover={{
                                            scale: 1.05,
                                            boxShadow: `0 0 0 1px ${skill.color}50`,
                                        }}
                                        transition={{ type: "tween", duration: 0.2 }}
                                    >
                                        <skill.icon size={32} style={{ color: skill.color }} className="drop-shadow-none group-hover/item:scale-110 transition-transform duration-300" />

                                        {/* Cyber Tooltip */}
                                        <div className="absolute -top-10 bg-background border border-primary/50 px-2 py-1 rounded-none text-[10px] font-mono uppercase tracking-widest text-primary opacity-0 group-hover/item:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-[0_0_10px_rgba(59,130,246,0.2)] z-20">
                                            {'>'} {skill.name}
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
