import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HomeIntro } from './components/HomeIntro';
import { ServicesSection } from './components/ServicesSection';
import { WorkPortfolio } from './components/WorkPortfolio';
import { SocialMediaSection } from './components/SocialMediaSection';
import { VisualProductionSection } from './components/VisualProductionSection';
import { LocalSEOSection } from './components/LocalSEOSection';
import { ContentWritingSection } from './components/ContentWritingSection';
import { ApproachSection } from './components/ApproachSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';

export function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="relative bg-[#5B0F14] text-[#F4E8D0] min-h-screen selection:bg-[#7B151C] selection:text-[#F4E8D0] font-sans overflow-x-hidden">
      {/* Paper Grain Overlay */}
      <div className="grain-overlay" />

      {/* Navigation Bar */}
      <Navbar onOpenContact={() => setIsContactOpen(true)} />

      {/* Main Page Flow */}
      <main>
        {/* 1. HERO SECTION */}
        <Hero onOpenContact={() => setIsContactOpen(true)} />

        {/* 2. HOME INTRO / PHILOSOPHY (4 PILLARS) */}
        <HomeIntro />

        {/* 3. SERVICES SECTION */}
        <ServicesSection onOpenContact={() => setIsContactOpen(true)} />

        {/* 4. WORK / PORTFOLIO CASE STUDIES */}
        <WorkPortfolio />

        {/* 5. SOCIAL MEDIA SECTION */}
        <SocialMediaSection />

        {/* 6. VISUAL PRODUCTION (AD SHOOTS & PRODUCT PHOTOGRAPHY) */}
        <VisualProductionSection />

        {/* 7. LOCAL SEO & GOOGLE BUSINESS PROFILE */}
        <LocalSEOSection />

        {/* 8. CONTENT WRITING SECTION */}
        <ContentWritingSection />

        {/* 9. OUR APPROACH (5-STAGE TIMELINE) */}
        <ApproachSection />

        {/* 10. ABOUT CORE AURA */}
        <AboutSection />

        {/* 11. CONTACT SECTION */}
        <ContactSection onOpenContact={() => setIsContactOpen(true)} />
      </main>

      {/* FOOTER */}
      <Footer />

      {/* CONTACT INQUIRY MODAL */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}

export default App;
