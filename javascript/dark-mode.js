
const button = document.querySelector("[data-theme-toggler]");

button.addEventListener("click", () => {
  const currentTheme = document.body.getAttribute("data-theme");

  if (currentTheme === "light") {
    document.body.setAttribute("data-theme", "dark");
    button.textContent = "☀️";
  } else {
    document.body.setAttribute("data-theme", "light");
    button.textContent = "🌙";
  }
});

