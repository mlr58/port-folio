import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';

const content = {
  en: {
    subtitle: 'Skills & Tools',
    title: 'Technical Toolkit',
    categories: [
      {
        title: "Programming",
        skills: [
          { name: "Python", level: 95 },
          { name: "SQL", level: 90 },
          { name: "PySpark", level: 85 },
          { name: "C++", level: 70 },
        ]
      },
      {
        title: "Machine Learning",
        skills: [
          { name: "TensorFlow", level: 85 },
          { name: "Scikit-learn", level: 90 },
          { name: "NumPy/Pandas", level: 95 },
          { name: "MLflow", level: 75 },
        ]
      },
      {
        title: "Data Engineering",
        skills: [
          { name: "PostgreSQL", level: 85 },
          { name: "Docker", level: 80 },
          { name: "AWS", level: 75 },
          { name: "FastAPI", level: 85 },
        ]
      },
      {
        title: "Visualization & Tools",
        skills: [
          { name: "Power BI", level: 85 },
          { name: "Matplotlib", level: 90 },
          { name: "GitHub Actions", level: 80 },
          { name: "Prefect", level: 75 },
        ]
      }
    ],
    alsoProf: 'Also proficient in',
    tools: ["Git", "Linux", "Task Scheduler", "Selenium", "Plotly", "Streamlit", "Monte Carlo", "Jupyter"]
  },
  es: {
    subtitle: 'Habilidades y Herramientas',
    title: 'Kit de Herramientas Técnicas',
    categories: [
      {
        title: "Programación",
        skills: [
          { name: "Python", level: 95 },
          { name: "SQL", level: 90 },
          { name: "PySpark", level: 85 },
          { name: "C++", level: 70 },
        ]
      },
      {
        title: "Aprendizaje Automático",
        skills: [
          { name: "TensorFlow", level: 85 },
          { name: "Scikit-learn", level: 90 },
          { name: "NumPy/Pandas", level: 95 },
          { name: "MLflow", level: 75 },
        ]
      },
      {
        title: "Ingeniería de Datos",
        skills: [
          { name: "PostgreSQL", level: 85 },
          { name: "Docker", level: 80 },
          { name: "AWS", level: 75 },
          { name: "FastAPI", level: 85 },
        ]
      },
      {
        title: "Visualización y Herramientas",
        skills: [
          { name: "Power BI", level: 85 },
          { name: "Matplotlib", level: 90 },
          { name: "GitHub Actions", level: 80 },
          { name: "Prefect", level: 75 },
        ]
      }
    ],
    alsoProf: 'También competente en',
    tools: ["Git", "Linux", "Task Scheduler", "Selenium", "Plotly", "Streamlit", "Monte Carlo", "Jupyter"]
  }
};

export default function SkillsSection() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section className="py-32 bg-gradient-to-b from-slate-950 to-slate-900 relative">
      <div className="max-w-6xl mx-auto px-6">
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

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {t.categories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              className="p-8 rounded-2xl bg-slate-900/30 border border-slate-800"
            >
              <h3 className="text-xl font-semibold text-white mb-6">{category.title}</h3>
              <div className="space-y-5">
                {category.skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-300 font-medium">{skill.name}</span>
                      <span className="text-slate-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-lg font-semibold text-slate-400 mb-6">{t.alsoProf}</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {t.tools.map((tool, index) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-300 text-sm font-medium hover:border-blue-500/30 hover:text-white transition-all duration-300"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}