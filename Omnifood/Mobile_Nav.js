const bars_mobile_nav_bar = document.querySelector(".bars_mobile_nav_bar");
bars_mobile_nav_bar.addEventListener("click", open_nav_function);

const nav = document.querySelector("nav");

function open_nav_function() {
  nav.style.display = "flex";
}

function close_mobile_nav_button_function() {
  nav.style.display = "none";
}
