import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'HOME', to: '/' },
  { label: 'PORTFOLIO', to: '/portfolio' },
  { label: 'SERVICES', to: '/services' },
  { label: 'ABOUT', to: '/about' },
];

export default function Navigation() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location.pathname]);

  const isActive = (to) =>
    to === '/' ? location.pathname === '/' : location.pathname.startsWith(to);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 transition-shadow duration-300 ${scrolled ? 'shadow-sm' : ''}`}
    >
      <div className="max-w-[1440px] mx-auto w-full px-10">
        <div className="flex items-center justify-between h-[80px]">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/jcgi-logo.png"
              alt="JCGI"
              className="h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                className={`relative text-xs font-bold tracking-[0.12em] pb-0.5 transition-colors duration-200 ${
                  isActive(to) ? 'text-navy-deep' : 'text-slate-500 hover:text-navy-deep'
                }`}
              >
                {label}
                {isActive(to) && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute -bottom-[26px] left-0 right-0 h-[2px] bg-navy-deep"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}

            {/* CONTACT — persistent CTA button */}
            <Link
              to="/contact"
              className={`text-xs font-bold tracking-[0.12em] px-5 py-2.5 rounded-sm transition-all duration-200 ${
                location.pathname === '/contact'
                  ? 'bg-primary text-white'
                  : 'bg-primary text-white hover:bg-blue-700'
              }`}
            >
              CONTACT
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <motion.span animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} className="block w-6 h-0.5 bg-navy-deep origin-center" />
            <motion.span animate={menuOpen ? { opacity: 0 } : { opacity: 1 }} className="block w-6 h-0.5 bg-navy-deep" />
            <motion.span animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} className="block w-6 h-0.5 bg-navy-deep origin-center" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-white border-t border-slate-100"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map(({ label, to }) => (
                <Link
                  key={to}
                  to={to}
                  className={`text-sm font-bold tracking-widest py-2 border-b border-slate-100 ${
                    isActive(to) ? 'text-navy-deep' : 'text-slate-500'
                  }`}
                >
                  {label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-2 flex items-center justify-center h-12 bg-primary text-white text-xs font-bold tracking-widest uppercase"
              >
                CONTACT
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
