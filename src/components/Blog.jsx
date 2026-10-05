import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  ArrowRight, 
  X, 
  Tag,
  Share2
} from 'lucide-react';
import { blogsData } from '../data/blogs';

export const Blog = () => {
  const { t, i18n } = useTranslation();
  const [selectedBlog, setSelectedBlog] = useState(null);

  return (
    <section id="blog" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-3"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>{t('blog.badge')}</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white"
          >
            {t('blog.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 mt-2 text-sm sm:text-base"
          >
            {t('blog.subtitle')}
          </motion.p>
        </div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogsData.map((blog, idx) => {
            const title = i18n.language === 'uz' ? blog.titleUz : blog.titleEn;
            const excerpt = i18n.language === 'uz' ? blog.excerptUz : blog.excerptEn;
            const readTime = i18n.language === 'uz' ? blog.readTime : blog.readTimeEn;

            return (
              <motion.article
                key={blog.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white dark:bg-[#0f1422] rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xl shadow-slate-200/50 dark:shadow-black/20 hover:border-indigo-500/40 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Blog Image */}
                <div className="relative h-48 overflow-hidden bg-slate-800">
                  <img
                    src={blog.image}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Tags */}
                  <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
                    {blog.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-black/60 backdrop-blur-md text-slate-200 border border-white/10"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Meta info */}
                    <div className="flex items-center gap-4 text-xs text-slate-400 dark:text-slate-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                        {blog.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-emerald-500" />
                        {readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-500 transition-colors leading-snug">
                      {title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3 mb-6 font-normal">
                      {excerpt}
                    </p>
                  </div>

                  {/* Read More Button */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                    <button
                      onClick={() => setSelectedBlog(blog)}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-indigo-600 dark:text-indigo-400 group-hover:translate-x-1 transition-transform"
                    >
                      <span>{t('blog.readMore')}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                </div>
              </motion.article>
            );
          })}
        </div>

      </div>

      {/* Read Article Modal */}
      <AnimatePresence>
        {selectedBlog && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl max-h-[85vh] bg-white dark:bg-[#0f1422] border border-slate-200 dark:border-slate-800 rounded-3xl overflow-y-auto shadow-2xl p-6 sm:p-8"
            >
              <button
                onClick={() => setSelectedBlog(null)}
                className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 text-xs text-indigo-500 font-semibold mb-3">
                <span>{selectedBlog.date}</span>
                <span>•</span>
                <span>{i18n.language === 'uz' ? selectedBlog.readTime : selectedBlog.readTimeEn}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
                {i18n.language === 'uz' ? selectedBlog.titleUz : selectedBlog.titleEn}
              </h2>

              <div className="rounded-2xl overflow-hidden mb-6 h-60 w-full">
                <img
                  src={selectedBlog.image}
                  alt={selectedBlog.titleUz}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed whitespace-pre-line font-normal space-y-4">
                {i18n.language === 'uz' ? selectedBlog.contentUz : selectedBlog.contentEn}
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <div className="flex gap-2">
                  {selectedBlog.tags.map((t, idx) => (
                    <span key={idx} className="text-xs px-2.5 py-1 rounded-lg bg-indigo-500/10 text-indigo-500 font-medium">
                      #{t}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedBlog(null)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200"
                >
                  {t('blog.backToBlogs')}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
