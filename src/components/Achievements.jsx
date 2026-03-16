import React from 'react';
import { motion } from 'framer-motion';
import { FiAward } from 'react-icons/fi';

const Achievements = () => {
    return (
        <section id="achievements" className="pt-12 pb-24 relative">
            <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                    whileHover={{ y: -5, boxShadow: "0 20px 40px -10px rgba(59,130,246,0.3)" }}
                    className="glass-card p-10 py-16 rounded-2xl relative overflow-hidden border border-white/5 hover:border-primary/50 transition-all duration-500 bg-gradient-to-b from-surfaceLight/50 to-background/50 group"
                >
                    <div className="absolute -top-10 -right-10 text-primary opacity-5 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-700">
                        <FiAward size={250} />
                    </div>

                    <div className="absolute inset-0 bg-gradient-premium opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>

                    <div className="flex justify-center mb-8 text-primary relative z-10">
                        <motion.div
                            animate={{ scale: [1, 1.1, 1], filter: ["drop-shadow(0 0 10px rgba(59,130,246,0.5))", "drop-shadow(0 0 25px rgba(59,130,246,0.8))", "drop-shadow(0 0 10px rgba(59,130,246,0.5))"] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <FiAward size={56} />
                        </motion.div>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-textMain mb-4 group-hover:text-primary transition-colors relative z-10">
                        Smart India Hackathon 2022
                    </h2>
                    <div className="inline-block relative z-10 mb-8">
                        <p className="text-accent font-mono text-xl tracking-widest font-bold">FINALIST</p>
                        <div className="h-[2px] w-full bg-accent mt-1 scale-x-50 group-hover:scale-x-100 transition-transform duration-500"></div>
                    </div>

                    <p className="text-textMuted text-lg max-w-2xl mx-auto leading-relaxed relative z-10">
                        Recognized among top teams nationally for developing innovative technological solutions to solve complex real-world problems. This experience solidified my passion for rapid prototyping, collaborative engineering, and working effectively under pressure.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Achievements;
