// English: JavaScript for language switching and AI chatbot placeholder
// العربية: جافا سكريبت لتبديل اللغة ونموذج مساعد الدردشة الذكي

// Object containing translations for supported languages
const translations = {
  en: {
    bannerTagline: "Securing Your Future in the Digital Age.",
    bannerDescription: "Empower your business with cutting-edge managed cybersecurity services designed to protect your systems, data, and users from evolving threats.",
    aboutTitle: "About ZaidanOne",
    aboutDescription: "ZaidanOne is dedicated to delivering excellence in managed cybersecurity services, empowering businesses to stay secure and resilient in an ever-changing digital landscape.",
    servicesHighlightTitle: "Our Services at a Glance",
    // Add more translations as needed for other pages and elements
  },
  ar: {
    bannerTagline: "تأمين مستقبلك في العصر الرقمي.",
    bannerDescription: "تمكين عملك من خلال خدمات الأمن السيبراني المُدارة المتطورة المصممة لحماية أنظمتك وبياناتك ومستخدميك من التهديدات المتطورة.",
    aboutTitle: "عن زيدان ون",
    aboutDescription: "تلتزم زيدان ون بتقديم التميز في خدمات الأمن السيبراني المُدارة، مما يمكّن الشركات من البقاء آمنة وقوية في بيئة رقمية متغيرة باستمرار.",
    servicesHighlightTitle: "خدماتنا بنظرة سريعة",
    // Add more translations as needed for other pages and elements
  },
  fr: {
    bannerTagline: "Sécuriser votre avenir à l'ère numérique.",
    bannerDescription: "Renforcez votre entreprise avec des services de cybersécurité gérés de pointe conçus pour protéger vos systèmes, données et utilisateurs contre les menaces évolutives.",
    aboutTitle: "À propos de ZaidanOne",
    aboutDescription: "ZaidanOne s'engage à offrir l'excellence dans les services de cybersécurité gérés, permettant aux entreprises de rester sécurisées et résilientes dans un paysage numérique en constante évolution.",
    servicesHighlightTitle: "Nos services en un coup d'œil",
    // Add more translations as needed for other pages and elements
  },
  tr: {
    bannerTagline: "Dijital Çağda Geleceğinizi Güvence Altına Alın.",
    bannerDescription: "Sistemlerinizi, verilerinizi ve kullanıcılarınızı gelişen tehditlerden korumak için tasarlanmış son teknoloji yönetilen siber güvenlik hizmetleri ile işinizi güçlendirin.",
    aboutTitle: "ZaidanOne Hakkında",
    aboutDescription: "ZaidanOne, sürekli değişen dijital ortamda işletmelerin güvenli ve dayanıklı kalmasını sağlayan yönetilen siber güvenlik hizmetlerinde mükemmelliği sunmaya kendini adamıştır.",
    servicesHighlightTitle: "Hizmetlerimiz Bir Bakışta",
    // Add more translations as needed for other pages and elements
  }
};

// Function to update text content based on selected language
function updateLanguage(lang) {
  // English: Update banner tagline and description if present
  // العربية: تحديث شعار البانر والوصف إذا كان موجودًا
  const bannerTagline = document.querySelector("#banner h1");
  const bannerDescription = document.querySelector("#banner p");
  if (bannerTagline && translations[lang].bannerTagline) {
    bannerTagline.textContent = translations[lang].bannerTagline;
  }
  if (bannerDescription && translations[lang].bannerDescription) {
    bannerDescription.textContent = translations[lang].bannerDescription;
  }

  // English: Update About section title and description if present
  // العربية: تحديث عنوان قسم "عن" والوصف إذا كان موجودًا
  const aboutTitle = document.querySelector("#introduction h2");
  const aboutDescription = document.querySelector("#introduction p");
  if (aboutTitle && translations[lang].aboutTitle) {
    aboutTitle.textContent = translations[lang].aboutTitle;
  }
  if (aboutDescription && translations[lang].aboutDescription) {
    aboutDescription.textContent = translations[lang].aboutDescription;
  }

  // English: Update Services Highlight title if present
  // العربية: تحديث عنوان إبراز الخدمات إذا كان موجودًا
  const servicesHighlightTitle = document.querySelector("#services-highlight h2");
  if (servicesHighlightTitle && translations[lang].servicesHighlightTitle) {
    servicesHighlightTitle.textContent = translations[lang].servicesHighlightTitle;
  }

  // Additional translations can be added here for other pages and elements
}

// English: Event listener for language selector dropdown
// العربية: مستمع الحدث لقائمة اختيار اللغة
document.getElementById("language-select").addEventListener("change", (e) => {
  const selectedLang = e.target.value;
  updateLanguage(selectedLang);
  // English: Save selected language to localStorage for persistence
  // العربية: حفظ اللغة المختارة في localStorage للاستمرارية
  localStorage.setItem("selectedLanguage", selectedLang);
});

// English: On page load, set language based on saved preference or default to English
// العربية: عند تحميل الصفحة، تعيين اللغة بناءً على التفضيل المحفوظ أو الافتراضي إلى الإنجليزية
window.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("selectedLanguage") || "en";
  document.getElementById("language-select").value = savedLang;
  updateLanguage(savedLang);
});

// English: Placeholder for AI Chatbot integration
// العربية: نموذج مساعد الدردشة الذكي للتكامل المستقبلي
function initializeChatbot() {
  // This function will be used to initialize AI chatbot like Azure Chat or OpenAI ChatGPT
  // يمكن استخدام هذه الوظيفة لتهيئة مساعد الدردشة الذكي مثل Azure Chat أو OpenAI ChatGPT
  console.log("AI Chatbot placeholder initialized.");
}

// Initialize chatbot on page load
window.addEventListener("DOMContentLoaded", () => {
  initializeChatbot();
});

// English: Chat widget toggle and simple placeholder chat functionality
// العربية: تبديل أداة الدردشة ووظيفة الدردشة النموذجية البسيطة
document.addEventListener("DOMContentLoaded", () => {
  const chatWidget = document.getElementById("chat-widget");
  const chatToggleBtn = document.getElementById("chat-toggle-btn");
  const chatCloseBtn = document.getElementById("chat-close-btn");
  const chatForm = document.getElementById("chat-form");
  const chatInput = document.getElementById("chat-input");
  const chatMessages = document.getElementById("chat-messages");

  // Show chat widget when toggle button clicked
  chatToggleBtn.addEventListener("click", () => {
    chatWidget.classList.remove("hidden");
    chatToggleBtn.classList.add("hidden");
    chatInput.focus();
  });

  // Hide chat widget when close button clicked
  chatCloseBtn.addEventListener("click", () => {
    chatWidget.classList.add("hidden");
    chatToggleBtn.classList.remove("hidden");
  });

  // Handle chat form submission
  chatForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const userMessage = chatInput.value.trim();
    if (!userMessage) return;

    // Append user message to chat
    const userMsgElem = document.createElement("p");
    userMsgElem.className = "text-right text-blue-700 font-semibold";
    userMsgElem.textContent = userMessage;
    chatMessages.appendChild(userMsgElem);

    // Clear input
    chatInput.value = "";

    // Placeholder bot response
    const botMsgElem = document.createElement("p");
    botMsgElem.className = "text-left text-gray-700 italic";
    botMsgElem.textContent = "Thank you for your message. Our customer care team will get back to you shortly.";
    chatMessages.appendChild(botMsgElem);

    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
  });
});
