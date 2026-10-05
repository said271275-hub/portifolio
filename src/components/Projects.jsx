import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Layers, 
  Sparkles,
  ArrowUpRight,
  Code
} from 'lucide-react';
import { projectsData } from '../data/projects';

export const Projects = () => {
  const { t, i18n } = useTranslation();
  const [filter, setFilter] = useState('all');

  const filteredProjects = projectsData.filter((item) => {
    if (filter === 'all') return true;
    if (filter === 'react') return item.tech.includes('React');
    if (filter === 'js') return !item.tech.includes('React');
    return true;
  });

  return (
    <section id="projects" className="py-20 relative bg-slate-100/40 dark:bg-[#090d17]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 mb-3"
          >
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>{t('projects.badge')}</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white"
          >
            {t('projects.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 mt-2 text-sm sm:text-base"
          >
            {t('projects.subtitle')}
          </motion.p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center items-center gap-2 sm:gap-3 mb-12 flex-wrap">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              filter === 'all'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/25'
                : 'bg-white dark:bg-[#0f1422] text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
            }`}
          >
            {t('projects.filterAll')} ({projectsData.length})
          </button>
          <button
            onClick={() => setFilter('react')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              filter === 'react'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/25'
                : 'bg-white dark:bg-[#0f1422] text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
            }`}
          >
            {t('projects.filterReact')}
          </button>
          <button
            onClick={() => setFilter('js')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              filter === 'js'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/25'
                : 'bg-white dark:bg-[#0f1422] text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
            }`}
          >
            HTML / JS
          </button>
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, idx) => {
              const desc = i18n.language === 'uz' ? project.descriptionUz : project.descriptionEn;

              return (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="bg-white dark:bg-[#0f1422] rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xl shadow-slate-200/50 dark:shadow-black/20 hover:border-indigo-500/50 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
                >
                  {/* Card Header Banner with Visual Mockup */}
                  <div className={`h-40 w-full bg-gradient-to-br ${project.gradient} p-6 relative flex flex-col justify-between border-b border-slate-100 dark:border-slate-800/80`}>
                    <div className="flex items-center justify-between">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${project.badgeColor} backdrop-blur-md`}>
                        {project.category}
                      </span>
                      {project.isExactRepo ? (
                        <span className="px-2 py-0.5 rounded-md text-[10px] font-bold uppercase bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                          {t('projects.exactRepoBadge')}
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-slate-500/10 text-slate-500 dark:text-slate-400 border border-slate-500/20">
                          {t('projects.profileRepoBadge')}
                        </span>
                      )}
                    </div>

                    <div className="flex items-baseline justify-between">
                      <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight group-hover:text-indigo-500 transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-xs font-mono text-slate-400 font-semibold">
                        #0{project.id}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-normal">
                        {desc}
                      </p>

                      {/* Tech stack badges */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.tech.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-slate-700/50"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Links */}
                    <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                      {/* Live Demo */}
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-sm shadow-indigo-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                      >
                        <span>{t('projects.liveDemo')}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>

                      {/* GitHub */}
                      {/* Qolganlari uchun href="https://github.com/said271275-hub" (umumiy profil), #5 uchun aniq repo */}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        title={project.isExactRepo ? "Aniq Repository" : "GitHub Profil (Repo qidirish)"}
                        className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-all hover:scale-[1.02] active:scale-[0.98]"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>{t('projects.github')}</span>
                      </a>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* GitHub More Link */}
        <div className="mt-14 text-center">
          <a
            href="https://github.com/said271275-hub"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-slate-700 dark:text-slate-200 bg-white dark:bg-[#0f1422] hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 shadow-sm transition-all hover:scale-105"
          >
            <Github className="w-4 h-4 text-indigo-500" />
            <span>{t('projects.viewMore')}</span>
            <ArrowUpRight className="w-4 h-4 text-slate-400" />
          </a>
        </div>

      </div>
    </section>
  );
};
