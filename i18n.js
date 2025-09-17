// UI translation packs (you can add more keys anytime)
const I18N = {
  en: {
    heroTitle: "Intel’s Journey to a Sustainable Future",
    heroTagline:
      "From our founding in 1968 to our ambitious 2050 supply chain net-zero pledge, Intel has been at the forefront of both technological innovation and sustainability. Explore the milestones that shape our journey.",
    instructions:
      "<em>Hover over each milestone to see a quick highlight.<br>Click a card to explore the full story behind each achievement.</em>",
    footerNote: "© 2025 Intel Corporation | Sustainability Journey Project",
    sectionOverview: "Overview",
    sectionHow: "How We’re Achieving It",
    sectionImpact: "Impact",
    backToTimeline: "← Back to Timeline",
    milestoneNotFoundTitle: "Milestone Not Found",
    milestoneNotFoundBody: "Sorry, we couldn’t find details for this milestone."
  },
  hi: {
    heroTitle: "इंटेल की सतत भविष्य की यात्रा",
    heroTagline:
      "1968 में स्थापना से लेकर 2050 की सप्लाई चेन नेट-ज़ीरो प्रतिज्ञा तक, इंटेल तकनीकी नवाचार और स्थिरता के अग्रणी मोर्चे पर रहा है। हमारी यात्रा के मील के पत्थरों को जानें।",
    instructions:
      "<em>हर माइलस्टोन पर होवर करें और संक्षिप्त हाइलाइट देखें।<br>पूरी कहानी पढ़ने के लिए कार्ड पर क्लिक करें।</em>",
    footerNote: "© 2025 इंटेल कॉर्पोरेशन | स्थिरता यात्रा प्रोजेक्ट",
    sectionOverview: "सारांश",
    sectionHow: "हम यह कैसे कर रहे हैं",
    sectionImpact: "प्रभाव",
    backToTimeline: "← टाइमलाइन पर वापस"
  },
  fr: {
    heroTitle: "Le parcours d’Intel vers un avenir durable",
    heroTagline:
      "De notre création en 1968 à l’ambitieuse promesse de neutralité carbone de la chaîne d’approvisionnement d’ici 2050, Intel est à l’avant-garde de l’innovation et du développement durable. Découvrez les étapes clés de ce parcours.",
    instructions:
      "<em>Passez la souris sur chaque jalon pour un aperçu rapide.<br>Cliquez sur une carte pour explorer l’histoire complète.</em>",
    footerNote: "© 2025 Intel Corporation | Parcours de durabilité",
    sectionOverview: "Aperçu",
    sectionHow: "Comment nous y parvenons",
    sectionImpact: "Impact",
    backToTimeline: "← Retour à la chronologie"
  },
  ar: {
    heroTitle: "رحلة إنتل نحو مستقبل مستدام",
    heroTagline:
      "من تأسيسنا عام 1968 حتى تعهّد الحياد الكربوني لسلسلة الإمداد بحلول 2050، كانت إنتل في طليعة الابتكار والاستدامة. استكشف المحطات التي شكّلت رحلتنا.",
    instructions:
      "<em>مرّر المؤشر فوق كل محطة لرؤية لمحة سريعة.<br>انقر على البطاقة لاستكشاف القصة كاملة.</em>",
    footerNote: "© 2025 شركة إنتل | مشروع رحلة الاستدامة",
    sectionOverview: "نظرة عامة",
    sectionHow: "كيف نحقق ذلك",
    sectionImpact: "الأثر",
    backToTimeline: "← العودة إلى المخطط الزمني"
  },

  // Placeholder for future per-milestone translations (optional)
  milestones: {
    hi: { /* "1968": { title: "...", overview: "...", actions: [...], impact: "..." } */ },
    fr: { /* ... */ },
    ar: { /* ... */ }
  }
};

// Apply language to any [data-i18n] element and set dir
function applyLangToPage(lang) {
  document.documentElement.lang = lang;
  document.documentElement.dir = (lang === "ar") ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const pack = (I18N[lang] && I18N[lang][key]) ? I18N[lang] : I18N.en;
    if (pack && pack[key]) {
      // Some keys use innerHTML (instructions), so use innerHTML
      if (key === "instructions") el.innerHTML = pack[key];
      else el.textContent = pack[key];
    }
  });
}

// Initialize language switcher on every page
function initLanguage() {
  const select = document.getElementById("lang-switcher");
  if (!select) return;

  let lang = localStorage.getItem("site_lang");
  if (!lang) {
    lang = (document.documentElement.lang || (navigator.language || "en")).slice(0,2);
  }
  if (!["en","hi","fr","ar"].includes(lang)) lang = "en";

  select.value = lang;
  applyLangToPage(lang);

  select.addEventListener("change", (e) => {
    const chosen = e.target.value;
    localStorage.setItem("site_lang", chosen);
    applyLangToPage(chosen);
  });
}

document.addEventListener("DOMContentLoaded", initLanguage);
