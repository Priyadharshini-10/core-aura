import React from 'react';
import { motion } from 'framer-motion';

export const HomeIntro: React.FC = () => {
  const pillars = [
    {
      num: '01',
      title: 'STRATEGY',
      desc: 'Clear direction for a stronger brand foundation. We map out your positioning, audience resonance, and growth trajectory.',
    },
    {
      num: '02',
      title: 'CREATIVE',
      desc: 'Distinctive design that makes you stand out. Uncompromising visual art direction across identities, typography, and assets.',
    },
    {
      num: '03',
      title: 'DIGITAL',
      desc: 'Experiences that engage and convert. Bespoke web apps, responsive platforms, and frictionless e-commerce ecosystems.',
    },
    {
      num: '04',
      title: 'GROWTH',
      desc: 'Long-term impact through meaningful connections. SEO dominance, strategic social media, and visual ad production.',
    },
  ];

  return (
    <section className="bg-[#F4E8D0] text-[#5B0F14] py-24 px-6 md:px-12 relative overflow-hidden border-b border-[#EFE0C4]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-20 border-b border-[#5B0F14]/20 pb-16">
          <div className="lg:col-span-8">
            <span className="text-xs font-sans tracking-[0.3em] uppercase text-[#6E1117] font-semibold block mb-4">
              PHILOSOPHY × VISION
            </span>
            <motion.h2
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-light leading-[1.02]"
            >
              BRANDS <br />
              <span className="font-italic italic font-normal">BUILT TO MAKE</span> <br />
              <span className="font-bold underline decoration-[#6E1117] underline-offset-4">
                AN IMPACT.
              </span>
            </motion.h2>
          </div>

          <div className="lg:col-span-4">
            <motion.p
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-base sm:text-lg font-sans text-[#6E1117] leading-relaxed font-light border-l border-[#5B0F14]/30 pl-6"
            >
              We turn ambitious business ideas into powerful, memorable brands through strategy, design, and digital experiences that connect, engage, and grow.
            </motion.p>
          </div>
        </div>

        {/* 4 Editorial Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.num}
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="flex flex-col justify-between border-t border-[#5B0F14]/20 pt-8 group hover:border-[#5B0F14] transition-colors"
            >
              <div>
                <span className="font-editorial text-5xl sm:text-6xl font-light text-[#7B151C]/60 block mb-6 group-hover:text-[#5B0F14] transition-colors">
                  {pillar.num}
                </span>
                <h3 className="font-sans text-sm tracking-[0.25em] uppercase font-bold text-[#5B0F14] mb-4">
                  {pillar.title}
                </h3>
                <p className="font-sans text-sm text-[#6E1117]/90 leading-relaxed font-light">
                  {pillar.desc}
                </p>
              </div>

              <div className="pt-8">
                <span className="inline-block w-8 h-[1px] bg-[#5B0F14]/30 group-hover:w-16 group-hover:bg-[#5B0F14] transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
