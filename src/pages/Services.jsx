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

export default function Services() {
  return (
    <main className="bg-white">

      {/* Hero Section */}
      <section className="relative h-[614px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1MgCjHqBOwtdwGymKdihAT5UUrT2BMsznA_Ric0Z8YqBKTfj1Y2RqugR7plZ84hvYE-gcujGoko8Cu_kXUX_U5d8CA3NVShcAvpbJWxvTvPhLN8cX4fHkP0T_cFk4ynb0JuOS7qIF7m28LKhctbxn-60lRoK6xyU4bieL5F3eKS8FrkAjPApFTecC9RYF2nfIgtPJjIhg91S3H1UE1Hf0LPp2ZkcAa4rRH3uUgG0niiaTS2Xu2XmKmuQtiTinjzJGIKVKp3QyUbyi"
            alt="Commercial vehicle fleet"
          />
          <div className="absolute inset-0 bg-slate-900/70 mix-blend-multiply" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <motion.div
            className="max-w-2xl border-l-4 border-primary pl-8"
            initial={{ opacity: 0, x: -32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="font-heading text-4xl md:text-6xl text-white mb-4 tracking-tight uppercase">
              Precision Installation Services
            </h1>
            <p className="text-lg md:text-xl text-slate-200 font-light leading-relaxed">
              Industry-leading surface transformations for corporate fleets and high-end architectural environments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-slate-900">A Decade of Technical Excellence</h2>
              <p className="text-lg leading-relaxed text-slate-600 mb-8">
                Since 2014, JCGI has been at the forefront of the vinyl installation industry. We combine technical precision with project management expertise to deliver seamless results across the nation.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="border-t border-slate-100 pt-4">
                  <span className="block text-4xl font-bold text-primary">10+</span>
                  <span className="text-sm font-bold uppercase tracking-widest text-slate-900">Years Experience</span>
                </div>
                <div className="border-t border-slate-100 pt-4">
                  <span className="block text-4xl font-bold text-primary">400+</span>
                  <span className="text-sm font-bold uppercase tracking-widest text-slate-900">Projects Completed</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative group"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            >
              <img
                className="shadow-2xl"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDETcQ2dmhdpxM56RQJxHqs4Ut2Ehn8H_nM2L_q3Pw7Qa9j6Ly9E5xOQ0Vv32ywj8Ir42yl0oydQdOXWeYssxm_hbMIdgKIMP0_11y7m5AW6OESZ68V8HUgIHmYybBOhBiGcjslyx9qHf-rbzV4eF__2g-yq7YLMCbNgvs-iEF9GRIz5iBCAQUfQMKRbZQrl5nsy4j0mq-6Nw-pTmj_geSRWz8Uhh6j2L1XFzlOjzoU51aEu17rdoOS5VlGUoh1I63H67PAzxX_EW8a"
                alt="Professional technician"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-5xl">verified</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Divisions Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-slate-900">Core Divisions</h2>
            <div className="h-1 w-20 bg-primary mt-4" />
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-12 gap-6"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
          >
            {/* Commercial Fleet */}
            <motion.div variants={fadeUp} className="md:col-span-8 group relative overflow-hidden bg-white shadow-sm hover:shadow-xl transition-shadow border border-slate-100">
              <div className="h-80 overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2et2KUGJVE_JFnW1JNx8NZsmqZoueHSqpgKdx7IEVJnXxBRcaIaMctgqNHW5T6J44TlT5igLTZxCX0Xh8paM7vEu5gWqTBhczFMjj_eN8tZvxhYTpJcOsowxtLe1y3j5Vrsb0uacQsCW7zBLtvxipTS13E8EUEIbSUGLAx0vJVKP69qBOWkTBfkK98Q9s8pZ783AyPX2KRBsNFlyf0kApt_4Oq32lMsMOj3obh_hkeOdBf3uHGjoqQ0jEp9u5sj0JKerTDJlwaNmi"
                  alt="Commercial Fleet"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className="material-symbols-outlined text-primary">local_shipping</span>
                  <span className="text-xs font-bold tracking-widest uppercase text-slate-400">Division 01</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Commercial Fleet</h3>
                <p className="text-slate-600 mb-6">Large-scale branding solutions and comprehensive fleet graphics management for logistics and service industries.</p>
                <ul className="space-y-2 text-sm font-medium text-slate-900">
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">check_circle</span> Full Fleet Decals</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">check_circle</span> Multi-location Deployment</li>
                </ul>
              </div>
            </motion.div>

            {/* Commercial Venue */}
            <motion.div variants={fadeUp} className="md:col-span-4 bg-slate-900 text-white p-8 flex flex-col justify-between">
              <div>
                <span className="material-symbols-outlined text-primary text-4xl mb-6 block">domain</span>
                <h3 className="text-2xl text-white font-bold mb-4">Commercial Venue</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">Elevating corporate spaces through architectural films, storefront graphics, and large-format event branding.</p>
              </div>
              <div className="border-t border-slate-700 pt-6">
                <p className="text-xs font-bold tracking-widest text-primary mb-4 uppercase">Key Services</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-slate-800 text-[10px] border border-slate-700">Glass Frosting</span>
                  <span className="px-3 py-1 bg-slate-800 text-[10px] border border-slate-700">Wall Murals</span>
                  <span className="px-3 py-1 bg-slate-800 text-[10px] border border-slate-700">Wayfinding</span>
                </div>
              </div>
            </motion.div>

            {/* Residential Auto */}
            <motion.div variants={fadeUp} className="md:col-span-4 group relative overflow-hidden bg-white shadow-sm border border-slate-100">
              <div className="h-64 overflow-hidden">
                <img
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVMK_YD8wy36jelbNa08YNGdY31bX8N_xhJrCdWAicFy5Ak4GaFJZb7L6ej-DNHpUuBV235UeIWn1OXQ7l2dMKZyfYCZ6rTj4RPkU71xr20TanvvvAzUO9KjtpZDiP8hgZZPncKmEZQSSYmGURtQKtGRoAkcyHQVtFOr89W9AtsgBZO0ooYbkdaXEFdnNJllzyOKS_mOHlgAiDTHRX_dBigmaw912GSkbbKLY143wCqinHjESk9uGqUbnWD95TnIBp70-PMHg2pPAn"
                  alt="Residential Auto"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Residential Auto</h3>
                <p className="text-slate-600 text-sm mb-4">High-end vehicle wraps, bespoke color changes, and premium paint protection films (PPF).</p>
                <Link to="/residential" className="text-primary font-bold text-xs uppercase tracking-widest inline-flex items-center gap-2 group-hover:gap-4 transition-all">
                  Explore <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </motion.div>

            {/* Residential Home */}
            <motion.div variants={fadeUp} className="md:col-span-8 group relative overflow-hidden bg-white shadow-sm border border-slate-100 flex flex-col md:flex-row">
              <div className="md:w-1/2 p-10 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Residential Home</h3>
                <p className="text-slate-600 mb-6">Modernizing interiors with premium architectural vinyl. Sustainable solutions for cabinet resurfacing and interior surfaces.</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-50 p-4">
                    <p className="text-xs font-bold text-slate-900 uppercase mb-1 tracking-tight">Eco-Friendly</p>
                    <p className="text-xs text-slate-500">Minimal waste renovation</p>
                  </div>
                  <div className="bg-slate-50 p-4">
                    <p className="text-xs font-bold text-slate-900 uppercase mb-1 tracking-tight">Durability</p>
                    <p className="text-xs text-slate-500">Scratch &amp; water resistant</p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9RuqfTz-Cd0tS5Pwzt0lDj8T-5ZhwX5fZ5oo_E6kcJ9sfe9Z-Z6SrXhnINobAsLajzn2tpT1QgAne6x2rg8tzcZqGAaatovbJI4b8GV05JwmqoO2fHdjoWDD8IHXSQT5AN9ylp8sOF6FTVAdPWXfs-RNMIyqmr5hIBF1Ji9NkW8ThxlnywlLNTB1G03kLAOZQoLUstneNy42MwdiY7yFUNk7AXLlo6UO4swfYi8FT5du3Ki92t1qPXcMPTWQk9FW4bu33rhcnjvRt"
                  alt="Residential Home"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Technical Excellence Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-xl">
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Unmatched Quality</span>
              <h2 className="text-4xl font-bold text-slate-900">Technical Excellence at Scale</h2>
            </div>
            <div className="flex gap-6">
              <div className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all h-12">
                <img alt="3M" className="h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBn61Wx4eazWQ-7KFevckIWF_hjtpjzKs3AWD8AN4YCwek3kBC5okMPkBdDPuVp7cqKMoeebn-JBj_tKMhg-AXouM5roJNr01i2MrVbrDW1WS6bvKqBYMpBF01PoJuSfRaoo_lXWHztBVltCbHT0F-OnyCicB55bY8wS1YEkWLbpq21Lhqbo3xw-nvhgcMHh-Vbz15SebtXGlCK1ik4rOYGUi9w3ehPNmm-s-FutPIaOl3-chxvw-yFEN2sTJUKWMEJ3RsEHBhCwFSz" />
              </div>
              <div className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all h-12">
                <img alt="Avery Dennison" className="h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdpLbujkgzc1iQNN_RmRdLAsCMED_Zj89ufCZDQoexvrFgnWKIahApBal8Rmcifz_duTGpGnH4hfiSXLvEeooCiwkzmXMcFm73WyyY6U9zWrLuL_5xqYlezzHlN8iayD0iE7Vh-8W7noKcgUfr1Nvktlw9pUdR7jo18KDAOCXiwrn7UQvRISsZpXgqLV2TQBOO0C7kHJ5UjQW5_6b7QnU8IV_nFm5n5tC59Jz0uzdAhz0nfPJwu3kRCoDFsLQZYfEld9lRhHiDZzn1" />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
          >
            {[
              { icon: 'groups', title: 'Elite Workforce', desc: '25 full-time expert technicians, each undergoing rigorous bi-annual skill assessments to maintain JCGI standards.' },
              { icon: 'engineering', title: 'Precision Deployment', desc: 'Our proprietary precision-engineered deployment system ensures consistent quality across large fleet distributions.' },
              { icon: 'workspace_premium', title: 'Certified Mastery', desc: 'Proudly 3M Certified and Avery Dennison Preferred, backing our work with the industry\'s strongest material warranties.' },
            ].map(({ icon, title, desc }) => (
              <motion.div key={title} variants={fadeUp} className="space-y-4">
                <div className="w-12 h-12 bg-blue-50 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">{icon}</span>
                </div>
                <h4 className="text-xl font-bold text-slate-900">{title}</h4>
                <p className="text-slate-600">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary blur-[120px]" />
        </div>
        <motion.div
          className="relative z-10 max-w-4xl mx-auto px-6 text-center"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-heading text-3xl md:text-5xl mb-8 leading-tight font-bold uppercase">Ready to Elevate Your Professional Brand Presence?</h2>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">Discuss your project scope with our technical leads and receive a comprehensive deployment strategy.</p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-primary text-white text-sm font-bold px-10 py-5 uppercase tracking-widest hover:bg-blue-700 transition-all duration-300"
          >
            Request a Technical Consultation
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
