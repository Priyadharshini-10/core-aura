import React from 'react';
import { motion } from 'framer-motion';

export const WorkPortfolio: React.FC = () => {
  // All work gallery images from the studio portfolio & client shoots
  const galleryPhotos = [
    {
      src: '/assets/work_health_graphic.jpg',
      alt: 'Healthcare Ad & Thumbnail Campaign Visual',
      aspect: 'aspect-[3/4]',
      span: 'col-span-1 md:col-span-2 lg:col-span-1',
    },
    {
      src: '/assets/work_kids.png',
      alt: 'Little Aura Royal Blue Kids Couture',
      aspect: 'aspect-square',
      span: 'col-span-1',
    },
    {
      src: '/assets/work_saree.png',
      alt: 'Kasavu Saree Heritage Shoot in Field',
      aspect: 'aspect-[3/5]',
      span: 'col-span-1 md:col-span-2 lg:col-span-1 row-span-2',
    },
    {
      src: '/assets/work_beach.png',
      alt: 'Oceanic Coastal Editorial Portrait Shoot',
      aspect: 'aspect-[4/3]',
      span: 'col-span-1 md:col-span-2 lg:col-span-1',
    },
    {
      src: '/assets/work_teal_kurti.png',
      alt: 'Peacock Teal Silk Dupatta Shoot',
      aspect: 'aspect-[3/4]',
      span: 'col-span-1',
    },
    {
      src: '/assets/work_fitness.png',
      alt: 'Aura Fitness & Activewear Shoot',
      aspect: 'aspect-[3/4]',
      span: 'col-span-1',
    },
    {
      src: '/assets/work_maroon_silk.png',
      alt: 'Maroon Silk Traditional Kurti Shoot',
      aspect: 'aspect-[4/5]',
      span: 'col-span-1',
    },
    {
      src: '/assets/work_red.png',
      alt: 'Crimson Silk Motion Outdoor Shoot',
      aspect: 'aspect-[4/5]',
      span: 'col-span-1',
    },
    {
      src: '/assets/work_black_kurti1.png',
      alt: 'Noir Embroidered Chikankari Kurti Shoot',
      aspect: 'aspect-[3/4]',
      span: 'col-span-1',
    },
    {
      src: '/assets/work_black_kurti2.png',
      alt: 'Noir Embroidered Couture Portrait',
      aspect: 'aspect-[3/4]',
      span: 'col-span-1',
    },
    {
      src: '/assets/dr_sasikala_ad.jpg',
      alt: 'Dr. Sasikala Rheumatologist Visual Ad Campaign',
      aspect: 'aspect-[3/4]',
      span: 'col-span-1',
    },
    {
      src: '/assets/port_beauty.png',
      alt: 'Luxury Cosmetics Product Photography',
      aspect: 'aspect-square',
      span: 'col-span-1',
    },
    {
      src: '/assets/port_brand.png',
      alt: 'Textured Burgundy Embossed Identity',
      aspect: 'aspect-[4/3]',
      span: 'col-span-1 md:col-span-2 lg:col-span-1',
    },
  ];

  return (
    <section id="work" className="bg-[#F4E8D0] text-[#5B0F14] py-16 px-4 sm:px-6 md:px-12 relative overflow-hidden border-b border-[#EFE0C4]">
      
      {/* Background Subtle Watermark */}
      <div className="absolute top-6 right-8 font-editorial text-[140px] leading-none opacity-5 select-none pointer-events-none text-[#5B0F14]">
        GALLERY
      </div>

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header Matching Sample Reference: "Our Works:" */}
        <div className="text-center mb-8 sm:mb-10">
          <motion.h2
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-editorial text-5xl sm:text-7xl lg:text-8xl font-light text-[#5B0F14] tracking-tight inline-block relative"
          >
            Our Works:
          </motion.h2>
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-[#6E1117]/80 font-medium mt-2">
            A CURATED EDITORIAL VISUAL GALLERY
          </p>
        </div>

        {/* Tight Editorial Masonry Column Layout */}
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-2.5 sm:gap-3.5 space-y-2.5 sm:space-y-3.5">
          {galleryPhotos.map((photo, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (idx % 4) * 0.03 }}
              className="break-inside-avoid group relative overflow-hidden rounded-xl border border-[#5B0F14]/20 shadow-sm hover:shadow-xl transition-all duration-500 bg-[#EFE0C4]"
            >
              <div className="relative w-full overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-auto object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-[#5B0F14]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
