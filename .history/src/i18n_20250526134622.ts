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
          // Hero Section
          "innovativeConstructionSolutions": "Solutions de construction innovantes",
          "marketLeader": "Leader dans le marché mauritanien du ciment et du béton",
          "superiorInfrastructure": "Infrastructure de qualité supérieure",
          "modernEquipment": "Équipements modernes et processus certifiés ISO 9001",
          "unmatchedTechnicalExpertise": "Expertise technique inégalée",
          "qualifiedEmployees": "Plus de 150 employés qualifiés à votre service",
          "presentationFR": "Présentation (FR)",
          "presentationAR": "Présentation (AR)",

          // Navigation
          "nav.home": "Accueil",
          "nav.services": "Nos Services",
          "nav.projects": "Nos Réalisations",
          "nav.about": "À Propos",
          "nav.products": "Nos Produits",
          "nav.contact": "Contact",

          // Services Section
          "services.title": "Nos Services",
          "services.subtitle": "Des solutions complètes pour vos projets de construction",
          "services.concrete": "Production de Béton",
          "services.concrete.desc": "Béton prêt à l'emploi de haute qualité pour tous types de projets",
          "services.cement": "Distribution de Ciment",
          "services.cement.desc": "Large gamme de ciments pour différentes applications",
          "services.construction": "Services de Construction",
          "services.construction.desc": "Solutions complètes pour vos projets de construction",
          "services.transport": "Transport et Logistique",
          "services.transport.desc": "Livraison rapide et fiable sur tout le territoire",

          // Projects Section
          "projects.title": "Nos Réalisations",
          "projects.subtitle": "Découvrez nos projets phares",
          "projects.viewAll": "Voir tous les projets",
          "projects.residential": "Projets Résidentiels",
          "projects.commercial": "Projets Commerciaux",
          "projects.infrastructure": "Infrastructure",

          // About Section
          "about.title": "À Propos de MAFCI",
          "about.subtitle": "Leader dans le secteur de la construction",
          "about.history": "Notre Histoire",
          "about.mission": "Notre Mission",
          "about.vision": "Notre Vision",
          "about.values": "Nos Valeurs",
          "about.quality": "Qualité",
          "about.innovation": "Innovation",
          "about.sustainability": "Durabilité",
          "about.expertise": "Expertise",

          // Contact Section
          "contact.title": "Contactez-nous",
          "contact.subtitle": "Nous sommes à votre écoute",
          "contact.address": "Adresse",
          "contact.phone": "Téléphone",
          "contact.email": "Email",
          "contact.form.name": "Nom complet",
          "contact.form.email": "Adresse email",
          "contact.form.subject": "Sujet",
          "contact.form.message": "Message",
          "contact.form.send": "Envoyer",

          // Footer
          "footer.company": "Entreprise",
          "footer.services": "Services",
          "footer.resources": "Ressources",
          "footer.contact": "Contact",
          "footer.rights": "Tous droits réservés",
          "footer.privacy": "Politique de confidentialité",
          "footer.terms": "Conditions d'utilisation"
        }
      },
      ar: {
        translation: {
          // Hero Section
          "innovativeConstructionSolutions": "حلول بناء مبتكرة",
          "marketLeader": "الشركة الرائدة في سوق الأسمنت والخرسانة الموريتانية",
          "superiorInfrastructure": "بنية تحتية عالية الجودة",
          "modernEquipment": "معدات حديثة وعمليات معتمدة بشهادة ISO 9001",
          "unmatchedTechnicalExpertise": "خبرة فنية لا مثيل لها",
          "qualifiedEmployees": "أكثر من 150 موظفًا مؤهلًا في خدمتك",
          "presentationFR": "عرض تقديمي (فرنسي)",
          "presentationAR": "عرض تقديمي (عربي)",

          // Navigation
          "nav.home": "الرئيسية",
          "nav.services": "خدماتنا",
          "nav.projects": "إنجازاتنا",
          "nav.about": "من نحن",
          "nav.products": "منتجاتنا",
          "nav.contact": "اتصل بنا",

          // Services Section
          "services.title": "خدماتنا",
          "services.subtitle": "حلول متكاملة لمشاريع البناء الخاصة بك",
          "services.concrete": "إنتاج الخرسانة",
          "services.concrete.desc": "خرسانة جاهزة عالية الجودة لجميع أنواع المشاريع",
          "services.cement": "توزيع الأسمنت",
          "services.cement.desc": "مجموعة واسعة من الأسمنت لمختلف التطبيقات",
          "services.construction": "خدمات البناء",
          "services.construction.desc": "حلول شاملة لمشاريع البناء الخاصة بك",
          "services.transport": "النقل والخدمات اللوجستية",
          "services.transport.desc": "توصيل سريع وموثوق في جميع أنحاء البلاد",

          // Projects Section
          "projects.title": "إنجازاتنا",
          "projects.subtitle": "اكتشف مشاريعنا الرائدة",
          "projects.viewAll": "عرض جميع المشاريع",
          "projects.residential": "المشاريع السكنية",
          "projects.commercial": "المشاريع التجارية",
          "projects.infrastructure": "البنية التحتية",

          // About Section
          "about.title": "عن MAFCI",
          "about.subtitle": "الشركة الرائدة في قطاع البناء",
          "about.history": "تاريخنا",
          "about.mission": "مهمتنا",
          "about.vision": "رؤيتنا",
          "about.values": "قيمنا",
          "about.quality": "الجودة",
          "about.innovation": "الابتكار",
          "about.sustainability": "الاستدامة",
          "about.expertise": "الخبرة",

          // Contact Section
          "contact.title": "اتصل بنا",
          "contact.subtitle": "نحن نستمع إليك",
          "contact.address": "العنوان",
          "contact.phone": "الهاتف",
          "contact.email": "البريد الإلكتروني",
          "contact.form.name": "الاسم الكامل",
          "contact.form.email": "البريد الإلكتروني",
          "contact.form.subject": "الموضوع",
          "contact.form.message": "الرسالة",
          "contact.form.send": "إرسال",

          // Footer
          "footer.company": "الشركة",
          "footer.services": "الخدمات",
          "footer.resources": "الموارد",
          "footer.contact": "اتصل بنا",
          "footer.rights": "جميع الحقوق محفوظة",
          "footer.privacy": "سياسة الخصوصية",
          "footer.terms": "شروط الاستخدام"
        }
      }
    }
  });

export default i18n; 