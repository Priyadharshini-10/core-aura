import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Film } from 'lucide-react';

export const VisualProductionSection: React.FC = () => {
  const visualPillars = [
    {
      title: 'PROFESSIONAL AD SHOOTS',
      flow: 'Concept → Script → Shoot → Edit → Campaign',
      desc: 'Cinematic commercial shoots designed to capture audience attention within the first 3 seconds on digital channels.',
      icon: Film,
    },
    {
      title: 'PRODUCT PHOTOGRAPHY',
      flow: 'Studio Lighting → Styling → High-Res Master',
      desc: 'High-fashion and editorial product imagery that amplifies perceived product value and builds instant customer trust.',
      icon: Camera,
    },
  ];

  return (
    <section className="bg-[#5B0F14] text-[#F4E8D0] py-28 px-6 md:px-12 relative overflow-hidden border-b border-[#7B151C]/60">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#7B151C]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-sans tracking-[0.3em] uppercase text-[#EFE0C4]/70 font-semibold block mb-4">
            VISUAL PRODUCTION STUDIO
          </span>
          <motion.h2
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-light leading-[1.05] mb-6"
          >
            MAKE YOUR BRAND <br />
            <span className="font-italic italic font-normal text-[#FAF5EB]">LOOK AS GOOD AS</span> <br />
            <span className="font-bold text-[#EFE0C4] underline decoration-[#7B151C] underline-offset-8">
              IT DESERVES.
            </span>
          </motion.h2>
          <p className="text-base sm:text-lg font-sans text-[#EFE0C4]/90 leading-relaxed font-light border-l-2 border-[#7B151C] pl-6">
            Strategic visuals. Thoughtful storytelling. Commercial content that builds trust and drives your brand forward across every customer touchpoint.
          </p>
        </div>

        {/* 2 Column Layout: Photography Showcase + Mascot Camera Character */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Column: Mascot Studio Character */}
          <div className="lg:col-span-5 relative flex justify-center">
            <motion.div
              initial={{ opacity: 1, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden border border-[#F4E8D0]/20 bg-gradient-to-b from-[#6E1117] to-[#3B070A] shadow-2xl p-4 flex items-center justify-center group"
            >
              <img
                src="/assets/photo_mascot.png"
                alt="Core Aura Photography & Film Production Mascot"
                className="w-full h-full object-contain object-center transition-transform duration-700 group-hover:scale-105 drop-shadow-[0_20px_30px_rgba(0,0,0,0.6)]"
              />

              <div className="absolute bottom-6 left-6 right-6 bg-[#5B0F14]/90 backdrop-blur-md p-4 rounded-2xl border border-[#F4E8D0]/30 shadow-xl flex items-center justify-between">
                <div>
                  <h4 className="font-editorial text-lg text-[#FAF5EB] leading-tight">STUDIO PRODUCTION</h4>
                  <p className="text-[10px] font-sans tracking-widest text-[#EFE0C4]/70 uppercase">4K / CINEMATIC LIGHTING</p>
                </div>
                <div className="w-9 h-9 rounded-full bg-[#7B151C] flex items-center justify-center text-[#F4E8D0]">
                  <Camera className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Production Gallery Grid */}
          <div className="lg:col-span-7 flex flex-col space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              <div className="relative rounded-2xl overflow-hidden border border-[#F4E8D0]/20 aspect-video sm:aspect-square bg-[#6E1117] group shadow-xl">
                <img
                  src="/assets/dr_sasikala_ad.jpg"
                  alt="Dr. Sasikala Rheumatologist Visual Ad Production"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3B070A] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[10px] font-sans tracking-widest text-[#EFE0C4]/70 uppercase block">HEALTHCARE AD CAMPAIGN</span>
                  <h4 className="font-editorial text-xl text-[#FAF5EB]">Dr. Sasikala Rheumatology Ad</h4>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden border border-[#F4E8D0]/20 aspect-video sm:aspect-square bg-[#6E1117] group shadow-xl">
                <img
                  src="/assets/port_beauty.png"
                  alt="Product Photography Production"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3B070A] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[10px] font-sans tracking-widest text-[#EFE0C4]/70 uppercase block">STUDIO STILLS</span>
                  <h4 className="font-editorial text-xl text-[#FAF5EB]">High-End Product Photography</h4>
                </div>
              </div>

            </div>

            {/* Production Capabilities List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#7B151C]/50">
              {visualPillars.map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-[#6E1117]/30 border border-[#7B151C]/40">
                  <item.icon className="w-6 h-6 text-[#F4E8D0] mb-3" />
                  <h3 className="font-sans text-xs tracking-[0.25em] uppercase font-bold text-[#F4E8D0] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[11px] font-sans tracking-wider text-[#EFE0C4]/70 uppercase mb-3 font-semibold">
                    {item.flow}
                  </p>
                  <p className="text-xs font-sans text-[#EFE0C4]/90 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
