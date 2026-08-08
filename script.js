// Edite este número caso o WhatsApp da empresa mude (somente dígitos, com código do país).
const whatsappNumber = "5587999302743";

document.querySelectorAll("[data-whatsapp]").forEach((button) => {
  const message = button.dataset.message || "Olá! Gostaria de mais informações.";
  button.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  button.target = "_blank";
  button.rel = "noopener noreferrer";
});

document.getElementById("year").textContent = new Date().getFullYear();

const themeToggle = document.querySelector(".theme-toggle");
const savedTheme = localStorage.getItem("vn-importados-theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

function setTheme(isDark) {
  document.body.classList.toggle("dark-theme", isDark);
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeToggle.setAttribute("aria-label", isDark ? "Ativar modo claro" : "Ativar modo escuro");
  themeToggle.querySelector("span").textContent = isDark ? "☀" : "☾";
  themeToggle.querySelector(".theme-toggle-text").textContent = isDark ? "Modo claro" : "Modo escuro";
}

setTheme(savedTheme ? savedTheme === "dark" : prefersDark);

themeToggle.addEventListener("click", () => {
  const isDark = !document.body.classList.contains("dark-theme");
  setTheme(isDark);
  localStorage.setItem("vn-importados-theme", isDark ? "dark" : "light");
});
