import React from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, Send, Bookmark, Sparkles, CheckCircle2 } from 'lucide-react';

export const SocialMediaSection: React.FC = () => {
  const steps = [
    { num: '01', title: 'POSITION', desc: 'Find the story worth owning in your market niche.' },
    { num: '02', title: 'PLAN', desc: 'Turn ideas into a scalable, consistent content system.' },
    { num: '03', title: 'CREATE', desc: 'Reels, carousels, video campaigns and visual stories.' },
    { num: '04', title: 'CONNECT', desc: 'Build meaningful conversations, not just empty follower counts.' },
    { num: '05', title: 'OPTIMISE', desc: 'Learn from performance analytics and continuously sharpen what works.' },
  ];

  return (
    <section className="bg-[#F4E8D0] text-[#5B0F14] py-28 px-6 md:px-12 relative overflow-hidden border-b border-[#EFE0C4]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Headline */}
        <div className="max-w-3xl mb-20">
          <span className="text-xs font-sans tracking-[0.3em] uppercase text-[#6E1117] font-semibold block mb-4">
            SOCIAL MEDIA MANAGEMENT
          </span>
          <motion.h2
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-light leading-[1.05] mb-6"
          >
            DON'T JUST SHOW UP. <br />
            <span className="font-bold underline decoration-[#7B151C] underline-offset-4">
              BUILD A BRAND
            </span> <br />
            <span className="font-italic italic font-normal">PEOPLE REMEMBER.</span>
          </motion.h2>
          <p className="text-base sm:text-lg font-sans text-[#6E1117] leading-relaxed font-light border-l-2 border-[#5B0F14] pl-6">
            From scattered posts to a recognizable digital presence — we turn your social channels into a brand people can understand, trust, and remember.
          </p>
        </div>

        {/* 2 Column Layout: Left Steps + Right 3D Phone Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: 5 Steps Timeline */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            {steps.map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 1, x: 0 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="p-6 rounded-2xl bg-[#EFE0C4]/70 border border-[#5B0F14]/20 hover:border-[#5B0F14] hover:bg-[#EFE0C4] transition-all group flex items-start space-x-6 shadow-sm hover:shadow-md"
              >
                <span className="font-editorial text-4xl font-light text-[#7B151C] shrink-0 group-hover:scale-110 transition-transform">
                  {step.num}
                </span>
                <div>
                  <h3 className="font-sans text-sm tracking-[0.25em] uppercase font-bold text-[#5B0F14] mb-1">
                    {step.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#6E1117]/90 font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: 3D Phone Mockup + Mascot Character */}
          <div className="lg:col-span-6 flex justify-center relative">
            <div className="relative w-full max-w-sm">
              
              {/* Outer Phone Container */}
              <motion.div
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full bg-[#5B0F14] rounded-[40px] p-4 border-4 border-[#7B151C] shadow-[0_30px_70px_rgba(91,15,20,0.4)] text-[#F4E8D0] relative overflow-hidden"
              >
                {/* Phone Notch */}
                <div className="w-32 h-5 bg-[#3B070A] rounded-b-xl mx-auto mb-4 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-[#5B0F14]/60 mr-2" />
                  <div className="w-8 h-1 rounded-full bg-[#5B0F14]/60" />
                </div>

                {/* Mock Instagram Header */}
                <div className="flex items-center justify-between px-3 pb-3 border-b border-[#7B151C]/40">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-[#7B151C] border border-[#F4E8D0]/40 flex items-center justify-center font-editorial text-xs font-bold">
                      CA
                    </div>
                    <div>
                      <h4 className="text-xs font-sans font-bold tracking-wider">coreaura.studio</h4>
                      <p className="text-[9px] text-[#EFE0C4]/60 font-sans uppercase tracking-widest">Growth Studio</p>
                    </div>
                  </div>
                  <Sparkles className="w-4 h-4 text-[#F4E8D0]" />
                </div>

                {/* Feed Mascot Preview Image */}
                <div className="relative w-full aspect-square my-3 rounded-2xl overflow-hidden border border-[#7B151C]/40 bg-[#6E1117]">
                  <img
                    src="/assets/social_mascot.png"
                    alt="Core Aura Social Media Mascot"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute top-3 right-3 bg-[#5B0F14]/90 px-2.5 py-1 rounded-full text-[9px] font-sans font-bold tracking-widest text-[#F4E8D0]">
                    REEL 4K
                  </div>
                </div>

                {/* Feed Action Bar */}
                <div className="flex items-center justify-between px-3 py-2">
                  <div className="flex items-center space-x-4 text-[#F4E8D0]">
                    <Heart className="w-5 h-5 text-rose-300 fill-rose-300 animate-pulse" />
                    <MessageCircle className="w-5 h-5" />
                    <Send className="w-5 h-5" />
                  </div>
                  <Bookmark className="w-5 h-5" />
                </div>

                {/* Caption Snippet */}
                <div className="px-3 pb-4 space-y-1 text-xs font-sans">
                  <p className="font-semibold">Liked by <span className="underline">ambitiousbrands</span> and <span className="font-bold">14,280 others</span></p>
                  <p className="text-[#EFE0C4]/80 text-[11px] font-light">
                    <span className="font-bold text-[#F4E8D0]">coreaura.studio</span> Ideas made visible. Turning brand strategy into high-impact digital presence. ✨
                  </p>
                </div>
              </motion.div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-[#6E1117] text-[#F4E8D0] p-4 rounded-2xl border border-[#F4E8D0]/30 shadow-xl max-w-[200px]">
                <div className="flex items-center space-x-2 text-xs font-bold font-sans tracking-wider mb-1">
                  <CheckCircle2 className="w-4 h-4 text-[#F4E8D0]" />
                  <span>CONSISTENT SYSTEM</span>
                </div>
                <p className="text-[10px] text-[#EFE0C4]/80 font-sans font-light">
                  Custom content strategy for Instagram, LinkedIn & TikTok.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
