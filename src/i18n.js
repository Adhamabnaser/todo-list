import i18n from 'i18next';
import Backend from 'i18next-http-backend';
// import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
// import en from '../public/locates/en/translation'
// import ar from '../public/locates/ar/translation'
i18n
  // // load translation using http -> see /public/locales
  // // learn more: https://github.com/i18next/i18next-http-backend
  .use(Backend)
  // // detect user language
  // // learn more: https://github.com/i18next/i18next-browser-languageDetector
  // // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: 'en',
    debug: true,
    detection:
    {
        order:['queryString','cookie'],
        cache:['cookie']
    },
    initReactI18next:{
      escapeValue:false,
    },
    resources :{
      en:{
        translation: 
        {
          todo:"Todo list",
          list:"My List",
          emtyMessage:"No Activity was added, You Can Add Some, Now.",
          clear:"Clear All",
          add:"Add"
        }
      },
      ar:
      {
        translation: 
        {
          todo:"قائمة المهام",
          list:"قائمتي",
          emtyMessage:"لا مهام قد اضيفت, يمكن اضافة البعض, الان.",
          clear:"مسح الكل",
          add:"إضافة"
        }
      }
    }
   
  });

export default i18n;