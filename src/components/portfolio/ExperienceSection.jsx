import React from 'react';
import { motion } from 'framer-motion';
import { Building2, GraduationCap } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const content = {
  en: {
    subtitle: 'Career',
    title: 'Professional Journey',
    experiences: [
      {
        type: "work",
        title: "Data Scientist",
        company: "EY Spain",
        period: "2023 - Present",
        description: "Supported development of batch data pipeline for fraud risk analysis. Implemented PySpark feature extraction with broadcast joins and window functions. Delivered curated datasets improving model performance by ~20%.",
        highlights: ["PySpark", "Fraud Detection", "MLOps"]
      },
      {
        type: "work",
        title: "ICARO Software Developer",
        company: "University of Granada",
        period: "2022 - 2023",
        description: "Automated meteorological data collection through web scraping scripts, reducing manual data gathering time by 90%.",
        highlights: ["Web Scraping", "Automation", "Python"]
      },
      {
        type: "education",
        title: "B.Sc. in Physics",
        company: "University of Granada",
        period: "2019 - 2023",
        description: "Thesis: Green Functions and Applications to Electromagnetism. Relevant courses: Computational Physics, Group Theory and Complex Systems.",
        highlights: ["Research", "Complex Systems", "Computational"]
      }
    ]
  },
  es: {
    subtitle: 'Carrera',
    title: 'Trayectoria Profesional',
    experiences: [
      {
        type: "work",
        title: "Científico de Datos",
        company: "EY España",
        period: "2023 - Presente",
        description: "Apoyé el desarrollo de pipeline de datos por lotes para análisis de riesgo de fraude. Implementé extracción de características con PySpark usando broadcast joins y funciones de ventana. Entregué datasets curados mejorando el rendimiento del modelo en ~20%.",
        highlights: ["PySpark", "Detección de Fraude", "MLOps"]
      },
      {
        type: "work",
        title: "Desarrollador de Software ICARO",
        company: "Universidad de Granada",
        period: "2022 - 2023",
        description: "Automaticé la recopilación de datos meteorológicos mediante scripts de web scraping, reduciendo el tiempo de recopilación manual de datos en un 90%.",
        highlights: ["Web Scraping", "Automatización", "Python"]
      },
      {
        type: "education",
        title: "Licenciatura en Física",
        company: "Universidad de Granada",
        period: "2019 - 2023",
        description: "Tesis: Funciones de Green y Aplicaciones al Electromagnetismo. Cursos relevantes: Física Computacional, Teoría de Grupos y Sistemas Complejos.",
        highlights: ["Investigación", "Sistemas Complejos", "Computacional"]
      }
    ]
  }
};

export default function ExperienceSection() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section className="py-32 bg-gradient-to-b from-slate-900 to-slate-950 relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">{t.subtitle}</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            {t.title}
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-cyan-500/50 to-transparent" />

          {t.experiences.map((exp, index) => (
            <motion.div
              key={`${exp.title}-${exp.company}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex items-start gap-8 mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 border-4 border-slate-950 z-10" />

              <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                <div className={`p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/30 transition-all duration-500 ${
                  index % 2 === 0 ? 'md:ml-auto' : ''
                }`}>
                  <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <div className={`p-2 rounded-lg ${exp.type === 'work' ? 'bg-blue-500/20' : 'bg-cyan-500/20'}`}>
                      {exp.type === 'work' ? (
                        <Building2 className="w-4 h-4 text-blue-400" />
                      ) : (
                        <GraduationCap className="w-4 h-4 text-cyan-400" />
                      )}
                    </div>
                    <span className="text-slate-500 text-sm font-medium">{exp.period}</span>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-1">{exp.title}</h3>
                  <p className="text-blue-400 font-medium mb-3">{exp.company}</p>
                  <p className="text-slate-400 mb-4 leading-relaxed">{exp.description}</p>

                  <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    {exp.highlights.map(h => (
                      <span key={h} className="px-3 py-1 rounded-full bg-slate-800/50 text-slate-400 text-xs font-medium">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}