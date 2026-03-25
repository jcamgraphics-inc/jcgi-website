import React from 'react';
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
    aspect: 'aspect-[3/4]',
    category: 'Exotic & Sports Cars',
    title: 'Matte Black Porsche 911',
    sub: 'Full Exterior Color Change & PPF',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDU7K4xLFH1JmRsyP6_CdHWHy688V1JfCmPB2a8be0LLDT0cqmEw8aMD3roslCC7ePvLKkv-3xBBmw1UoedB9a-1WhOf7HdOPD1bgxcxvv9xVf39YvV66qDwGKegjxhgdhCvBmnK-MGGaM64eR8kuTlmjxTPqP0zrLAylKQ_BnoThsTXbsPVQtuSsLHnlFmLcoKIpGiQbZqdBLmb92XFOcHNklW8KDWKytt3iw4YQBjcOR0fv1O0J2CzIq9n48Tr51FK9EO8s8QINGb',
  },
  {
    aspect: 'aspect-square',
    category: 'Kitchens',
    title: 'Modern Charcoal Kitchen',
    sub: 'Cabinet Resurfacing - Architectural Vinyl',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpLZpdlpqsnjQV-PfolWVG0x5XuSI7jZ8pMdEnE-oQ4irXaLsw9BjG4bSR1ShX2gDBbaPIpSdZnk63662d0lbVW-TPpwU7B5PCMrlT16ZwzrzTqM04-g4uiwbpb3Ntdy44J4FbEd2R2R3kqAZ4ftgJSBNMTuiQN3y1LIlj1s8_gAJRz_dALLqzzyTN-siJf8jhFa7tPfO7ojb-UKP38L6-n2zFg85rQKxrHasO75wwoJcMvqIkBzBj5dHL_5dSWgEeLJG94dVSbhCt',
  },
  {
    aspect: 'aspect-[4/3]',
    category: 'Trucks & SUVs',
    title: 'Satin Grey G-Wagon',
    sub: 'Full Wrap & Chrome Delete',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADpQK9kMh_AV91mFpKv2-zJ9SXxftUARpqXkh7-BenoRFCxk7zc1J6OSHQDon81eSXAhlLlnDs09uMNcCRtTStdJQm-7pFb3WaK-hXX3uayhb5a_f3ixjWfJeTQhYpzmSkvVBa6HY4li978AYm4-ySrtWuRq_57e3vs1IKOE2xAQrleFHBV1Bv9_Ybqweku94nMkcHonkitla1p5sNoiLhMajQpFNmLo1l5x9mFmBRgjbkdomcGn240sJjNn_PomlTp93lBpftdhwp',
  },
  {
    aspect: 'aspect-[3/5]',
    category: 'Architectural',
    title: 'Interior Doors Redefined',
    sub: 'Textured Woodgrain to Matte Black',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfbao-JYboOR-ZZH_pB_RIXM7xsV1ygXgVIK1kKLQuO5a4DQlkW5w8hxtt7JBhVWnymnYHh7w_8YDIGg1SzZWpX3gdX5n29Db_5vabgpLrYgzyl2HY2AbLoSRgGT1b6txuYa-90nT-N-w3Agx8PC3IhbjqzUENbVtWDhdQLxqbkZ-eH5ltFoijXF7KxvAfx_lR76ikswPkKuMHo0gxqklFx9LxEjHCrS4OcD5ZOmxvFKqPJguzObYos75enw_SgCEoM5Sdkn3H5TM3',
  },
  {
    aspect: 'aspect-video',
    category: 'Exotic & Sports Cars',
    title: 'Nardo Grey M3',
    sub: 'High Gloss Color Change',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB5ekhkBTUk3lL-zHD8h1kvAu_QOCe9lK5DMIo3rhaGiAnrx5yZDwlgnOYMz1CgLvm06mV8t93dHRO2URXSbetSm1GBqaaokLZbEk0G-rhH7m6yZHAy_YIxZGOy7DGB72ejAH1KF_vq9Qdex8teA__aGqmLPL5CS3yGYo_L3gauRj4UQFW9pbvkyERPQ0aXIOn9GI6gWJtR3ORy05iQ7rTTyr4xrJrkJv0B8_L0T7rrINmJ24rqGECXmIF12qIAUzFCcI8SCCc_6b6j',
  },
  {
    aspect: 'aspect-square',
    category: 'Exotic & Sports Cars',
    title: 'Carbon Fiber Accents',
    sub: 'Hood, Roof, and Mirrors - Textured Wrap',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAlxFhBfpqS9o7ab9tzs3_aXEOrgSACkj4H3ZYe605y7DU2wFz5KyYqZDJQfBKAyc0vgLGgJw3aRleIbV8VW-iWUkHvWNmJEcE_-SC5vZUB_sG-hmcNEZBe5a0uNzLFOZJNfKw0sxN-LzilWocbb2KYgdMfTF8jH6aMS_MoCitFIDM0fixMw3m45uDn7-YTPEBfh83E2dkPgMmIG0DYW8wgXulk4_S37ZsZyvayjrRkeDSCJr4UR96wwtlgu1J693tnhmvMR2BWUQWT',
  },
];

