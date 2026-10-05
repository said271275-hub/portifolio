import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationUZ from './uz.json';
import translationEN from './en.json';

const resources = {
  uz: {
    translation: translationUZ
  },
  en: {
    translation: translationEN
  }
};

const savedLanguage = localStorage.getItem('portfolio_lang') || 'uz';

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLanguage,
    fallbackLng: 'uz',
    interpolation: {
      escapeValue: false
    }
  });

i18n.on('languageChanged', (lng) => {
  localStorage.setItem('portfolio_lang', lng);
  document.documentElement.lang = lng;
});

export default i18n;
