import React from 'react';
import { motion } from 'framer-motion';
import { Atom, Brain, TrendingUp, Database } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const content = {
  en: {
    subtitle: 'About Me',
    title: 'Where Physics Meets Data',
    description: 'My journey from physics research to data science was driven by a passion for uncovering patterns in complex systems. The same mathematical rigor that helped me model quantum phenomena now powers my approach to machine learning and data engineering.',
    highlights: [
      {
        icon: Atom,
        title: "Physics Foundation",
        description: "BSc in Physics from University of Granada with expertise in computational physics and complex systems"
      },
      {
        icon: Brain,
        title: "ML & AI",
        description: "Machine learning specialization with hands-on experience in TensorFlow and real-world deployments"
      },
      {
        icon: TrendingUp,
        title: "Business Impact",
        description: "Improved model performance by ~20% through optimized feature engineering at EY Spain"
      },
      {
        icon: Database,
        title: "Data Engineering",
        description: "Built production ETL pipelines with PySpark, PostgreSQL, and AWS for real-time analytics"
      }
    ]
  },
  es: {
    subtitle: 'Sobre Mí',
    title: 'Donde la Física se Encuentra con los Datos',
    description: 'Mi camino desde la investigación en física hasta la ciencia de datos fue impulsado por la pasión por descubrir patrones en sistemas complejos. El mismo rigor matemático que me ayudó a modelar fenómenos cuánticos ahora impulsa mi enfoque en el aprendizaje automático y la ingeniería de datos.',
    highlights: [
      {
        icon: Atom,
        title: "Base en Física",
        description: "Licenciatura en Física por la Universidad de Granada con experiencia en física computacional y sistemas complejos"
      },
      {
        icon: Brain,
        title: "ML e IA",
        description: "Especialización en aprendizaje automático con experiencia práctica en TensorFlow y despliegues reales"
      },
      {
        icon: TrendingUp,
        title: "Impacto en Negocio",
        description: "Mejoré el rendimiento de modelos en ~20% mediante ingeniería de características optimizada en EY España"
      },
      {
        icon: Database,
        title: "Ingeniería de Datos",
        description: "Construí pipelines ETL en producción con PySpark, PostgreSQL y AWS para análisis en tiempo real"
      }
    ]
  }
};

export default function AboutSection() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section className="py-32 bg-slate-950 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-blue-400 text-sm font-semibold tracking-widest uppercase">{t.subtitle}</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            {t.title}
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
            {t.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/30 transition-all duration-500">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-7 h-7 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}