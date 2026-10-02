import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Phone, MessageSquare, Sparkles } from 'lucide-react';

interface ContactSectionProps {
  onOpenContact: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenContact }) => {
  return (
    <section id="contact" className="bg-[#F4E8D0] text-[#5B0F14] py-28 px-6 md:px-12 relative overflow-hidden border-b border-[#EFE0C4]">
      
      {/* Background Subtle Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-editorial text-[14vw] leading-none opacity-5 select-none pointer-events-none text-[#5B0F14] whitespace-nowrap">
        CORE AURA
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left Column: Massive Editorial Typography & Contact Details */}
          <div className="lg:col-span-7 flex flex-col space-y-8">
            <div>
              <span className="text-xs font-sans tracking-[0.3em] uppercase text-[#6E1117] font-semibold block mb-4 flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-[#7B151C]" />
                <span>START A CONVERSATION</span>
              </span>
              <motion.h2
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="font-editorial text-5xl sm:text-7xl lg:text-8xl font-light leading-[0.95]"
              >
                LET'S BUILD <br />
                <span className="font-italic italic font-normal">YOUR DIGITAL</span> <br />
                <span className="font-bold underline decoration-[#7B151C] underline-offset-8">
                  PRESENCE.
                </span>
              </motion.h2>
            </div>

            {/* Service Pillars Tagline */}
            <div className="text-xs font-sans tracking-[0.25em] text-[#6E1117] font-semibold uppercase flex flex-wrap gap-x-4 gap-y-2">
              <span>Websites</span>
              <span className="text-[#7B151C]">•</span>
              <span>Social Media</span>
              <span className="text-[#7B151C]">•</span>
              <span>Content</span>
              <span className="text-[#7B151C]">•</span>
              <span>SEO</span>
              <span className="text-[#7B151C]">•</span>
              <span>Creative Production</span>
            </div>

            <p className="text-lg sm:text-xl font-sans text-[#6E1117] leading-relaxed font-light border-l-2 border-[#5B0F14] pl-6">
              Tell us where your brand is today. We'll help you build where it can go next.
            </p>

            {/* Main Action Trigger */}
            <div className="pt-4 flex flex-wrap items-center gap-6">
              <button
                onClick={onOpenContact}
                className="group relative inline-flex items-center space-x-3 bg-[#5B0F14] text-[#F4E8D0] text-xs font-sans font-bold tracking-[0.25em] uppercase px-10 py-5 rounded-full transition-all duration-300 hover:bg-[#6E1117] hover:shadow-[0_0_35px_rgba(91,15,20,0.4)] active:scale-95"
              >
                <span>LET'S TALK</span>
                <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </div>

            {/* Direct Contact Details Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 border-t border-[#5B0F14]/20">
              
              <a
                href="mailto:coreaura.official@gmail.com"
                className="p-5 rounded-2xl bg-[#EFE0C4]/70 border border-[#5B0F14]/20 hover:border-[#5B0F14] transition-all group flex items-center space-x-4"
              >
                <div className="w-10 h-10 rounded-full bg-[#5B0F14] text-[#F4E8D0] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-sans tracking-widest text-[#6E1117]/70 uppercase block">EMAIL STUDIO</span>
                  <span className="text-xs font-sans font-bold text-[#5B0F14] group-hover:underline">
                    coreaura.official@gmail.com
                  </span>
                </div>
              </a>

              <a
                href="https://wa.me/919360705346"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-[#EFE0C4]/70 border border-[#5B0F14]/20 hover:border-[#5B0F14] transition-all group flex items-center space-x-4"
              >
                <div className="w-10 h-10 rounded-full bg-[#5B0F14] text-[#F4E8D0] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-sans tracking-widest text-[#6E1117]/70 uppercase block">PHONE / WHATSAPP</span>
                  <span className="text-xs font-sans font-bold text-[#5B0F14] group-hover:underline">
                    +91 9360705346
                  </span>
                </div>
              </a>

            </div>
          </div>

          {/* Right Column: Contact Mascot Character */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden border border-[#5B0F14]/30 bg-[#5B0F14] text-[#F4E8D0] shadow-2xl p-4 flex flex-col justify-between group"
            >
              <img
                src="/assets/contact_mascot.png"
                alt="Core Aura Contact Mascot Welcoming"
                className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute bottom-6 left-6 right-6 bg-[#3B070A]/90 backdrop-blur-md p-4 rounded-2xl border border-[#F4E8D0]/30 shadow-xl flex items-center justify-between">
                <div>
                  <h4 className="font-editorial text-lg text-[#FAF5EB]">STUDIO INQUIRIES</h4>
                  <p className="text-[10px] font-sans tracking-widest text-[#EFE0C4]/70 uppercase">RESPONSE WITHIN 24H</p>
                </div>
                <button
                  onClick={onOpenContact}
                  className="p-2 rounded-full bg-[#F4E8D0] text-[#5B0F14] hover:scale-110 transition-transform"
                >
                  <MessageSquare className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Prominent Core Aura Official Logo Mark */}
        <div className="pt-16 border-t border-[#5B0F14]/20 flex flex-col items-center justify-center text-center">
          <img
            src="/assets/logo.png"
            alt="CORE AURA Official Studio Logo"
            className="h-28 sm:h-36 w-auto object-contain mix-blend-multiply mb-3"
          />
          <p className="text-xs font-sans tracking-[0.3em] uppercase text-[#6E1117] font-semibold">
            CREATIVE & DIGITAL GROWTH STUDIO
          </p>
        </div>

      </div>
    </section>
  );
};
