/* ============================================================
   TRANSLATIONS
   ============================================================ */
const translations = {
  en: {
    /* NAV */
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.stack": "Stack",
    "nav.experience": "Experience",
    "nav.contact": "Contact",

    /* HERO */
    "hero.badge": "Open to AI Engineer opportunities",
    "hero.description":
      'Software Engineer transitioning into <span class="accent">AI Engineering</span>. Building real-world systems in Machine Learning, LLMs, Computer Vision and Recommendation Systems from scratch.',
    "hero.cta.projects": "View Projects",
    "hero.stats.projects": "AI Projects",
    "hero.stats.years": "Years in Tech",
    "hero.stats.tech": "Technologies",

    /* PROFILE */
    "profile.available": "Available",
    "profile.role": "AI Engineer · Barcelona",
    "profile.focus.rag": "RAG Systems",
    "profile.focus.cv": "Computer Vision",
    "profile.focus.ml": "ML Pipelines",

    /* TERMINAL */
    "terminal.role": '"AI Engineer (in progress)"',
    "terminal.recsys": '"Recommendation Systems"',
    "terminal.comment": "# always learning",

    /* ABOUT */
    "about.title": "About",
    "about.p1":
      'I am a <span class="accent">proactive and extroverted</span> Software Engineer with a strong background in backend development and a deep passion for Artificial Intelligence. I adapt easily to new environments and thrive when working in collaborative, challenging teams.',
    "about.p2":
      'My professional journey started in <span class="accent">QA Automation and Microservices</span> at companies like Indra and NTT DATA. Now I am fully transitioning into <span class="accent">AI Engineering</span>, combining my solid software foundation with advanced skills in Machine Learning, Deep Learning, LLMs and data architectures.',
    "about.p3":
      'I am currently pursuing a <span class="accent">Master in AI & Big Data (STUCOM)</span> and building a portfolio of real-world AI systems that solve meaningful problems — from medical diagnostics to intelligent recommendation platforms.',
    "tags.proactive": "Proactive",
    "tags.teamplayer": "Team Player",
    "tags.learner": "Continuous Learner",
    "tags.solver": "Problem Solver",
    "tags.detail": "Detail Oriented",
    "about.card.location": "Location",
    "about.card.education": "Education",
    "about.card.experience": "Experience",
    "about.card.experience.value": "3+ Years in Tech",
    "about.card.languages": "Languages",
    "about.card.status": "Status",
    "about.card.status.value": "Open to opportunities",

    /* PROJECTS */
    "projects.title": "Featured",
    "filter.all": "All",
    "filter.llm": "LLM / RAG",
    "filter.cv": "Computer Vision",
    "filter.ml": "Machine Learning",
    "filter.graph": "Graph / Rec Sys",
    "label.featured": "Featured",
    "btn.viewcode": "View Code",

    "project.endoaid.subtitle":
      "Multimodal AI Clinical Decision Support System",
    "project.endoaid.desc":
      "Diagnostic simulator for colorectal cancer merging deep learning image analysis with structured patient data. Solves the <strong>Shortcut Learning</strong> problem through a dual ensemble architecture with real-time clinical explainability.",
    "project.endoaid.h1": "Dual ensemble: Context-aware vs Tissue-only",
    "project.endoaid.h2": "Grad-CAM visual heatmaps",
    "project.endoaid.h3": "SHAP values for tabular explainability",
    "project.endoaid.h4": "FastAPI + Streamlit production interface",

    "project.rag.subtitle": "Triple-Strategy Retrieval Architecture",
    "project.rag.desc":
      "Advanced RAG architecture designed to be accurate, efficient and <strong>hallucination-resistant</strong>. Implements HyDE, Hybrid Search and semantic caching for production-grade document QA.",
    "project.rag.h1": "HyDE + Hybrid Search (Vector + BM25)",
    "project.rag.h2": "FlashRank Cross-Encoder reranking",
    "project.rag.h3": "2-level semantic cache with intent normalization",
    "project.rag.h4": "LangSmith observability + 100% Pytest coverage",

    "project.cinegraph.subtitle":
      "Hybrid Recommendation & Social Network Platform",
    "project.cinegraph.desc":
      "Personalized recommendation platform overcoming the <strong>cold start problem</strong> by combining knowledge graphs, collaborative analytics and semantic enrichment with social network dynamics.",
    "project.cinegraph.h1": "Neo4j knowledge graph + social propagation",
    "project.cinegraph.h2": "Sentence-transformers semantic embeddings",
    "project.cinegraph.h3": "Multi-source ETL: MovieLens, TMDB, OMDb, Trakt",
    "project.cinegraph.h4": "Evaluation: Precision@K, Recall@K, NDCG",

    "project.smartcargo.subtitle": "AI Delivery Planner & Route Optimizer",
    "project.smartcargo.desc":
      "Logistics optimization platform for perishable goods solving the <strong>Vehicle Routing Problem (VRP)</strong> with a two-level AI approach combining clustering and evolutionary algorithms.",
    "project.smartcargo.h1": "K-Means strategic zone clustering",
    "project.smartcargo.h2": "Genetic Algorithms for route optimization",
    "project.smartcargo.h3": "Google OR-Tools constraint solving",
    "project.smartcargo.h4": "Real map rendering via OpenStreetMap + OSRM",

    "project.rainbow.subtitle": "Weather & Optical Phenomena Prediction System",
    "project.rainbow.desc":
      "End-to-end meteorological forecasting system for Catalonia. Complete ML pipeline from automated data ingestion to interactive visualization with rainbow probability calculation.",
    "project.rainbow.h1": "7 LightGBM models for multi-variable prediction",
    "project.rainbow.h2": "Automated ETL from AEMET + Open-Meteo APIs",
    "project.rainbow.h3": "Heuristic rainbow probability engine",
    "project.rainbow.h4": "Interactive Plotly dashboard + weather alerts",

    /* STACK */
    "stack.ai": "AI & Machine Learning",
    "stack.db": "Databases & Data Eng.",
    "stack.deploy": "APIs & Deployment",
    "stack.backend": "Backend Engineering",
    "stack.etl": "ETL Pipelines",
    "stack.vector": "Vector Databases",

    /* EXPERIENCE */
    "exp.title": "Experience &",
    "type.education": "Education",
    "type.work": "Work",
    "exp.stucom.period": "Sept 2025 – Jun 2026",
    "exp.stucom.title": "Master FP in Artificial Intelligence & Big Data",
    "exp.stucom.desc":
      "Advanced specialization focused on practical AI application. Building systems in Machine Learning, Deep Learning, Computer Vision, NLP and Big Data architectures with real-world projects.",
    "exp.ntt2.period": "Dec 2024 – Present",
    "exp.ntt2.title": "Software Engineer / Backend Developer",
    "exp.ntt2.desc":
      "Autonomous role with direct client communication and technical estimation. Led development of end-to-end medical teleselection platform and contributed to new financial insurance products including Allianz Flexible Savings.",
    "exp.ntt1.period": "May 2024 – Dec 2024",
    "exp.ntt1.title": "Junior Microservices Developer",
    "exp.ntt1.desc":
      "Immersion in corporate software development for the insurance sector (Allianz Vida). Backend logic implementation with Java and Spring Boot, plus frontend support with Angular.",
    "exp.indra.period": "Jun 2021 – May 2024",
    "exp.indra.title": "QA Automation Engineer → Systems Engineer",
    "exp.indra.desc":
      "Progressed from junior tester to leading QA strategy and automated test architecture using Selenium WebDriver and Java under Agile methodologies.",

    /* CONTACT */
    "contact.title": "Get in",
    "contact.intro":
      'I am currently <span class="accent">open to AI Engineer and ML Engineer opportunities</span>. If you have an interesting project or position, let\'s talk.',
    "contact.email": "Email",
    "contact.terminal.loaded": "✅ Candidate loaded successfully",
    "contact.terminal.skills": "→ Skills: AI / ML / LLMs / CV",
    "contact.terminal.status": "→ Status: Available",
    "contact.terminal.location": "→ Location: Barcelona (Remote OK)",

    /* FOOTER */
    "footer.text": "Built with passion for AI. Barcelona 2026.",

    /* TYPEWRITER */
    typewriter: [
      "AI Engineer (in progress)",
      "Machine Learning Developer",
      "LLMs & RAG Systems Builder",
      "Computer Vision Enthusiast",
      "Software Engineer → AI",
    ],
  },

  es: {
    /* NAV */
    "nav.about": "Sobre mí",
    "nav.projects": "Proyectos",
    "nav.stack": "Stack",
    "nav.experience": "Experiencia",
    "nav.contact": "Contacto",

    /* HERO */
    "hero.badge": "Abierto a oportunidades como AI Engineer",
    "hero.description":
      'Ingeniero de Software en transición hacia la <span class="accent">Ingeniería de IA</span>. Construyendo sistemas reales en Machine Learning, LLMs, Visión por Computador y Sistemas de Recomendación desde cero.',
    "hero.cta.projects": "Ver Proyectos",
    "hero.stats.projects": "Proyectos IA",
    "hero.stats.years": "Años en Tech",
    "hero.stats.tech": "Tecnologías",

    /* PROFILE */
    "profile.available": "Disponible",
    "profile.role": "AI Engineer · Barcelona",
    "profile.focus.rag": "Sistemas RAG",
    "profile.focus.cv": "Visión por Computador",
    "profile.focus.ml": "Pipelines ML",

    /* TERMINAL */
    "terminal.role": '"Ingeniero IA (en progreso)"',
    "terminal.recsys": '"Sistemas de Recomendación"',
    "terminal.comment": "# siempre aprendiendo",

    /* ABOUT */
    "about.title": "Sobre",
    "about.p1":
      'Soy un Ingeniero de Software <span class="accent">proactivo y extrovertido</span>, con una sólida base en desarrollo backend y una gran pasión por la Inteligencia Artificial. Me adapto fácilmente a nuevos entornos y rindo al máximo en equipos colaborativos y desafiantes.',
    "about.p2":
      'Mi trayectoria profesional comenzó en <span class="accent">QA Automation y Microservicios</span> en empresas como Indra y NTT DATA. Ahora estoy realizando una transición completa hacia la <span class="accent">Ingeniería de IA</span>, combinando mi sólida base en software con habilidades avanzadas en Machine Learning, Deep Learning, LLMs y arquitecturas de datos.',
    "about.p3":
      'Actualmente curso un <span class="accent">Máster en IA y Big Data (STUCOM)</span> y construyo un portfolio de sistemas de IA del mundo real que resuelven problemas significativos, desde diagnóstico médico hasta plataformas de recomendación inteligentes.',
    "tags.proactive": "Proactivo",
    "tags.teamplayer": "Trabajo en Equipo",
    "tags.learner": "Aprendizaje Continuo",
    "tags.solver": "Resolución de Problemas",
    "tags.detail": "Orientado al Detalle",
    "about.card.location": "Ubicación",
    "about.card.education": "Formación",
    "about.card.experience": "Experiencia",
    "about.card.experience.value": "3+ Años en Tech",
    "about.card.languages": "Idiomas",
    "about.card.status": "Estado",
    "about.card.status.value": "Abierto a oportunidades",

    /* PROJECTS */
    "projects.title": "Proyectos",
    "filter.all": "Todos",
    "filter.llm": "LLM / RAG",
    "filter.cv": "Visión Artificial",
    "filter.ml": "Machine Learning",
    "filter.graph": "Grafo / Rec Sys",
    "label.featured": "Destacado",
    "btn.viewcode": "Ver Código",

    "project.endoaid.subtitle":
      "Sistema multimodal de apoyo a decisiones clínicas con IA",
    "project.endoaid.desc":
      "Simulador diagnóstico para cáncer colorrectal que combina análisis de imágenes con deep learning y datos clínicos estructurados. Resuelve el problema de <strong>Shortcut Learning</strong> mediante una arquitectura de doble ensemble con explicabilidad clínica en tiempo real.",
    "project.endoaid.h1": "Doble ensemble: Con contexto vs Solo tejido",
    "project.endoaid.h2": "Mapas de calor visuales con Grad-CAM",
    "project.endoaid.h3": "Valores SHAP para explicabilidad tabular",
    "project.endoaid.h4": "Interfaz de producción con FastAPI + Streamlit",

    "project.rag.subtitle":
      "Arquitectura de recuperación con triple estrategia",
    "project.rag.desc":
      "Arquitectura RAG avanzada diseñada para ser precisa, eficiente y <strong>resistente a alucinaciones</strong>. Implementa HyDE, Búsqueda Híbrida y caché semántica para QA documental en producción.",
    "project.rag.h1": "HyDE + Búsqueda híbrida (Vector + BM25)",
    "project.rag.h2": "Reranking con FlashRank Cross-Encoder",
    "project.rag.h3":
      "Caché semántica de 2 niveles con normalización de intención",
    "project.rag.h4": "Observabilidad con LangSmith + 100% cobertura Pytest",

    "project.cinegraph.subtitle":
      "Plataforma de recomendación híbrida y red social",
    "project.cinegraph.desc":
      "Plataforma de recomendación personalizada que supera el <strong>problema del arranque en frío</strong> combinando grafos de conocimiento, analítica colaborativa y enriquecimiento semántico con dinámicas de red social.",
    "project.cinegraph.h1": "Grafo de conocimiento Neo4j + propagación social",
    "project.cinegraph.h2": "Embeddings semánticos con Sentence-transformers",
    "project.cinegraph.h3": "ETL multi-fuente: MovieLens, TMDB, OMDb, Trakt",
    "project.cinegraph.h4": "Evaluación: Precision@K, Recall@K, NDCG",

    "project.smartcargo.subtitle": "Planificador de rutas y entregas con IA",
    "project.smartcargo.desc":
      "Plataforma de optimización logística para productos perecederos que resuelve el <strong>Problema de Enrutamiento de Vehículos (VRP)</strong> con un enfoque de IA de dos niveles combinando clustering y algoritmos evolutivos.",
    "project.smartcargo.h1": "Clustering estratégico de zonas con K-Means",
    "project.smartcargo.h2": "Algoritmos genéticos para optimización de rutas",
    "project.smartcargo.h3": "Resolución de restricciones con Google OR-Tools",
    "project.smartcargo.h4":
      "Renderizado de mapas reales con OpenStreetMap + OSRM",

    "project.rainbow.subtitle":
      "Sistema de predicción meteorológica y fenómenos ópticos",
    "project.rainbow.desc":
      "Sistema de predicción meteorológica end-to-end para Cataluña. Pipeline completo de ML desde la ingesta automatizada de datos hasta la visualización interactiva con cálculo de probabilidad de arcoíris.",
    "project.rainbow.h1": "7 modelos LightGBM para predicción multivariable",
    "project.rainbow.h2": "ETL automatizado desde AEMET + Open-Meteo APIs",
    "project.rainbow.h3": "Motor heurístico de probabilidad de arcoíris",
    "project.rainbow.h4":
      "Dashboard interactivo con Plotly + alertas meteorológicas",

    /* STACK */
    "stack.ai": "IA y Machine Learning",
    "stack.db": "Bases de Datos e Ingeniería de Datos",
    "stack.deploy": "APIs y Despliegue",
    "stack.backend": "Ingeniería Backend",
    "stack.etl": "Pipelines ETL",
    "stack.vector": "Bases de Datos Vectoriales",

    /* EXPERIENCE */
    "exp.title": "Experiencia y",
    "type.education": "Formación",
    "type.work": "Trabajo",
    "exp.stucom.period": "Sep 2025 – Jun 2026",
    "exp.stucom.title": "Máster FP en Inteligencia Artificial y Big Data",
    "exp.stucom.desc":
      "Especialización avanzada centrada en la aplicación práctica de la IA. Construcción de sistemas en Machine Learning, Deep Learning, Visión por Computador, NLP y arquitecturas Big Data con proyectos reales.",
    "exp.ntt2.period": "Dic 2024 – Presente",
    "exp.ntt2.title": "Ingeniero de Software / Desarrollador Backend",
    "exp.ntt2.desc":
      "Rol autónomo con comunicación directa con el cliente y estimación técnica. Lideré el desarrollo de una plataforma de tele-selección médica y contribuí a nuevos productos de seguros financieros, incluyendo Allianz Ahorro Flexible.",
    "exp.ntt1.period": "May 2024 – Dic 2024",
    "exp.ntt1.title": "Desarrollador Junior de Microservicios",
    "exp.ntt1.desc":
      "Inmersión en el desarrollo de software corporativo para el sector asegurador (Allianz Vida). Implementación de lógica backend con Java y Spring Boot, además de soporte frontend con Angular.",
    "exp.indra.period": "Jun 2021 – May 2024",
    "exp.indra.title": "QA Automation Engineer → Ingeniero de Sistemas",
    "exp.indra.desc":
      "Evolución de tester junior a liderar la estrategia de QA y la arquitectura de pruebas automatizadas con Selenium WebDriver y Java bajo metodologías Agile.",

    /* CONTACT */
    "contact.title": "Contáctame",
    "contact.intro":
      'Actualmente estoy <span class="accent">abierto a oportunidades como AI Engineer y ML Engineer</span>. Si tienes un proyecto o posición interesante, hablemos.',
    "contact.email": "Correo",
    "contact.terminal.loaded": "✅ Candidato cargado correctamente",
    "contact.terminal.skills": "→ Skills: IA / ML / LLMs / CV",
    "contact.terminal.status": "→ Estado: Disponible",
    "contact.terminal.location": "→ Ubicación: Barcelona (Remoto OK)",

    /* FOOTER */
    "footer.text": "Construido con pasión por la IA. Barcelona 2026.",

    /* TYPEWRITER */
    typewriter: [
      "Ingeniero de IA (en progreso)",
      "Desarrollador de Machine Learning",
      "Creador de LLMs y sistemas RAG",
      "Entusiasta de Visión por Computador",
      "Ingeniero de Software → IA",
    ],
  },
};

