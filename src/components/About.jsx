import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  User, 
  MapPin, 
  Calendar, 
  GraduationCap, 
  Trophy, 
  Activity, 
  Heart,
  Sparkles,
  Download,
  Mail
} from 'lucide-react';
import { personalInfo } from '../data/socials';

export const About = () => {
  const { t, i18n } = useTranslation();

  const infoCards = [
    {
      icon: Calendar,
      label: t('about.ageLabel'),
      value: i18n.language === 'uz' ? '19 yosh (2007-yil 8-mart)' : '19 years old (March 8, 2007)',
      color: 'text-indigo-500',
      bg: 'bg-indigo-500/10'
    },
    {
      icon: MapPin,
      label: t('about.locationLabel'),
      value: personalInfo.location,
      color: 'text-emerald-500',
      bg: 'bg-emerald-500/10'
    },
    {
      icon: GraduationCap,
      label: t('about.educationLabel'),
      value: "IT Live Academy — Frontend Development",
      color: 'text-sky-500',
      bg: 'bg-sky-500/10'
    },
    {
      icon: Activity,
      label: t('about.hobbyLabel'),
      value: i18n.language === 'uz' ? 'Futbol o\'ynash ⚽' : 'Playing Football ⚽',
      color: 'text-rose-500',
      bg: 'bg-rose-500/10',
      isBadge: true
    }
  ];

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 mb-3"
          >
            <User className="w-3.5 h-3.5" />
            <span>{t('about.badge')}</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white"
          >
            {t('about.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 mt-2 text-sm sm:text-base"
          >
            {t('about.subtitle')}
          </motion.p>
        </div>

        {/* Content Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white dark:bg-[#0f1422] p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-black/20 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-500 to-emerald-400 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-indigo-500/20">
                  BH
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {personalInfo.fullName}
                  </h3>
                  <p className="text-xs sm:text-sm text-indigo-500 font-medium">
                    {personalInfo.role} • 19 yosh
                  </p>
                </div>
              </div>

              {/* Bio Text */}
              <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                {t('about.bio')}
              </p>

              {/* Key Highlights */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-800">
                  <span className="block text-2xl sm:text-3xl font-extrabold text-indigo-600 dark:text-indigo-400">
                    6+
                  </span>
                  <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">
                    Amaliy Loyihalar
                  </span>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-800">
                  <span className="block text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">
                    100%
                  </span>
                  <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">
                    Responsive & Toza Kod
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-8 flex flex-wrap gap-4 items-center">
              <button
                onClick={scrollToContact}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors shadow-md shadow-indigo-500/20 text-sm"
              >
                <Mail className="w-4 h-4" />
                <span>{t('about.contactMe')}</span>
              </button>

              {/* // TODO: CV PDF faylini public/cv.pdf sifatida joylang va havolani shu yerga bog'lang */}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  alert(t('hero.cvNotice'));
                }}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-sm"
              >
                <Download className="w-4 h-4 text-indigo-500" />
                <span>{t('about.downloadResume')}</span>
              </a>
            </div>
          </motion.div>

          {/* Detailed Info Cards Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {infoCards.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white dark:bg-[#0f1422] p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-indigo-500/40 dark:hover:border-indigo-500/40 transition-all flex items-start gap-4"
                >
                  <div className={`p-3 rounded-xl ${item.bg} ${item.color} shrink-0`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-1">
                      {item.label}
                    </span>
                    <p className="text-sm sm:text-base font-medium text-slate-800 dark:text-slate-200">
                      {item.value}
                    </p>
                    {item.isBadge && (
                      <span className="inline-block mt-2 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-rose-500/10 text-rose-500 border border-rose-500/20">
                        Sevimli mashg'ulot
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
