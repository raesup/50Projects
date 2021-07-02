const nav = document.querySelector(".nav");
const links = document.querySelectorAll(".link");

window.addEventListener("scroll", fixNav);

function fixNav() {
  console.log(window.pageYOffset, nav.offsetHeight);
  if (window.pageYOffset > nav.offsetHeight + 150) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
}

links.forEach((link) => {
  link.addEventListener("click", () => {
    links.forEach((link) => {
      link.classList.remove("current");
    });
    link.classList.add("current");
  });
});
