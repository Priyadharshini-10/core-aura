import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2 } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Website Development',
    budget: '$5k - $10k',
    message: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Auto close after 3 seconds on submit
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 3000);
    }, 500);
  };

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

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl bg-[#5B0F14] text-[#F4E8D0] rounded-3xl border border-[#F4E8D0]/30 shadow-[0_30px_90px_rgba(0,0,0,0.8)] overflow-hidden z-10 my-auto"
        >
          {/* Header */}
          <div className="p-6 sm:p-8 border-b border-[#7B151C]/60 flex items-center justify-between bg-[#6E1117]/50">
            <div className="flex items-center space-x-4">
              <img
                src="/assets/logo.png"
                alt="CORE AURA Official Logo"
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full border border-[#F4E8D0]/30 hover:border-[#F4E8D0] hover:bg-[#7B151C] transition-colors"
            >
              <X className="w-5 h-5 text-[#F4E8D0]" />
            </button>
          </div>

          {submitted ? (
            <div className="p-12 text-center flex flex-col items-center justify-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#7B151C] border border-[#F4E8D0] flex items-center justify-center text-[#F4E8D0]">
                <CheckCircle2 className="w-8 h-8 animate-bounce" />
              </div>
              <h4 className="font-editorial text-3xl text-[#FAF5EB]">Inquiry Received</h4>
              <p className="font-sans text-sm text-[#EFE0C4]/80 max-w-md">
                Thank you for reaching out to Core Aura. Our studio team will review your project details and respond within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs font-sans tracking-widest uppercase text-[#EFE0C4]/80 block mb-2 font-medium">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#6E1117]/40 border border-[#7B151C] focus:border-[#F4E8D0] rounded-xl px-4 py-3 text-sm font-sans text-[#F4E8D0] focus:outline-none transition-colors"
                    placeholder="e.g. Vivienne Westwood"
                  />
                </div>

                <div>
                  <label className="text-xs font-sans tracking-widest uppercase text-[#EFE0C4]/80 block mb-2 font-medium">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#6E1117]/40 border border-[#7B151C] focus:border-[#F4E8D0] rounded-xl px-4 py-3 text-sm font-sans text-[#F4E8D0] focus:outline-none transition-colors"
                    placeholder="name@brand.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs font-sans tracking-widest uppercase text-[#EFE0C4]/80 block mb-2 font-medium">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#6E1117]/40 border border-[#7B151C] focus:border-[#F4E8D0] rounded-xl px-4 py-3 text-sm font-sans text-[#F4E8D0] focus:outline-none transition-colors"
                    placeholder="+91 9360705346"
                  />
                </div>

                <div>
                  <label className="text-xs font-sans tracking-widest uppercase text-[#EFE0C4]/80 block mb-2 font-medium">
                    Primary Service Needed
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-[#6E1117] border border-[#7B151C] focus:border-[#F4E8D0] rounded-xl px-4 py-3 text-sm font-sans text-[#F4E8D0] focus:outline-none transition-colors cursor-pointer"
                  >
                    <option value="Website Development">Website Development</option>
                    <option value="Social Media Management">Social Media Management</option>
                    <option value="Professional Ad Shoots">Professional Ad Shoots</option>
                    <option value="Product Photography">Product Photography</option>
                    <option value="Google Business Profile & SEO">Google Business Profile & SEO</option>
                    <option value="Content Writing">Content Writing</option>
                    <option value="E-Commerce Development">E-Commerce Development</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-sans tracking-widest uppercase text-[#EFE0C4]/80 block mb-2 font-medium">
                  Project Details & Goals
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#6E1117]/40 border border-[#7B151C] focus:border-[#F4E8D0] rounded-xl px-4 py-3 text-sm font-sans text-[#F4E8D0] focus:outline-none transition-colors"
                  placeholder="Tell us about your brand vision, target timeline, or project requirements..."
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <div className="text-xs font-sans text-[#EFE0C4]/60 hidden sm:block">
                  Direct: <span className="text-[#F4E8D0]">coreaura.official@gmail.com</span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto bg-[#F4E8D0] text-[#5B0F14] text-xs font-sans font-bold tracking-[0.25em] uppercase px-8 py-4 rounded-full flex items-center justify-center space-x-2 hover:bg-[#FAF5EB] transition-all hover:shadow-xl"
                >
                  <span>SUBMIT INQUIRY</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
