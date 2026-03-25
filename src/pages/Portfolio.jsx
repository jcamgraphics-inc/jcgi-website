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
  { value: '10+', label: 'Years Experience', desc: 'A decade of perfecting the art of precision vinyl installation across diverse surfaces and environments.' },
  { value: '5,000+', label: 'Installs Completed', desc: 'From single boutique wraps to national fleet rollouts, our portfolio spans thousands of successful projects.' },
  { value: '100%', label: 'Precision Guarantee', desc: 'Our architectural approach ensures zero-gap finishes and long-term durability on every project we touch.' },
];

export default function Portfolio() {
  return (
    <main className="min-h-screen flex flex-col bg-white">

      {/* Header Section */}
      <motion.header
        className="max-w-7xl mx-auto px-6 pt-16 pb-12 w-full"
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        <motion.h1
          variants={fadeUp}
          className="font-heading text-5xl md:text-7xl font-bold text-slate-900 tracking-tight mb-6 uppercase leading-[0.9]"
        >
          Portfolio Selection
        </motion.h1>
        <motion.p variants={fadeUp} className="max-w-2xl text-lg text-slate-500 leading-relaxed font-medium">
          A decade of precision installation across two distinct divisions. Choose your sector to explore our work.
        </motion.p>
      </motion.header>

      {/* Gateway Grid */}
      <section className="flex-grow grid grid-cols-1 md:grid-cols-2">

        {/* Commercial Portfolio */}
        <motion.div
          className="group relative overflow-hidden flex flex-col justify-end p-8 md:p-16 min-h-[600px] border-r border-slate-100"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute inset-0 bg-slate-900/40 z-10 transition-colors duration-500 group-hover:bg-slate-900/20" />
          <img
            alt="Commercial Portfolio"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlPYfTD_BVHlYHkEcT6Ey_g3Ak410o7fGJ38K46DzzvksiFyFGpx3H8ibhtSXJ3H_YI3u4RdC9iF7NN--Xq0wRn_lpTwDDuNwB5ibD_YcEMnT6k70uizfuNSNw6WaSpqfvWdsOOJqxFwIF6I-AxmihweOlqqQRgnyDSql2XE-3bynTbIlbUBw59c_mHX6AdBBl7jCmCCF7PPhRRiSXDcOkFvyIiQ4ak1DBtI6_DPJwIGEIcoipsJGnaxIDJTLuVczTMsdx3_3FZhKj"
          />
          <div className="relative z-20 space-y-6 max-w-lg">
            <span className="inline-block bg-white text-slate-900 px-3 py-1 text-xs font-bold tracking-widest uppercase">B2B Division</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight uppercase">Commercial Portfolio</h2>
            <p className="text-white/90 text-lg leading-relaxed">
              Precision execution for high-volume fleet graphics, large-scale commercial venues, and corporate environments. We deliver consistent brand integrity at scale.
            </p>
            <Link
              to="/commercial"
              className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 font-bold text-sm transition-all duration-300 hover:bg-slate-100 group-hover:translate-x-2"
            >
              View Commercial Projects
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
        </motion.div>

        {/* Residential Projects */}
        <motion.div
          className="group relative overflow-hidden flex flex-col justify-end p-8 md:p-16 min-h-[600px]"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute inset-0 bg-slate-900/40 z-10 transition-colors duration-500 group-hover:bg-slate-900/20" />
          <img
            alt="Residential Projects"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBO5NvY2sGMcvbGty6wzx3JWXk01Pda152pfGX8JW_D-Ak6rG3-Gm3RtX7IjvUdyoo1Td6hIvhBYGRZZ-UZo7mVslR8zyXuyd9wGhPp35rSNeMninbNhM3ylL3KXnbrryoXhMXj3hQvQqlrTQEnnPWTDOv8yVoeR2LIayaCdZNL0yOqo7cwJo1ho1GKIYTxXW2EhrMqj9UpNzwctq_KiaeMOjGOBacayz6Qi1XTPEkYp6AhEfY5NB4OnGKwg0jfoLz-SeDCS2pzVna9"
          />
          <div className="relative z-20 space-y-6 max-w-lg">
            <span className="inline-block bg-white text-slate-900 px-3 py-1 text-xs font-bold tracking-widest uppercase">Bespoke Division</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight uppercase">Residential Projects</h2>
            <p className="text-white/90 text-lg leading-relaxed">
              Tailored vinyl solutions for luxury personal vehicles and high-end residential interiors. Focused on bespoke detail and premium finishes for discerning homeowners.
            </p>
            <Link
              to="/residential"
              className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 font-bold text-sm transition-all duration-300 hover:bg-slate-100 group-hover:translate-x-2"
            >
              View Residential Gallery
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Quality Metrics */}
      <section className="bg-slate-50 py-20 px-6">
        <motion.div
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {metrics.map(({ value, label, desc }) => (
            <motion.div key={label} variants={fadeUp} className="space-y-4">
              <div className="text-slate-900 font-bold text-4xl">{value}</div>
              <h3 className="font-bold text-slate-900 text-lg uppercase tracking-wider">{label}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  );
}
