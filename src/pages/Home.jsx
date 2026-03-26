import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const statItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const stats = [
  { value: '10+', label: 'Years Legacy' },
  { value: '25', label: 'Experts' },
  { value: '150+', label: 'Commercial Projects' },
  { value: '250+', label: 'Residential Projects' },
];

const clients = ['GENSLER', 'PALANTIR', 'Louisville Co.', 'NORTON', 'Brown-Forman'];

export default function Home() {
  return (
    <main className="w-full flex flex-col">

      {/* Split Hero Section */}
      <section className="relative w-full flex flex-col lg:flex-row min-h-[720px] lg:max-h-[800px] bg-white border-b border-slate-200">

        {/* Left: Typographic Lockup */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 lg:p-20 bg-grid relative overflow-hidden">
          <motion.div
            className="max-w-[640px] relative z-10"
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={fadeUp} className="mb-8 flex items-center gap-3">
              <div className="w-10 h-[2px] bg-primary" />
              <span className="text-slate-500 text-xs font-bold tracking-[0.3em] uppercase">Enterprise Grade // Louisville</span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-heading text-5xl lg:text-[84px] font-bold text-navy-deep leading-[0.9] tracking-[-0.03em] uppercase mb-10"
            >
              ENGINEERED<br />PRECISION.<br />
              <span className="text-white" style={{ WebkitTextStroke: '1.5px #0F172A' }}>VINYL</span><br />
              DEPLOYMENT.
            </motion.h1>

            <motion.p variants={fadeUp} className="text-slate-600 text-lg font-medium leading-relaxed max-w-[500px] mb-12">
              A decade of precision vinyl graphics installation. Scale, logistics, and flawless execution for commercial fleet operations and premium residential styling.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <Link
                to="/services"
                className="flex min-w-[180px] cursor-pointer items-center justify-center rounded-sm h-14 px-8 bg-navy-deep text-white text-sm font-bold tracking-[0.1em] hover:bg-primary transition-all duration-300 uppercase"
              >
                View Capabilities
              </Link>
              <Link
                to="/portfolio"
                className="flex min-w-[180px] cursor-pointer items-center justify-center rounded-sm h-14 px-8 bg-white border-2 border-navy-deep text-navy-deep text-sm font-bold tracking-[0.1em] hover:bg-navy-deep hover:text-white transition-all duration-300 uppercase"
              >
                Our Gallery
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Right: High Resolution Image */}
        <motion.div
          className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-[720px] overflow-hidden group"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCL94VWttY_faI3z4YbEsg2wpNroNOFESrtBQwZTF4CsxJEp_9nYXMRfIwh63jTAdw9UDAi67FbluE1sE8VkB3_8aqQpaEHfkKZpcV8PMNcmx3zJHPyYVShHNx45a37hiGNzvRATM4uh9KY7NOSuBh8zlPKACkigl0P9YCLpLSU21_q8_FkGVkYCJgr4x7L_uMc4L1qW_mc7zwFlr2L79cq4qFR7cVT600N4aGuTOJ_HILoAMVdNJiHeWWVkVxzs7moOOIscsdiHpF7"
            alt="Precision vinyl installation in progress"
            className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-110 grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-navy-deep/10 mix-blend-multiply" />
          <motion.div
            className="absolute bottom-8 right-8 border border-white/30 bg-white/10 backdrop-blur-md px-4 py-2 flex items-center gap-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-white text-[10px] font-bold tracking-[0.2em] uppercase">Project Status: In Progress</span>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Banner */}
      <section className="w-full bg-navy-deep py-16">
        <div className="max-w-[1440px] mx-auto px-10">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            {stats.map(({ value, label }, i) => (
              <motion.div key={label} variants={statItem} className={`flex flex-col gap-2 pl-6 ${i > 0 ? 'border-l border-slate-700' : ''}`}>
                <p className="text-4xl font-bold tracking-tight">{value}</p>
                <p className="text-sm font-medium text-slate-300 uppercase tracking-widest">{label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-[120px] bg-white">
        <div className="max-w-[1440px] mx-auto px-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-navy-deep text-4xl font-bold uppercase tracking-tight mb-4">Our Expertise</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Delivering flawless execution across commercial fleet operations and high-end residential custom styling.</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
          >
            {/* Commercial Card */}
            <motion.div variants={fadeUp}>
              <Link
                to="/commercial"
                className="group block bg-[#F1F5F9] border border-slate-200 rounded-sm overflow-hidden hover:border-primary transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className="h-[280px] w-full overflow-hidden">
                  <img
                    alt="Commercial fleet wrap"
                    className="w-full h-full object-cover grayscale-to-color transform group-hover:scale-105 transition-transform duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCf83ABZwjRjzDMWX60X-aKnmqur4z7nImq1ieVJB7bJbxPv87SG54CItgCIKSeqXYXrHl4dn7JpGcJhO5iSacvICZUHvRtj8J4nTDFFN4qIYxB7NrbKFdOMc0RdJb3eWymSdKVt87xxGYHG3Q5oC3QTWziqhpE8TV0rtMWCfw9wNKgGhHq0WwRLc_QKgE9JNh1gRHjD6KU5V2YV7i83rIZZ8C1N6KnKpxRY6P35XhZ3f-NieDhoESOCwu1hdInFmAPlFdspB65SOk_"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-navy-deep mb-3">Commercial Portfolio</h3>
                  <p className="text-slate-600 mb-6 font-medium">Scale, logistics, and precision. View case studies of fleet wraps, architectural installations, and retail barricades designed for enterprise impact.</p>
                  <div className="flex items-center text-primary font-bold text-sm uppercase tracking-wider">
                    View Case Studies
                    <span className="material-symbols-outlined ml-2 text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Residential Card */}
            <motion.div variants={fadeUp}>
              <Link
                to="/residential"
                className="group block bg-[#F1F5F9] border border-slate-200 rounded-sm overflow-hidden hover:border-primary transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className="h-[280px] w-full overflow-hidden">
                  <img
                    alt="Residential vehicle wrap"
                    className="w-full h-full object-cover grayscale-to-color transform group-hover:scale-105 transition-transform duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDc9PqTiyCXwR6eOcX_ZyO25aXZqp7-rdbhOTlOaCjHhsGLLULT6gJ4yZA6cOnTvcmSTQnESwweUJDMgyZzOX5BKvIcFWJTXuPbBdPmiZyeDIgoBUVOGIJwKUROfhnIDY8FvHKrLZ9IRyBZik5cpfLWHotVRZCF9DBifaxU9gDHLx3rFINcpGqJ8cpVOxHqkv51xmuUAdxqU_1V53NyPUUi4JFncrEzt9rakqBTq-KFw-m4-6bFw-AQbH4bG-pPogcc3UtHA7UM6bkt"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-navy-deep mb-3">Residential Projects</h3>
                  <p className="text-slate-600 mb-6 font-medium">Meticulous detail and premium finish. Explore our gallery of high-end interior applications and custom vehicle styling tailored for individuals.</p>
                  <div className="flex items-center text-primary font-bold text-sm uppercase tracking-wider">
                    Explore Gallery
                    <span className="material-symbols-outlined ml-2 text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="w-full py-20 bg-[#F1F5F9] border-y border-slate-200">
        <div className="max-w-[1440px] mx-auto px-10 text-center">
          <motion.p
            className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Trusted by leading facility managers and fleet directors
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center items-center gap-16 opacity-60 grayscale hover:opacity-100 transition-opacity duration-500"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 0.6, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {clients.map((c) => (
              <div key={c} className="text-2xl font-black text-navy-deep tracking-tighter">{c}</div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="w-full py-[120px] bg-white">
        <motion.div
          className="max-w-3xl mx-auto px-10 text-center"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-4xl font-bold text-navy-deep mb-6 uppercase tracking-tight">Ready to scale your next project?</h2>
          <p className="text-lg text-slate-600 mb-12 font-medium">Connect with our team to discuss timelines, material specifications, and logistics for your upcoming installation needs.</p>
          <Link
            to="/contact"
            className="inline-flex h-14 items-center justify-center rounded-sm bg-navy-deep px-10 text-sm font-bold text-white uppercase tracking-[0.15em] hover:bg-primary transition-all duration-300 shadow-lg"
          >
            Request a Quote
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
