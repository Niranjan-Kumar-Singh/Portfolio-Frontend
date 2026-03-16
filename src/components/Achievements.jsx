import React from 'react';
import { motion } from 'framer-motion';

const Achievements = () => {
  return (
    <section id="achievements" className="pt-12 pb-24 relative">
      <div className="container mx-auto px-6 md:px-12">

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-6 mb-16 relative"
        >
          <div className="flex flex-col relative">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-wide">
              <span className="text-primary font-mono text-lg md:text-2xl mr-4 opacity-70">{'// 05'}</span>
              Achievements
            </h2>
            <div className="absolute -left-4 -top-4 w-4 h-4 border-t-2 border-l-2 border-accent/50" />
          </div>
          <div className="h-[1px] bg-gradient-to-r from-primary/50 to-transparent flex-grow max-w-md relative mt-2">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-[2px] bg-primary shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-primary/50 rotate-45" />
          </div>
        </motion.div>

        {/* ── Certificate Card ── */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative group"
          >
            {/* Outer glow effect */}
            <div className="absolute -inset-[1px] bg-gradient-to-br from-yellow-400/30 via-orange-400/10 to-yellow-400/20 group-hover:from-yellow-400/50 group-hover:via-orange-400/20 group-hover:to-yellow-400/40 transition-all duration-500 pointer-events-none" />

            {/* Certificate body */}
            <div className="relative bg-gradient-to-br from-[#06091a] via-[#080d1f] to-[#04071a] border border-yellow-400/20 overflow-hidden">

              {/* Decorative circuit lines — left edge */}
              <div className="absolute left-0 top-0 bottom-0 w-8 opacity-20 pointer-events-none" style={{
                backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(250,204,21,0.4) 20px, rgba(250,204,21,0.4) 21px)',
              }} />
              {/* Decorative circuit lines — right edge */}
              <div className="absolute right-0 top-0 bottom-0 w-8 opacity-20 pointer-events-none" style={{
                backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(250,204,21,0.4) 20px, rgba(250,204,21,0.4) 21px)',
              }} />

              {/* Corner ornaments */}
              {['top-0 left-0', 'top-0 right-0', 'bottom-0 left-0', 'bottom-0 right-0'].map((pos, i) => (
                <div key={i} className={`absolute ${pos} w-8 h-8 pointer-events-none`}>
                  <div className={`absolute inset-0 border-yellow-400/50 group-hover:border-yellow-400 transition-colors duration-300
                    ${i === 0 ? 'border-t-2 border-l-2' : i === 1 ? 'border-t-2 border-r-2' : i === 2 ? 'border-b-2 border-l-2' : 'border-b-2 border-r-2'}`}
                  />
                </div>
              ))}

              {/* ─ Organization header bar ─ */}
              <div className="border-b border-yellow-400/15 px-8 py-4 flex items-center justify-between gap-4 flex-wrap bg-white/[0.02]">
                <div className="flex items-center gap-6 flex-wrap">
                  {[
                    { line1: 'Ministry of', line2: 'Education', line3: 'Government of India' },
                    { line1: "MoE's", line2: 'INNOVATION CELL', line3: 'GOVERNMENT OF INDIA' },
                    { line1: '', line2: 'AICTE', line3: '' },
                    { line1: '', line2: 'Persistent', line3: '' },
                  ].map((org, i) => (
                    <div key={i} className="text-center">
                      {org.line1 && <p className="text-[8px] text-yellow-400/50 font-mono leading-tight">{org.line1}</p>}
                      <p className="text-[10px] font-bold text-yellow-400/80 tracking-widest font-mono">{org.line2}</p>
                      {org.line3 && <p className="text-[7px] text-yellow-400/30 font-mono leading-tight">{org.line3}</p>}
                    </div>
                  ))}
                </div>
                {/* Azadi Ka Amrit Mahotsav badge */}
                <div className="text-center border border-orange-400/20 px-2 py-1">
                  <p className="text-[8px] font-bold text-orange-400/70 tracking-widest font-mono">AZADI KA</p>
                  <p className="text-[8px] font-bold text-orange-400/70 tracking-widest font-mono">AMRIT MAHOTSAV</p>
                  <p className="text-[7px] text-orange-400/40 font-mono">75 YEARS</p>
                </div>
              </div>

              {/* ─ Main body ─ */}
              <div className="px-8 md:px-12 py-8 flex flex-col md:flex-row gap-8 items-start">

                {/* LEFT — Grand Finale stamp */}
                <div className="flex-shrink-0 flex flex-col items-center gap-2 md:pt-2">
                  <div className="relative">
                    {/* Outer diamond glow */}
                    <motion.div
                      className="w-28 h-28 flex flex-col items-center justify-center bg-gradient-to-b from-emerald-900/60 to-emerald-950/80 border-2 border-emerald-500/50 relative overflow-hidden"
                      animate={{ boxShadow: ['0 0 12px rgba(52,211,153,0.2)', '0 0 28px rgba(52,211,153,0.5)', '0 0 12px rgba(52,211,153,0.2)'] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 to-transparent" />
                      <p className="text-[9px] font-mono tracking-widest text-emerald-300/80 uppercase relative z-10">#SIH Senior</p>
                      <p className="text-[9px] font-mono tracking-widest text-emerald-300/80 uppercase relative z-10">Software Edition</p>
                      <div className="w-12 h-[1px] bg-yellow-400/50 my-1 relative z-10"/>
                      <p className="text-[9px] font-bold font-mono text-yellow-400 tracking-widest uppercase relative z-10">GRAND</p>
                      <p className="text-[9px] font-bold font-mono text-yellow-400 tracking-widest uppercase relative z-10">FINALE</p>
                      <p className="text-base font-bold font-mono text-yellow-400 relative z-10">2022</p>
                    </motion.div>
                    {/* Date pill below */}
                    <div className="mt-2 bg-orange-500/80 px-3 py-1 text-center border border-orange-400/50">
                      <p className="text-[10px] font-bold font-mono text-white tracking-widest">August</p>
                      <p className="text-[10px] font-bold font-mono text-white tracking-widest">25-26</p>
                    </div>
                  </div>
                </div>

                {/* CENTER / RIGHT — Certificate content */}
                <div className="flex-grow flex flex-col gap-5">

                  {/* Title row */}
                  <div className="text-center">
                    <h3 className="text-xl md:text-2xl font-heading font-bold text-white tracking-widest uppercase">
                      Smart India Hackathon
                    </h3>
                    <p className="text-3xl md:text-4xl font-bold text-yellow-400 tracking-widest">2022</p>
                  </div>

                  {/* Participation ribbon */}
                  <div className="flex justify-center">
                    <div className="relative px-8 py-1.5 bg-gradient-to-r from-orange-600 to-orange-500 border border-orange-400/50 shadow-[0_0_20px_rgba(249,115,22,0.4)]">
                      <p className="text-sm font-bold tracking-[0.3em] uppercase text-white font-mono">Participation</p>
                      {/* ribbon tails */}
                      <div className="absolute -left-2 top-0 bottom-0 w-2 bg-orange-700 clip-left" />
                      <div className="absolute -right-2 top-0 bottom-0 w-2 bg-orange-700 clip-right" />
                    </div>
                  </div>

                  {/* Certificate italic title */}
                  <div className="text-center border-b border-yellow-400/10 pb-4">
                    <p className="text-2xl md:text-3xl italic text-yellow-400/80" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                      Certificate
                    </p>
                  </div>

                  {/* Recipient */}
                  <div className="text-center">
                    <p className="text-xs font-mono tracking-widest text-white/40 uppercase mb-1">This certificate is awarded to</p>
                    <p className="text-xl md:text-2xl font-bold text-white tracking-wide border-b border-white/20 pb-1 inline-block px-4"
                       style={{ fontFamily: 'Georgia, serif' }}>
                      Niranjan Kumar Singh
                    </p>
                    <p className="text-xs font-mono tracking-widest text-white/30 uppercase mt-2">
                      for participating in <span className="text-yellow-400/70">Smart India Hackathon, 2022</span>
                    </p>
                  </div>

                  {/* Authorities row */}
                  <div className="border-t border-yellow-400/10 pt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[
                      { name: 'Sh. K Sanjay Murthy', role: 'Secretary, Higher Education', org: 'Ministry of Education' },
                      { name: 'Prof. Anil D. Sahasrabudhe', role: 'Chairman, AICTE', org: 'Ministry of Education' },
                      { name: 'Abhay Jere', role: 'Chief Innovation Officer', org: "MoE's Innovation Cell" },
                      { name: 'Dr. Anand Deshpande', role: 'Chairman and MD', org: 'Persistent Systems' },
                    ].map((auth) => (
                      <div key={auth.name} className="flex flex-col items-center text-center gap-1">
                        {/* Signature squiggle */}
                        <div className="w-16 h-6 relative">
                          <svg viewBox="0 0 60 20" className="w-full h-full opacity-40">
                            <path d="M5,15 Q15,5 25,12 Q35,18 45,8 Q52,3 55,10" stroke="#facc15" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                          </svg>
                        </div>
                        <div className="w-12 h-[1px] bg-yellow-400/30" />
                        <p className="text-[8px] font-bold text-white/60 font-mono leading-tight">{auth.name}</p>
                        <p className="text-[7px] text-white/30 font-mono leading-tight">{auth.role}</p>
                        <p className="text-[7px] text-yellow-400/30 font-mono leading-tight">{auth.org}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* ─ Partner footer ─ */}
              <div className="border-t border-yellow-400/10 px-8 py-3 flex items-center justify-between gap-4 bg-white/[0.015] flex-wrap">
                <div className="flex items-center gap-2">
                  <span className="text-[8px] font-mono text-white/20 tracking-widest uppercase">Broadcast Partner</span>
                  <div className="flex items-center gap-3 ml-2">
                    <div className="border border-white/10 px-2 py-0.5">
                      <span className="text-[9px] font-bold font-mono text-white/40">DOORDARSHAN</span>
                    </div>
                    <div className="border border-white/10 px-2 py-0.5">
                      <span className="text-[9px] font-bold font-mono text-white/40">AIR</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[8px] font-mono text-white/20 tracking-widest uppercase">Partner</span>
                  <div className="flex items-center gap-3 ml-2">
                    <span className="text-[10px] font-bold font-mono text-orange-400/60">aws</span>
                    <div className="w-[1px] h-3 bg-white/10" />
                    <span className="text-[10px] font-bold font-mono text-yellow-400/50">◆ Shell</span>
                  </div>
                </div>
              </div>

              {/* Scanner line sweep on hover */}
              <div className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent opacity-0 group-hover:animate-[scanDown_2s_linear_infinite] pointer-events-none top-0" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
