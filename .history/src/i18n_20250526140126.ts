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

          "services.transport": "Transport et Logistique",
          "services.transport.desc": "Services de transport et logistique fiables pour tous vos besoins en matériaux de construction.",

          // Projects Section
          "projects.title": "NOS",
          "projects.titleHighlight": "RÉALISATIONS RÉCENTES",
          "projects.subtitle": "Découvrez quelques-uns de nos projets phares réalisés avec une qualité et une expertise inégalées.",
          "projects.viewAll": "Voir tous nos projets",
          "projects.viewDetails": "Voir les détails du projet : {{project}}",
          "projects.residential": "Projets Résidentiels",
          "projects.residential.desc": "Des logements modernes et confortables",
          "projects.commercial": "Projets Commerciaux",
          "projects.commercial.desc": "Des espaces commerciaux innovants",
          "projects.infrastructure": "Infrastructure",
          "projects.infrastructure.desc": "Des infrastructures durables",
          "projects.tasiast.title": "Tasiast - Akjoujt",
          "projects.tasiast.location": "Akjoujt, Mauritanie",
          "projects.hospital.title": "Hôpital Arafat - NKTT",
          "projects.hospital.location": "Nouakchott, Mauritanie",
          "projects.port.title": "Port Minéralier - NDB",
          "projects.port.location": "Nouadhibou, Mauritanie",
          "projects.faculty.title": "Faculté des Sciences",
          "projects.faculty.location": "Nouakchott, Mauritanie",
          "projects.category.industrial": "Industriel",
          "projects.category.healthcare": "Santé",
          "projects.category.infrastructure": "Infrastructure",
          "projects.category.education": "Éducation",

          // About Section
          "about.title": "À PROPOS DE",
          "about.titleHighlight": "MAFCI",
          "about.subtitle": "Leader dans le secteur de la construction en Mauritanie",
          "about.description": "MAFCI est une entreprise leader dans le secteur de la construction, offrant des solutions innovantes et durables depuis plus de 10 ans.",
          "about.history": "Notre Histoire",
          "about.history.desc": "Une décennie d'excellence et d'innovation dans le secteur de la construction.",
          "about.mission": "Notre Mission",
          "about.mission.desc": "Fournir des solutions de construction innovantes et durables tout en maintenant les plus hauts standards de qualité.",
          "about.vision": "Notre Vision",
          "about.vision.desc": "Devenir la référence en matière de construction durable en Afrique de l'Ouest.",
          "about.values": "Nos Valeurs",
          "about.quality": "Qualité",
          "about.quality.desc": "Excellence dans chaque aspect de notre travail",
          "about.innovation": "Innovation",
          "about.innovation.desc": "Adoption des dernières technologies et méthodes",
          "about.sustainability": "Durabilité",
          "about.sustainability.desc": "Engagement envers l'environnement et la communauté",
          "about.expertise": "Expertise",
          "about.expertise.desc": "Une équipe hautement qualifiée et expérimentée",

          // Contact Section
          "contact.title": "CONTACTEZ",
          "contact.titleHighlight": "NOUS",
          "contact.subtitle": "Nous sommes à votre écoute pour tous vos projets",
          "contact.infoTitle": "Information de Contact",
          "contact.description": "Notre équipe est disponible pour répondre à toutes vos questions et vous accompagner dans vos projets.",
          "contact.address": "Adresse",
          "contact.address.value": "Clinique Kissi, Nouakchott",
          "contact.address.country": "Mauritanie",
          "contact.phone": "Téléphone",
          "contact.phone.value": "+222 49 91 00 61",
          "contact.phone.value2": "+222 36 61 77 67",
          "contact.email": "Email",
          "contact.email.value": "info@mafci.mr",
          "contact.hours.title": "Heures d'Ouverture",
          "contact.hours.weekdays": "Lundi - Jeudi: 8:00 - 16:00",
          "contact.hours.friday": "Vendredi: 8:00 - 12:00",
          "contact.form.name": "Nom complet",
          "contact.form.namePlaceholder": "Votre nom",
          "contact.form.email": "Adresse email",
          "contact.form.emailPlaceholder": "Votre email",
          "contact.form.subject": "Sujet",
          "contact.form.subjectPlaceholder": "Sujet de votre message",
          "contact.form.message": "Message",
          "contact.form.messagePlaceholder": "Votre message",
          "contact.form.send": "Envoyer le message",
          "contact.form.success": "Message envoyé avec succès",
          "contact.form.error": "Une erreur s'est produite",

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

          "services.transport": "النقل والخدمات اللوجستية",
          "services.transport.desc": "خدمات نقل ولوجستية موثوقة لجميع احتياجاتك من مواد البناء.",

          // Projects Section
          "projects.title": "أحدث",
          "projects.titleHighlight": "إنجازاتنا",
          "projects.subtitle": "اكتشف بعضًا من مشاريعنا الرائدة التي تم تنفيذها بجودة وخبرة لا مثيل لهما.",
          "projects.viewAll": "عرض جميع مشاريعنا",
          "projects.viewDetails": "عرض تفاصيل المشروع: {{project}}",
          "projects.residential": "المشاريع السكنية",
          "projects.residential.desc": "مساكن عصرية ومريحة",
          "projects.commercial": "المشاريع التجارية",
          "projects.commercial.desc": "مساحات تجارية مبتكرة",
          "projects.infrastructure": "البنية التحتية",
          "projects.infrastructure.desc": "بنية تحتية مستدامة",
          "projects.tasiast.title": "تازيازت - أكجوجت",
          "projects.tasiast.location": "أكجوجت، موريتانيا",
          "projects.hospital.title": "مستشفى عرفات - نواكشوط",
          "projects.hospital.location": "نواكشوط، موريتانيا",
          "projects.port.title": "ميناء المعادن - نواذيبو",
          "projects.port.location": "نواذيبو، موريتانيا",
          "projects.faculty.title": "كلية العلوم",
          "projects.faculty.location": "نواكشوط، موريتانيا",
          "projects.category.industrial": "صناعي",
          "projects.category.healthcare": "رعاية صحية",
          "projects.category.infrastructure": "بنية تحتية",
          "projects.category.education": "تعليم",

          // About Section
          "about.title": "عن",
          "about.titleHighlight": "MAFCI",
          "about.subtitle": "الشركة الرائدة في قطاع البناء في موريتانيا",
          "about.description": "MAFCI هي شركة رائدة في قطاع البناء، تقدم حلولاً مبتكرة ومستدامة منذ أكثر من 10 سنوات.",
          "about.history": "تاريخنا",
          "about.history.desc": "عقد من التميز والابتكار في قطاع البناء.",
          "about.mission": "مهمتنا",
          "about.mission.desc": "تقديم حلول بناء مبتكرة ومستدامة مع الحفاظ على أعلى معايير الجودة.",
          "about.vision": "رؤيتنا",
          "about.vision.desc": "أن نصبح المرجع في البناء المستدام في غرب إفريقيا.",
          "about.values": "قيمنا",
          "about.quality": "الجودة",
          "about.quality.desc": "التميز في كل جانب من جوانب عملنا",
          "about.innovation": "الابتكار",
          "about.innovation.desc": "تبني أحدث التقنيات والأساليب",
          "about.sustainability": "الاستدامة",
          "about.sustainability.desc": "الالتزام تجاه البيئة والمجتمع",
          "about.expertise": "الخبرة",
          "about.expertise.desc": "فريق عمل مؤهل وذو خبرة عالية",

          // Contact Section
          "contact.title": "اتصل",
          "contact.titleHighlight": "بنا",
          "contact.subtitle": "نحن هنا للاستماع إلى جميع مشاريعك",
          "contact.infoTitle": "معلومات الاتصال",
          "contact.description": "فريقنا متاح للإجابة على جميع أسئلتك ومساعدتك في مشاريعك.",
          "contact.address": "العنوان",
          "contact.address.value": "عيادة كيسي، نواكشوط",
          "contact.address.country": "موريتانيا",
          "contact.phone": "الهاتف",
          "contact.phone.value": "+222 49 91 00 61",
          "contact.phone.value2": "+222 36 61 77 67",
          "contact.email": "البريد الإلكتروني",
          "contact.email.value": "info@mafci.mr",
          "contact.hours.title": "ساعات العمل",
          "contact.hours.weekdays": "الاثنين - الخميس: 8:00 - 16:00",
          "contact.hours.friday": "الجمعة: 8:00 - 12:00",
          "contact.form.name": "الاسم الكامل",
          "contact.form.namePlaceholder": "اسمك",
          "contact.form.email": "البريد الإلكتروني",
          "contact.form.emailPlaceholder": "بريدك الإلكتروني",
          "contact.form.subject": "الموضوع",
          "contact.form.subjectPlaceholder": "موضوع رسالتك",
          "contact.form.message": "الرسالة",
          "contact.form.messagePlaceholder": "رسالتك",
          "contact.form.send": "إرسال الرسالة",
          "contact.form.success": "تم إرسال الرسالة بنجاح",
          "contact.form.error": "حدث خطأ ما",

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