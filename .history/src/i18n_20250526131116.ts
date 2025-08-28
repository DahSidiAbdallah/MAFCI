import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true, // Set to false in production
    fallbackLng: 'fr',
    supportedLngs: ['fr', 'ar'],
    interpolation: {
      escapeValue: false, // React already safes from xss
    },
    resources: {
      fr: {
        translation: {
          // We'll add French translations here
          "innovativeConstructionSolutions": "Solutions de construction innovantes",
          "marketLeader": "Leader dans le marché mauritanien du ciment et du béton",
          "superiorInfrastructure": "Infrastructure de qualité supérieure",
          "modernEquipment": "Équipements modernes et processus certifiés ISO 9001",
          "unmatchedTechnicalExpertise": "Expertise technique inégalée",
          "qualifiedEmployees": "Plus de 150 employés qualifiés à votre service",
          "presentationFR": "Présentation (FR)",
          "presentationAR": "Présentation (AR)"
        }
      },
      ar: {
        translation: {
          // We'll add Arabic translations here
          "innovativeConstructionSolutions": "حلول بناء مبتكرة",
          "marketLeader": "الشركة الرائدة في سوق الأسمنت والخرسانة الموريتانية",
          "superiorInfrastructure": "بنية تحتية عالية الجودة",
          "modernEquipment": "معدات حديثة وعمليات معتمدة بشهادة ISO 9001",
          "unmatchedTechnicalExpertise": "خبرة فنية لا مثيل لها",
          "qualifiedEmployees": "أكثر من 150 موظفًا مؤهلًا في خدمتك",
          "presentationFR": "عرض تقديمي (فرنسي)",
          "presentationAR": "عرض تقديمي (عربي)"
        }
      }
    }
  });

export default i18n; 