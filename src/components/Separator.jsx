import React from 'react';
import { motion } from 'framer-motion';

const Separator = () => {
    return (
        <div className="w-full flex justify-center items-center py-12 opacity-50 relative z-10">
            <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="w-1/3 md:w-1/4 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent origin-right"
            />
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-2 h-2 rounded-full bg-primary mx-4 shadow-[0_0_15px_rgba(59,130,246,0.8)]"
            />
            <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="w-1/3 md:w-1/4 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent origin-left"
            />
        </div>
    );
};

export default Separator;
