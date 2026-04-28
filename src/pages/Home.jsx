import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const stats = [
  { value: '30+', label: 'YEARS LEGACY' },
  { value: '7',   label: 'EXPERTS' },
  { value: '1000+', label: 'COMMERCIAL PROJECTS' },
];

export default function Home() {
  return (
    <main className="w-full flex flex-col">

      {/* ── Full Bleed Hero ── */}
      <section className="relative w-full flex items-center min-h-screen overflow-hidden">

        {/* Background image */}
        <img
          src="/jcgi-storefront.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#181616]/[0.63]" />

        {/* Content */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-10 py-28">
          <motion.div
            className="flex flex-col max-w-[800px]"
            style={{ gap: '31px' }}
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            {/* Eyebrow */}
            <motion.div variants={fadeUp} className="flex items-center gap-4">
              <div className="w-10 h-[2px] bg-primary flex-shrink-0" />
              <span className="text-white/80 text-xs font-medium tracking-[0.2em] uppercase">
                our work is your image// LOUISVILLE
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="text-white font-bold leading-[0.9] tracking-[-0.02em]"
              style={{ fontSize: 'clamp(52px, 6vw, 84px)' }}
            >
              ENGINEERED<br />
              Designs.<br />
              Graphic<br />
              Installations.
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={fadeUp}
              className="text-[#E2E8F0] text-base leading-relaxed max-w-[600px]"
            >
              3 decades of precision vinyl graphics installation. Scale, logistics, and flawless
              execution for commercial fleet operations and premium architectural styling.
            </motion.p>

            {/* Buttons */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/services"
                className="flex items-center justify-center h-14 px-8 bg-primary text-white text-xs font-bold tracking-[0.12em] uppercase hover:bg-blue-700 transition-colors duration-200"
              >
                VIEW CAPABILITIES
              </Link>
              <Link
                to="/portfolio"
                className="flex items-center justify-center h-14 px-8 bg-white/10 border border-white/30 text-white text-xs font-bold tracking-[0.12em] uppercase hover:bg-white/20 transition-colors duration-200"
              >
                OUR GALLERY
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Stats Banner ── */}
      <section className="w-full bg-navy-deep py-16 px-10">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col sm:flex-row items-stretch w-full">
            {stats.map(({ value, label }, i) => (
              <div
                key={label}
                className={`flex flex-col items-center justify-center gap-2 py-8 sm:py-0 flex-1 text-center ${
                  i > 0 ? 'sm:border-l border-slate-700 border-t sm:border-t-0' : ''
                }`}
              >
                <p className="text-white text-4xl lg:text-5xl font-bold tracking-tight">{value}</p>
                <p className="text-slate-400 text-xs font-semibold uppercase tracking-[0.18em]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Expertise ── */}
      <section className="w-full bg-white py-[120px]">
        <div className="max-w-[1440px] mx-auto px-10 flex flex-col items-center gap-16">

          {/* Section header */}
          <motion.div
            className="flex flex-col items-center gap-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-navy-deep text-3xl lg:text-4xl font-bold uppercase tracking-tight">
              OUR EXPERTISE
            </h2>
            <p className="text-slate-500 text-base max-w-xl leading-relaxed">
              Delivering flawless execution across commercial fleet operations and high-end
              architectural custom styling.
            </p>
          </motion.div>

          {/* Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 w-full max-w-[1024px] gap-0 border border-slate-200"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
          >
            {/* Automotive */}
            <motion.div variants={fadeUp}>
              <Link
                to="/portfolio"
                className="group flex flex-col bg-[#F1F5F9] h-full hover:bg-slate-200 transition-colors duration-300"
              >
                <div className="h-[280px] overflow-hidden">
                  <img
                    src="/car-show-vw.png"
                    alt="Automotive wrap project"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-col gap-3 p-8">
                  <h3
                    className="text-navy-deep text-xl font-bold"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    Automotive
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    From custom personal styling for enthusiast builds to large-scale commercial
                    fleet identity reimagining.
                  </p>
                  <div className="flex items-center gap-2 pt-3 text-primary text-xs font-bold uppercase tracking-[0.12em]">
                    VIEW AUTOMOTIVE
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform duration-200"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Architectural */}
            <motion.div variants={fadeUp}>
              <Link
                to="/portfolio"
                className="group flex flex-col bg-[#F1F5F9] h-full border-l border-slate-200 hover:bg-slate-200 transition-colors duration-300"
              >
                <div className="h-[280px] overflow-hidden">
                  <img
                    src="/wildcat-engineering-mural.png"
                    alt="Architectural installation project"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-col gap-3 p-8">
                  <h3
                    className="text-navy-deep text-xl font-bold"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    Architectural
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Transforming environments through large-format graphics. Expert installation of
                    interior wall murals, retail barricades, and commercial glass applications.
                  </p>
                  <div className="flex items-center gap-2 pt-3 text-primary text-xs font-bold uppercase tracking-[0.12em]">
                    VIEW ARCHITECTURAL
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform duration-200"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Trust Strip ── */}
      <section className="w-full bg-[#F1F5F9] border-y border-slate-200 py-20">
        <motion.div
          className="max-w-[1440px] mx-auto px-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.22em] leading-loose max-w-3xl mx-auto">
            TRUSTED BY LEADING FACILITY MANAGERS AND FLEET DIRECTORS, FROM VARIOUS LOCAL
            BUSINESSES TO NATIONAL PRINT COMPANIES.
          </p>
        </motion.div>
      </section>

      {/* ── Final CTA ── */}
      <section className="w-full bg-white py-[120px] px-10">
        <motion.div
          className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-navy-deep text-3xl lg:text-4xl font-bold uppercase tracking-tight">
            READY TO SCALE YOUR NEXT PROJECT?
          </h2>
          <p className="text-slate-500 text-base leading-relaxed">
            Connect with our team to discuss timelines, material specifications, and logistics
            for your upcoming installation needs.
          </p>
          <Link
            to="/contact"
            className="mt-4 flex items-center justify-center h-14 px-10 bg-navy-deep text-white text-xs font-bold tracking-[0.15em] uppercase hover:bg-primary transition-colors duration-200"
          >
            REQUEST A QUOTE
          </Link>
        </motion.div>
      </section>

    </main>
  );
}
