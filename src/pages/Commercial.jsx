import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const projects = [
  {
    span: 'lg:row-span-3',
    category: 'ARCHITECTURAL',
    title: 'THE MONOLITH PLAZA',
    desc: 'Full architectural glass resurfacing and wayfinding system for a 12-story corporate headquarters.',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBeNDizUgBbUcgIMHZm3pVtMuiy90zluOBRReOq2nT2DXj6ATY3PW1BKCIRmIlwTORwW0HAxyN5CZBf20jemIFgPc1W7TeDzlR4fh1_KQSOW5LW39KoTxTTLlk14VTqiwivPbObeaKr5uQK0sDtImtgJse0_IXv5S_p96q4sAd8WdpuvGrR0SReTLVme4Wg1M_cGMYLQoip6ORIXOF1-3beE1GEOCFxM6UIHg4eWA9hhBYxR1A4XBC_obnNx_LDp5VPMZpQZvpQdu0i',
  },
  {
    span: 'lg:col-span-2 lg:row-span-2',
    category: 'FLEET WRAPS',
    title: 'LOGISTICS VELOCITY',
    desc: 'Unified branding deployment across 45 logistics vehicles featuring 3M high-performance matte finish.',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWPWTERPHIhVvjPxPxs8KIlYU5XXXytZ_rN6GMKFwbwNdcRRkeiZ39afDuKZgyLD2zrghAPsRJSGhyaCFFqHQYQJucv5bW1oHu0ITHYoEU3HzjP91LBxIIpkmamZQEL77HG40_O3iFHQqzG_bT3o0KIHLWcGXiyQpPbYVyMi_JW8E4D5zyP_fhQ9NMtCedkN3yoLQCGPy2bDLL_l6zkxizleZFKrz7hkx7Nc-Jn6N5bz63IW-Iaz-9xKFrjnmSaXN_D3m4G6ciN1yH',
  },
  {
    span: 'lg:row-span-2',
    category: 'RETAIL BARRICADES',
    title: 'AVANT-GARDE RETAIL',
    desc: 'Temporary luxury barricade wraps for high-end boutique construction phase.',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA0YPq7mMSy7z9_QVfI0K-w3C6nbRUbf69M1vTfVGs0C15USsBJI_3ZAKEsb6mqJDx6BaQS2BgT2ru3KeV8NEL3ixSZqMg4_JG1rNO9xEXo2UTRwzoUk5MmGCyO-rROY4A9dXFikdaXi-dzwqB-0NZajNBlv0G_3MjAWQi_ahE7ut5GB06cYnjx9_xRotS0EKXDKbccuYm3N3tl5JAon-MXIP20L49BPkJ1w4GdZoluvxwgaGj88_fqySWTkq7kwAeFfvbAOh1piZZ6',
  },
  {
    span: 'lg:row-span-2',
    category: 'ARCHITECTURAL',
    title: 'NEXUS OFFICES',
    desc: 'Privacy frosting and brand integration across 4 floors of executive workspace.',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAiOglefTjjMreRN_midqU9CvkdLkENXdlUD1zddkzSScudVgI9vsjJnSf4skkXmEhkomvF8G8qLkqhbhCOs7d4BRGpPpSuNdT_8K9e50cqmwvvftFbbAgc2wWBBQUe5uMnhGWHRGuDvjfQNGzeYZd-xeeod_yIwIA5wZUAu0xbXDDivP82P-vTsPiOWDrfiOxxcpWAiMT575OOKHA_9qQA7UtFFcWp3GiH9dsD0pZ7_NuXP1PpAHZ8GEDEz7b7xu6GFw3wTmLorVxM',
  },
  {
    span: 'lg:row-span-3',
    category: 'STOREFRONTS',
    title: 'ESTABLISHMENT 1920',
    desc: 'Classic gold leaf vinyl restoration and modern storefront branding for a historic district.',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDGJFteTV32pMvkuKmH0kGWbU33wW0Jnwn6pUphOVDhj70FxacOPRyKtr7SQ_yy9UYJMVNuds51Bel4g8cAVYmZ47B8YqUbkR7bLa0n4EHuSbzEp5NbMmwZKE8YfaQGAmEFoZdX0fsBld3MuRjJKuhapX_l8wkoN7u3vhgpb-SPs2BVxEAgcEZ8AIaAHKFyBMCXg_q_QDLg8HtanhF0A3A7sVnqQ7etPLPrPUir3BSyplHcZGlJl94QAHoRdYUhiQRufdirrtwZwF-_',
  },
];

