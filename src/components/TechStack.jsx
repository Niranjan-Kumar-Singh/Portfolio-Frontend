import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaJava, FaJs, FaHtml5, FaCss3Alt, FaReact,
  FaNodeJs, FaGithub
} from 'react-icons/fa';
import {
  SiTailwindcss, SiExpress, SiMongodb, SiMysql,
  SiPostman, SiGit
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

// ─── Data ─────────────────────────────────────────────────────────────────────
const techCategories = [
  {
    id: 'lang',
    title: 'Languages',
    tag: 'SYS.LANG',
    color: '#f7df1e',
    skills: [
      { name: 'Java',       icon: FaJava,  color: '#f89820', level: 85 },
      { name: 'JavaScript', icon: FaJs,    color: '#f7df1e', level: 90 },
      { name: 'SQL',        icon: SiMysql, color: '#4479A1', level: 75 },
    ],
  },
  {
    id: 'fe',
    title: 'Frontend',
    tag: 'SYS.UI',
    color: '#61dafb',
    skills: [
      { name: 'React.js',    icon: FaReact,      color: '#61dafb', level: 88 },
      { name: 'Tailwind',    icon: SiTailwindcss, color: '#06b6d4', level: 85 },
      { name: 'HTML5',       icon: FaHtml5,       color: '#e34f26', level: 92 },
      { name: 'CSS3',        icon: FaCss3Alt,     color: '#1572b6', level: 90 },
    ],
  },
  {
    id: 'be',
    title: 'Backend',
    tag: 'SYS.API',
    color: '#339933',
    skills: [
      { name: 'Node.js',    icon: FaNodeJs,   color: '#339933', level: 82 },
      { name: 'Express.js', icon: SiExpress,  color: '#aaaaaa', level: 80 },
    ],
  },
  {
    id: 'db',
    title: 'Database',
    tag: 'SYS.DB',
    color: '#47A248',
    skills: [
      { name: 'MySQL',   icon: SiMysql,   color: '#4479A1', level: 78 },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248', level: 82 },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    tag: 'SYS.ENV',
    color: '#ff6c37',
    skills: [
      { name: 'Git',     icon: SiGit,     color: '#f05032', level: 88 },
      { name: 'VS Code', icon: VscVscode, color: '#007acc', level: 92 },
      { name: 'Postman', icon: SiPostman, color: '#ff6c37', level: 80 },
      { name: 'GitHub',  icon: FaGithub,  color: '#ffffff', level: 85 },
    ],
  },
];

// ─── Skill Icon Node ───────────────────────────────────────────────────────────
const SkillNode = ({ skill, delay = 0 }) => {
  const [hovered, setHovered] = useState(false);
  const Icon = skill.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay, ease: 'backOut' }}
      className="relative flex flex-col items-center gap-2.5 group/skill"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Outer ring */}
      <div
        className="relative w-16 h-16 flex items-center justify-center cursor-crosshair"
        style={{ '--brand': skill.color }}
      >
        {/* Animated neon ring */}
        <motion.div
          className="absolute inset-0 rounded-none border-2 transition-colors duration-300"
          animate={hovered
            ? { borderColor: skill.color, boxShadow: `0 0 18px ${skill.color}88, inset 0 0 14px ${skill.color}22` }
            : { borderColor: 'rgba(255,255,255,0.07)', boxShadow: 'none' }
          }
          transition={{ duration: 0.25 }}
        />

        {/* Corner brackets */}
        <motion.div
          className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2"
          animate={{ borderColor: hovered ? skill.color : 'rgba(255,255,255,0.15)', opacity: hovered ? 1 : 0.4 }}
          transition={{ duration: 0.25 }}
        />
        <motion.div
          className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2"
          animate={{ borderColor: hovered ? skill.color : 'rgba(255,255,255,0.15)', opacity: hovered ? 1 : 0.4 }}
          transition={{ duration: 0.25 }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2"
          animate={{ borderColor: hovered ? skill.color : 'rgba(255,255,255,0.15)', opacity: hovered ? 1 : 0.4 }}
          transition={{ duration: 0.25 }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2"
          animate={{ borderColor: hovered ? skill.color : 'rgba(255,255,255,0.15)', opacity: hovered ? 1 : 0.4 }}
          transition={{ duration: 0.25 }}
        />

        {/* Background glow fill */}
        <motion.div
          className="absolute inset-0"
          animate={{ backgroundColor: hovered ? `${skill.color}12` : 'transparent' }}
          transition={{ duration: 0.25 }}
        />

        {/* The icon itself */}
        <motion.div
          animate={hovered
            ? { scale: 1.18, filter: `drop-shadow(0 0 10px ${skill.color}dd)` }
            : { scale: 1, filter: `drop-shadow(0 0 4px ${skill.color}44)` }
          }
          transition={{ duration: 0.25 }}
        >
          <Icon size={28} style={{ color: skill.color }} />
        </motion.div>

        {/* Scanner sweep on hover */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              className="absolute left-0 right-0 h-[2px] pointer-events-none z-10"
              style={{ background: `linear-gradient(90deg, transparent, ${skill.color}, transparent)` }}
              initial={{ top: '-2px', opacity: 1 }}
              animate={{ top: '100%', opacity: 0.6 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: 'linear', repeat: Infinity, repeatDelay: 0.5 }}
            />
          )}
        </AnimatePresence>
      </div>

      {/* Skill name */}
      <motion.span
        className="text-[10px] font-mono uppercase tracking-[0.15em] transition-colors duration-200"
        animate={{ color: hovered ? skill.color : 'rgba(148,163,184,0.8)' }}
      >
        {skill.name}
      </motion.span>

      {/* Skill level bar */}
      <div className="w-full h-[2px] bg-white/5 rounded-none overflow-hidden">
        <motion.div
          className="h-full"
          style={{ background: skill.color }}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: delay + 0.3, ease: 'easeOut' }}
        />
      </div>

      {/* Tooltip */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            className="absolute -top-12 left-1/2 -translate-x-1/2 z-30 pointer-events-none"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15 }}
          >
            <div
              className="px-3 py-1.5 text-[9px] font-mono uppercase tracking-widest whitespace-nowrap bg-black/95 border"
              style={{ borderColor: `${skill.color}66`, color: skill.color, boxShadow: `0 0 12px ${skill.color}44` }}
            >
              <span className="text-white mr-1">{skill.name}</span>·<span className="ml-1">{skill.level}%</span>
            </div>
            {/* Arrow */}
            <div className="w-1.5 h-1.5 bg-black border-b border-r mx-auto rotate-45 -mt-0.5" style={{ borderColor: `${skill.color}66` }} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// ─── Category Card ────────────────────────────────────────────────────────────
