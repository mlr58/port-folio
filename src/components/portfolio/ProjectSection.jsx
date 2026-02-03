import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Database, Image, Activity, Users } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useLanguage } from './LanguageContext';

const content = {
  en: {
    subtitle: 'Portfolio',
    title: 'Featured Projects',
    description: 'A selection of data science and engineering projects that showcase my expertise',
    code: 'Code',
    liveDemo: 'Live Demo',
    projects: [
      {
        title: "Real-time Ticket Analysis Pipeline",
        description: "End-to-end ETL pipeline for email PDF data sources with real-time database and Power BI dashboard integration. Deployed on AWS with automated orchestration.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",
        tags: ["Python", "PostgreSQL", "AWS", "Power BI", "FastAPI"],
        icon: Database,
        color: "blue"
      },
      {
        title: "Image Web Scraping Bot",
        description: "Selenium-based automation pipeline that scraped 50,000+ images for computer vision training datasets with intelligent error handling and retry logic.",
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=60",
        tags: ["Selenium", "Python", "Computer Vision"],
        icon: Image,
        color: "cyan"
      },
      {
        title: "Computational Physics Simulations",
        description: "Python/C++ simulators solving nonlinear dynamics with 100,000+ time steps. Monte Carlo algorithms for statistical models with 40% scalability improvement.",
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&auto=format&fit=crop&q=60",
        tags: ["Python", "C++", "Monte Carlo", "NumPy"],
        icon: Activity,
        color: "purple"
      },
      {
        title: "Evolutionary Game Theory Modeling",
        description: "Complex systems modeling testing evolutionary stability across multiple strategy types. Visualized emergent equilibria and strategy dominance patterns.",
        image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&auto=format&fit=crop&q=60",
        tags: ["Python", "Matplotlib", "Pandas", "Complex Systems"],
        icon: Users,
        color: "emerald"
      }
    ]
  },
  es: {
    subtitle: 'Portfolio',
    title: 'Proyectos Destacados',
    description: 'Una selección de proyectos de ciencia de datos e ingeniería que muestran mi experiencia',
    code: 'Código',
    liveDemo: 'Demo en Vivo',
    projects: [
      {
        title: "Pipeline de Análisis de Tickets en Tiempo Real",
        description: "Pipeline ETL end-to-end para fuentes de datos PDF de correos con integración en tiempo real a base de datos y dashboard de Power BI. Desplegado en AWS con orquestación automatizada.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",
        tags: ["Python", "PostgreSQL", "AWS", "Power BI", "FastAPI"],
        icon: Database,
        color: "blue"
      },
      {
        title: "Bot de Web Scraping de Imágenes",
        description: "Pipeline de automatización basado en Selenium que recopiló más de 50,000 imágenes para conjuntos de datos de entrenamiento de visión por computadora con manejo inteligente de errores.",
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=60",
        tags: ["Selenium", "Python", "Visión por Computadora"],
        icon: Image,
        color: "cyan"
      },
      {
        title: "Simulaciones de Física Computacional",
        description: "Simuladores Python/C++ que resuelven dinámicas no lineales con más de 100,000 pasos temporales. Algoritmos Monte Carlo para modelos estadísticos con mejora del 40% en escalabilidad.",
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&auto=format&fit=crop&q=60",
        tags: ["Python", "C++", "Monte Carlo", "NumPy"],
        icon: Activity,
        color: "purple"
      },
      {
        title: "Modelado de Teoría de Juegos Evolutivos",
        description: "Modelado de sistemas complejos probando estabilidad evolutiva entre múltiples tipos de estrategias. Visualización de equilibrios emergentes y patrones de dominancia estratégica.",
        image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&auto=format&fit=crop&q=60",
        tags: ["Python", "Matplotlib", "Pandas", "Sistemas Complejos"],
        icon: Users,
        color: "emerald"
      }
    ]
  }
};

const colorMap = {
  blue: "from-blue-500/20 to-blue-600/20 border-blue-500/30",
  cyan: "from-cyan-500/20 to-cyan-600/20 border-cyan-500/30",
  purple: "from-purple-500/20 to-purple-600/20 border-purple-500/30",
  emerald: "from-emerald-500/20 to-emerald-600/20 border-emerald-500/30"
};

const iconColorMap = {
  blue: "text-blue-400",
  cyan: "text-cyan-400",
  purple: "text-purple-400",
  emerald: "text-emerald-400"
};

export default function ProjectsSection() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section id="projects" className="py-32 bg-slate-900 relative">
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
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            {t.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {t.projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative rounded-2xl overflow-hidden bg-slate-800/30 border border-slate-700/50 hover:border-slate-600 transition-all duration-500">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                  <div className={`absolute top-4 left-4 p-3 rounded-xl bg-gradient-to-br ${colorMap[project.color]} backdrop-blur-sm border`}>
                    <project.icon className={`w-5 h-5 ${iconColorMap[project.color]}`} />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="bg-slate-700/50 text-slate-300 border-0">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="border-slate-700 text-slate-300 hover:bg-slate-800">
                      <Github className="w-4 h-4 mr-2" />
                      {t.code}
                    </Button>
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