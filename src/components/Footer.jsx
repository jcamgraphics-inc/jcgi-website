import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const allPages = [
  { label: 'Home', to: '/' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function Footer() {
  const { pathname } = useLocation();

  const quickLinks = allPages.filter((page) => {
    if (page.to === '/') return pathname !== '/';
    return pathname !== page.to;
  });

  return (
    <footer className="w-full bg-navy-deep text-slate-400 border-t border-slate-800">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-16">
        <div className="flex flex-col md:flex-row justify-between gap-12">

          {/* Brand Column */}
          <div className="flex flex-col gap-4 max-w-xs">
            <span className="text-white font-bold text-lg tracking-tight uppercase">JCGI</span>
            <p className="text-slate-500 text-xs leading-relaxed font-medium">
              Defining the standard in premium vinyl applications for the modern corporate world.
            </p>
            <div className="flex gap-4 mt-1">
              <a
                href="https://www.instagram.com/jcamgraphics/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.facebook.com/jcgivinylgraphicinstallation/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <p className="text-white text-xs font-bold uppercase tracking-widest mb-1">Quick Links</p>
            {quickLinks.map((page) => (
              <Link
                key={page.to}
                to={page.to}
                className="text-xs text-slate-500 hover:text-white transition-colors font-medium"
              >
                {page.label}
              </Link>
            ))}
          </div>

          {/* Contact / Social */}
          <div className="flex flex-col gap-3">
            <p className="text-white text-xs font-bold uppercase tracking-widest mb-1">Contact / Social</p>
            <a
              href="tel:5029050886"
              className="text-xs text-slate-500 hover:text-white transition-colors font-medium"
            >
              (502) 905-0886
            </a>
            <a
              href="mailto:james@jcgi.net"
              className="text-xs text-slate-500 hover:text-white transition-colors font-medium"
            >
              james@jcgi.net
            </a>
            <a
              href="https://www.instagram.com/jcamgraphics/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-slate-500 hover:text-white transition-colors font-medium"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/jcgivinylgraphicinstallation/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-slate-500 hover:text-white transition-colors font-medium"
            >
              Facebook
            </a>
          </div>

          {/* Hours & Location */}
          <div className="flex flex-col gap-3">
            <p className="text-white text-xs font-bold uppercase tracking-widest mb-1">Hours &amp; Location</p>
            <p className="text-xs text-slate-500 font-medium">Monday – Friday, 8AM – 6PM</p>
            <p className="text-xs text-slate-500 font-medium leading-relaxed">
              13005 Middletown Industrial Blvd B<br />Louisville, KY 40223
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-slate-600 text-xs font-medium">
            © 2026 JCGI. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-slate-600 hover:text-white transition-colors font-medium">Privacy Policy</a>
            <a href="#" className="text-xs text-slate-600 hover:text-white transition-colors font-medium">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
