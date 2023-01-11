const toggleModeButton = document.getElementById("toggle-mode-button");
const icon = document.getElementById("icon");

// mira si el modo ya esta guardado el localstorage
const currentMode = localStorage.getItem("mode") || "light";

// aplica el modo al elemento body
document.body.classList.add(currentMode + "-mode");

// actualiza el src del icono
icon.setAttribute("src", "icono/" + (currentMode === "dark" ? "sun" : "moon") + ".svg");

// handle button click event
toggleModeButton.addEventListener("click", function() {
  // toggle the mode
  document.body.classList.toggle("dark-mode");
  document.body.classList.toggle("light-mode");

  // actualiza el src del icono
  icon.setAttribute("src", "icono/" + (document.body.classList.contains("dark-mode") ? "sun" : "moon") + ".svg");
  // guarda el modo en local storage
  localStorage.setItem("mode", document.body.classList.contains("dark-mode") ? "dark" : "light");
});