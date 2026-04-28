import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14 } },
};

const stats = [
  { value: '30+', label: 'YEARS LEGACY' },
  { value: '7',   label: 'EXPERTS' },
  { value: '1000+', label: 'COMMERCIAL PROJECTS' },
];

const crew = [
  {
    name: 'Luis',
    role: 'Designer & Installer',
    exp: '20 Years Experience',
    src: '/team-luis.png',
    offset: false,
  },
  {
    name: 'James VI',
    role: 'Founder & CEO',
    exp: '33 Years Experience',
    src: '/team-james-vi.png',
    offset: true,
  },
  {
    name: 'James VII',
    role: 'Next Generation Owner & Installer',
    exp: '3 Years Experience',
    src: '/team-james-vii.png',
    offset: false,
  },
];

export default function About() {
  return (
    <div className="w-full">

      {/* ── Hero ── */}
      <section className="relative w-full bg-white border-b border-slate-200 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-10 py-28 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Left: Copy */}
          <motion.div
            className="flex flex-col gap-8 flex-1 max-w-[600px]"
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            {/* Eyebrow */}
            <motion.div variants={fadeUp} className="flex items-center gap-4">
              <div className="w-10 h-[2px] bg-primary flex-shrink-0" />
              <span className="text-slate-500 text-xs font-bold tracking-[0.25em] uppercase">
                Enterprise Standard
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeUp}
              className="text-navy-deep font-bold leading-[0.9] tracking-[-0.02em] uppercase"
              style={{ fontSize: 'clamp(44px, 5.5vw, 80px)' }}
            >
              3 Decades of<br />
              <span className="text-primary">Precision.</span>
            </motion.h1>

            {/* Quote / Body */}
            <motion.p variants={fadeUp} className="text-slate-600 text-base leading-relaxed max-w-[520px]">
              Jim Campbell. A man who devoted his life to his family, friends and the adventure of
              the next experience. He believed "You should never be proud of doing what's right.
              You should just do what's right." <span className="text-slate-400 italic">— Dean Smith</span>
            </motion.p>

            {/* CTA */}
            <motion.div variants={fadeUp}>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center h-14 px-8 bg-navy-deep text-white text-xs font-bold tracking-[0.15em] uppercase hover:bg-primary transition-colors duration-200"
              >
                Start Your Project
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            className="relative flex-1 max-w-[560px] w-full"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
          >
            <div className="relative overflow-hidden border border-slate-200 shadow-xl aspect-[4/5]">
              <img
                src="/jim-campbell.png"
                alt="Jim Campbell, founder of JCGI"
                className="w-full h-full object-cover"
              />
            </div>
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

      {/* ── The Crew ── */}
      <section className="w-full bg-white py-[120px] px-10">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-16">

          {/* Header */}
          <motion.div
            className="flex flex-col items-center gap-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-navy-deep text-3xl lg:text-4xl font-bold uppercase tracking-tight">
              The Architects of Vinyl
            </h2>
            <p className="text-slate-500 text-base max-w-xl leading-relaxed">
              A collective of obsessive installers, designers, and project managers dedicated to
              absolute perfection.
            </p>
          </motion.div>

          {/* Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-slate-200 max-w-[1024px] mx-auto w-full"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
          >
            {crew.map(({ name, role, exp, src, offset }, idx) => (
              <motion.div
                key={`${name}-${role}`}
                variants={fadeUp}
                className={`flex flex-col bg-[#F1F5F9] ${idx > 0 ? 'md:border-l border-slate-200 border-t md:border-t-0' : ''}`}
              >
                <div className="overflow-hidden" style={{ height: '320px' }}>
                  <img
                    src={src}
                    alt={`${name} — ${role}`}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="flex flex-col gap-1 p-8">
                  <h3
                    className="text-navy-deep text-xl font-bold"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {name}
                  </h3>
                  <p className="text-primary text-xs font-bold uppercase tracking-[0.14em]">{role}</p>
                  <p className="text-slate-400 text-xs font-semibold uppercase tracking-[0.14em] mt-1">{exp}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ── Louisville Roots ── */}
      <section className="w-full bg-[#F1F5F9] border-y border-slate-200">
        <div className="flex flex-col lg:flex-row w-full max-w-[1440px] mx-auto min-h-[560px]">

          {/* Left: Text */}
          <motion.div
            className="w-full lg:w-1/2 px-10 lg:px-20 py-20 flex flex-col justify-center gap-8"
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-[2px] bg-primary flex-shrink-0" />
              <span className="text-slate-500 text-xs font-bold tracking-[0.25em] uppercase">Louisville Headquarters</span>
            </div>
            <h2
              className="text-navy-deep font-bold uppercase leading-tight tracking-tight"
              style={{ fontSize: 'clamp(32px, 3.5vw, 52px)' }}
            >
              Deep Roots in<br />Louisville.
            </h2>
            <div className="flex flex-col gap-5 text-slate-600 text-base leading-relaxed">
              <p>
                JCGI, Inc was established in 1993 for the purpose of graphic installations. At JCGI
                we developed the understanding that "Our Work Is Your Image". With that in mind we
                have dedicated our business to giving you, not only, the best quality, but the best
                experience you can have with changing, upgrading or simply bringing your vision to
                life for your brand.
              </p>
              <p>
                With over 30 years of experience and our knowledge of the industry, we can
                definitely handle the branding needs your business deserves.
              </p>
            </div>
            <div>
              <p className="text-slate-500 text-xs font-semibold uppercase tracking-[0.18em]">
                13005 Middletown Industrial Blvd B · Louisville, KY 40223
              </p>
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            className="w-full lg:w-1/2 relative overflow-hidden bg-slate-200 min-h-[400px] lg:min-h-0"
            initial={{ opacity: 0, scale: 1.04 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src="/studio-shop.png"
              alt="JCGI studio and shop interior"
              className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>

        </div>
      </section>

      {/* ── Footer CTA ── */}
      <section className="w-full bg-white py-[120px] px-10">
        <motion.div
          className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2
            className="text-navy-deep font-bold uppercase tracking-tight leading-tight"
            style={{ fontSize: 'clamp(28px, 3.5vw, 48px)' }}
          >
            READY FOR{' '}
            <span className="text-primary">FLAWLESS</span>{' '}
            EXECUTION?
          </h2>
          <p className="text-slate-500 text-base leading-relaxed max-w-xl">
            Connect with our team to discuss timelines, material specifications, and logistics
            for your upcoming installation needs.
          </p>
          <Link
            to="/contact"
            className="mt-4 inline-flex items-center justify-center h-14 px-10 bg-navy-deep text-white text-xs font-bold tracking-[0.15em] uppercase hover:bg-primary transition-colors duration-200"
          >
            Start Your Project
          </Link>
        </motion.div>
      </section>

    </div>
  );
}
