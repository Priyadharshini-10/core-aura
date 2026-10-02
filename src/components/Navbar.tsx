import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'WORK', href: '#work' },
    { name: 'SERVICES', href: '#services' },
    { name: 'ABOUT', href: '#about' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#5B0F14]/90 backdrop-blur-md py-4 border-b border-[#7B151C]/40 shadow-xl'
            : 'bg-transparent py-7'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* CORE AURA OFFICIAL LOGO */}
          <a
            href="#"
            className="flex items-center space-x-3 group transition-transform duration-300 hover:scale-[1.02]"
          >
            <img
              src="/assets/logo.png"
              alt="CORE AURA Official Logo"
              className="h-10 sm:h-12 w-auto object-contain brightness-0 invert opacity-95 group-hover:opacity-100 transition-opacity"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs tracking-[0.25em] text-[#F4E8D0]/80 hover:text-[#F4E8D0] font-sans uppercase font-medium transition-colors relative group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#F4E8D0] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right CTA Button */}
          <div className="hidden md:flex items-center">
            <button
              onClick={onOpenContact}
              className="group relative inline-flex items-center space-x-2 bg-[#F4E8D0] text-[#5B0F14] text-xs font-sans font-semibold tracking-[0.2em] uppercase px-6 py-3 rounded-full overflow-hidden transition-all duration-300 hover:bg-[#FAF5EB] hover:shadow-[0_0_25px_rgba(244,232,208,0.3)] active:scale-95"
            >
              <span>LET'S TALK</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden text-[#F4E8D0] p-2 hover:bg-[#6E1117] rounded-full transition-colors"
            aria-label="Open navigation menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Full-screen Burgundy Mobile Overlay Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] bg-[#5B0F14] text-[#F4E8D0] flex flex-col justify-between p-8 md:hidden"
          >
            <div className="flex items-center justify-between border-b border-[#7B151C]/60 pb-6">
              <img
                src="/assets/logo.png"
                alt="CORE AURA Official Logo"
                className="h-10 w-auto object-contain brightness-0 invert"
              />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full border border-[#F4E8D0]/30 hover:border-[#F4E8D0] transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex flex-col space-y-8 my-auto">
              <span className="text-[10px] tracking-[0.3em] text-[#EFE0C4]/60 uppercase font-sans">
                STUDIO NAVIGATION
              </span>
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.08 }}
                  className="font-editorial text-4xl font-light hover:italic transition-all flex items-center justify-between border-b border-[#7B151C]/30 pb-4"
                >
                  <span>{link.name}</span>
                  <span className="text-sm font-sans tracking-widest text-[#EFE0C4]/40">0{idx + 1}</span>
                </motion.a>
              ))}
            </div>

            <div className="pt-6 border-t border-[#7B151C]/60 flex flex-col space-y-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full bg-[#F4E8D0] text-[#5B0F14] py-4 rounded-full font-sans text-xs tracking-[0.25em] font-bold uppercase flex items-center justify-center space-x-2"
              >
                <span>LET'S BUILD YOURS</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <div className="flex justify-between text-[11px] text-[#EFE0C4]/60 tracking-wider">
                <span>coreaura.official@gmail.com</span>
                <span>+91 9360705346</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
