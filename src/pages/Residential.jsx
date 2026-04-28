import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const projects = [
  {
    src: '/uk-wildcats-mural.png',
    category: 'WALL MURALS',
    title: 'STADIUM INTERIOR BRANDING',
    subtitle: 'Large-Format Vinyl Install - Executive Lounge',
    tall: false,
  },
  {
    src: '/nike-retail-display.png',
    category: 'RETAIL GRAPHICS',
    title: 'PERFORMANCE APPAREL DISPLAY',
    subtitle: 'High-Impact Fabric & Tension Systems',
    tall: true,
  },
  {
    src: '/wildcat-engineering-mural.png',
    category: 'EDUCATIONAL SPACES',
    title: 'ENGINEERING DEPT. MURALS',
    subtitle: 'Textured Brick Vinyl Application',
    tall: false,
  },
  {
    src: '/cardinal-stadium.png',
    category: 'LARGE-FORMAT INSTALLATIONS',
    title: 'Athletic Stadium venue branding',
    subtitle: 'Environmental Graphics & UV-Stable Exterior Structural Graphics',
    tall: false,
  },
  {
    src: '/uofl-tennis-lockers.png',
    category: 'WAYFINDING',
    title: 'ELITE ATHLETIC LOCKERS',
    subtitle: 'Precision Acrylic & Vinyl Signage',
    tall: true,
  },
  {
    src: '/hancock-school-doors.png',
    category: 'GLASS TRANSFORMATION',
    title: 'SCHOOL SPIRIT FACADE',
    subtitle: 'Perforated One-Way Window Film',
    tall: false,
  },
];

export default function Residential() {
  return (
    <main className="w-full bg-white">

      {/* ── Header ── */}
      <motion.section
        className="w-full max-w-[1440px] mx-auto px-8 pt-20 pb-16"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={fadeUp} className="flex items-center gap-4 mb-6">
          <div className="w-12 h-[2px] bg-navy-deep" />
          <span className="text-navy-deep text-[10px] font-bold uppercase tracking-[0.3em]">Architecture & Environment</span>
        </motion.div>
        <motion.h1
          variants={fadeUp}
          className="text-navy-deep font-extrabold uppercase leading-[0.9] tracking-[-0.05em] mb-8"
          style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(48px, 7vw, 84px)' }}
        >
          Architectural<br />Portfolio
        </motion.h1>
        <motion.p variants={fadeUp} className="text-slate-500 text-lg leading-relaxed max-w-2xl">
          Precision film and surface transformations for corporate venues, retail environments,
          and high-end residential interiors.
        </motion.p>
      </motion.section>

      {/* ── Gallery Grid ── */}
      <section className="w-full max-w-[1440px] mx-auto px-8 py-12">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-2"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
        >
          {projects.map(({ src, category, title, subtitle, tall }) => (
            <motion.div
              key={src}
              variants={fadeUp}
              className="group flex flex-col overflow-hidden"
            >
              {/* Image */}
              <div
                className="overflow-hidden bg-slate-100"
                style={{ height: tall ? '495px' : '320px' }}
              >
                <img
                  src={src}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Text */}
              <div className="flex flex-col gap-1 px-5 py-4 bg-white border-t border-slate-100">
                <span className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.22em]">
                  {category}
                </span>
                <h3
                  className="text-navy-deep font-bold uppercase leading-snug"
                  style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '15px' }}
                >
                  {title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed">{subtitle}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── CTA Section ── */}
      <section className="w-full bg-navy-deep py-24 px-8">
        <motion.div
          className="max-w-[1440px] mx-auto flex flex-col items-center gap-6 text-center"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2
            className="text-white font-black uppercase leading-tight tracking-[-0.03em]"
            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(36px, 5vw, 60px)' }}
          >
            Transform Your<br />Environment
          </h2>
          <p className="text-slate-400 text-base leading-relaxed max-w-xl">
            From corporate interiors to large-format venue installations, our team delivers
            architectural precision at every scale. Let's build something lasting.
          </p>
          <Link
            to="/contact"
            className="mt-4 inline-flex items-center justify-center h-14 px-10 bg-white text-navy-deep text-xs font-bold tracking-[0.2em] uppercase hover:bg-primary hover:text-white transition-colors duration-200"
          >
            Start a Consultation
          </Link>
        </motion.div>
      </section>

    </main>
  );
}