/* ============================================================
   I18N ENGINE
   ============================================================ */
let currentLang = "en";
const LANGUAGE_STORAGE_KEY = "portfolioLanguage";

function getStoredLanguage() {
  try {
    const storedLang = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    return translations[storedLang] ? storedLang : null;
  } catch {
    return null;
  }
}

function storeLanguage(lang) {
  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
  } catch {
    /* localStorage may be blocked in private or restricted contexts. */
  }
}

function applyTranslations(lang) {
  const t = translations[lang];
  if (!t) return;
  currentLang = lang;

  /* Atributo data-i18n → textContent */
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });

  /* Atributo data-i18n-html → innerHTML (permite <span>, <strong>, etc.) */
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.dataset.i18nHtml;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  /* Términos del terminal (textContent sin alterar estructura) */
  document.querySelectorAll("[data-i18n-term]").forEach((el) => {
    const key = el.dataset.i18nTerm;
    if (t[key] !== undefined) el.textContent = t[key];
  });

  /* Actualizar botones del selector */
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    const isActive = btn.dataset.lang === lang;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-pressed", String(isActive));
  });

  /* Actualizar lang del <html> */
  document.documentElement.lang = lang;

  /* Reiniciar typewriter con las frases del idioma */
  restartTypewriter(t["typewriter"]);
}

