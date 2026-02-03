import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from './LanguageContext';

const content = {
  en: {
    badge: 'Physicist → Data Scientist',
    subtitle: 'From Quantum Mechanics to Machine Learning',
    description: 'Leveraging a BSc in Physics to solve complex data challenges. Passionate about transforming raw data into actionable insights using statistical rigor and computational expertise.',
    viewProjects: 'View Projects',
    downloadCV: 'Download CV'
  },
  es: {
    badge: 'Físico → Científico de Datos',
    subtitle: 'De la Mecánica Cuántica al Aprendizaje Automático',
    description: 'Aprovechando una Licenciatura en Física para resolver desafíos complejos de datos. Apasionado por transformar datos en bruto en información útil utilizando rigor estadístico y experiencia computacional.',
    viewProjects: 'Ver Proyectos',
    downloadCV: 'Descargar CV'
  }
};

export default function HeroSection() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
            <span className="text-blue-300 text-sm font-medium tracking-wide">{t.badge}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
              Manuel Lora Ruiz
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-400 mb-4 font-light">
            {t.subtitle}
          </p>

          <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-12 leading-relaxed">
            {t.description}
          </p>

          <div className="flex items-center justify-center gap-4 mb-16">
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            >
              {t.viewProjects}
            </Button>
            <Button 
              variant="outline" 
              className="border-slate-700 text-slate-300 hover:bg-slate-800 px-8 py-6 text-lg rounded-xl transition-all duration-300"
              onClick={() => window.open('#', '_blank')}
            >
              {t.downloadCV}
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a href="https://github.com/mlr58" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-400 hover:text-white hover:border-blue-500/50 transition-all duration-300 hover:scale-110">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/manuelloraruiz" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-400 hover:text-white hover:border-blue-500/50 transition-all duration-300 hover:scale-110">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:manuelloraruiz8@gmail.com" className="p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-400 hover:text-white hover:border-blue-500/50 transition-all duration-300 hover:scale-110">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        <motion.div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-6 h-6 text-slate-600" />
        </motion.div>
      </div>
    </section>
  );
}