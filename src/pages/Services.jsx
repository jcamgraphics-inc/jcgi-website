import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const AutoIcon = () => (
  <svg width="18" height="16" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.5 10h15M3 14h18M6 18H4a1 1 0 01-1-1v-3M18 18h2a1 1 0 001-1v-3M5 10l2-6h10l2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="6.5" cy="16.5" r="1.5" fill="currentColor"/>
    <circle cx="17.5" cy="16.5" r="1.5" fill="currentColor"/>
  </svg>
);

const ArchIcon = () => (
  <svg width="11" height="18" viewBox="0 0 14 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 1C4.24 1 2 3.24 2 6c0 3.75 5 11 5 11s5-7.25 5-11c0-2.76-2.24-5-5-5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="7" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

const PeopleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const EngineerIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 21v-1a6 6 0 0112 0v1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="19" cy="16" r="1" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M19 13v1m0 4v1m2.6-4.5l-.87.5m-3.46 2l-.87.5m0-3l-.87-.5m3.46-2l-.87-.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const BadgeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="10" r="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const divisions = [
  {
    label: 'DIVISION 01',
    icon: <AutoIcon />,
    heading: 'Automotive',
    body: 'Comprehensive vehicle transformation services ranging from large-scale corporate fleet branding and logistics graphics to bespoke luxury wraps and advanced paint protection films.',
    src: '/car-show-vw.png',
    groups: [
      { title: 'COMMERCIAL', items: ['Fleet Management', 'High-Impact Graphics'] },
      { title: 'SPECIALTY', items: ['Premium Graphics', 'Personal Vehicle design'] },
    ],
  },
  {
    label: 'DIVISION 02',
    icon: <ArchIcon />,
    heading: 'Architectural',
    body: 'Innovative surface solutions for physical environments. Elevating corporate venues through interior graphics and modernizing residential spaces with sustainable architectural films.',
    src: '/wildcat-engineering-mural.png',
    groups: [
      { title: 'CORPORATE', items: ['Glass Frosting', 'Wall Murals', 'Store Front Graphics', 'Small Signage'] },
      { title: 'RESIDENTIAL', items: ['Cabinet Resurfacing', 'Sustainable Finishes'] },
    ],
  },
];

const pillars = [
  {
    icon: <PeopleIcon />,
    title: 'Elite Workforce',
    body: 'Knowledgeable full-time expert technicians, each installer trained in graphic installations to meet JCGI standards.',
  },
  {
    icon: <EngineerIcon />,
    title: 'Precision Deployment',
    body: 'Our proprietary precision-engineered installation system ensures consistent quality across large fleet distributions.',
  },
  {
    icon: <BadgeIcon />,
    title: 'Certified Mastery',
    body: "Proud members of UASG, PDAA, SGIA, 3M certified, Lowen certified, backing our work with the industry's strongest material warranties.",
  },
];

