import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Sparkles, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const pillars = [
    { title: 'STRATEGY', desc: 'Framing brand positioning, market direction, and growth architecture.' },
    { title: 'CREATIVE', desc: 'Fashion-grade art direction, luxury typography, and brand identity design.' },
    { title: 'DIGITAL', desc: 'Responsive web applications, bespoke landing portals, and custom e-commerce.' },
    { title: 'CONTENT', desc: 'Persuasive copywriting, video scripts, and editorial storytelling.' },
    { title: 'VISIBILITY', desc: 'Google Business Profile, local search dominance, and high-intent SEO.' },
    { title: 'GROWTH', desc: 'Commercial ad production, social media management, and audience scaling.' },
  ];

  return (
    <section id="about" className="bg-[#F4E8D0] text-[#5B0F14] py-28 px-6 md:px-12 relative overflow-hidden border-b border-[#EFE0C4]">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Narrative Copy */}
          <div className="lg:col-span-7 flex flex-col space-y-8">
            <div>
              <span className="text-xs font-sans tracking-[0.3em] uppercase text-[#6E1117] font-semibold block mb-4 flex items-center space-x-2">
                <Compass className="w-4 h-4 text-[#7B151C]" />
                <span>ABOUT CORE AURA</span>
              </span>
              <motion.h2
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-light leading-[1.05]"
              >
                WE BUILD THE <br />
                <span className="font-bold underline decoration-[#7B151C] underline-offset-8">
                  PRESENCE
                </span> <br />
                <span className="font-italic italic font-normal">BEHIND THE BRAND.</span>
              </motion.h2>
            </div>

            <div className="space-y-6 text-base sm:text-lg font-sans text-[#6E1117] font-light leading-relaxed border-l-2 border-[#5B0F14] pl-6">
              <p>
                Core Aura is a creative and digital growth partner for ambitious brands who refuse to be forgotten. We combine high-fashion visual art direction with analytical digital strategy to build unforgettable brand presence.
              </p>
              <p className="text-sm font-normal text-[#5B0F14]">
                We don't operate like a conventional digital agency. We operate as an editorial studio — pairing obsessive design craftsmanship with long-term brand momentum.
              </p>
            </div>

            {/* 6 Core Competency Tags */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-[#5B0F14]/20">
              {pillars.map((item) => (
                <div key={item.title} className="p-4 rounded-xl bg-[#EFE0C4] border border-[#5B0F14]/20">
                  <h3 className="font-sans text-xs tracking-[0.2em] font-bold text-[#5B0F14] uppercase mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[11px] font-sans text-[#6E1117]/80 font-light">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Studio Card & Mascot Visual */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="bg-[#5B0F14] text-[#F4E8D0] p-8 rounded-3xl border border-[#7B151C] shadow-2xl relative overflow-hidden w-full">
              <div className="flex items-center justify-between pb-6 border-b border-[#7B151C]/60 mb-6">
                <img
                  src="/assets/logo.png"
                  alt="CORE AURA Official Logo"
                  className="h-10 w-auto object-contain brightness-0 invert"
                />
                <Sparkles className="w-5 h-5 text-[#F4E8D0]" />
              </div>

              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-[#6E1117] border border-[#7B151C]/50">
                <img
                  src="/assets/services_mascot.png"
                  alt="Core Aura Creative Studio Persona"
                  className="w-full h-full object-contain object-center"
                />
              </div>

              <div className="space-y-3">
                <h4 className="font-editorial text-2xl font-light text-[#FAF5EB]">STUDIO STANDARDS</h4>
                <div className="space-y-2 text-xs font-sans text-[#EFE0C4]/80">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#F4E8D0]" />
                    <span>Quiet Luxury Design Standards</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#F4E8D0]" />
                    <span>Conversion-Focused Digital Infrastructure</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#F4E8D0]" />
                    <span>Direct Access to Senior Creative Directors</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
