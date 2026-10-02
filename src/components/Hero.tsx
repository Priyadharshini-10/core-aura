import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, Compass } from 'lucide-react';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section className="relative min-h-screen bg-[#5B0F14] text-[#F4E8D0] pt-28 pb-16 px-6 md:px-12 flex flex-col justify-between overflow-hidden border-b border-[#7B151C]/50">
      {/* Background Decorative Aura Circles */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#7B151C]/30 via-[#6E1117]/20 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#7B151C]/20 rounded-full blur-2xl pointer-events-none" />

      {/* Top Banner Tag */}
      <div className="max-w-7xl mx-auto w-full z-10 pt-4">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-3 px-4 py-2 rounded-full border border-[#F4E8D0]/20 bg-[#6E1117]/40 backdrop-blur-sm text-[11px] font-sans tracking-[0.25em] text-[#EFE0C4] uppercase"
        >
          <Compass className="w-3.5 h-3.5 text-[#F4E8D0] animate-pulse" />
          <span>CREATIVE & DIGITAL GROWTH STUDIO</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#F4E8D0]" />
          <span className="hidden sm:inline text-[#EFE0C4]/70">EST. 2026</span>
        </motion.div>
      </div>

      {/* Main Hero Content Grid */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 my-auto py-8">
        
        {/* Left Column: Massive Editorial Typography & Copy */}
        <div className="lg:col-span-7 flex flex-col space-y-8">
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 0, opacity: 1 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="font-editorial text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-light leading-[0.92] tracking-tight"
            >
              WE DESIGN <br />
              <span className="font-italic text-[#FAF5EB] font-normal italic">BRANDS</span> <br />
              THAT STAND <br />
              <span className="text-[#EFE0C4] font-semibold underline decoration-[#7B151C] underline-offset-8">
                OUT.
              </span>
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-6 max-w-xl"
          >
            <p className="text-lg md:text-xl font-sans text-[#EFE0C4]/90 font-light leading-relaxed border-l-2 border-[#7B151C] pl-4">
              A creative and digital growth studio turning ambitious ideas into distinct visual identities, high-converting digital presence, and long-term brand momentum.
            </p>

            {/* Service Pillars Tagline */}
            <div className="text-xs font-sans tracking-[0.25em] text-[#EFE0C4]/70 uppercase flex flex-wrap gap-x-3 gap-y-1 items-center">
              <span>STRATEGY</span>
              <span className="text-[#7B151C]">×</span>
              <span>DESIGN</span>
              <span className="text-[#7B151C]">×</span>
              <span>DIGITAL</span>
              <span className="text-[#7B151C]">×</span>
              <span>GROWTH</span>
            </div>

            {/* Action CTA & Contact */}
            <div className="pt-4 flex flex-wrap items-center gap-5">
              <button
                onClick={onOpenContact}
                className="group relative inline-flex items-center space-x-3 bg-[#F4E8D0] text-[#5B0F14] text-xs font-sans font-bold tracking-[0.25em] uppercase px-8 py-4 rounded-full transition-all duration-300 hover:bg-[#FAF5EB] hover:shadow-[0_0_35px_rgba(244,232,208,0.4)] active:scale-95"
              >
                <span>LET'S BUILD YOURS</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>

              <a
                href="#work"
                className="inline-flex items-center space-x-2 text-xs font-sans tracking-[0.2em] text-[#F4E8D0]/80 hover:text-[#F4E8D0] uppercase py-3 border-b border-[#F4E8D0]/30 hover:border-[#F4E8D0] transition-colors"
              >
                <span>EXPLORE WORK</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Column: 3D Mascot Interactive Character Renders */}
        <div className="lg:col-span-5 relative flex justify-center items-center">
          <motion.div
            initial={{ opacity: 1, scale: 1, y: 0 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden border border-[#F4E8D0]/20 bg-gradient-to-b from-[#6E1117]/60 to-[#3B070A]/80 shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-4 flex flex-col items-center justify-center group"
          >
            {/* Mascot Render Image */}
            <img
              src="/assets/hero_mascot.png"
              alt="CORE AURA 3D Brand Mascot Character"
              className="w-full h-full object-contain object-center drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)] transition-transform duration-700 group-hover:scale-105"
            />

            {/* Overlapping Editorial Badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute bottom-6 left-6 right-6 bg-[#5B0F14]/90 backdrop-blur-md p-4 rounded-2xl border border-[#F4E8D0]/30 shadow-2xl flex items-center justify-between"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-[#7B151C] border border-[#F4E8D0]/40 flex items-center justify-center text-[#F4E8D0]">
                  <Sparkles className="w-5 h-5 animate-spin" style={{ animationDuration: '8s' }} />
                </div>
                <div>
                  <h4 className="font-editorial text-lg text-[#FAF5EB] leading-tight">BRAND MASCOT</h4>
                  <p className="text-[10px] font-sans tracking-widest text-[#EFE0C4]/70 uppercase">CRAFTING IDENTITY</p>
                </div>
              </div>
              <span className="text-xs font-sans tracking-widest text-[#F4E8D0] font-semibold border border-[#F4E8D0]/20 px-3 py-1 rounded-full bg-[#6E1117]">
                CORE AURA
              </span>
            </motion.div>
          </motion.div>
        </div>

      </div>

      {/* Bottom Ticker / Descriptor Bar */}
      <div className="max-w-7xl mx-auto w-full z-10 pt-6 border-t border-[#7B151C]/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans tracking-widest text-[#EFE0C4]/60 uppercase">
        <div className="flex items-center space-x-6">
          <span>01 / BRAND IDENTITY</span>
          <span className="text-[#7B151C]">•</span>
          <span>02 / CREATIVE DIRECTION</span>
          <span className="text-[#7B151C]">•</span>
          <span>03 / DIGITAL GROWTH</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>TAKING NEW CLIENTS Q4 2026</span>
        </div>
      </div>
    </section>
  );
};
