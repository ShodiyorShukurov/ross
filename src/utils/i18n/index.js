import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locals/en/en.json';
import uz from './locals/uz/uz.json';
import ru from './locals/ru/ru.json';

const resources = {
  en: {
    translation: en,
  },
  uz: {
    translation: uz,
  },
  ru: {
    translation: ru,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'uz',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
