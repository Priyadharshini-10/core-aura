import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, Monitor, Share2, Camera, ShoppingBag, Search, PenTool, Layout } from 'lucide-react';

interface ServicesSectionProps {
  onOpenContact: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenContact }) => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      num: '01',
      title: 'WEBSITE DEVELOPMENT',
      subtitle: 'Modern, responsive websites built around business goals.',
      icon: Monitor,
      tags: ['Business Websites', 'Landing Pages', 'Corporate Sites', 'Responsive UI/UX', 'Conversion Focused'],
      image: '/assets/port_digital.png',
      desc: 'Bespoke web applications and responsive brand portals designed to deliver seamless user experiences and drive tangible conversions.',
    },
    {
      num: '02',
      title: 'SOCIAL MEDIA MANAGEMENT',
      subtitle: 'Strategy, content, creatives and community management.',
      icon: Share2,
      tags: ['Content Systems', 'Reels & Carousels', 'Visual Storytelling', 'Community Engagement', 'Analytics'],
      image: '/assets/social_mascot.png',
      desc: 'Transform scattered social channels into a cohesive brand identity that builds audience trust, recall, and active engagement.',
    },
    {
      num: '03',
      title: 'PROFESSIONAL AD SHOOTS',
      subtitle: 'Concept → Script → Shoot → Edit → Campaign',
      icon: Camera,
      tags: ['Creative Concept', 'Scriptwriting', 'High-End Production', 'Color Grading', 'Ad Performance Cuts'],
      image: '/assets/port_fashion.png',
      desc: 'End-to-end commercial production crafting cinematic video ads designed for high conversion across Meta, YouTube, and digital media.',
    },
    {
      num: '04',
      title: 'PRODUCT PHOTOGRAPHY',
      subtitle: 'Premium product visuals for social media, websites and e-commerce.',
      icon: Camera,
      tags: ['Studio Lighting', 'E-Commerce Imagery', 'Lifestyle Styling', 'High-Res Editing', 'Social Assets'],
      image: '/assets/port_beauty.png',
      desc: 'High-end editorial and catalog product photography that highlights craftsmanship, texture, and brand prestige.',
    },
    {
      num: '05',
      title: 'GOOGLE BUSINESS PROFILE & SEO',
      subtitle: 'Improve local discovery, search visibility and customer reach.',
      icon: Search,
      tags: ['GBP Optimization', 'Local SEO', 'Keyword Strategy', 'Review Management', 'On-Page SEO'],
      image: '/assets/seo_mascot.png',
      desc: 'Capture high-intent searches in your local market and convert online map discoveries into real-world customers.',
    },
    {
      num: '06',
      title: 'CONTENT WRITING',
      subtitle: 'Strategic content for social media, websites, blogs and campaigns.',
      icon: PenTool,
      tags: ['Brand Messaging', 'Website Copywriting', 'Ad Copy', 'Product Descriptions', 'Video Scripts'],
      image: '/assets/port_brand.png',
      desc: 'Articulate copy crafted with persuasive clarity that gives your brand a distinctive, unforgettable voice.',
    },
    {
      num: '07',
      title: 'E-COMMERCE DEVELOPMENT',
      subtitle: 'Modern online stores designed around customer journeys.',
      icon: ShoppingBag,
      tags: ['Product Catalogues', 'Custom Cart Flow', 'Payment Gateways', 'Mobile-First', 'Order Automation'],
      image: '/assets/port_digital.png',
      desc: 'Scalable e-commerce architecture optimized for fast load times, seamless checkout, and high lifetime customer value.',
    },
  ];

  return (
    <section id="services" className="bg-[#5B0F14] text-[#F4E8D0] py-28 px-6 md:px-12 relative overflow-hidden border-b border-[#7B151C]/60">
      
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#6E1117]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 border-b border-[#7B151C]/50 pb-12 gap-8">
          <div>
            <span className="text-xs font-sans tracking-[0.3em] uppercase text-[#EFE0C4]/70 font-medium block mb-4">
              CAPABILITIES & SERVICES
            </span>
            <h2 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-light leading-[1.05]">
              EVERYTHING <br />
              <span className="font-italic italic font-normal text-[#FAF5EB]">YOUR DIGITAL</span> <br />
              <span className="font-bold text-[#EFE0C4] underline decoration-[#7B151C] underline-offset-8">
                PRESENCE NEEDS.
              </span>
            </h2>
          </div>

          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full border border-[#F4E8D0]/30 flex items-center justify-center text-[#F4E8D0]">
              <Layout className="w-5 h-5" />
            </div>
            <div className="text-xs font-sans tracking-widest text-[#EFE0C4]/80 uppercase">
              <span>07 CORE CAPABILITIES</span> <br />
              <span className="text-[#F4E8D0] font-bold">HOVER TO EXPLORE</span>
            </div>
          </div>
        </div>

        {/* Editorial Layout: Left List + Right Dynamic Interactive Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Services List Column */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-[#7B151C]/40">
            {services.map((item, index) => {
              const isActive = activeService === index;
              return (
                <div
                  key={item.num}
                  onMouseEnter={() => setActiveService(index)}
                  className={`py-6 sm:py-8 cursor-pointer transition-all duration-300 group ${
                    isActive ? 'pl-4 sm:pl-6 bg-[#6E1117]/30 border-l-4 border-[#F4E8D0]' : 'hover:pl-2'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4 sm:space-x-6">
                      <span className={`font-editorial text-2xl sm:text-3xl transition-colors ${
                        isActive ? 'text-[#F4E8D0] font-bold' : 'text-[#EFE0C4]/40 group-hover:text-[#F4E8D0]'
                      }`}>
                        {item.num}
                      </span>
                      <div>
                        <h3 className={`font-editorial text-2xl sm:text-3xl tracking-wide transition-colors ${
                          isActive ? 'text-[#FAF5EB] font-bold' : 'text-[#F4E8D0]/90 group-hover:text-[#F4E8D0]'
                        }`}>
                          {item.title}
                        </h3>
                        <p className="font-sans text-xs sm:text-sm text-[#EFE0C4]/80 font-light mt-1">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>

                    <ArrowUpRight className={`w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300 ${
                      isActive ? 'text-[#F4E8D0] rotate-45 translate-x-1' : 'text-[#EFE0C4]/30 group-hover:text-[#F4E8D0]'
                    }`} />
                  </div>

                  {/* Active Tags Preview */}
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 pt-4 border-t border-[#7B151C]/30 flex flex-wrap gap-2"
                    >
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center space-x-1 text-[11px] font-sans tracking-wider uppercase px-3 py-1 rounded-full bg-[#7B151C]/60 text-[#FAF5EB] border border-[#F4E8D0]/20"
                        >
                          <CheckCircle2 className="w-3 h-3 text-[#F4E8D0]" />
                          <span>{tag}</span>
                        </span>
                      ))}
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Preview Card Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -15 }}
                transition={{ duration: 0.4 }}
                className="bg-gradient-to-b from-[#6E1117] to-[#3B070A] p-6 sm:p-8 rounded-3xl border border-[#F4E8D0]/30 shadow-[0_25px_60px_rgba(0,0,0,0.6)] flex flex-col justify-between min-h-[460px] relative overflow-hidden group"
              >
                {/* Visual Image Banner */}
                <div className="relative w-full h-56 rounded-2xl overflow-hidden mb-6 border border-[#F4E8D0]/20 bg-[#5B0F14]">
                  <img
                    src={services[activeService].image}
                    alt={services[activeService].title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3B070A] via-transparent to-transparent opacity-80" />
                  
                  <span className="absolute top-4 right-4 bg-[#5B0F14]/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-sans tracking-widest text-[#F4E8D0] font-bold border border-[#F4E8D0]/30">
                    {services[activeService].num} / 07
                  </span>
                </div>

                <div>
                  <h4 className="font-editorial text-2xl text-[#FAF5EB] mb-2 font-semibold">
                    {services[activeService].title}
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-[#EFE0C4]/90 font-light leading-relaxed mb-6">
                    {services[activeService].desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#7B151C]/60 flex items-center justify-between">
                  <button
                    onClick={onOpenContact}
                    className="w-full bg-[#F4E8D0] text-[#5B0F14] text-xs font-sans font-bold tracking-[0.2em] uppercase py-3.5 rounded-full flex items-center justify-center space-x-2 hover:bg-[#FAF5EB] transition-colors"
                  >
                    <span>INQUIRE ABOUT THIS SERVICE</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
