import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Sparkles,
  BookOpen
} from 'lucide-react';
import { experienceData } from '../data/experience';

export const Experience = () => {
  const { t, i18n } = useTranslation();

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 mb-3"
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>{t('experience.badge')}</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white"
          >
            {t('experience.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 mt-2 text-sm sm:text-base"
          >
            {t('experience.subtitle')}
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-indigo-500/30 dark:border-indigo-500/20 ml-4 sm:ml-8 pl-6 sm:pl-8 space-y-12">
          {experienceData.map((item, idx) => {
            const title = i18n.language === 'uz' ? item.titleUz : item.titleEn;
            const role = i18n.language === 'uz' ? item.roleUz : item.roleEn;
            const period = i18n.language === 'uz' ? item.period : item.periodEn;
            const desc = i18n.language === 'uz' ? item.descriptionUz : item.descriptionEn;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative group"
              >
                {/* Timeline Node Dot */}
                <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-6 h-6 rounded-full bg-white dark:bg-[#080c14] border-4 border-indigo-600 dark:border-indigo-400 shadow-md group-hover:scale-125 transition-transform" />

                {/* Card */}
                <div className="bg-white dark:bg-[#0f1422] p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-black/20 hover:border-indigo-500/40 transition-all duration-300">
                  
                  {/* Top Header */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <div>
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-2">
                        {item.status}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                        {item.organization} — {title}
                      </h3>
                      <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mt-0.5">
                        {role}
                      </p>
                    </div>

                    <div className="flex flex-col sm:items-end text-xs text-slate-500 dark:text-slate-400 gap-1">
                      <div className="flex items-center gap-1.5 font-medium">
                        <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                        <span>{period}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-emerald-500" />
                        <span>{i18n.language === 'uz' ? item.locationUz : item.locationEn}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-normal">
                    {desc}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 mb-6">
                    <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400 dark:text-slate-500">
                      {t('experience.highlightsTitle')}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {item.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies tags */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-slate-800">
                    {item.skills.map((s, sIdx) => (
                      <span 
                        key={sIdx}
                        className="px-3 py-1 rounded-xl text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-slate-700/50"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
