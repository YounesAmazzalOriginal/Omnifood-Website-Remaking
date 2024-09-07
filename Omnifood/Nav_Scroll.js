function nav_onscroll() {
  if (window.scrollY === 0) {
    nav.style.backgroundColor = "";
    nav.style.transition = "all 0.5s ease";
  } else {
    nav.style.backgroundColor = "white";
    nav.style.transition = "all 0.5s ease";
  }
}

window.addEventListener("scroll", nav_onscroll);
