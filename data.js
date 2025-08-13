export const personalInfo = {
  name: "Hazhiyah Yumni",
  location: "Indonesia",
  email: "hazhiyahy4@gmail.com",
  github: "https://github.com/hazhyni",
  linkedin: "https://linkedin.com/in/hazhiyah",
  profilePicture: "/profile.jpeg",
  heroDescription:
    "Multidisciplinary tech professional with a background in Information Systems, bridging software development, project management, and research. I’ve built marketplace platforms and API- driven dashboards with Laravel, CodeIgniter, Bootstrap, and Android Studio, and managed large - scale ammonia tank projects from documentation to cross - team coordination. My research spans AI, circular economy, and crypto policy using sentiment analysis, machine learning, and explainable AI (SHAP, LIME). I thrive where technology, data, and business meet turning ideas into solutions with measurable impact.",
};

export const workExperience = [
  {
    company: "PT Atlantic Alam Industri",
    location: "Aceh, Indonesia",
    position: "Project Administrator",
    period: "Sep 2024 - May 2025",
    achievements: [
      "Managed project documentation and monthly progress reports for ammonia tank construction.",
      "Coordinated with contractors and owners for schedules, updates, and issue resolutions.",
      "Assisted quality control processes to ensure compliance with project standards.",
    ],
  },
];

export const education = [
  {
    institution: "Malikussaleh University",
    location: "Aceh, Indonesia",
    degree: "BComp Information Systems",
    period: "4 years",
    achievements: [
      "Developed a marketplace-style application using Laravel.",
      "Developed a Machine Learning application using Python.",
      "Conducted a research project on sentiment analysis of the Umma Prayer App.",
      "Created an API-integrated dashboard for data visualization.",
      "Graduated with honors.",
    ],
  },
];
export const skills = {
  programmingLanguages: ["PHP", "JavaScript", "SQL", "Java (Android basics)"],
  frontendDevelopment: ["HTML", "CSS", "Bootstrap", "Materialize"],
  backendDevelopment: ["Laravel", "CodeIgniter", "RESTful APIs"],
  databaseAndStorage: ["MySQL", "Eloquent ORM"],
  // cloudAndDevOps: [],
  toolsAndServices: [
    "Postman",
    "Git",
    "GitHub",
    "Composer",
    "XAMPP",
    "Android Studio",
    "OSS Indonesia (NIB)",
    "DJP Online (e-Filing/SPT)",
    "PTPN 3 e-Procurement",
    "Microsoft Office",
  ],
};

export const projects = [
  {
    title: "Sentiment Analysis on X: Crypto Regulations",
    github:
      "https://ejurnal.seminar-id.com/index.php/tin/article/view/7508/3854",
    description: [
      "Led data acquisition by defining keywords/time windows and collecting tweets via API under ethical guidelines.",
      "Preprocessed text (cleaning, tokenization, stopword removal, stemming) to prepare analyzable corpora.",
      "Implemented lexicon-based sentiment analysis (e.g., InSet) to classify tweets across periods.",
      "Performed comparative analysis of pre- vs post-regulation sentiment and validated results with standard metrics.",
      "Visualized findings and authored clear reports explaining methods, results, and implications for stakeholders.",
    ],
  },
  {
    title: "Sentiment Analysis on X App Reviews – Google Play Store",
    github: "https://github.com/hazhyni/x-sentiment-analysis",
    description: [
      "Scrape user reviews from Google Play Store",
      "Clean and preprocess Indonesian-language text",
      "Perform sentiment classification using machine learning",
      "Visualize review distributions, word clouds, and sentiment insights",
      "Undertake explainable AI analysis (SHAP, LIME) to interpret model predictions (on process)",
    ],
  },
  {
    title: "Umma Prayer Sentiment Analysis",
    github: "https://github.com/hazhyni/umma-sentiment-analysis",
    description: [
      "This project aims to conduct sentiment analysis on user reviews of the “UMMA” application available on the Google Play Store. The analysis is intended to understand users’ perceptions of the app, identify the most frequently expressed positive and negative sentiments, and generate valuable insights for the app’s developers.",
      "The project involves scraping user reviews, cleaning and preprocessing the text data, performing sentiment classification using machine learning techniques, and visualizing the results through various charts and graphs.",
      "The analysis will focus on the Indonesian language, as the app is primarily used by Indonesian speakers.",
    ],
  },
  {
    title: "Brazilian E-Commerce Data Analysis",
    github: "https://yumni-data-analysis-ecom.streamlit.app/",
    description: [
      "This project aims to conduct sentiment analA simple Streamlit app (Data Analysis Dashboard) showing an internal tool that lets you create, manage, and visualize business analysis.",
      "The app allows users to upload CSV files, visualize data with charts, and perform basic analysis.",
      "It includes features like data upload, chart generation, and basic statistics.",
      "The app is built using Streamlit, a Python library for creating interactive web applications.",
      "The project demonstrates how to create a user-friendly interface for data analysis tasks.",
    ],
  },
];

export const awards = [
  {
    name: "Program Kreativitas Mahasiswa (PKM)",
    issuer: "Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi",
    date: "Okt 2022",
    type: "-",
    position: "Funding Recipient",
  },
  {
    name: "Program Mahasiswa Wirausaha (PMW)",
    issuer: "Malikussaleh University",
    date: "Jan 2021",
    type: "-",
    position: "Funding Recipient",
  },
];
