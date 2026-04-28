import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const metrics = [
  {
    value: '30+',
    label: 'YEARS EXPERIENCE',
    desc: 'A decade of perfecting the art of precision vinyl installation across diverse surfaces and environments.',
  },
  {
    value: '1000+',
    label: 'INSTALLS COMPLETED',
    desc: 'From single boutique wraps to national fleet rollouts, our portfolio spans thousands of successful projects.',
  },
  {
    value: '100%',
    label: 'PRECISION GUARANTEE',
    desc: 'Our architectural approach ensures zero-gap finishes and long-term durability on every project we touch.',
  },
];

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export default function Portfolio() {
  return (
    <main className="w-full flex flex-col bg-white">

      {/* ── Header ── */}
      <motion.section
        className="w-full max-w-[1440px] mx-auto px-6 pt-24 pb-12"
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        <motion.h1
          variants={fadeUp}
          className="text-navy-deep font-bold uppercase leading-[0.9] tracking-[-0.05em] mb-6"
          style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(48px, 6vw, 72px)' }}
        >
          Portfolio Selection
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="text-slate-500 text-lg leading-relaxed max-w-2xl"
        >
          3 decades of precision installation across two distinct divisions. Choose your sector
          to explore our work.
        </motion.p>
      </motion.section>

      {/* ── Gateway Grid ── */}
      <section className="w-full grid grid-cols-1 md:grid-cols-2">

        {/* Automotive Portfolio */}
        <motion.div
          className="group relative overflow-hidden flex flex-col justify-end min-h-[780px] border-r border-slate-100"
          initial={{ opacity: 0, x: -32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Background image */}
          <img
            src="/car-show-vw.png"
            alt="Automotive Portfolio"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-[rgba(24,22,22,0.63)]" />

          {/* Content */}
          <div className="relative z-10 flex flex-col gap-6 p-16">
            <span className="self-start bg-navy-deep text-white text-xs font-bold tracking-[0.1em] uppercase px-3 py-1">
              FLEET &amp; CUSTOM
            </span>
            <h2
              className="text-white font-bold leading-tight uppercase"
              style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(36px, 4vw, 48px)' }}
            >
              Automotive<br />Portfolio
            </h2>
            <p className="text-white/90 text-lg leading-relaxed max-w-md">
              Vinyl application for commercial fleets, motorsport graphics, and high-end custom
              graphics. We specialize in durable, seamless finishes that protect and transform
              your ideas to reality.
            </p>
            <Link
              to="/commercial"
              className="self-start flex items-center gap-2 bg-white text-navy-deep text-sm font-bold px-8 py-4 hover:bg-slate-100 transition-colors duration-200 group-hover:translate-x-1 transition-transform"
            >
              View Automotive Projects
              <ArrowIcon />
            </Link>
          </div>
        </motion.div>

        {/* Architectural Projects */}
        <motion.div
          className="group relative overflow-hidden flex flex-col justify-end min-h-[780px]"
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          {/* Background image */}
          <img
            src="/wildcat-engineering-mural.png"
            alt="Architectural Projects"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-[rgba(30,30,30,0.5)]" />

          {/* Content */}
          <div className="relative z-10 flex flex-col gap-6 p-16">
            <span className="self-start bg-white text-navy-deep text-xs font-bold tracking-[0.1em] uppercase px-3 py-1">
              INTERIORS &amp; VENUES
            </span>
            <h2
              className="text-white font-bold leading-tight uppercase"
              style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(36px, 4vw, 48px)' }}
            >
              Architectural<br />Projects
            </h2>
            <p className="text-white/90 text-lg leading-relaxed max-w-md">
              Custom wall murals, glass frosting, and textured architectural finishes for
              corporate offices, retail spaces, and high-end residential environments.
            </p>
            <Link
              to="/residential"
              className="self-start flex items-center gap-2 bg-white text-navy-deep text-sm font-bold px-8 py-4 hover:bg-slate-100 transition-colors duration-200 group-hover:translate-x-1 transition-transform"
            >
              View Architectural Gallery
              <ArrowIcon />
            </Link>
          </div>
        </motion.div>

      </section>

      {/* ── Quality Metrics ── */}
      <section className="w-full bg-[#F8FAFC] py-20 px-6">
        <motion.div
          className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {metrics.map(({ value, label, desc }) => (
            <motion.div key={label} variants={fadeUp} className="flex flex-col items-center gap-4 text-center">
              <span
                className="text-navy-deep font-bold"
                style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '36px', lineHeight: '40px' }}
              >
                {value}
              </span>
              <h3 className="text-navy-deep font-bold text-base uppercase tracking-[0.08em]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {label}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

    </main>
  );
}
