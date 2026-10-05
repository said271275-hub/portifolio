import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  Mail, 
  Send, 
  FileText, 
  ArrowRight, 
  Sparkles, 
  Camera, 
  X, 
  CheckCircle2, 
  ExternalLink,
  Code
} from 'lucide-react';
import { socialLinks, personalInfo } from '../data/socials';

export const Hero = () => {
  const { t } = useTranslation();
  const [showPhotoModal, setShowPhotoModal] = useState(false);
  const [imgSrc, setImgSrc] = useState(personalInfo.avatarUrl);

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Decorative Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-600/15 to-emerald-500/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -top-10 right-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none -z-10" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Content (Text & Actions) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-6 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{t('hero.status')}</span>
            </motion.div>

            {/* Title & Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-2 mb-4"
            >
              <h2 className="text-base sm:text-lg font-medium text-slate-600 dark:text-slate-400 tracking-wide flex items-center justify-center lg:justify-start gap-2">
                <span>{t('hero.greeting')}</span>
                <span className="inline-block animate-wave origin-bottom-right">👋</span>
              </h2>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                {personalInfo.fullName}
              </h1>

              <div className="pt-1">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-500 to-emerald-400">
                  {personalInfo.role}
                </span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl mb-8 leading-relaxed font-normal"
            >
              {personalInfo.fullName}, 19 yoshli Frontend Developer. HTML5, CSS3, JavaScript va React texnologiyalari bilan zamonaviy, tezkor va foydalanuvchiga qulay veb-saytlar yarataman.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10 w-full sm:w-auto"
            >
              <button
                onClick={scrollToProjects}
                className="group flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 shadow-lg shadow-indigo-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>{t('hero.viewProjects')}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              {/* // TODO: CV PDF faylini public/cv.pdf sifatida joylang va havolani shu yerga bog'lang */}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  alert(t('hero.cvNotice'));
                }}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <FileText className="w-4 h-4 text-indigo-500" />
                <span>{t('hero.downloadCv')}</span>
              </a>
            </motion.div>

            {/* Social Icons Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-3"
            >
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500 mr-1">
                Ijtimoiy:
              </span>

              {/* GitHub */}
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noreferrer"
                title="GitHub: said271275-hub"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-indigo-500 hover:text-white dark:hover:bg-indigo-600 text-slate-700 dark:text-slate-300 transition-all hover:scale-110 shadow-sm"
              >
                <Github className="w-5 h-5" />
              </a>

              {/* Email */}
              <a
                href={`mailto:${socialLinks.email}`}
                title={`Email: ${socialLinks.email}`}
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-600 text-slate-700 dark:text-slate-300 transition-all hover:scale-110 shadow-sm"
              >
                <Mail className="w-5 h-5" />
              </a>

              {/* Telegram */}
              {/* // TODO: Telegram username kiriting (masalan https://t.me/username) */}
              <a
                href={socialLinks.telegram}
                target="_blank"
                rel="noreferrer"
                title="Telegram (TODO: username kiriting)"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-sky-500 hover:text-white dark:hover:bg-sky-500 text-slate-700 dark:text-slate-300 transition-all hover:scale-110 shadow-sm"
              >
                <Send className="w-5 h-5" />
              </a>
            </motion.div>

          </div>

          {/* Right Content: Modern Avatar with Photo Replacement Guide */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group"
            >
              {/* Glowing Outer Rings */}
              <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 via-emerald-400 to-indigo-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-80 transition duration-700 animate-pulse-slow -z-10" />
              
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-3xl p-1 bg-gradient-to-b from-indigo-500/50 via-slate-700/30 to-emerald-500/40 shadow-2xl overflow-hidden backdrop-blur-sm">
                
                {/* Photo Image */}
                <div className="w-full h-full rounded-[22px] overflow-hidden bg-slate-900 relative">
                  <img
                    src={imgSrc}
                    alt={personalInfo.fullName}
                    onError={() => setImgSrc('/profile.jpg')}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Gradient Overlay at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60" />

                  {/* Tech stack badge at bottom of photo */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-3 py-2 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-white text-xs font-medium">
                    <span className="flex items-center gap-1.5 text-emerald-400">
                      <Code className="w-3.5 h-3.5" />
                      React & JS Dev
                    </span>
                    <span className="text-[11px] text-slate-300 font-mono">19 yosh</span>
                  </div>

                  {/* Change Photo Helper Button (Rasm qo'yish uchun ko'rsatma) */}
                  <button
                    onClick={() => setShowPhotoModal(true)}
                    title="O'z rasmingizni qanday qo'yishni ko'rish"
                    className="absolute top-3 right-3 p-2 rounded-full bg-black/60 hover:bg-indigo-600 text-white backdrop-blur-md border border-white/20 transition-all hover:scale-110 shadow-lg cursor-pointer"
                  >
                    <Camera className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Floating Pill: "O'z rasmingizni qo'ying" */}
              <button
                onClick={() => setShowPhotoModal(true)}
                className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/20 transition-colors"
              >
                <Camera className="w-3.5 h-3.5" />
                <span>O'z rasmingizni qo'yish bo'yicha qo'llanma</span>
              </button>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Photo Modal Guide */}
      <AnimatePresence>
        {showPhotoModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-2xl text-left"
            >
              <button
                onClick={() => setShowPhotoModal(false)}
                className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-500">
                  <Camera className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {t('photoModal.title')}
                  </h3>
                  <p className="text-xs text-slate-500">
                    O'zingizning haqiqiy suratingizni o'rnatish
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                <p className="font-medium text-slate-800 dark:text-slate-200">
                  {t('photoModal.desc')}
                </p>
                <div className="space-y-2 bg-slate-50 dark:bg-slate-800/50 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700/60 font-mono text-xs">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{t('photoModal.step1')}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{t('photoModal.step2')}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{t('photoModal.step3')}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{t('photoModal.step4')}</span>
                  </div>
                </div>
                <p className="text-xs text-indigo-500 dark:text-indigo-400 italic">
                  💡 Hozirgi rasm sifatida siz uchun sun'iy intellekt orqali chiroyli dasturchi portreti o'rnatilgan.
                </p>
              </div>

              <button
                onClick={() => setShowPhotoModal(false)}
                className="mt-6 w-full py-2.5 rounded-xl font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors"
              >
                {t('photoModal.close')}
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
