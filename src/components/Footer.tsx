import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#3B070A] text-[#F4E8D0] py-16 px-6 md:px-12 border-t border-[#7B151C]/60">
      <div className="max-w-7xl mx-auto flex flex-col justify-between space-y-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Brand Col */}
          <div className="md:col-span-4 flex flex-col space-y-4">
            <img
              src="/assets/logo.png"
              alt="CORE AURA Official Logo"
              className="h-12 w-auto object-contain brightness-0 invert self-start"
            />
            <p className="font-sans text-xs text-[#EFE0C4]/70 font-light leading-relaxed max-w-sm">
              Creative & Digital Growth Studio. Helping ambitious brands build their identity, digital presence, content, visibility and growth.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 flex flex-col space-y-3">
            <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-[#EFE0C4]/60 font-semibold mb-1">
              STUDIO NAVIGATION
            </span>
            <a href="#work" className="text-xs font-sans tracking-widest text-[#F4E8D0]/80 hover:text-[#F4E8D0] uppercase transition-colors">
              WORK
            </a>
            <a href="#services" className="text-xs font-sans tracking-widest text-[#F4E8D0]/80 hover:text-[#F4E8D0] uppercase transition-colors">
              SERVICES
            </a>
            <a href="#about" className="text-xs font-sans tracking-widest text-[#F4E8D0]/80 hover:text-[#F4E8D0] uppercase transition-colors">
              ABOUT
            </a>
            <a href="#contact" className="text-xs font-sans tracking-widest text-[#F4E8D0]/80 hover:text-[#F4E8D0] uppercase transition-colors">
              CONTACT
            </a>
          </div>

          {/* Social Channels */}
          <div className="md:col-span-2 flex flex-col space-y-3">
            <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-[#EFE0C4]/60 font-semibold mb-1">
              CONNECT
            </span>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-sans tracking-widest text-[#F4E8D0]/80 hover:text-[#F4E8D0] uppercase flex items-center space-x-1"
            >
              <span>INSTAGRAM</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-sans tracking-widest text-[#F4E8D0]/80 hover:text-[#F4E8D0] uppercase flex items-center space-x-1"
            >
              <span>FACEBOOK</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-sans tracking-widest text-[#F4E8D0]/80 hover:text-[#F4E8D0] uppercase flex items-center space-x-1"
            >
              <span>LINKEDIN</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          {/* Contact Direct */}
          <div className="md:col-span-3 flex flex-col space-y-2 text-xs font-sans">
            <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-[#EFE0C4]/60 font-semibold mb-1">
              STUDIO HQ
            </span>
            <a href="mailto:coreaura.official@gmail.com" className="text-[#F4E8D0] hover:underline">
              coreaura.official@gmail.com
            </a>
            <a href="https://wa.me/919360705346" className="text-[#F4E8D0] hover:underline">
              +91 9360705346
            </a>
          </div>

        </div>

        {/* Bottom Tagline & Copyright */}
        <div className="pt-8 border-t border-[#7B151C]/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-sans tracking-widest text-[#EFE0C4]/60 uppercase">
          <div>
            <span>STRATEGY × DESIGN × DIGITAL × GROWTH</span>
          </div>

          <div>
            <span>© 2026 CORE AURA STUDIO. ALL RIGHTS RESERVED.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
