import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Github, Linkedin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { useLanguage } from './LanguageContext';

const content = {
  en: {
    subtitle: 'Contact',
    title: "Let's Connect",
    description: "Interested in collaboration or have a project in mind? I'd love to hear from you.",
    email: 'Email',
    location: 'Location',
    phone: 'Phone',
    locationText: 'Granada, Spain',
    follow: 'Follow Me',
    name: 'Your Name',
    yourEmail: 'Your Email',
    message: 'Your Message',
    send: 'Send Message',
    sending: 'Sending...',
    success: 'Message sent successfully!',
    footer: '© 2026 Manuel Lora Ruiz. Built with passion for data science.'
  },
  es: {
    subtitle: 'Contacto',
    title: "Conectemos",
    description: "¿Interesado en colaboración o tienes un proyecto en mente? Me encantaría saber de ti.",
    email: 'Correo',
    location: 'Ubicación',
    phone: 'Teléfono',
    locationText: 'Granada, España',
    follow: 'Sígueme',
    name: 'Tu Nombre',
    yourEmail: 'Tu Correo',
    message: 'Tu Mensaje',
    send: 'Enviar Mensaje',
    sending: 'Enviando...',
    success: '¡Mensaje enviado con éxito!',
    footer: '© 2026 Manuel Lora Ruiz. Construido con pasión por la ciencia de datos.'
  }
};

export default function ContactSection() {
  const { language } = useLanguage();
  const t = content[language];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast.success(t.success);
    setFormData({ name: '', email: '', message: '' });
    setSending(false);
  };

  return (
    <section className="py-32 bg-gradient-to-b from-slate-950 to-slate-900 relative">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">{t.subtitle}</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            {t.title}
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            {t.description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-blue-500/20 border border-blue-500/30">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">{t.email}</h3>
                  <a href="mailto:manuelloraruiz8@gmail.com" className="text-slate-400 hover:text-blue-400 transition-colors">
                    manuelloraruiz8@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-cyan-500/20 border border-cyan-500/30">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">{t.location}</h3>
                  <p className="text-slate-400">{t.locationText}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-purple-500/20 border border-purple-500/30">
                  <Phone className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">{t.phone}</h3>
                  <a href="tel:+34645489250" className="text-slate-400 hover:text-purple-400 transition-colors">
                    +34 645-48-92-50
                  </a>
                </div>
              </div>

              <div className="pt-8 border-t border-slate-800">
                <h3 className="text-white font-semibold mb-4">{t.follow}</h3>
                <div className="flex gap-4">
                  <a href="https://github.com/mlr58" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-400 hover:text-white hover:border-blue-500/50 transition-all duration-300">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="https://linkedin.com/in/manuelloraruiz" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-400 hover:text-white hover:border-blue-500/50 transition-all duration-300">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder={t.name}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-slate-900/50 border-slate-800 text-white placeholder:text-slate-500 h-12 rounded-xl focus:border-blue-500/50"
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder={t.yourEmail}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-slate-900/50 border-slate-800 text-white placeholder:text-slate-500 h-12 rounded-xl focus:border-blue-500/50"
                  required
                />
              </div>
              <div>
                <Textarea
                  placeholder={t.message}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-slate-900/50 border-slate-800 text-white placeholder:text-slate-500 min-h-32 rounded-xl focus:border-blue-500/50 resize-none"
                  required
                />
              </div>
              <Button 
                type="submit"
                disabled={sending}
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white h-12 rounded-xl transition-all duration-300"
              >
                {sending ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    {t.sending}
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-4 h-4" />
                    {t.send}
                  </span>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-32 pt-8 border-t border-slate-800">
        <p className="text-center text-slate-500 text-sm">
          {t.footer}
        </p>
      </div>
    </section>
  );
}