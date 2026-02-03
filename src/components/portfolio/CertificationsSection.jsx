import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, ExternalLink } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const content = {
  en: {
    subtitle: 'Learning',
    title: 'Certifications & Courses',
    certTitle: 'Professional Certifications',
    coursesTitle: 'Completed Courses',
    certifications: [
      {
        title: "AWS Cloud Technical Essentials",
        issuer: "Amazon Web Services",
        date: "2024",
        badge: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=100&h=100&fit=crop"
      },
      {
        title: "Machine Learning Specialization",
        issuer: "DeepLearning.AI",
        date: "2024",
        badge: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=100&h=100&fit=crop"
      },
      {
        title: "Introduction to Quantum Information",
        issuer: "KAIST",
        date: "2023",
        badge: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=100&h=100&fit=crop"
      },
      {
        title: "CS50: Python, SQL, AI",
        issuer: "Harvard University",
        date: "2023",
        badge: "https://images.unsplash.com/photo-1562774053-701939374585?w=100&h=100&fit=crop"
      }
    ],
    courses: [
      { title: "Data Visualization & Advanced Python", platform: "Various Platforms", hours: 40 },
      { title: "Machine Learning Deployment", platform: "DeepLearning.AI", hours: 30 },
      { title: "Algorithms & Data Structures", platform: "Harvard CS50", hours: 50 },
      { title: "Cloud Architecture Fundamentals", platform: "AWS", hours: 25 },
      { title: "Quantum Computing Basics", platform: "KAIST", hours: 35 },
      { title: "Statistical Physics & Complex Systems", platform: "University of Granada", hours: 60 }
    ]
  },
  es: {
    subtitle: 'Aprendizaje',
    title: 'Certificaciones y Cursos',
    certTitle: 'Certificaciones Profesionales',
    coursesTitle: 'Cursos Completados',
    certifications: [
      {
        title: "AWS Cloud Technical Essentials",
        issuer: "Amazon Web Services",
        date: "2024",
        badge: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=100&h=100&fit=crop"
      },
      {
        title: "Especialización en Machine Learning",
        issuer: "DeepLearning.AI",
        date: "2024",
        badge: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=100&h=100&fit=crop"
      },
      {
        title: "Introducción a Información Cuántica",
        issuer: "KAIST",
        date: "2023",
        badge: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=100&h=100&fit=crop"
      },
      {
        title: "CS50: Python, SQL, AI",
        issuer: "Universidad de Harvard",
        date: "2023",
        badge: "https://images.unsplash.com/photo-1562774053-701939374585?w=100&h=100&fit=crop"
      }
    ],
    courses: [
      { title: "Visualización de Datos y Python Avanzado", platform: "Varias Plataformas", hours: 40 },
      { title: "Despliegue de Machine Learning", platform: "DeepLearning.AI", hours: 30 },
      { title: "Algoritmos y Estructuras de Datos", platform: "Harvard CS50", hours: 50 },
      { title: "Fundamentos de Arquitectura en la Nube", platform: "AWS", hours: 25 },
      { title: "Fundamentos de Computación Cuántica", platform: "KAIST", hours: 35 },
      { title: "Física Estadística y Sistemas Complejos", platform: "Universidad de Granada", hours: 60 }
    ]
  }
};

export default function CertificationsSection() {
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            {t.title}
          </h2>
        </motion.div>

        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
            <Award className="w-6 h-6 text-blue-400" />
            {t.certTitle}
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800/50 border border-slate-800 hover:border-blue-500/30 transition-all duration-500 h-full">
                  <div className="w-16 h-16 rounded-xl overflow-hidden mb-4 border border-slate-700">
                    <img src={cert.badge} alt={cert.issuer} className="w-full h-full object-cover" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {cert.title}
                  </h4>
                  <p className="text-slate-400 text-sm mb-2">{cert.issuer}</p>
                  <p className="text-slate-500 text-xs">{cert.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
            <BookOpen className="w-6 h-6 text-cyan-400" />
            {t.coursesTitle}
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {t.courses.map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group"
              >
                <div className="p-5 rounded-xl bg-slate-900/30 border border-slate-800 hover:border-cyan-500/30 transition-all duration-300 flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-medium mb-1 group-hover:text-cyan-300 transition-colors">
                      {course.title}
                    </h4>
                    <div className="flex items-center gap-3 text-sm">
                      <span className="text-slate-400">{course.platform}</span>
                      <span className="text-slate-600">•</span>
                      <span className="text-slate-500">{course.hours}h</span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}