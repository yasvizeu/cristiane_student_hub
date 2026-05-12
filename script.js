// ======================================================
// YV ENGLISH — CRISTIANE HUB
// ======================================================

// ======================================================
// CONFIG
// ======================================================

const PLAN = document.body.getAttribute("data-plan") || "Foundation";

const AUTH_KEY = "yv_cristiane_auth_until";
const SESSION_KEY = "yv_cristiane_session_auth";

// ======================================================
// DAILY CONTENT
// ======================================================

const DAILY_LIST = [
  {
    label: "To Be + Family",
    text: "Cristiane is in the park today. She is with her family. Her boyfriend is with her. Her children are playing. They are tired but happy.",
  },

  {
    label: "To Be Questions",
    text: "Cristiane is practicing questions today. Are you okay? Is she your daughter? Are they at home?",
  }
];

const DAILY =
  DAILY_LIST[Math.floor(Date.now() / 86400000) % DAILY_LIST.length];

// ======================================================
// WEEKS
// ======================================================

const WEEKS = [
  {
    number: 1,

    title: "To Be — Ser e Estar",

    focus:
      "Entender a diferença entre SER e ESTAR em inglês.",

    pdfs: [
      {
        label: "To Be — Semana 1",
        url:
          "https://drive.google.com/file/d/1Sy2vF5MsjdcpRLBHGqVCNOPtS8N5dBYf/view?usp=sharing",
      },
    ],

    exercises: [
      "Escreva 3 frases sobre você usando I am.",
      "Escreva 3 frases sobre sua família.",
      "Transforme em perguntas.",
      "Transforme em negativas.",
    ],

    vocabulary: [
      {
        word: "I am",
        translation: "eu sou / estou",
        phonetic: "/ai am/",
      },

      {
        word: "you are",
        translation: "você é / está",
        phonetic: "/yu ar/",
      },

      {
        word: "he is",
        translation: "ele é / está",
        phonetic: "/hi iz/",
      },

      {
        word: "she is",
        translation: "ela é / está",
        phonetic: "/shi iz/",
      },

      {
        word: "they are",
        translation: "eles são / estão",
        phonetic: "/dhei ar/",
      },

      {
        word: "family",
        translation: "família",
        phonetic: "/famili/",
      },

      {
        word: "children",
        translation: "filhos",
        phonetic: "/tchildren/",
      },

      {
        word: "boyfriend",
        translation: "namorado",
        phonetic: "/boifriend/",
      },
    ],
  },

  {
    number: 2,

    title: "Perguntas e Negativas",

    focus:
      "Dominar perguntas e negativas usando To Be.",

    pdfs: [],

    exercises: [
      "Escreva 5 perguntas usando To Be.",
      "Escreva 5 negativas usando isn't e aren't.",
    ],

    vocabulary: [
      {
        word: "isn't",
        translation: "não é / não está",
        phonetic: "/iznt/",
      },

      {
        word: "aren't",
        translation: "não são / não estão",
        phonetic: "/arnt/",
      },

      {
        word: "daughter",
        translation: "filha",
        phonetic: "/doter/",
      },

      {
        word: "son",
        translation: "filho",
        phonetic: "/san/",
      },
    ],
  },
];

// ======================================================
// EXTRA EXERCISES
// ======================================================

const EXTRA_EXERCISES = [
  {
    week: 1,

    title: "To Be Practice",

    tag: "To Be",

    description:
      "Revisão interativa com perguntas e negativas.",

    url: "#",
  },
];

// ======================================================
// EXTRA CONTENT
// ======================================================

const EXTRA_CONTENT = {
  podcasts: [
    {
      title: "Easy Listening",

      description:
        "Adicione podcasts aqui depois.",

      url: "",
    },
  ],

  books: [
    {
      title: "Beginner Readers",

      description:
        "Adicione livros aqui depois.",

      url: "",
    },
  ],

  videos: [
    {
      title: "To Be Review",

      description:
        "Vídeos para revisão.",

      url: "",
    },
  ],

  websites: [
    {
      title: "Useful Websites",

      description:
        "Sites úteis para estudar.",

      url: "",
    },
  ],
};

let activeContentTab = "podcasts";

// ======================================================
// HELPERS
// ======================================================

function logoutStudent() {
  localStorage.removeItem(AUTH_KEY);
  sessionStorage.removeItem(SESSION_KEY);

  window.location.href = "login.html";
}

function scrollToSection(id) {
  document
    .getElementById(id)
    ?.scrollIntoView({
      behavior: "smooth",
    });
}

