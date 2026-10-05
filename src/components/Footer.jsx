import React from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Github, 
  Mail, 
  Send, 
  ArrowUp, 
  Heart,
  Code
} from 'lucide-react';
import { socialLinks, personalInfo } from '../data/socials';

export const Footer = () => {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-white dark:bg-[#070a12] border-t border-slate-200 dark:border-slate-800/80 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100 dark:border-slate-800">
          
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-emerald-400 p-[1.5px]">
                <div className="w-full h-full bg-white dark:bg-[#0b0f19] rounded-[7px] flex items-center justify-center">
                  <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-emerald-400 text-sm">
                    BH
                  </span>
                </div>
              </div>
              <span className="font-bold text-slate-900 dark:text-white tracking-tight">
                {personalInfo.fullName}
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Frontend Developer • React & JavaScript
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noreferrer"
              title="GitHub"
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 text-slate-600 dark:text-slate-300 transition-all hover:scale-110"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${socialLinks.email}`}
              title="Email"
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-600 text-slate-600 dark:text-slate-300 transition-all hover:scale-110"
            >
              <Mail className="w-4 h-4" />
            </a>

            {/* // TODO: Telegram username kiriting (masalan https://t.me/username) */}
            <a
              href={socialLinks.telegram}
              target="_blank"
              rel="noreferrer"
              title="Telegram"
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-sky-500 hover:text-white dark:hover:bg-sky-500 text-slate-600 dark:text-slate-300 transition-all hover:scale-110"
            >
              <Send className="w-4 h-4" />
            </a>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              title={t('footer.backToTop')}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-all hover:scale-110"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-3 text-center sm:text-left">
          <p>
            © 2025 {personalInfo.fullName}. {t('footer.rights')}
          </p>
          <p className="flex items-center gap-1">
            <span>React & Tailwind CSS bilan tayyorlandi</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