export default function Services() {
  return (
    <main className="w-full flex flex-col bg-white">

      {/* ── Hero ── */}
      <section className="relative w-full flex items-center min-h-[560px] overflow-hidden">
        <img
          src="/father-son.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#181616]/[0.63]" />
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-10 py-28">
          <motion.div
            className="flex flex-col max-w-[680px] gap-6"
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-[2px] bg-primary flex-shrink-0" />
              <span className="text-white/80 text-xs font-medium tracking-[0.2em] uppercase">
                our work is your image // louisville
              </span>
            </div>
            <h1
              className="text-white font-bold leading-[0.9] tracking-[-0.02em] uppercase"
              style={{ fontSize: 'clamp(44px, 5.5vw, 72px)' }}
            >
              Precision<br />Installation<br />Services
            </h1>
            <p className="text-[#E2E8F0] text-base leading-relaxed max-w-[560px]">
              Industry-leading surface transformations for corporate fleets and high-end
              architectural environments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Introduction ── */}
      <section className="w-full bg-white py-[120px]">
        <div className="max-w-[1440px] mx-auto px-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Left: text */}
          <motion.div
            className="flex flex-col gap-8 flex-1 max-w-[560px]"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-[2px] bg-primary flex-shrink-0" />
              <span className="text-slate-500 text-xs font-bold tracking-[0.25em] uppercase">
                Enterprise Standard
              </span>
            </div>
            <h2
              className="text-navy-deep font-bold leading-tight tracking-tight uppercase"
              style={{ fontSize: 'clamp(28px, 3vw, 42px)' }}
            >
              3 Decades of Technical Excellence
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Since 1993, JCGI has been at the forefront of the vinyl installation industry. We
              combine technical precision with project management expertise to deliver seamless
              results across the nation.
            </p>
            <div className="flex gap-12 pt-2">
              <div className="flex flex-col items-center gap-1 border-b-2 border-primary pb-4">
                <span className="text-4xl font-bold text-primary tracking-tight">30+</span>
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-navy-deep">Years Experience</span>
              </div>
              <div className="flex flex-col items-center gap-1 border-b-2 border-primary pb-4">
                <span className="text-4xl font-bold text-primary tracking-tight">1000+</span>
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-navy-deep">Projects Completed</span>
              </div>
            </div>
          </motion.div>

          {/* Right: image */}
          <motion.div
            className="relative flex-1 max-w-[512px] w-full"
            initial={{ opacity: 0, scale: 1.04 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="overflow-hidden border border-slate-200 shadow-lg aspect-square">
              <img
                src="/wrap-install-action.png"
                alt="JCGI wrap installation in progress"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── Core Divisions ── */}
      <section className="w-full bg-[#F8FAFC] py-24">
        <div className="max-w-[1440px] mx-auto px-10 flex flex-col gap-16">

          {/* Header */}
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-navy-deep text-3xl lg:text-4xl font-bold tracking-tight">
              Core Divisions
            </h2>
            <div className="w-20 h-1 bg-primary" />
          </motion.div>

          {/* Division Cards */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
          >
            {divisions.map(({ label, icon, heading, body, src, groups }) => (
              <motion.div
                key={label}
                variants={fadeUp}
                className="group flex flex-col bg-white border border-slate-200 shadow-sm overflow-hidden"
              >
                {/* Image */}
                <div className="h-[320px] overflow-hidden">
                  <img
                    src={src}
                    alt={heading}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-4 p-10">
                  <div className="flex items-center gap-2 text-slate-400">
                    {icon}
                    <span className="text-xs font-bold uppercase tracking-[0.2em]">{label}</span>
                  </div>
                  <h3
                    className="text-navy-deep font-bold leading-tight"
                    style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '30px', lineHeight: '36px' }}
                  >
                    {heading}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{body}</p>

                  {/* Tag Groups */}
                  <div className="flex flex-wrap gap-6 pt-2">
                    {groups.map(({ title, items }) => (
                      <div key={title} className="flex flex-col gap-2">
                        <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">{title}</span>
                        {items.map((item) => (
                          <div key={item} className="flex items-center gap-2">
                            <div className="w-1 h-1 rounded-full bg-slate-400 flex-shrink-0" />
                            <span className="text-sm text-slate-600">{item}</span>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ── Technical Excellence ── */}
      <section className="w-full bg-white py-[120px]">
        <div className="max-w-[1440px] mx-auto px-10 flex flex-col gap-16">

          {/* Header */}
          <motion.div
            className="flex flex-col gap-4 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-xs font-bold uppercase tracking-[0.25em]">Unmatched Quality</span>
            <h2 className="text-navy-deep text-3xl lg:text-4xl font-bold uppercase tracking-wide whitespace-nowrap">
              Technical Excellence at Scale
            </h2>
          </motion.div>

          {/* Pillars */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
          >
            {pillars.map(({ icon, title, body }) => (
              <motion.div key={title} variants={fadeUp} className="flex flex-col gap-4 bg-[#F8FAFC] border border-slate-200 p-8">
                <div className="w-12 h-12 flex items-center justify-center text-primary" style={{ background: 'rgba(36,99,235,0.1)' }}>
                  {icon}
                </div>
                <h4 className="text-navy-deep text-lg font-bold">{title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{body}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="w-full bg-white py-[80px] px-10 border-t border-slate-100">
        <motion.div
          className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2
            className="text-navy-deep font-bold uppercase tracking-tight"
            style={{ fontSize: 'clamp(24px, 3vw, 42px)' }}
          >
            Ready to Scale Your Next Project?
          </h2>
          <p className="text-slate-500 text-base leading-relaxed">
            Connect with our team to discuss timelines, material specifications, and logistics
            for your upcoming installation needs.
          </p>
          <Link
            to="/contact"
            className="mt-4 inline-flex items-center justify-center h-14 px-10 bg-navy-deep text-white text-xs font-bold tracking-[0.15em] uppercase hover:bg-primary transition-colors duration-200"
          >
            Request a Quote
          </Link>
        </motion.div>
      </section>

    </main>
  );
}
