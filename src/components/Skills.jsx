import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Palette, 
  FileCode2, 
  Atom, 
  Cpu, 
  CheckCircle, 
  Layers
} from 'lucide-react';
import { skillsData } from '../data/skills';

// Lucide icon mapping
const iconMap = {
  Code2: Code2,
  Palette: Palette,
  FileCode2: FileCode2,
  Atom: Atom
};

export const Skills = () => {
  const { t, i18n } = useTranslation();

  return (
    <section id="skills" className="py-20 relative bg-slate-100/50 dark:bg-[#0b0f19]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-3"
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>{t('skills.badge')}</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white"
          >
            {t('skills.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 mt-2 text-sm sm:text-base"
          >
            {t('skills.subtitle')}
          </motion.p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((skill, index) => {
            const Icon = iconMap[skill.icon] || Code2;
            const description = i18n.language === 'uz' ? skill.descriptionUz : skill.descriptionEn;

            return (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-white dark:bg-[#0f1422] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-lg shadow-slate-200/50 dark:shadow-black/20 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar with Icon and Category */}
                  <div className="flex items-center justify-between mb-5">
                    <div 
                      className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 duration-300"
                      style={{ backgroundColor: skill.bgColor, border: `1px solid ${skill.borderColor}` }}
                    >
                      <Icon className="w-7 h-7" style={{ color: skill.color }} />
                    </div>
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-mono">
                      {skill.category}
                    </span>
                  </div>

                  {/* Skill Name */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-500 transition-colors">
                    {skill.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-normal">
                    {description}
                  </p>
                </div>

                {/* Level Progress Bar */}
                <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80">
                  <div className="flex justify-between items-center text-xs font-semibold mb-2">
                    <span className="text-slate-500">{t('skills.level')}</span>
                    <span style={{ color: skill.color }}>{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: skill.color }}
                    />
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Additional Tools & Workflow Pill Bar */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-3 rounded-2xl bg-white dark:bg-[#0f1422] border border-slate-200 dark:border-slate-800 shadow-sm text-xs font-medium text-slate-600 dark:text-slate-400">
            <span className="text-slate-400 dark:text-slate-500 font-semibold px-2">Qo'shimcha vositalar:</span>
            <span className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">Git & GitHub</span>
            <span className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">Tailwind CSS</span>
            <span className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">Vite</span>
            <span className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">VS Code</span>
            <span className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">Vercel</span>
            <span className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">Figma to HTML</span>
          </div>
        </div>

      </div>
    </section>
  );
};
