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
  { value: '10+', label: 'Years Legacy', accent: false },
  { value: '25', label: 'Master Experts', accent: false },
  { value: '150+', label: 'Commercial Fleets', accent: false },
  { value: '250+', label: 'Residential Projects', accent: true },
];

const crew = [
  { name: 'Marcus Vance', role: 'Lead Installer', exp: '8 Years Experience', offset: false, src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxTaxARX9oKM7_husOjsQ1a17sNd-Cr5KfmmkBif-EbKt8GzBfL5Jq4Hzm1pUzJZ7O3ii97nVwwcfXT2XbkcqxpO-8YGhfyH4iXfMBEVwX8v5socxRGCS7v3qwvs578aqwsrUbigwlFnLr770KKGzRUwoJQhbQvbxXQ_dvpvQz2TXtLjuQ-q1xvzphoNP5SGJUZRq0kD9v73YoA06H1-L_ZRfSJAQHU41OSHq-psALz_Oea5dGpJjIoWDkbSaqwAtSBg2eInfNdpI9' },
  { name: 'Julian Cross', role: 'Founder & CEO', exp: '12 Years Experience', offset: true, src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQsxqqcdftkuXrBUivqCoWZ7LN_bglijxZn5bXK5047VNIYqt2FzSy_gBGGt0mUJFwQUdfUwTJHMKXIsopuwHlii0ekgxC2-mPyYJM2n06shq3xptjpRe5yR1cCA0R1iqyH0khWjR12AV7uk6ixB0uS0x_tofBmmkbCAsaQwh2OHNYNnWJ4WFGv8BBKiG-ACjqTZLIYnqKDLghyRyC7h62RNdr7RMjpxlvf74QhneWhS7PcsXHubo2g-xeXpw5XdDXr_oUCtb1f_-E' },
  { name: 'Sarah Jenkins', role: 'Fleet Operations', exp: '6 Years Experience', offset: false, src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCqmlWg_H0VkMo8TkshajuPJW1x9n2HoG-QeOauvDNaBwSqlIE6HTFJzri11xaZM6uOL75Bhb8qX5tCyAbpszto4kGeTzuDIP7zCGdV_Pyf8gzI33TP4JKGhMjU4Xqh5QlH12awJq617G02N7gQfqPlCwq8TTMguhikX7i08Qub5Xr1jQ7B3hnRdN8EM1VTJ4CcbYx7bkhCvITIeYi9uPbqa0K4qszWuwEvR8GcWVIjzWh03CKjnhElGROahCc_6VfLsXtDZuC7QXGS' },
];

export default function About() {
  return (
    <div className="w-full">

      {/* Hero Section */}
      <section className="relative w-full min-h-[720px] flex items-center py-20 px-10 bg-white border-b border-slate-200 bg-grid">
        <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col md:flex-row justify-between items-center gap-16">
          <motion.div
            className="flex flex-col gap-8 max-w-3xl"
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3">
              <div className="w-10 h-[2px] bg-primary" />
              <span className="text-slate-500 text-xs font-bold tracking-[0.3em] uppercase">Enterprise Standard</span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-heading text-slate-900 text-6xl md:text-[84px] font-bold leading-[0.9] tracking-tight uppercase"
            >
              A Decade of<br /><span className="text-primary">Precision.</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-slate-600 text-xl font-medium max-w-xl leading-relaxed">
              Leading Louisville's vinyl graphics industry with flawless execution, obsessive attention to detail, and unmatched scale since 2014.
            </motion.p>

            <motion.div variants={fadeUp}>
              <Link
                to="/contact"
                className="inline-flex min-w-[180px] cursor-pointer items-center justify-center h-14 px-8 bg-slate-900 text-white text-sm font-bold tracking-widest hover:bg-primary transition-all uppercase"
              >
                Start Your Project
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex-1 max-w-xl aspect-square relative overflow-hidden border border-slate-200 shadow-2xl"
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          >
            <img
              alt="High contrast wide shot of a massive commercial garage"
              className="w-full h-full object-cover grayscale contrast-125"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7zAs7LjLNZQaZKK1l2yMpMqAkFjDGgkglpRNRB-RnRIYKbSxPkHwsADNjqLWTU-mHGzt3n7sRhQui35ZF9QBq1YWwZqrm_FAvkhkO-lgGTA0CS-cWOlFrNHQ35lSiZ7NWK9swcY-W7ghT0jguAau4QiVg4pcLZ72sQR8TmAX_4hXwHJzKvBbNnGCcRlm-e5IkzdB97RnEy5475hfKuNMzlnial_Cu1zl3kB1xUm3ylV3DfeywaHmf-vRR6Uye7WoMUeAC9d9i4hri"
            />
            <div className="absolute inset-0 bg-slate-900/10 mix-blend-multiply" />
          </motion.div>
        </div>
      </section>

      {/* Stats Ribbon */}
      <section className="w-full bg-slate-900 py-20 px-10">
        <motion.div
          className="max-w-7xl mx-auto flex flex-wrap lg:flex-nowrap justify-between gap-8"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {stats.map(({ value, label, accent }, i) => (
            <motion.div key={label} variants={fadeUp} className={`flex flex-col gap-2 w-1/2 lg:w-1/4 border-l border-slate-700 pl-6 ${i === 0 ? 'border-0 md:border-l' : ''}`}>
              <span className={`text-5xl md:text-6xl font-bold tracking-tight ${accent ? 'text-primary' : 'text-white'}`}>{value}</span>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{label}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* The Crew Section */}
      <section className="w-full py-32 px-10 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-slate-900 text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4">The Architects of Vinyl</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">A collective of obsessive installers, designers, and project managers dedicated to absolute perfection.</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
          >
            {crew.map(({ name, role, exp, offset, src }) => (
              <motion.div
                key={name}
                variants={fadeUp}
                className={`bg-white border text-center transition-all hover:border-primary hover:shadow flex flex-col group overflow-hidden ${offset ? 'shadow-xl lg:-translate-y-4' : ''}`}
              >
                <div className="w-full aspect-[3/4] overflow-hidden relative bg-slate-100">
                  <img alt={`${name} portrait`} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" src={src} />
                </div>
                <div className="p-8 text-left">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{name}</h3>
                  <p className="text-primary text-xs font-bold uppercase tracking-widest mb-4">{role}</p>
                  <p className="text-slate-500 text-sm font-medium">{exp}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Louisville Roots */}
      <section className="w-full bg-slate-50 border-y border-slate-200">
        <div className="flex flex-col lg:flex-row w-full min-h-[600px]">
          <motion.div
            className="w-full lg:w-1/2 p-10 md:p-20 flex flex-col justify-center gap-8"
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-2xl">location_on</span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Louisville Headquarters</span>
            </div>
            <h2 className="font-heading text-slate-900 text-4xl md:text-5xl font-bold uppercase tracking-tight">Deep Roots in<br />Louisville.</h2>
            <div className="flex flex-col gap-6 text-slate-600 text-lg leading-relaxed font-medium">
              <p>Born in the heart of Kentucky, JCGI started in a single-bay garage with one goal: elevate the standard of vehicle aesthetics. Today, we operate out of a state-of-the-art 15,000 sq ft climate-controlled facility designed specifically for flawless vinyl application.</p>
              <p>We are proud to serve the local community, from small business storefronts to massive commercial fleets that keep the Midwest moving.</p>
            </div>
            <button className="w-fit flex cursor-pointer items-center justify-center h-12 px-8 border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white transition-all text-xs font-bold tracking-widest uppercase">
              View Facility
            </button>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2 relative overflow-hidden bg-slate-200"
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              alt="JCGI Shop Interior"
              className="w-full h-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeI6NN9hw3mmKcpruj3iPDRPXgkNYd4nmXB4GSlhsaXJTkkq4Mj8UNto3JaaWNcjKNW43DGPwJsOKahnhxU0EoUgYKRaLK1gz1Pp0s_CoGBJarP20CoNvgIwdKHoT8Y-5hcEH80W5MQA_UvU5Q6lXgCfc2wdwESkNx7jb1hB6u4FEs4aG0Txpp63i8osWLNOtewnxFEiOUgiMWDr7HywcaIpNAmdPAJosfwVOctVr3EzZGRWZ4QkDMkLo1fD6xQN9BZEa7-suKQiDY"
            />
          </motion.div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="w-full py-32 px-10 bg-white text-center flex flex-col items-center justify-center gap-12">
        <motion.h2
          className="font-heading text-4xl md:text-6xl font-bold text-slate-900 uppercase tracking-tight max-w-4xl mx-auto leading-tight"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Ready for <span className="text-primary">Flawless</span> Execution?
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <Link
            to="/contact"
            className="inline-flex cursor-pointer items-center justify-center h-16 px-12 bg-slate-900 text-white text-sm font-bold uppercase tracking-[0.2em] hover:bg-primary transition-all duration-300 shadow-xl gap-3"
          >
            Start Your Project
            <span className="material-symbols-outlined ml-1" style={{ fontVariationSettings: "'FILL' 0" }}>arrow_forward</span>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
