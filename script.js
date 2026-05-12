// ======================================================
// YV ENGLISH — CRISTIANE HUB
// ======================================================

const PLAN = document.body.getAttribute("data-plan") || "Foundation";

const AUTH_KEY = "yv_cristiane_auth_until";
const SESSION_KEY = "yv_cristiane_session_auth";

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
        onclick="window.open('https://wa.me/5521965126480?text=Oi%20Yas%2C%20quero%20saber%20sobre%20o%20plano%20Fluency','_blank')">
        Falar com a Yas ✦
      </button>
    </div>
  `;

  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeDaily() {
  document.getElementById("dailyOverlay")?.classList.remove("open");
  document.body.style.overflow = "";
}

// ======================================================
// LOGOUT
// ======================================================

function logoutStudent() {
  localStorage.removeItem(AUTH_KEY);
  sessionStorage.removeItem(SESSION_KEY);

  window.location.href = "login.html";
}

// ======================================================
// SCROLL
// ======================================================

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth"
  });
}

// ======================================================
// WEEKS
// ======================================================

const WEEKS = [
  {
    number: 1,
    title: "To Be — Ser e Estar",
    focus:
      "Entender a diferença entre SER e ESTAR em inglês.",
    exercises: [
      "Escreva 3 frases usando I am.",
      "Transforme frases em perguntas.",
      "Pratique negativas com isn't e aren't."
    ],
    vocabulary: [
      {
        word: "I am",
        translation: "eu sou / estou",
        phonetic: "/ai am/"
      },
      {
        word: "you are",
        translation: "você é / está",
        phonetic: "/yu ar/"
      },
      {
        word: "he is",
        translation: "ele é / está",
        phonetic: "/hi iz/"
      },
      {
        word: "she is",
        translation: "ela é / está",
        phonetic: "/shi iz/"
      }
    ]
  },

  {
    number: 2,
    title: "Perguntas e Negativas",
    focus:
      "Dominar perguntas e negativas com To Be.",
    exercises: [
      "Escreva 5 perguntas.",
      "Escreva 5 negativas."
    ],
    vocabulary: [
      {
        word: "isn't",
        translation: "não é / não está"
      },
      {
        word: "aren't",
        translation: "não são / não estão"
      }
    ]
  }
];

// ======================================================
// EXTRA EXERCISES
// ======================================================

const EXTRA_EXERCISES = [
  {
    title: "To Be Practice",
    description:
      "Revisão interativa com perguntas e negativas.",
    url: "#"
  }
];

// ======================================================
// EXTRA CONTENT
// ======================================================

const EXTRA_CONTENT = {
  podcasts: [
    {
      title: "Easy Listening",
      description:
        "Podcast simples para listening.",
      url: ""
    }
  ],

  books: [
    {
      title: "Beginner Reader",
      description:
        "Livros simples para iniciantes.",
      url: ""
    }
  ]
};

let activeContentTab = "podcasts";

// ======================================================
// RENDER WEEKS
// ======================================================

function renderGrid() {
  const grid = document.getElementById("weeksGrid");

  if (!grid) return;

  grid.innerHTML = WEEKS.map(
    (week, index) => `
      <article class="week-card"
        onclick="openModal(${index})">

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

  const overlay =
    document.getElementById("overlay");

  const body =
    document.getElementById("modalBody");

  document.getElementById(
    "modalWeekLabel"
  ).textContent = `Semana ${week.number}`;

  document.getElementById(
    "modalTitle"
  ).textContent = week.title;

  document.getElementById(
    "modalFocus"
 
