const left = document.getElementById("left");
const right = document.getElementById("right");
const body = document.body;
const slides = document.querySelectorAll(".slide");
let current = 0;

setBG();
setActive();

function setBG() {
  body.style.backgroundImage = `url(images/bg${current}.jpg)`;
}

function setActive() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slides[current].classList.add("active");
}

right.addEventListener("click", () => {
  current++;
  if (current > slides.length - 1) {
    current = 0;
  }

  setBG();
  setActive();
});

left.addEventListener("click", () => {
  current--;
  if (current < 0) {
    current = slides.length - 1;
  }

  setBG();
  setActive();
});

// Solution
// let activeSlide = 0;

// setBgToBody();
// setActiveSlide();

// function setBgToBody() {
//   body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
// }

// function setActiveSlide() {
//   slides.forEach((slide) => {
//     slide.classList.remove("active");
//   });

//   slides[activeSlide].classList.add("active");
// }

// right.addEventListener("click", () => {
//   activeSlide++;

//   if (activeSlide > slides.length - 1) {
//     activeSlide = 0;
//   }

//   setBgToBody();
//   setActiveSlide();
// });

// left.addEventListener("click", () => {
//   activeSlide--;

//   if (activeSlide < 0) {
//     activeSlide = slides.length - 1;
//   }

//   setBgToBody();
//   setActiveSlide();
// });
