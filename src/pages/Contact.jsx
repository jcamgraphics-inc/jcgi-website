import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay } },
});

export default function Contact() {
  return (
    <main className="flex-grow flex flex-col lg:flex-row bg-white">

      {/* Left Column: Typography & Contact Info */}
      <section className="w-full lg:w-1/2 lg:sticky lg:top-[68px] lg:h-[calc(100vh-68px)] p-10 lg:p-24 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-slate-100 relative overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-[0.03]"
          style={{
            backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCIp2pOjhaIQzVPwWEbpQmABYwTtsWRcZD3nfNKV-LnbDoTjMnrGZHs5Rw1vLacy_7SRcb3i1-1OnLg2ZEK1aaCcfPlTncvEmDmS8dbEDiwkAi_TzTezNP9KoEdR6JkONfqan4FfQWYtGhAZE2GVf77DWLxHf5YcxGcBHDla26eDpUyPI8xlkk245xqhLA71S8v9RQrtQrsxPhKCk9YKaZRJY_1NOhqXqIUi05NAIhFVgL_bX0v-DHVcFtsj2ifPLAE43IRj-psCvP-')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        <motion.div
          className="relative z-10"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={fadeUp(0)} className="w-12 h-1 bg-primary mb-10" />

          <motion.h1
            variants={fadeUp(0.05)}
            className="font-heading text-6xl lg:text-[72px] font-bold leading-[1.05] tracking-tight text-slate-900 mb-12 uppercase"
          >
            Let's<br />
            <span className="text-primary">Build</span><br />
            It.
          </motion.h1>

          <motion.div variants={fadeUp(0.1)} className="space-y-10">
            <div>
              <p className="text-slate-500 font-bold text-[10px] tracking-[0.2em] uppercase mb-2">Direct Line</p>
              <a className="text-2xl lg:text-3xl font-semibold text-slate-900 hover:text-primary transition-colors inline-flex items-center gap-4" href="tel:555-123-4567">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>phone_enabled</span>
                555-123-4567
              </a>
            </div>

            <div>
              <p className="text-slate-500 font-bold text-[10px] tracking-[0.2em] uppercase mb-2">Electronic Mail</p>
              <a className="text-2xl lg:text-3xl font-semibold text-slate-900 hover:text-primary transition-colors inline-flex items-center gap-4" href="mailto:wrap@jcgi.com">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>alternate_email</span>
                wrap@jcgi.com
              </a>
            </div>

            <div className="pt-4">
              <p className="text-slate-500 font-bold text-[10px] tracking-[0.2em] uppercase mb-2">Headquarters</p>
              <p className="text-lg lg:text-xl font-medium text-slate-900 flex items-start gap-4">
                <span className="material-symbols-outlined text-primary mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                <span>
                  Louisville, KY<br />
                  <span className="text-slate-500 text-sm font-semibold uppercase tracking-wider">By Appointment Only</span>
                </span>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Spacer for fixed left column on desktop */}
      <div className="hidden lg:block lg:w-1/2" />

      {/* Right Column: Form */}
      <section className="w-full lg:w-1/2 bg-white p-10 lg:p-24 flex flex-col justify-center min-h-[calc(100vh-68px)]">
        <motion.div
          className="max-w-xl w-full mx-auto"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs text-slate-500 font-bold uppercase tracking-[0.1em] mb-2" htmlFor="first-name">First Name</label>
                <input className="w-full bg-slate-50 border border-slate-200 rounded-none text-slate-900 p-4 focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-all placeholder:text-slate-400" id="first-name" name="first-name" placeholder="John" required type="text" />
              </div>
              <div>
                <label className="block text-xs text-slate-500 font-bold uppercase tracking-[0.1em] mb-2" htmlFor="last-name">Last Name</label>
                <input className="w-full bg-slate-50 border border-slate-200 rounded-none text-slate-900 p-4 focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-all placeholder:text-slate-400" id="last-name" name="last-name" placeholder="Doe" required type="text" />
              </div>
            </div>

            <div>
              <label className="block text-xs text-slate-500 font-bold uppercase tracking-[0.1em] mb-2" htmlFor="email">Email Address</label>
              <input className="w-full bg-slate-50 border border-slate-200 rounded-none text-slate-900 p-4 focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-all placeholder:text-slate-400" id="email" name="email" placeholder="john@company.com" required type="email" />
            </div>

            <div>
              <label className="block text-xs text-slate-500 font-bold uppercase tracking-[0.1em] mb-2" htmlFor="phone">Phone Number</label>
              <input className="w-full bg-slate-50 border border-slate-200 rounded-none text-slate-900 p-4 focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-all placeholder:text-slate-400" id="phone" name="phone" placeholder="(555) 000-0000" type="tel" />
            </div>

            <div>
              <label className="block text-xs text-slate-500 font-bold uppercase tracking-[0.1em] mb-2" htmlFor="scope">Project Scope / Vehicle Type</label>
              <input className="w-full bg-slate-50 border border-slate-200 rounded-none text-slate-900 p-4 focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-all placeholder:text-slate-400" id="scope" name="scope" placeholder="e.g. Full Fleet Wrap - 5 Sprinter Vans" required type="text" />
            </div>

            <div>
              <label className="block text-xs text-slate-500 font-bold uppercase tracking-[0.1em] mb-2" htmlFor="details">Project Details</label>
              <textarea className="w-full bg-slate-50 border border-slate-200 rounded-none text-slate-900 p-4 focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-all resize-none placeholder:text-slate-400" id="details" name="details" placeholder="Tell us about the timeline, current paint condition, and design ideas..." required rows="4" />
            </div>

            <div className="pt-2">
              <button
                className="w-full h-14 bg-slate-900 text-white font-bold text-sm uppercase tracking-[0.15em] rounded-none cursor-pointer transition-all hover:bg-primary flex items-center justify-center gap-3"
                type="button"
              >
                Request Quote
                <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 0" }}>arrow_forward</span>
              </button>
            </div>
          </form>
        </motion.div>
      </section>
    </main>
  );
}
