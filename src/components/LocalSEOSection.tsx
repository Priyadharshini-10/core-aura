import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Search, Navigation, CheckCircle2, TrendingUp, ShieldCheck } from 'lucide-react';

export const LocalSEOSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('Best creative studio near me');

  const processSteps = [
    { num: '01', title: 'SEARCH', desc: 'High-intent customers search online for premium services like yours.' },
    { num: '02', title: 'DISCOVER', desc: 'They find your business with verified details, 5-star reviews, and compelling visuals.' },
    { num: '03', title: 'VISIT', desc: 'Online digital interest seamlessly converts into real-world store visits and client bookings.' },
  ];

  const services = [
    'GOOGLE BUSINESS PROFILE',
    'LOCAL SEO',
    'KEYWORD STRATEGY',
    'REVIEWS MANAGEMENT',
    'ON-PAGE SEO',
  ];

  return (
    <section className="bg-[#5B0F14] text-[#F4E8D0] py-28 px-6 md:px-12 relative overflow-hidden border-b border-[#7B151C]/60">
      
      {/* Background Subtle Map Grid Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#F4E8D0_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header Grid */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-sans tracking-[0.3em] uppercase text-[#EFE0C4]/70 font-semibold block mb-4">
            GOOGLE BUSINESS PROFILE & LOCAL SEO
          </span>
          <motion.h2
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-light leading-[1.05] mb-4"
          >
            BE FOUND. <br />
            <span className="font-bold underline decoration-[#7B151C] underline-offset-8">
              BE CHOSEN.
            </span>
          </motion.h2>
          <p className="text-lg sm:text-xl font-editorial italic text-[#FAF5EB] mb-6">
            Turn local online searches into real-world visits and high-paying clients.
          </p>
        </div>

        {/* 3 Step Visual Process Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {processSteps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="p-8 rounded-2xl bg-[#6E1117]/30 border border-[#7B151C]/50 relative group hover:border-[#F4E8D0]/40 transition-colors"
            >
              <span className="font-editorial text-5xl font-light text-[#7B151C] block mb-4 group-hover:text-[#F4E8D0] transition-colors">
                {step.num}
              </span>
              <h3 className="font-sans text-sm tracking-[0.25em] uppercase font-bold text-[#F4E8D0] mb-2">
                {step.title}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#EFE0C4]/80 font-light leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Interactive Burgundy Map Interface & Mascot Character */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Custom Interactive Map UI */}
          <div className="lg:col-span-7">
            <div className="bg-[#3B070A] rounded-3xl p-6 sm:p-8 border border-[#F4E8D0]/30 shadow-[0_25px_60px_rgba(0,0,0,0.7)] text-[#F4E8D0] relative overflow-hidden">
              
              {/* Map Search Bar */}
              <div className="flex items-center space-x-3 bg-[#5B0F14] border border-[#7B151C] p-3.5 rounded-xl mb-6 shadow-inner">
                <Search className="w-5 h-5 text-[#F4E8D0]" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent text-xs sm:text-sm font-sans text-[#F4E8D0] focus:outline-none w-full"
                  placeholder="Search local business..."
                />
                <span className="text-[10px] font-sans tracking-widest text-[#EFE0C4]/60 uppercase border border-[#7B151C] px-2 py-1 rounded">
                  MAPS
                </span>
              </div>

              {/* Map Graphic Area */}
              <div className="relative w-full h-72 rounded-2xl bg-[#5B0F14]/80 border border-[#7B151C]/60 p-4 flex flex-col justify-between overflow-hidden">
                
                {/* SVG Route Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-[#7B151C]/60 stroke-2 fill-none">
                  <path d="M 40 200 Q 150 50 320 180 T 500 100" strokeDasharray="6,6" />
                </svg>

                {/* Animated Location Pin */}
                <div className="relative z-10 flex items-center space-x-3 bg-[#6E1117] border border-[#F4E8D0]/40 p-4 rounded-xl shadow-2xl max-w-sm ml-auto">
                  <div className="w-10 h-10 rounded-full bg-[#7B151C] border border-[#F4E8D0] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#F4E8D0] animate-bounce" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-1 mb-0.5">
                      <span className="font-editorial text-lg text-[#FAF5EB] font-bold">CORE AURA STUDIO</span>
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div className="flex items-center space-x-2 text-xs font-sans text-[#EFE0C4]/80">
                      <div className="flex text-amber-300">
                        {'★'.repeat(5)}
                      </div>
                      <span className="font-bold text-[#F4E8D0]">5.0</span>
                      <span>(128 reviews)</span>
                    </div>
                  </div>
                </div>

                {/* Local Scorecard */}
                <div className="relative z-10 flex items-center justify-between bg-[#3B070A]/90 backdrop-blur-md p-4 rounded-xl border border-[#7B151C]">
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="w-5 h-5 text-emerald-400" />
                    <div>
                      <span className="text-[10px] font-sans tracking-widest text-[#EFE0C4]/60 uppercase block">LOCAL SEARCH RANK</span>
                      <span className="text-xs font-sans font-bold text-[#F4E8D0]">RANK #1 IN YOUR CATEGORY</span>
                    </div>
                  </div>
                  <Navigation className="w-5 h-5 text-[#F4E8D0]" />
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: SEO Mascot & Services List */}
          <div className="lg:col-span-5 flex flex-col space-y-8">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-[#F4E8D0]/20 bg-[#6E1117] shadow-xl p-4 flex items-center justify-center">
              <img
                src="/assets/seo_mascot.png"
                alt="Core Aura Local SEO Mascot"
                className="w-full h-full object-contain object-center drop-shadow-[0_15px_25px_rgba(0,0,0,0.5)]"
              />
            </div>

            <div className="p-6 rounded-2xl bg-[#6E1117]/40 border border-[#7B151C]/50 space-y-4">
              <h3 className="text-xs font-sans tracking-[0.25em] uppercase text-[#EFE0C4]/70 font-semibold">
                SEO & VISIBILITY CAPABILITIES
              </h3>
              <div className="flex flex-wrap gap-2">
                {services.map((service) => (
                  <span
                    key={service}
                    className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-[#7B151C] text-[#F4E8D0] text-xs font-sans tracking-wider uppercase font-semibold border border-[#F4E8D0]/20"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#F4E8D0]" />
                    <span>{service}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