export default function Commercial() {
  return (
    <main className="pt-16 pb-24 px-8 max-w-[1600px] mx-auto bg-white min-h-screen">

      {/* Hero Section */}
      <motion.header
        className="mb-20"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={fadeUp} className="flex items-center gap-4 mb-4">
          <div className="h-[2px] w-12 bg-slate-900" />
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-900">Project Archive</span>
        </motion.div>
        <motion.h1
          variants={fadeUp}
          className="font-heading text-5xl md:text-8xl font-bold uppercase tracking-tighter leading-[0.9] text-slate-900 mb-8"
        >
          COMMERCIAL <span className="text-transparent" style={{ WebkitTextStroke: '1px currentColor' }}>PORTFOLIO</span>
        </motion.h1>
        <motion.p variants={fadeUp} className="max-w-2xl text-lg text-slate-500 leading-relaxed">
          Precision-engineered vinyl solutions for high-traffic environments. From nationwide fleet branding to architectural resurfacing, we define the visual identity of the modern commercial landscape.
        </motion.p>
      </motion.header>

      {/* Filter Tags */}
      <motion.div
        className="flex flex-wrap gap-4 mb-16 border-b border-slate-200 pb-8"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {['ALL PROJECTS', 'FLEET WRAPS', 'ARCHITECTURAL', 'RETAIL BARRICADES', 'STOREFRONTS'].map((label, i) => (
          <button
            key={label}
            className={`px-6 py-2 text-[10px] font-bold uppercase tracking-[0.2em] transition-colors ${i === 0 ? 'bg-slate-900 text-white' : 'bg-transparent border border-slate-200 text-slate-900 hover:bg-slate-50'}`}
          >
            {label}
          </button>
        ))}
      </motion.div>

      {/* Masonry Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 auto-rows-[200px]"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
      >
        {projects.map(({ span, category, title, desc, src }) => (
          <motion.article key={title} variants={fadeUp} className={`${span} group relative overflow-hidden bg-slate-50`}>
            <img
              className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              src={src}
              alt={title}
            />
            <div className="absolute inset-0 bg-slate-900/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-10 flex flex-col justify-end">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60 mb-2">{category}</span>
              <h3 className="font-heading text-white text-3xl font-bold uppercase tracking-tighter mb-4 leading-none">{title}</h3>
              <p className="text-white/80 text-sm mb-6 leading-relaxed">{desc}</p>
              <button className="w-fit border border-white/30 text-white px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-slate-900 transition-colors">VIEW PROJECT</button>
            </div>
          </motion.article>
        ))}
      </motion.div>

      {/* CTA Section */}
      <motion.section
        className="mt-32 bg-slate-50 border border-slate-200 p-12 md:p-24 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="font-heading text-4xl md:text-6xl font-bold uppercase tracking-tighter text-slate-900 mb-6">
          READY TO SCALE YOUR <span className="text-transparent" style={{ WebkitTextStroke: '1px currentColor' }}>IDENTITY?</span>
        </h2>
        <p className="max-w-xl mx-auto text-slate-500 mb-12">
          Our technical team is ready to consult on your next large-scale commercial installation. From concept to execution, we ensure monolithic quality.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <Link to="/contact" className="bg-slate-900 text-white px-10 py-5 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-slate-800 transition-all">START A CONSULTATION</Link>
          <button className="bg-white border border-slate-900 text-slate-900 px-10 py-5 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-slate-50 transition-all">DOWNLOAD CAPABILITIES</button>
        </div>
      </motion.section>
    </main>
  );
}