function speakWord(word) {
  if (!window.speechSynthesis) return;

  window.speechSynthesis.cancel();

  const u = new SpeechSynthesisUtterance(word);

  u.lang = "en-US";
  u.rate = 0.84;

  window.speechSynthesis.speak(u);
}

// ======================================================
// DAILY CONTENT
// ======================================================

function openDaily() {
  const overlay = document.getElementById("dailyOverlay");

  const body = document.getElementById("dailyBody");

  const dateEl = document.getElementById("dailyDate");

  if (!overlay || !body) return;

  dateEl.textContent = "Daily Content";

  body.innerHTML = `
    <div class="daily-locked">

      <span class="daily-lock-icon">🔒</span>

      <h3>Daily Content indisponível</h3>

      <p>
        O <strong>Daily Content</strong> é exclusivo para
        alunos dos planos <strong>Fluency</strong> e
        <strong>Performance</strong>.
      </p>

      <p class="daily-small">
        Seu plano atual é:
        <strong>${PLAN}</strong>
      </p>

      <button class="upgrade-btn"
        onclick="window.open(
        'https://wa.me/5521965126480?text=Oi%20Yas%2C%20quero%20saber%20sobre%20o%20plano%20Fluency',
        '_blank'
        )">
        Falar com a Yas ✦
      </button>

    </div>
  `;

  overlay.classList.add("open");

  document.body.style.overflow = "hidden";
}

function closeDaily() {
  document
    .getElementById("dailyOverlay")
    ?.classList.remove("open");

  document.body.style.overflow = "";
}

// ======================================================
// RENDER WEEKS
// ======================================================

function renderGrid() {
  const grid = document.getElementById("weeksGrid");

  if (!grid) return;

  grid.innerHTML = WEEKS.map(
    (week, index) => `
      <article
        class="week-card"
        onclick="openModal(${index})"
      >

        <div class="card-head">
          <p class="card-number">
            Semana ${week.number}
          </p>

          <h2 class="card-title">
            ${week.title}
          </h2>
        </div>

        <div class="card-body">

          <p class="card-focus">
            ${week.focus}
          </p>

          <div class="card-cta">
            Ver material →
          </div>

        </div>

      </article>
    `
  ).join("");
}

// ======================================================
// MODAL
// ======================================================

function openModal(index) {
  const week = WEEKS[index];

  document.getElementById(
    "modalWeekLabel"
  ).textContent = `Semana ${week.number}`;

  document.getElementById(
    "modalTitle"
  ).textContent = week.title;

  document.getElementById(
    "modalFocus"
  ).textContent = week.focus;

  document.getElementById(
    "modalBody"
  ).innerHTML = `
    ${renderPdfs(week.pdfs)}
    ${renderExercises(week.exercises)}
    ${renderVocabulary(week.vocabulary)}
  `;

  document
    .getElementById("overlay")
    ?.classList.add("open");

  document.body.style.overflow = "hidden";
}

function closeModal() {
  document
    .getElementById("overlay")
    ?.classList.remove("open");

  document.body.style.overflow = "";
}

// ======================================================
// PDFS
// ======================================================

function renderPdfs(pdfs = []) {
  if (!pdfs.length) return "";

  return `
    <div class="resource-section">

      <h3 class="res-title">
        PDFs
      </h3>

      <div class="res-list">

        ${pdfs
          .map(
            (pdf) => `
              <div class="res-item">

                <span class="res-item-label">
                  ${pdf.label}
                </span>

                <a
                  href="${pdf.url}"
                  target="_blank"
                  class="btn-open"
                >
                  Abrir ↗
                </a>

              </div>
            `
          )
          .join("")}

      </div>

    </div>
  `;
}

// ======================================================
// EXERCISES
// ======================================================

function renderExercises(exercises = []) {
  if (!exercises.length) return "";

  return `
    <div class="resource-section">

      <h3 class="res-title">
        Exercícios
      </h3>

      <ul class="exercise-list">

        ${exercises
          .map(
            (exercise) => `
              <li>${exercise}</li>
            `
          )
          .join("")}

      </ul>

    </div>
  `;
}

// ======================================================
// VOCABULARY
// ======================================================

function renderVocabulary(vocabulary = []) {
  if (!vocabulary.length) return "";

  return `
    <div class="resource-section">

      <h3 class="res-title">
        Vocabulário
      </h3>

      <div class="vocab-grid">

        ${vocabulary
          .map(
            (item) => `
              <div
                class="vocab-card"
                onclick="this.classList.toggle('flipped')"
              >

                <div class="vocab-front">

                  <button
                    class="vocab-speak-btn"
                    onclick="event.stopPropagation();speakWord('${item.word}')"
                  >
                    🔊
                  </button>

                  <span class="vocab-word">
                    ${item.word}
                  </span>

                  <span class="vocab-phonetic">
                    ${item.phonetic || ""}
                  </span>

                </div>

                <div class="vocab-back">

                  <span class="vocab-translation">
                    ${item.translation}
                  </span>

                </div>

              </div>
            `
          )
          .join("")}

      </div>

    </div>
  `;
}

