import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  client: string;
  year: string;
  image: string;
  description: string;
  impact: string[];
  deliverables: string[];
  quote: string;
}

interface CaseStudyModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose, onOpenContact }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-12 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#3B070A]/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl bg-[#5B0F14] text-[#F4E8D0] rounded-3xl border border-[#F4E8D0]/30 shadow-[0_30px_90px_rgba(0,0,0,0.8)] overflow-hidden z-10 my-auto"
        >
          {/* Top Bar */}
          <div className="p-6 sm:p-8 border-b border-[#7B151C]/60 flex items-center justify-between bg-[#6E1117]/50">
            <div className="flex items-center space-x-3">
              <span className="px-3 py-1 rounded-full bg-[#7B151C] text-[10px] font-sans tracking-widest text-[#F4E8D0] uppercase font-bold border border-[#F4E8D0]/20">
                {project.category}
              </span>
              <span className="text-xs font-sans tracking-widest text-[#EFE0C4]/60 uppercase">
                {project.client} • {project.year}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full border border-[#F4E8D0]/30 hover:border-[#F4E8D0] hover:bg-[#7B151C] transition-colors"
            >
              <X className="w-5 h-5 text-[#F4E8D0]" />
            </button>
          </div>

          {/* Modal Content Scroll Area */}
          <div className="p-6 sm:p-10 space-y-10 max-h-[75vh] overflow-y-auto">
            {/* Header Title */}
            <div>
              <h2 className="font-editorial text-4xl sm:text-6xl font-light text-[#FAF5EB] leading-tight mb-4">
                {project.title}
              </h2>
              <p className="font-sans text-base sm:text-lg text-[#EFE0C4]/90 font-light leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Featured Image */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-[#F4E8D0]/20 shadow-2xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#5B0F14] via-transparent to-transparent opacity-60" />
            </div>

            {/* Grid Metrics & Deliverables */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-[#7B151C]/60">
              {/* Deliverables */}
              <div>
                <h3 className="text-xs font-sans tracking-[0.25em] uppercase text-[#EFE0C4]/70 font-semibold mb-4 flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-[#F4E8D0]" />
                  <span>STUDIO DELIVERABLES</span>
                </h3>
                <ul className="space-y-3">
                  {project.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-3 text-sm font-sans text-[#F4E8D0]">
                      <CheckCircle2 className="w-4 h-4 text-[#7B151C] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Measured Impact */}
              <div>
                <h3 className="text-xs font-sans tracking-[0.25em] uppercase text-[#EFE0C4]/70 font-semibold mb-4">
                  MEASURED IMPACT
                </h3>
                <ul className="space-y-3">
                  {project.impact.map((metric, idx) => (
                    <li key={idx} className="p-3 rounded-xl bg-[#6E1117]/40 border border-[#7B151C]/40 text-sm font-sans text-[#FAF5EB]">
                      {metric}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Quote Block */}
            <div className="p-6 rounded-2xl bg-[#6E1117]/40 border border-[#F4E8D0]/20 text-center">
              <p className="font-editorial text-xl italic text-[#FAF5EB] mb-2">
                "{project.quote}"
              </p>
              <span className="text-[11px] font-sans tracking-widest text-[#EFE0C4]/70 uppercase">
                — {project.client} LEADERSHIP TEAM
              </span>
            </div>
          </div>

          {/* Modal Footer CTA */}
          <div className="p-6 sm:p-8 border-t border-[#7B151C]/60 bg-[#3B070A]/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs font-sans tracking-widest text-[#EFE0C4]/70 uppercase block">
                READY TO ELEVATE YOUR BRAND?
              </span>
              <h4 className="font-editorial text-xl text-[#F4E8D0]">Build a case study like this with Core Aura.</h4>
            </div>

            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="bg-[#F4E8D0] text-[#5B0F14] text-xs font-sans font-bold tracking-[0.25em] uppercase px-8 py-3.5 rounded-full flex items-center space-x-2 hover:bg-[#FAF5EB] transition-colors shrink-0"
            >
              <span>START YOUR PROJECT</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
