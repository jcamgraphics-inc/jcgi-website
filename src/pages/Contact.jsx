import React from 'react';
import { motion } from 'framer-motion';

const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.7A2 2 0 012 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const EmailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const LocationIcon = () => (
  <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M8 1C5.24 1 3 3.24 3 6c0 3.75 5 11 5 11s5-7.25 5-11c0-2.76-2.24-5-5-5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="8" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Contact() {
  return (
    <main className="flex-grow flex flex-col lg:flex-row bg-white">

      {/* ── Left Column: Typography & Contact Info ── */}
      <section className="w-full lg:w-1/2 lg:sticky lg:top-[68px] lg:h-[calc(100vh-68px)] px-10 py-16 lg:px-24 lg:py-24 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-slate-100">

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          {/* Accent bar */}
          <motion.div variants={fadeUp} className="w-12 h-1 bg-primary mb-10" />

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            className="text-navy-deep font-extrabold uppercase leading-[1.05] tracking-[-0.025em] mb-12"
            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(52px, 5.5vw, 72px)' }}
          >
            LET'S<br />
            <span className="text-primary">BUILD</span><br />
            IT.
          </motion.h1>

          {/* Contact details */}
          <motion.div variants={fadeUp} className="flex flex-col gap-10">

            {/* Phone */}
            <div className="flex flex-col gap-2">
              <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em]">Direct Line</p>
              <a
                href="tel:5029050886"
                className="flex items-center gap-4 text-navy-deep hover:text-primary transition-colors duration-200"
                style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', fontWeight: 600, lineHeight: '36px' }}
              >
                <span className="text-primary flex-shrink-0"><PhoneIcon /></span>
                (502) 905-0886
              </a>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em]">Electronic Mail</p>
              <a
                href="mailto:James@jcgi.net"
                className="flex items-center gap-4 text-navy-deep hover:text-primary transition-colors duration-200"
                style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', fontWeight: 600, lineHeight: '36px' }}
              >
                <span className="text-primary flex-shrink-0"><EmailIcon /></span>
                James@jcgi.net
              </a>
            </div>

            {/* Address */}
            <div className="flex flex-col gap-2 pt-2">
              <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em]">Headquarters</p>
              <div className="flex items-start gap-4">
                <span className="text-primary flex-shrink-0 mt-1"><LocationIcon /></span>
                <p className="text-navy-deep font-medium leading-relaxed" style={{ fontSize: '20px', lineHeight: '28px' }}>
                  13005 Middletown Industrial Blvd B,<br />Louisville, KY 40223
                </p>
              </div>
            </div>

          </motion.div>
        </motion.div>
      </section>

      {/* ── Right Column: Form ── */}
      <section className="w-full lg:w-1/2 bg-white px-10 py-16 lg:px-24 lg:py-24 flex flex-col justify-center">
        <motion.div
          className="w-full max-w-xl mx-auto"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          <form className="flex flex-col gap-6">

            {/* First + Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="first-name" className="text-slate-500 text-xs font-semibold uppercase tracking-[0.1em]">
                  First Name
                </label>
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  placeholder="John"
                  required
                  className="w-full bg-white border border-[#6B7280] text-navy-deep px-3 py-[10px] text-base focus:outline-none focus:border-navy-deep focus:ring-1 focus:ring-navy-deep transition-all placeholder:text-slate-400"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="last-name" className="text-slate-500 text-xs font-semibold uppercase tracking-[0.1em]">
                  Last Name
                </label>
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  placeholder="Doe"
                  required
                  className="w-full bg-white border border-[#6B7280] text-navy-deep px-3 py-[10px] text-base focus:outline-none focus:border-navy-deep focus:ring-1 focus:ring-navy-deep transition-all placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-slate-500 text-xs font-semibold uppercase tracking-[0.1em]">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="john@company.com"
                required
                className="w-full bg-white border border-[#6B7280] text-navy-deep px-3 py-[10px] text-base focus:outline-none focus:border-navy-deep focus:ring-1 focus:ring-navy-deep transition-all placeholder:text-slate-400"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="text-slate-500 text-xs font-semibold uppercase tracking-[0.1em]">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="(555) 000-0000"
                className="w-full bg-white border border-[#6B7280] text-navy-deep px-3 py-[10px] text-base focus:outline-none focus:border-navy-deep focus:ring-1 focus:ring-navy-deep transition-all placeholder:text-slate-400"
              />
            </div>

            {/* Project Scope */}
            <div className="flex flex-col gap-2">
              <label htmlFor="scope" className="text-slate-500 text-xs font-semibold uppercase tracking-[0.1em]">
                Project Scope / Vehicle Type
              </label>
              <input
                id="scope"
                name="scope"
                type="text"
                placeholder="e.g. Full Fleet Wrap - 5 Sprinter Vans"
                required
                className="w-full bg-white border border-[#6B7280] text-navy-deep px-3 py-[10px] text-base focus:outline-none focus:border-navy-deep focus:ring-1 focus:ring-navy-deep transition-all placeholder:text-slate-400"
              />
            </div>

            {/* Project Details */}
            <div className="flex flex-col gap-2">
              <label htmlFor="details" className="text-slate-500 text-xs font-semibold uppercase tracking-[0.1em]">
                Project Details
              </label>
              <textarea
                id="details"
                name="details"
                rows={5}
                placeholder="Tell us about the timeline, current paint condition, and design ideas..."
                required
                className="w-full bg-[#F8FAFC] border border-slate-200 text-navy-deep px-4 py-4 text-base leading-relaxed focus:outline-none focus:border-navy-deep focus:ring-1 focus:ring-navy-deep transition-all resize-none placeholder:text-slate-400"
              />
            </div>

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full h-14 bg-navy-deep text-white text-sm font-bold uppercase tracking-[0.15em] hover:bg-primary transition-colors duration-200 flex items-center justify-center gap-3"
              >
                Request Quote
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>

          </form>
        </motion.div>
      </section>

    </main>
  );
}
