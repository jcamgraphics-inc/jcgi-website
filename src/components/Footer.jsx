import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full bg-navy-deep text-slate-400 border-t border-slate-800">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-16">
        <div className="flex flex-col md:flex-row justify-between gap-10">

          {/* Brand Column */}
          <div className="flex flex-col gap-4 max-w-xs">
            <div className="flex items-center gap-3">
              <div className="size-4 text-primary">
                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#footer-clip)">
                    <path clipRule="evenodd" d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z" fill="currentColor" fillRule="evenodd" />
                  </g>
                  <defs><clipPath id="footer-clip"><rect fill="white" height="48" width="48" /></clipPath></defs>
                </svg>
              </div>
              <span className="text-white font-bold text-lg tracking-tight uppercase">JCGI Vinyl</span>
            </div>
            <p className="text-slate-500 text-xs leading-relaxed font-medium">
              Elevating brands and personal assets through precision vinyl installation.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-16 gap-y-8">
            <div className="flex flex-col gap-3">
              <p className="text-white text-xs font-bold uppercase tracking-widest mb-1">Navigation</p>
              <Link to="/" className="text-xs text-slate-500 hover:text-white transition-colors font-medium">Home</Link>
              <Link to="/portfolio" className="text-xs text-slate-500 hover:text-white transition-colors font-medium">Portfolio</Link>
              <Link to="/services" className="text-xs text-slate-500 hover:text-white transition-colors font-medium">Services</Link>
              <Link to="/about" className="text-xs text-slate-500 hover:text-white transition-colors font-medium">About</Link>
              <Link to="/contact" className="text-xs text-slate-500 hover:text-white transition-colors font-medium">Contact</Link>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-white text-xs font-bold uppercase tracking-widest mb-1">Work</p>
              <Link to="/commercial" className="text-xs text-slate-500 hover:text-white transition-colors font-medium">Commercial</Link>
              <Link to="/residential" className="text-xs text-slate-500 hover:text-white transition-colors font-medium">Residential</Link>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-white text-xs font-bold uppercase tracking-widest mb-1">Legal</p>
              <a href="#" className="text-xs text-slate-500 hover:text-white transition-colors font-medium">Privacy Policy</a>
              <a href="#" className="text-xs text-slate-500 hover:text-white transition-colors font-medium">Terms of Service</a>
              <a href="#" className="text-xs text-slate-500 hover:text-white transition-colors font-medium">FAQ</a>
              <a href="#" className="text-xs text-slate-500 hover:text-white transition-colors font-medium">Careers</a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-xs font-medium">
            © {new Date().getFullYear()} JCGI Vinyl Installation. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-slate-600 hover:text-white transition-colors font-medium uppercase tracking-widest">Privacy</a>
            <a href="#" className="text-xs text-slate-600 hover:text-white transition-colors font-medium uppercase tracking-widest">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
