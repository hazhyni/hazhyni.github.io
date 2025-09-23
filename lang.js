// Multi-language support
const translations = {
  id: {
    // Navigation
    home: "Beranda",
    about: "Tentang",
    skills: "Keahlian", 
    projects: "Proyek",
    contact: "Kontak",
    theme: "Tema",
    dark: "Gelap",
    light: "Terang",
    
    // Hero section
    heroTitle: "Hai, Saya Hazhiyah Yumni",
    heroSubtitle: "Software Engineer & Research‑Driven Builder",
    
    // About section
    aboutTitle: "Tentang Saya",
    aboutText: "Saya Hazhiyah Yumni, lulusan Sistem Informasi dengan pengalaman langsung dalam pengembangan perangkat lunak, administrasi proyek, dan penelitian berbasis data. Saya senang membangun backend yang andal dengan Laravel, membuat UI yang bersih, dan mengeksplorasi explainable AI untuk wawasan praktis.",
    aboutBullet1: "🎯 Software Engineering — Laravel, REST API, React dasar",
    aboutBullet2: "📊 Penelitian — Python, SHAP/LIME, analitik & dashboard sederhana",
    aboutBullet3: "🗂 Admin Proyek — Dokumentasi, koordinasi meeting, tender e-proc",
    aboutBullet4: "🌏 Ketersediaan — terbuka untuk kolaborasi freelance/remote",
    viewProjects: "Lihat Proyek",
    emailMe: "Email Saya",
    
    // Skills section
    skillsTitle: "Keahlian",
    all: "Semua",
    frontend: "Frontend",
    backend: "Backend", 
    tools: "Tools",
    research: "Penelitian",
    currentlyLearning: "Sedang dipelajari:",
    
    // Skill levels
    advanced: "Mahir",
    upperIntermediate: "Menengah Atas",
    intermediate: "Menengah",
    basic: "Dasar",
    foundation: "Fondasi",
    level: "Level",
    
    // Skill descriptions
    frontendDesc: "HTML • CSS • Tailwind • React (dasar)",
    backendDesc: "Laravel • REST API • Auth • CRUD",
    toolsDesc: "Git • MySQL • Figma • EmailJS",
    researchDesc: "Python • SHAP/LIME • Data Viz",
    
    // Projects section
    projectsTitle: "Proyek",
    details: "Detail",
    hide: "Sembunyikan",
    
    // Contact section
    contactTitle: "Kontak",
    yourName: "Nama Anda",
    yourEmail: "Email Anda", 
    writeMessage: "Tulis pesan singkat / kebutuhan Anda",
    send: "Kirim",
    sending: "Mengirim...",
    preferDM: "Lebih suka DM?",
    availability: "Ketersediaan",
    availabilityText: "Terbuka untuk kolaborasi freelance/remote.",
    formNote: "Saya akan merespons Anda <strong>segera</strong>. Informasi Anda akan aman",
    
    // Form messages
    fillAllFields: "Mohon isi semua kolom 🙏",
    messageSent: "Terkirim! Terima kasih, saya akan merespons segera. 🚀",
    messageFailed: "Gagal mengirim. Coba lagi ya.",
    
    // Footer
    footerText: "crafted in glass ✨"
  },
  
  en: {
    // Navigation
    home: "Home",
    about: "About",
    skills: "Skills",
    projects: "Projects", 
    contact: "Contact",
    theme: "Theme",
    dark: "Dark",
    light: "Light",
    
    // Hero section
    heroTitle: "Hi, I'm Hazhiyah Yumni",
    heroSubtitle: "Software Engineer & Research‑Driven Builder",
    
    // About section
    aboutTitle: "About Me",
    aboutText: "I'm Hazhiyah Yumni, an Information Systems graduate with hands-on experience in software development, project administration, and data-driven research. I enjoy building reliable backends with Laravel, crafting clean UIs, and exploring explainable AI for practical insights.",
    aboutBullet1: "🎯 Software Engineering — Laravel, REST API, React basics",
    aboutBullet2: "📊 Research — Python, SHAP/LIME, simple analytics & dashboards",
    aboutBullet3: "🗂 Project Admin — Documentation, meeting coordination, e-proc tender",
    aboutBullet4: "🌏 Availability — open to freelance/remote collaboration",
    viewProjects: "View Projects",
    emailMe: "Email Me",
    
    // Skills section
    skillsTitle: "Skills",
    all: "All",
    frontend: "Frontend",
    backend: "Backend",
    tools: "Tools", 
    research: "Research",
    currentlyLearning: "Currently learning:",
    
    // Skill levels
    advanced: "Advanced",
    upperIntermediate: "Upper-Intermediate",
    intermediate: "Intermediate",
    basic: "Basic",
    foundation: "Foundation",
    level: "Level",
    
    // Skill descriptions
    frontendDesc: "HTML • CSS • Tailwind • React (basics)",
    backendDesc: "Laravel • REST API • Auth • CRUD",
    toolsDesc: "Git • MySQL • Figma • EmailJS",
    researchDesc: "Python • SHAP/LIME • Data Viz",
    
    // Projects section
    projectsTitle: "Projects",
    details: "Details",
    hide: "Hide",
    
    // Contact section
    contactTitle: "Contact",
    yourName: "Your Name",
    yourEmail: "Your Email",
    writeMessage: "Write short message / your needs",
    send: "Send",
    sending: "Sending...",
    preferDM: "Prefer DM?",
    availability: "Availability",
    availabilityText: "Open to freelance/remote collaboration.",
    formNote: "I'll respond you <strong>immediately</strong>. Your information will be safe",
    
    // Form messages
    fillAllFields: "Please fill out all fields 🙏",
    messageSent: "Sent! Thank you, I'll respond immediately. 🚀",
    messageFailed: "Failed to send. Please try again.",
    
    // Footer
    footerText: "crafted in glass ✨"
  }
};