const CategoryCard = ({ category, cardIndex }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, delay: cardIndex * 0.08, ease: 'easeOut' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative group overflow-hidden cursor-crosshair"
    >
      {/* Premium Card background with radial hover glow */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: hovered 
            ? `radial-gradient(circle at top, ${category.color}15 0%, rgba(3,7,18,0.8) 80%)` 
            : `radial-gradient(circle at top right, rgba(59,130,246,0.06) 0%, rgba(3,7,18,0.8) 70%)`,
        }}
        transition={{ duration: 0.5 }}
      />
      
      {/* Subtle frost noise texture for premium glass feel */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay z-0" 
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      ></div>

      {/* Full border with glow */}
      <motion.div
        className="absolute inset-0 border"
        animate={{
          borderColor: hovered ? `${category.color}60` : 'rgba(59,130,246,0.15)',
          boxShadow: hovered ? `0 0 30px ${category.color}18, inset 0 0 20px ${category.color}06` : 'none',
        }}
        transition={{ duration: 0.35 }}
      />

      {/* Top edge accent bar */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px]"
        animate={{
          background: hovered
            ? `linear-gradient(90deg, transparent, ${category.color}, transparent)`
            : 'linear-gradient(90deg, transparent, rgba(59,130,246,0.3), transparent)',
          opacity: hovered ? 1 : 0.5,
        }}
        transition={{ duration: 0.35 }}
      />

      {/* Animated scanner sweep on hover */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            className="absolute left-0 right-0 h-[1px] pointer-events-none z-10"
            style={{ background: `linear-gradient(90deg, transparent, ${category.color}88, transparent)` }}
            initial={{ top: '0%' }}
            animate={{ top: '100%' }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.5, ease: 'linear', repeat: Infinity, repeatDelay: 0.8 }}
          />
        )}
      </AnimatePresence>

      {/* Corner brackets — all 4, they grow on hover */}
      {[
        'top-0 left-0 border-t-2 border-l-2',
        'top-0 right-0 border-t-2 border-r-2',
        'bottom-0 left-0 border-b-2 border-l-2',
        'bottom-0 right-0 border-b-2 border-r-2',
      ].map((cls, i) => (
        <motion.div
          key={i}
          className={`absolute ${cls} pointer-events-none`}
          animate={{
            width: hovered ? 20 : 12,
            height: hovered ? 20 : 12,
            borderColor: hovered ? category.color : 'rgba(139,92,246,0.6)',
          }}
          transition={{ duration: 0.3 }}
        />
      ))}

      {/* Card content */}
      <div className="relative z-10 p-4 sm:p-6 flex flex-col gap-5 sm:gap-6 backdrop-blur-md">

        {/* Header row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Led indicator */}
            <motion.div
              className="w-2 h-2 rounded-none"
              animate={{
                backgroundColor: hovered ? category.color : '#3b82f6',
                boxShadow: hovered ? `0 0 10px ${category.color}` : '0 0 6px rgba(59,130,246,0.6)',
              }}
              transition={{ duration: 0.3 }}
            />
            <h3 className="text-sm font-mono tracking-[0.2em] uppercase font-bold text-white">
              {category.title}
            </h3>
          </div>
          <motion.span
            className="text-[9px] font-mono tracking-widest px-2 py-0.5 border"
            animate={{
              color: hovered ? category.color : 'rgba(148,163,184,0.5)',
              borderColor: hovered ? `${category.color}50` : 'rgba(255,255,255,0.08)',
              backgroundColor: hovered ? `${category.color}10` : 'transparent',
            }}
            transition={{ duration: 0.3 }}
          >
            {category.tag}
          </motion.span>
        </div>

        {/* Divider */}
        <motion.div
          className="h-[1px]"
          animate={{
            background: hovered
              ? `linear-gradient(90deg, ${category.color}80, transparent)`
              : 'rgba(255,255,255,0.06)',
          }}
          transition={{ duration: 0.35 }}
        />

        {/* Skill grid */}
        <div className={`grid gap-3 sm:gap-5 ${category.skills.length <= 2 ? 'grid-cols-2' : category.skills.length === 3 ? 'grid-cols-3' : 'grid-cols-4'}`}>
          {category.skills.map((skill, si) => (
            <SkillNode
              key={skill.name}
              skill={skill}
              delay={cardIndex * 0.08 + si * 0.07}
            />
          ))}
        </div>

        {/* Footer: skill count  */}
        <div className="flex items-center gap-2 mt-1">
          <motion.div
            className="h-[1px] flex-grow"
            animate={{ background: hovered ? `${category.color}30` : 'rgba(255,255,255,0.04)' }}
            transition={{ duration: 0.35 }}
          />
          <span className="text-[9px] font-mono tracking-widest text-white/20">
            {category.skills.length} MODULE{category.skills.length > 1 ? 'S' : ''}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

// ─── Main Component ─────────────────────────────────────────────────────────
const TechStack = () => {
  return (
    <section id="skills" className="pt-12 pb-24 relative">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-6 mb-16 relative"
        >
          <div className="flex flex-col relative">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-wide">
              <span className="text-primary font-mono text-lg md:text-2xl mr-4 opacity-70">{'// 02'}</span>
              Tech_Stack
            </h2>
            <div className="absolute -left-4 -top-4 w-4 h-4 border-t-2 border-l-2 border-accent/50" />
          </div>
          <div className="h-[1px] bg-gradient-to-r from-primary/50 to-transparent flex-grow max-w-md relative mt-2">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-[2px] bg-primary shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-primary/50 rotate-45" />
          </div>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {techCategories.map((category, idx) => (
            <CategoryCard key={category.id} category={category} cardIndex={idx} />
          ))}
        </div>
      </div>

      {/* Bottom demarcation line */}
      <div className="absolute bottom-0 left-0 w-full flex items-center justify-center pointer-events-none opacity-50">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute w-32 h-[1px] bg-primary shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
        <div className="absolute w-2 h-[3px] bg-accent" />
      </div>
    </section>
  );
};

export default TechStack;