// ======================================================
// GLOSSARY
// ======================================================

function getAllGlossary() {
  const all = [];

  WEEKS.forEach((week) => {
    (week.vocabulary || []).forEach((item) => {
      all.push({
        ...item,
        week: week.number,
      });
    });
  });

  return all;
}

function renderGlossary() {
  const glossary =
    document.getElementById(
      "glossarySection"
    );

  if (!glossary) return;

  const words = getAllGlossary();

  glossary.innerHTML = words
    .map(
      (item) => `
        <div class="glossary-row">

          <button
            class="glos-speak"
            onclick="speakWord('${item.word}')"
          >
            🔊
          </button>

          <span class="glos-word">
            ${item.word}
          </span>

          <span class="glos-trans">
            ${item.translation}
          </span>

          <span class="glos-week-badge">
            Sem. ${item.week}
          </span>

        </div>
      `
    )
    .join("");
}

function toggleGlossary() {
  const section =
    document.getElementById(
      "glossarySection"
    );

  const cta =
    document.getElementById(
      "glossaryBtnCta"
    );

  if (!section || !cta) return;

  const isOpen =
    section.style.display !== "none";

  section.style.display =
    isOpen ? "none" : "block";

  cta.textContent = isOpen
    ? "Ver palavras →"
    : "Esconder palavras ↑";
}

// ======================================================
// EXTRA EXERCISES
// ======================================================

function renderExtraExercisesHome() {
  const grid =
    document.getElementById(
      "extraExercisesGrid"
    );

  if (!grid) return;

  grid.innerHTML =
    EXTRA_EXERCISES.map(
      (item) => `
        <article class="extra-exercise-card">

          <span>${item.tag}</span>

          <h3>${item.title}</h3>

          <p>${item.description}</p>

          <a
            href="${item.url}"
            target="_blank"
          >
            Abrir exercício →
          </a>

        </article>
      `
    ).join("");
}

// ======================================================
// EXTRA CONTENT
// ======================================================

function renderExtraContent() {
  const tabs =
    document.getElementById(
      "contentTabs"
    );

  const grid =
    document.getElementById(
      "extraContentGrid"
    );

  if (!tabs || !grid) return;

  const labels = {
    podcasts: "Podcasts",
    books: "Books",
    videos: "Videos",
    websites: "Websites",
  };

  tabs.innerHTML =
    Object.keys(EXTRA_CONTENT)
      .map(
        (key) => `
          <button
            class="content-tab ${
              key === activeContentTab
                ? "active"
                : ""
            }"

            onclick="setContentTab('${key}')"
          >
            ${labels[key]}
          </button>
        `
      )
      .join("");

  grid.innerHTML =
    EXTRA_CONTENT[
      activeContentTab
    ]
      .map(
        (item) => `
          <article class="content-card">

            <h3>${item.title}</h3>

            <p>${item.description}</p>

          </article>
        `
      )
      .join("");
}

function setContentTab(tab) {
  activeContentTab = tab;

  renderExtraContent();
}

// ======================================================
// INIT
// ======================================================

function initHub() {
  try {
    renderGrid();

    renderGlossary();

    renderExtraExercisesHome();

    renderExtraContent();

    console.log(
      "YV Cristiane Hub loaded ✦"
    );
  } catch (err) {
    console.error(
      "Erro ao iniciar hub:",
      err
    );
  }
}

document.addEventListener(
  "DOMContentLoaded",
  initHub
);

// ======================================================
// CLOSE MODALS
// ======================================================

const overlayEl =
  document.getElementById("overlay");

if (overlayEl) {
  overlayEl.addEventListener(
    "click",
    (e) => {
      if (
        e.target === e.currentTarget
      ) {
        closeModal();
      }
    }
  );
}

const dailyOverlayEl =
  document.getElementById(
    "dailyOverlay"
  );

if (dailyOverlayEl) {
  dailyOverlayEl.addEventListener(
    "click",
    (e) => {
      if (
        e.target ===
        e.currentTarget
      ) {
        closeDaily();
      }
    }
  );
}

document.addEventListener(
  "keydown",
  (e) => {
    if (e.key === "Escape") {
      closeModal();

      closeDaily();
    }
  }
);
