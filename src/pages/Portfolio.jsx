import React from 'react';
import { LanguageProvider } from '@/components/portfolio/LanguageContext';
import LanguageToggle from '@/components/portfolio/LanguageToggle';
import HeroSection from '@/components/portfolio/HeroSection';
import AboutSection from '@/components/portfolio/AboutSection';
import SkillsSection from '@/components/portfolio/SkillsSection';
import ProjectsSection from '@/components/portfolio/ProjectsSection';
import ExperienceSection from '@/components/portfolio/ExperienceSection';
import CertificationsSection from '@/components/portfolio/CertificationsSection';
import ContactSection from '@/components/portfolio/ContactSection';

export default function Portfolio() {
  return (
    <LanguageProvider>
      <div className="bg-slate-950 min-h-screen">
        <LanguageToggle />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <CertificationsSection />
        <ContactSection />
      </div>
    </LanguageProvider>
  );
}