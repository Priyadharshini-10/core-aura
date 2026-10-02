import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Feather, FileText } from 'lucide-react';

export const ContentWritingSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState(0);

  const services = [
    { num: '01', title: 'Brand Messaging', desc: 'Crafting core positioning statements, brand manifestos, taglines, and tone-of-voice guidelines that unify your entire identity.' },
    { num: '02', title: 'Social Media Copy', desc: 'Engaging captions, high-converting carousel text, and viral tweet/post concepts designed for audience retention.' },
    { num: '03', title: 'Website Copy', desc: 'Persuasive landing page copy, hero section headlines, and about pages structured for user clarity and conversion.' },
    { num: '04', title: 'Ad Copy', desc: 'Sharp, direct-response ad copy for Meta, Google, and TikTok designed to lower customer acquisition costs.' },
    { num: '05', title: 'Product Descriptions', desc: 'Evocative e-commerce product narratives that highlight craftsmanship, materials, and benefits.' },
    { num: '06', title: 'Video Scripts', desc: 'Commercial video scripts and Reel/Short storyboards formatted for 3-second hook retention.' },
    { num: '07', title: 'Campaign Concepts', desc: 'Overarching creative themes and storytelling angles for seasonal launches and brand activations.' },
  ];

  return (
    <section className="bg-[#F4E8D0] text-[#5B0F14] py-28 px-6 md:px-12 relative overflow-hidden border-b border-[#EFE0C4]">
      
      {/* Background Typewriter Subtle Text Watermark */}
      <div className="absolute -top-10 right-0 font-editorial text-[180px] leading-none opacity-5 select-none pointer-events-none text-[#5B0F14]">
        WORDS
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-sans tracking-[0.3em] uppercase text-[#6E1117] font-semibold block mb-4 flex items-center space-x-2">
            <Feather className="w-4 h-4 text-[#7B151C]" />
            <span>EDITORIAL CONTENT & COPYWRITING</span>
          </span>
          <motion.h2
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-light leading-[1.05] mb-6"
          >
            GIVE YOUR BRAND <br />
            <span className="font-italic italic font-normal">A VOICE</span> <br />
            <span className="font-bold underline decoration-[#7B151C] underline-offset-8">
              WORTH REMEMBERING.
            </span>
          </motion.h2>
          <p className="text-base sm:text-lg font-sans text-[#6E1117] leading-relaxed font-light border-l-2 border-[#5B0F14] pl-6">
            From the first scroll to the final decision, we craft words that make your brand clearer, sharper, and harder to forget.
          </p>
        </div>

        {/* 2 Column Editorial Copy Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: 7 Content Pillars List */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            {services.map((item, idx) => {
              const isSelected = selectedService === idx;
              return (
                <div
                  key={item.num}
                  onClick={() => setSelectedService(idx)}
                  className={`p-5 rounded-2xl cursor-pointer transition-all duration-300 border ${
                    isSelected
                      ? 'bg-[#5B0F14] text-[#F4E8D0] border-[#5B0F14] shadow-xl translate-x-2'
                      : 'bg-[#EFE0C4]/60 text-[#5B0F14] border-[#5B0F14]/20 hover:bg-[#EFE0C4] hover:border-[#5B0F14]/40'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <span className={`font-editorial text-2xl font-light ${isSelected ? 'text-[#F4E8D0]' : 'text-[#7B151C]'}`}>
                        {item.num}
                      </span>
                      <h3 className="font-sans text-sm sm:text-base tracking-wider uppercase font-bold">
                        {item.title}
                      </h3>
                    </div>
                    <FileText className={`w-4 h-4 ${isSelected ? 'text-[#F4E8D0]' : 'text-[#7B151C]'}`} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Vintage Typewriter Preview Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#FAF5EB] border border-[#5B0F14]/30 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-6 border-b border-[#5B0F14]/20 mb-6">
                <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-[#6E1117] font-bold">
                  CONTENT PILLAR {services[selectedService].num} / 07
                </span>
                <Feather className="w-5 h-5 text-[#5B0F14]" />
              </div>

              <h4 className="font-editorial text-3xl font-light text-[#5B0F14] mb-4">
                {services[selectedService].title}
              </h4>

              <p className="font-sans text-sm sm:text-base text-[#6E1117] font-light leading-relaxed mb-8 border-l-2 border-[#7B151C] pl-4">
                {services[selectedService].desc}
              </p>

              <div className="p-4 rounded-xl bg-[#EFE0C4]/70 border border-[#5B0F14]/20 text-xs font-sans text-[#5B0F14]">
                <span className="font-bold block mb-1">VOICE STANDARD:</span>
                "Precision, quiet luxury, high editorial clarity, zero fluff."
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
