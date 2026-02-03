import React from 'react';
import { useLanguage } from './LanguageContext';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Button
      onClick={toggleLanguage}
      variant="outline"
      size="sm"
      className="fixed top-6 right-6 z-50 border-slate-700 bg-slate-900/80 backdrop-blur-sm text-slate-300 hover:bg-slate-800 hover:text-white"
    >
      <Globe className="w-4 h-4 mr-2" />
      {language === 'en' ? 'ES' : 'EN'}
    </Button>
  );
}