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

// Figma-confirmed image map with categories
const projects = [
  { src: '/beaches-suv-wrap.png',       category: 'FLEET GRAPHICS',    gridClass: 'md:row-span-2' },
  { src: '/car-care-express-truck.png', category: 'COMMERCIAL FLEET',  gridClass: '' },
  { src: '/afs-maverick.png',           category: 'FLEET BRANDING',    gridClass: '' },
  { src: '/derby-city-van.png',         category: 'COMMERCIAL VAN',    gridClass: '' },
  { src: '/david-yates-van-install.png',category: 'GOVERNMENT FLEET',  gridClass: '' },
  { src: '/kustom-fleet-wrap.png',      category: 'FLEET MANAGEMENT',  gridClass: 'md:row-span-2' },
  { src: '/alani-bronco-wrap.png',      category: 'SPECIALTY WRAPS',   gridClass: '' },
];

export default function Commercial() {
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
          <span className="text-navy-deep text-[10px] font-bold uppercase tracking-[0.3em]">Automotive Archive</span>
        </motion.div>
        <motion.h1
          variants={fadeUp}
          className="text-navy-deep font-black uppercase leading-[0.9] tracking-[-0.05em] mb-8"
          style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(48px, 7vw, 96px)' }}
        >
          Automotive<br />Portfolio
        </motion.h1>
        <motion.p variants={fadeUp} className="text-slate-500 text-lg leading-relaxed max-w-2xl">
          Premium vinyl wraps and custom vehicle graphics engineered for endurance. From
          high-impact commercial fleets to precision enthusiast transformations, we define the
          standard of automotive aesthetics.
        </motion.p>
      </motion.section>

      {/* ── Full-Width Banner ── */}
      <div className="w-full overflow-hidden" style={{ height: 'clamp(280px, 30vw, 420px)' }}>
        <img
          src="/rivercity-porsche-wrap.png"
          alt="Rivercity Porsche wrap"
          className="w-full h-full object-cover"
        />
      </div>

      {/* ── Gallery Grid ── */}
      <section className="w-full max-w-[1440px] mx-auto px-8 py-12">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-2 auto-rows-[320px]"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
        >
          {projects.map(({ src, category, gridClass }) => (
            <motion.div
              key={src}
              variants={fadeUp}
              className={`group relative overflow-hidden bg-slate-100 ${gridClass}`}
            >
              <img
                src={src}
                alt={category}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-navy-deep/0 group-hover:bg-navy-deep/60 transition-colors duration-400 flex items-end p-6">
                <span className="text-white text-xs font-bold uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {category}
                </span>
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
            Ready to Wrap<br />Your Identity?
          </h2>
          <p className="text-slate-400 text-base leading-relaxed max-w-xl">
            Our technical team is ready to consult on your next vehicle transformation. From
            single customs to nationwide fleet deployments, we ensure monolithic quality.
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
