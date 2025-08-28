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
          "services.title": "NOS",
          "services.titleHighlight": "SERVICES",
          "services.subtitle": "MAFCI propose une gamme complète de services pour répondre à tous vos besoins en matière de construction.",
          "services.readMore": "En savoir plus",
          "services.contactUs": "Demander un devis gratuit",
          "services.backgroundAlt": "Fond de construction",
          
          "services.concrete": "Livraison de Béton",
          "services.concrete.desc": "Livraison rapide et fiable de béton prêt à l'emploi sur tous vos chantiers, avec une flotte moderne et un suivi en temps réel.",
          
          "services.cement": "Production de Ciment",
          "services.cement.desc": "Fabrication de ciment de haute qualité répondant aux normes internationales, adapté à tous types de projets de construction.",
          
          "services.construction": "Matériaux de Construction",
          "services.construction.desc": "Large gamme de matériaux de construction durables et performants pour tous vos besoins en construction et rénovation.",
          
          "services.technical": "Conseil Technique",
          "services.technical.desc": "Expertise et conseils techniques pour optimiser vos projets de construction et garantir leur succès.",
          
          "services.custom": "Solutions Sur Mesure",
          "services.custom.desc": "Développement de solutions personnalisées pour répondre aux exigences spécifiques de vos projets, quelle que soit leur complexité.",
          
          "services.quality": "Contrôle Qualité",
          "services.quality.desc": "Processus rigoureux de contrôle qualité à chaque étape pour garantir l'excellence et la durabilité de nos produits.",

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
          "services.titleHighlight": "المتميزة",
          "services.subtitle": "تقدم MAFCI مجموعة شاملة من الخدمات لتلبية جميع احتياجاتك في مجال البناء.",
          "services.readMore": "اقرأ المزيد",
          "services.contactUs": "اطلب عرض أسعار مجاني",
          "services.backgroundAlt": "خلفية البناء",
          
          "services.concrete": "توصيل الخرسانة",
          "services.concrete.desc": "توصيل سريع وموثوق للخرسانة الجاهزة إلى جميع مواقع البناء الخاصة بك، مع أسطول حديث وتتبع في الوقت الفعلي.",
          
          "services.cement": "إنتاج الأسمنت",
          "services.cement.desc": "تصنيع أسمنت عالي الجودة يلبي المعايير الدولية، مناسب لجميع أنواع مشاريع البناء.",
          
          "services.construction": "مواد البناء",
          "services.construction.desc": "مجموعة واسعة من مواد البناء المستدامة وعالية الأداء لجميع احتياجات البناء والتجديد الخاصة بك.",
          
          "services.technical": "الاستشارات الفنية",
          "services.technical.desc": "خبرة ومشورة فنية لتحسين مشاريع البناء الخاصة بك وضمان نجاحها.",
          
          "services.custom": "حلول مخصصة",
          "services.custom.desc": "تطوير حلول مخصصة لتلبية المتطلبات المحددة لمشاريعك، مهما كانت درجة تعقيدها.",
          
          "services.quality": "مراقبة الجودة",
          "services.quality.desc": "عملية صارمة لمراقبة الجودة في كل مرحلة لضمان التميز ومتانة منتجاتنا.",

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