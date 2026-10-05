import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Send, 
  MapPin, 
  Github, 
  MessageSquare, 
  CheckCircle2, 
  AlertCircle,
  Phone,
  Sparkles,
  User
} from 'lucide-react';
import { socialLinks, personalInfo } from '../data/socials';

export const Contact = () => {
  const { t } = useTranslation();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = "Ism kiritilishi shart";
    }
    if (!formData.email.trim()) {
      errs.email = "Email kiritilishi shart";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = "Email formati noto'g'ri";
    }
    if (!formData.message.trim()) {
      errs.message = "Xabar kiritilishi shart";
    } else if (formData.message.trim().length < 5) {
      errs.message = "Xabar kamida 5 ta belgidan iborat bo'lsin";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 6000);
    }, 1200);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contact" className="py-20 relative bg-slate-100/40 dark:bg-[#090d17]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 mb-3"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{t('contact.badge')}</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white"
          >
            {t('contact.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 mt-2 text-sm sm:text-base"
          >
            {t('contact.subtitle')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Direct Contact Info (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 bg-white dark:bg-[#0f1422] p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-black/20 space-y-6"
          >
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              {t('contact.directContact')}
            </h3>

            <div className="space-y-4">
              {/* Email */}
              <a
                href={`mailto:${socialLinks.email}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-800/80 hover:border-emerald-500/40 transition-colors group"
              >
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-500 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500 block">
                    Email
                  </span>
                  <span className="text-sm sm:text-base font-medium text-slate-900 dark:text-white truncate block">
                    {socialLinks.email}
                  </span>
                </div>
              </a>

              {/* GitHub */}
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-800/80 hover:border-indigo-500/40 transition-colors group"
              >
                <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-500 group-hover:scale-110 transition-transform">
                  <Github className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500 block">
                    GitHub
                  </span>
                  <span className="text-sm sm:text-base font-medium text-slate-900 dark:text-white truncate block">
                    said271275-hub
                  </span>
                </div>
              </a>

              {/* Telegram */}
              {/* // TODO: Telegram username kiriting (masalan https://t.me/username) */}
              <a
                href={socialLinks.telegram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-800/80 hover:border-sky-500/40 transition-colors group"
              >
                <div className="p-3 rounded-xl bg-sky-500/10 text-sky-500 group-hover:scale-110 transition-transform">
                  <Send className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500 block">
                    Telegram
                  </span>
                  <span className="text-sm sm:text-base font-medium text-slate-900 dark:text-white truncate block">
                    @username (bog'lanish)
                  </span>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-800/80">
                <div className="p-3 rounded-xl bg-rose-500/10 text-rose-500 shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500 block mb-0.5">
                    {t('contact.addressTitle')}
                  </span>
                  <span className="text-sm font-medium text-slate-800 dark:text-slate-200 leading-snug block">
                    {personalInfo.location}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white dark:bg-[#0f1422] p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-black/20"
          >
            {status === 'success' ? (
              <div className="p-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Muvaffaqiyatli yuborildi!
                </h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm max-w-md mx-auto">
                  {t('contact.successMessage')}
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="px-6 py-2.5 rounded-xl font-semibold text-xs text-white bg-indigo-600 hover:bg-indigo-500 transition-colors"
                >
                  Yana xabar yuborish
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                    {t('contact.nameLabel')} <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t('contact.namePlaceholder')}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border ${
                      errors.name ? 'border-rose-500' : 'border-slate-200 dark:border-slate-700'
                    } text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm`}
                  />
                  {errors.name && (
                    <p className="text-rose-500 text-xs mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                    {t('contact.emailLabel')} <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t('contact.emailPlaceholder')}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border ${
                      errors.email ? 'border-rose-500' : 'border-slate-200 dark:border-slate-700'
                    } text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm`}
                  />
                  {errors.email && (
                    <p className="text-rose-500 text-xs mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                    {t('contact.messageLabel')} <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t('contact.messagePlaceholder')}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border ${
                      errors.message ? 'border-rose-500' : 'border-slate-200 dark:border-slate-700'
                    } text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm resize-none`}
                  />
                  {errors.message && (
                    <p className="text-rose-500 text-xs mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 shadow-lg shadow-indigo-500/25 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 text-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>{status === 'sending' ? t('contact.sending') : t('contact.sendButton')}</span>
                </button>
              </form>
            )}
          </motion.div>

        </div>

      </div>
    </section>
  );
};
