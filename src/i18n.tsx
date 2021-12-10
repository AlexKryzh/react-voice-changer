import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: false,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          page: {
            title: 'Voices Changer',
            home: 'Home',
            changeLang: 'Change Language',
            langChanged: 'Language Changed',
            apiNotFound: 'Not found',
            apiError: 'Api returned an Error',
            notFound: 'Page Not Found',
            loading: 'Loading'
          },
          voices: {
            title: 'Available Voices'
          }
        }
      },
      es: {
        translation: {
          page: {
            title: 'Cambiador de Voz',
            home: 'Inicio',
            changeLang: 'Cambiar Idioma',
            langChanged: 'Idioma cambiado',
            apiNotFound: 'No encontrado',
            apiError: 'Api ha devuelto un error',
            notFound: 'Página no encontrada',
            loading: 'Cargando'
          },
          voices: {
            title: 'Voces Disponibles',
          }
        }
      }
    }
  });

export default i18n;