export default function Residential() {
  return (
    <main className="flex-1 w-full max-w-[1440px] mx-auto px-4 md:px-10 pb-32 bg-white min-h-screen">

      {/* Page Header */}
      <motion.div
        className="py-16 md:py-24 max-w-4xl"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
          <div className="w-10 h-[2px] bg-primary" />
          <span className="text-slate-400 text-xs font-bold tracking-[0.3em] uppercase">Premium Residential Services</span>
        </motion.div>
        <motion.h1
          variants={fadeUp}
          className="font-heading text-slate-900 text-6xl md:text-[84px] font-bold leading-[0.9] tracking-tighter uppercase mb-6"
        >
          Residential<br />
          <span className="text-transparent" style={{ WebkitTextStroke: '1px #0F172A' }}>Transformations</span>
        </motion.h1>
        <motion.p variants={fadeUp} className="text-slate-500 text-lg md:text-xl font-normal max-w-2xl leading-relaxed">
          Luxury personal vehicle and home interior vinyl transformations. Precision scale for the individual.
        </motion.p>
      </motion.div>

      {/* Sticky Filter Bar */}
      <div className="sticky top-[68px] z-40 bg-white border-y border-slate-100 py-4 mb-16">
        <div className="flex overflow-x-auto gap-2 items-center">
          <span aria-hidden="true" className="material-symbols-outlined text-slate-400 mr-4">filter_list</span>
          {['All', 'Exotic & Sports Cars', 'Trucks & SUVs', 'Kitchens', 'Architectural'].map((label, i) => (
            <button
              key={label}
              className={`px-5 py-2 text-[11px] font-bold tracking-widest uppercase whitespace-nowrap transition-colors ${i === 0 ? 'text-white bg-slate-900' : 'text-slate-500 hover:text-slate-900'}`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-40px' }}
      >
        {projects.map(({ aspect, category, title, sub, src }) => (
          <motion.div key={title} variants={fadeUp} className="group overflow-hidden cursor-pointer border border-slate-100 bg-white shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col mb-10">
            <div className={`${aspect} w-full overflow-hidden bg-slate-50 relative`}>
              <img
                alt={title}
                className="w-full h-full object-cover filter grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                src={src}
              />
            </div>
            <div className="p-8">
              <p className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase mb-3">{category}</p>
              <h3 className="font-heading text-2xl font-bold text-slate-900 mb-2 uppercase tracking-tight group-hover:text-primary transition-colors">{title}</h3>
              <p className="text-slate-500 text-sm mb-8 font-medium">{sub}</p>
              <div className="flex items-center text-slate-900 font-bold text-[11px] uppercase tracking-widest group-hover:translate-x-1 transition-transform">
                View Project
                <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Load More */}
      <div className="w-full flex justify-center mt-8">
        <motion.button
          className="border border-slate-200 bg-transparent text-slate-900 px-12 py-5 text-[11px] uppercase tracking-[0.1em] font-bold hover:border-slate-900 hover:bg-slate-50 transition-all flex items-center gap-4"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Load More Projects
          <span className="material-symbols-outlined text-sm">expand_more</span>
        </motion.button>
      </div>
    </main>
  );
}
