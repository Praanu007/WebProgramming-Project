function injectNavbar() {
  const mount = document.getElementById("navMount");
  if (!mount) return;
  fetch("components/navigationbar.html")
    .then((r) => r.text())
    .then((html) => {
      mount.innerHTML = html;
    });
}

function setupSlides(scopeId) {
  const scope = document.getElementById(scopeId);
  if (!scope) return;
  const slides = [...scope.querySelectorAll(".slide")];
  let index = 0;
  const show = () => {
    slides.forEach((s, i) => s.classList.toggle("active", i === index));
  };
  scope.querySelector(".next-slide")?.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    show();
  });
  scope.querySelector(".prev-slide")?.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    show();
  });
  const setFromHash = () => {
    const hash = window.location.hash;
    if (!hash) return;
    const hashIndex = slides.findIndex((s) => `#${s.id}` === hash);
    if (hashIndex >= 0) {
      index = hashIndex;
      show();
      slides[hashIndex].scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  window.addEventListener("hashchange", setFromHash);
  show();
  setFromHash();
}

function setWelcomeMessage() {
  const btn = document.getElementById("welcomeBtn");
  const p = document.getElementById("welcomeText");
  if (!btn || !p) return;
  btn.addEventListener("click", () => {
    p.innerHTML = "Welcome to JavaScript!";
  });
}

function greetingForm() {
  const submit = document.getElementById("nameSubmit");
  const name = document.getElementById("nameInput");
  const out = document.getElementById("nameOutput");
  if (!submit || !name || !out) return;
  submit.addEventListener("click", () => {
    out.innerHTML = `Hello ${name.value || "Learner"}, Welcome!`;
  });
}

function validateUniversityForm() {
  const form = document.getElementById("universityForm");
  const err = document.getElementById("uniError");
  if (!form || !err) return;
  form.addEventListener("submit", (e) => {
    const pwd = form.querySelector("#uPassword").value;
    const cpwd = form.querySelector("#uConfirm").value;
    const age = Number(form.querySelector("#uAge").value);
    if (pwd.length < 8 || pwd !== cpwd || Number.isNaN(age) || age < 18) {
      e.preventDefault();
      err.innerHTML = "Check password length/match and age >= 18.";
    } else {
      err.innerHTML = "Validation passed.";
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  injectNavbar();
  setupSlides("homeSlides");
  setupSlides("aboutSlides");
  setupSlides("contactSlides");
  setWelcomeMessage();
  greetingForm();
  validateUniversityForm();
});