/* ============================================================
   LANGUAGE SELECTOR EVENTS
   ============================================================ */
document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const lang = btn.dataset.lang;
    if (lang !== currentLang) {
      applyTranslations(lang);
      storeLanguage(lang);
    }
  });
});

/* ============================================================
   PARTICLES CANVAS
   ============================================================ */
const canvas = document.getElementById("particles-canvas");
const ctx = canvas.getContext("2d");
let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

class Particle {
  constructor() {
    this.reset();
  }
  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 1.5 + 0.3;
    this.speedX = (Math.random() - 0.5) * 0.3;
    this.speedY = (Math.random() - 0.5) * 0.3;
    this.opacity = Math.random() * 0.4 + 0.1;
    this.color =
      Math.random() > 0.7
        ? `rgba(168, 85, 247, ${this.opacity})`
        : `rgba(180, 180, 200, ${this.opacity})`;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (
      this.x < 0 ||
      this.x > canvas.width ||
      this.y < 0 ||
      this.y > canvas.height
    )
      this.reset();
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

function initParticles() {
  particles = [];
  const count = Math.floor((canvas.width * canvas.height) / 12000);
  for (let i = 0; i < Math.min(count, 100); i++) particles.push(new Particle());
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((p, i) => {
    particles.slice(i + 1).forEach((p2) => {
      const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
      if (dist < 120) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = `rgba(168, 85, 247, ${0.06 * (1 - dist / 120)})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    });
  });
  particles.forEach((p) => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animateParticles);
}

resizeCanvas();
initParticles();
animateParticles();
window.addEventListener("resize", () => {
  resizeCanvas();
  initParticles();
});

/* ============================================================
   NAVBAR SCROLL EFFECT
   ============================================================ */
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

/* ============================================================
   MOBILE NAV TOGGLE
   ============================================================ */
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

/* ============================================================
   TYPEWRITER EFFECT
   ============================================================ */
let phrases = translations["en"]["typewriter"];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeTimeout = null;
const typeEl = document.getElementById("typewriter-text");

function typewriter() {
  const current = phrases[phraseIndex];
  const speed = isDeleting ? 50 : 100;

  typeEl.textContent = isDeleting
    ? current.substring(0, charIndex--)
    : current.substring(0, charIndex++);

  if (!isDeleting && charIndex === current.length + 1) {
    isDeleting = true;
    typeTimeout = setTimeout(typewriter, 1600);
    return;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
  }

  typeTimeout = setTimeout(typewriter, speed);
}

function restartTypewriter(newPhrases) {
  clearTimeout(typeTimeout);
  phrases = newPhrases;
  phraseIndex = 0;
  charIndex = 0;
  isDeleting = false;
  typeEl.textContent = "";
  typeTimeout = setTimeout(typewriter, 400);
}

typeTimeout = setTimeout(typewriter, 800);

const initialLang = getStoredLanguage();
if (initialLang && initialLang !== currentLang) {
  applyTranslations(initialLang);
}

/* ============================================================
   COUNTER ANIMATION
   ============================================================ */
function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  const duration = 1800;
  const step = target / (duration / 16);
  let current = 0;
  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      el.textContent = target + "+";
      clearInterval(timer);
    } else {
      el.textContent = Math.floor(current);
    }
  }, 16);
}

const countersTriggered = new Set();
const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !countersTriggered.has(entry.target)) {
        countersTriggered.add(entry.target);
        animateCounter(entry.target);
      }
    });
  },
  { threshold: 0.5 },
);

document
  .querySelectorAll(".stat-number")
  .forEach((el) => counterObserver.observe(el));

/* ============================================================
   SCROLL REVEAL
   ============================================================ */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  },
  { threshold: 0.12 },
);

document
  .querySelectorAll(
    ".project-card, .stack-category, .info-card, " +
      ".contact-link, .about-paragraph, .about-tags",
  )
  .forEach((el) => {
    el.classList.add("reveal");
    revealObserver.observe(el);
  });

/* ============================================================
   TIMELINE REVEAL
   ============================================================ */
const timelineObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  },
  { threshold: 0.15 },
);

document
  .querySelectorAll(".timeline-item")
  .forEach((el) => timelineObserver.observe(el));

/* ============================================================
   SKILL BARS ANIMATION
   ============================================================ */
const stackObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll(".stack-fill").forEach((bar) => {
          const width = bar.dataset.width;
          setTimeout(() => {
            bar.style.width = width + "%";
          }, 200);
        });
      }
    });
  },
  { threshold: 0.3 },
);

document
  .querySelectorAll(".stack-category")
  .forEach((el) => stackObserver.observe(el));

/* ============================================================
   PROJECT FILTERS
   ============================================================ */
const filterBtns = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const filter = btn.dataset.filter;
    projectCards.forEach((card) => {
      const category = card.dataset.category || "";
      if (filter === "all" || category.includes(filter)) {
        card.classList.remove("hidden");
        card.style.animation = "none";
        card.offsetHeight;
        card.style.animation = "";
      } else {
        card.classList.add("hidden");
      }
    });
  });
});

/* ============================================================
   SMOOTH ACTIVE NAV LINK ON SCROLL
   ============================================================ */
const sections = document.querySelectorAll("section[id]");
const navLinkEls = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 200) {
      current = section.getAttribute("id");
    }
  });
  navLinkEls.forEach((link) => {
    link.style.color =
      link.getAttribute("href") === `#${current}` ? "#a855f7" : "";
  });
});
