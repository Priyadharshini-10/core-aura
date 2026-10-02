import React from 'react';
import { motion } from 'framer-motion';

export const ApproachSection: React.FC = () => {
  const processSteps = [
    {
      num: '01',
      title: 'DISCOVER',
      subtitle: 'Understand the business. Find the audience. Uncover the opportunity.',
      details: ['Market research & competitor audit', 'Target persona identification', 'Brand opportunity mapping'],
    },
    {
      num: '02',
      title: 'DEFINE',
      subtitle: 'Shape the positioning, message and visual direction.',
      details: ['Brand voice & manifesto', 'Core visual identity pillars', 'Digital roadmap & strategy'],
    },
    {
      num: '03',
      title: 'BUILD',
      subtitle: 'Create the identity, content and digital experiences.',
      details: ['Bespoke web development', 'Content system creation', 'Commercial photo & ad shoots'],
    },
    {
      num: '04',
      title: 'ACTIVATE',
      subtitle: 'Launch campaigns and experiences designed to earn attention.',
      details: ['Digital platform deployment', 'Social media launch sequence', 'Local SEO & GBP rollout'],
    },
    {
      num: '05',
      title: 'EVOLVE',
      subtitle: 'Read the response. Refine the work. Keep the brand moving.',
      details: ['Performance analytics review', 'Iterative UI & ad refinement', 'Long-term brand scaling'],
    },
  ];

  return (
    <section className="bg-[#5B0F14] text-[#F4E8D0] py-28 px-6 md:px-12 relative overflow-hidden border-b border-[#7B151C]/60">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <span className="text-xs font-sans tracking-[0.3em] uppercase text-[#EFE0C4]/70 font-semibold block mb-4">
            OUR STRATEGIC PROCESS
          </span>
          <motion.h2
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-light leading-[1.05] mb-6"
          >
            IDEAS DON'T BECOME <br />
            <span className="font-italic italic font-normal text-[#FAF5EB]">BRANDS BY</span> <br />
            <span className="font-bold text-[#EFE0C4] underline decoration-[#7B151C] underline-offset-8">
              ACCIDENT.
            </span>
          </motion.h2>
          <p className="text-base sm:text-lg font-sans text-[#EFE0C4]/90 leading-relaxed font-light border-l-2 border-[#7B151C] pl-6">
            We turn business ambition into a clear brand, a compelling digital presence, and work that moves people to act.
          </p>
        </div>

        {/* Horizontal Timeline Grid with Connecting Line */}
        <div className="relative">
          
          {/* Horizontal Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-[1px] bg-[#7B151C]" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 relative z-10">
            {processSteps.map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="flex flex-col justify-between bg-[#6E1117]/30 border border-[#7B151C]/50 p-6 rounded-2xl hover:border-[#F4E8D0]/40 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-editorial text-5xl font-light text-[#F4E8D0] group-hover:scale-110 transition-transform">
                      {step.num}
                    </span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#7B151C] group-hover:bg-[#F4E8D0] transition-colors" />
                  </div>

                  <h3 className="font-sans text-sm tracking-[0.2em] uppercase font-bold text-[#FAF5EB] mb-2">
                    {step.title}
                  </h3>

                  <p className="font-sans text-xs text-[#EFE0C4]/80 font-light leading-relaxed mb-6">
                    {step.subtitle}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#7B151C]/40 space-y-1.5">
                  {step.details.map((detail, dIdx) => (
                    <span key={dIdx} className="text-[10px] font-sans text-[#EFE0C4]/60 block tracking-wider uppercase">
                      • {detail}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