// Language management
class LanguageManager {
  constructor() {
    this.currentLang = localStorage.getItem('language') || 'en';
    this.init();
  }
  
  getCurrentTranslations() {
    return translations[this.currentLang];
  }
  
  init() {
    this.createLanguageToggle();
    this.applyTranslations();
    this.bindEvents();
  }
  
  createLanguageToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const langToggle = document.createElement('button');
    langToggle.id = 'langToggle';
    langToggle.className = 'toggle';
    langToggle.setAttribute('aria-label', 'Toggle language');
    langToggle.innerHTML = `
      <span id="langFlag">🇬🇧</span>
      <span id="langLabel">${this.currentLang.toUpperCase()}</span>
    `;
    themeToggle.parentNode.insertBefore(langToggle, themeToggle);
  }
  
  bindEvents() {
    document.getElementById('langToggle').addEventListener('click', () => {
      this.toggleLanguage();
    });
  }
  
  toggleLanguage() {
    this.currentLang = this.currentLang === 'en' ? 'id' : 'en';
    localStorage.setItem('language', this.currentLang);
    this.applyTranslations();
    this.updateToggleButton();
  }
  
  updateToggleButton() {
    const flag = document.getElementById('langFlag');
    const label = document.getElementById('langLabel');
    flag.textContent = this.currentLang === 'en' ? '🇬🇧' : '🇮🇩';
    label.textContent = this.currentLang.toUpperCase();
  }
  
  applyTranslations() {
    const t = translations[this.currentLang];
    
    // Navigation
    this.setText('[data-lang="home"]', t.home);
    this.setText('[data-lang="about"]', t.about);
    this.setText('[data-lang="skills"]', t.skills);
    this.setText('[data-lang="projects"]', t.projects);
    this.setText('[data-lang="contact"]', t.contact);
    
    // Hero
    this.setText('[data-lang="heroTitle"]', t.heroTitle);
    this.setText('[data-lang="heroSubtitle"]', t.heroSubtitle);
    
    // About
    this.setText('[data-lang="aboutTitle"]', t.aboutTitle);
    this.setText('[data-lang="aboutText"]', t.aboutText);
    this.setText('[data-lang="aboutBullet1"]', t.aboutBullet1);
    this.setText('[data-lang="aboutBullet2"]', t.aboutBullet2);
    this.setText('[data-lang="aboutBullet3"]', t.aboutBullet3);
    this.setText('[data-lang="aboutBullet4"]', t.aboutBullet4);
    this.setText('[data-lang="viewProjects"]', t.viewProjects);
    this.setText('[data-lang="emailMe"]', t.emailMe);
    
    // Skills
    this.setText('[data-lang="skillsTitle"]', t.skillsTitle);
    this.setText('[data-lang="all"]', t.all);
    this.setText('[data-lang="frontend"]', t.frontend);
    this.setText('[data-lang="backend"]', t.backend);
    this.setText('[data-lang="tools"]', t.tools);
    this.setText('[data-lang="research"]', t.research);
    this.setText('[data-lang="currentlyLearning"]', t.currentlyLearning);
    
    // Skill descriptions
    this.setText('[data-lang="frontendDesc"]', t.frontendDesc);
    this.setText('[data-lang="backendDesc"]', t.backendDesc);
    this.setText('[data-lang="toolsDesc"]', t.toolsDesc);
    this.setText('[data-lang="researchDesc"]', t.researchDesc);
    
    // Projects
    this.setText('[data-lang="projectsTitle"]', t.projectsTitle);
    
    // Contact
    this.setText('[data-lang="contactTitle"]', t.contactTitle);
    this.setPlaceholder('[data-lang="yourName"]', t.yourName);
    this.setPlaceholder('[data-lang="yourEmail"]', t.yourEmail);
    this.setPlaceholder('[data-lang="writeMessage"]', t.writeMessage);
    this.setText('[data-lang="send"]', t.send);
    this.setText('[data-lang="preferDM"]', t.preferDM);
    this.setText('[data-lang="availability"]', t.availability);
    this.setText('[data-lang="availabilityText"]', t.availabilityText);
    this.setHTML('[data-lang="formNote"]', t.formNote);
    
    // Footer
    this.setText('[data-lang="footerText"]', t.footerText);
    
    // Update theme label
    const themeLabel = document.getElementById('themeLabel');
    const currentTheme = document.documentElement.getAttribute('data-theme');
    themeLabel.textContent = currentTheme === 'light' ? t.dark : t.light;
    
    // Update language toggle
    this.updateToggleButton();
    
    // Update skill levels
    this.updateSkillLevels();
    
    // Update form messages
    this.updateFormMessages();
    
    // Update project buttons
    this.updateProjectButtons();
  }
  
  updateSkillLevels() {
    const t = translations[this.currentLang];
    document.querySelectorAll('.skill-card').forEach(card => {
      const val = parseInt(getComputedStyle(card).getPropertyValue('--val') || 0);
      const n = Math.max(0, Math.min(100, val));
      const label = n >= 90 ? t.advanced : n >= 75 ? t.upperIntermediate : 
                   n >= 50 ? t.intermediate : n >= 40 ? t.basic : t.foundation;
      const tgt = card.querySelector('.meter .lvl-text');
      if (tgt) tgt.textContent = `${n}% · ${label}`;
    });
  }
  
  updateFormMessages() {
    const t = translations[this.currentLang];
    
    // Update showAlert function
    window.showAlert = (msg, ok = true) => {
      const alertBox = document.getElementById('cf-alert');
      alertBox.textContent = msg;
      alertBox.className = `alert ${ok ? 'ok' : 'err'}`;
    };
    
    // Store translations for form use
    window.formMessages = {
      fillAllFields: t.fillAllFields,
      messageSent: t.messageSent,
      messageFailed: t.messageFailed,
      sending: t.sending,
      send: t.send
    };
  }
  
  updateProjectButtons() {
    const t = translations[this.currentLang];
    document.querySelectorAll('.more-btn').forEach(btn => {
      const card = btn.closest('.project-card');
      const isExpanded = card.classList.contains('expanded');
      btn.textContent = isExpanded ? t.hide : t.details;
    });
  }
  
  setText(selector, text) {
    const element = document.querySelector(selector);
    if (element) element.textContent = text;
  }
  
  setHTML(selector, html) {
    const element = document.querySelector(selector);
    if (element) element.innerHTML = html;
  }
  
  setPlaceholder(selector, text) {
    const element = document.querySelector(selector);
    if (element) element.placeholder = text;
  }
}

// Initialize language manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.langManager = new LanguageManager();
});