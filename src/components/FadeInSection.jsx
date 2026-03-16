import React from 'react';
import { motion } from 'framer-motion';

const FadeInSection = ({ children }) => {
    return (
        <motion.div
            initial={{ 
                opacity: 0, 
                x: -30,
                y: 10,
                filter: "none"
            }}
            whileInView={{ 
                opacity: 1, 
                x: 0,
                y: 0,
                filter: "none"
            }}
            viewport={{ once: false, amount: 0.1, margin: "0px" }}
            transition={{ 
                duration: 0.5, 
                ease: "circOut", // Snappy mechanical ease
            }}
            className="min-h-[20vh] w-full flex flex-col justify-center"
        >
            {children}
        </motion.div>
    );
};

export default FadeInSection;
