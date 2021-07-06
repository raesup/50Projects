const loveMe = document.querySelector(".loveMe");
const times = document.querySelector("#times");

// loveMe.addEventListener("dblclick", (e) => {
//   console.log(123);
// });

let clickTime = 0;
let likeTime = 0;

loveMe.addEventListener("click", (e) => {
  if (clickTime === 0) {
    clickTime = new Date().getTime();
    console.log(clickTime);
  } else {
    if (new Date().getTime() - clickTime < 800) {
      console.log(123);
      createHeart(e);
      clickTime = 0;
    } else {
      clickTime = new Date().getTime();
      console.log(clickTime);
    }
  }
});

const createHeart = (e) => {
  const heart = document.createElement("i");
  heart.classList.add("fas");
  heart.classList.add("fa-heart");

  heart.style.top = e.clientY - e.target.offsetTop + "px";
  heart.style.left = e.clientX - e.target.offsetLeft + "px";
  loveMe.appendChild(heart);

  likeTime++;
  times.textContent = likeTime;

  setTimeout(() => heart.remove(), 2000);
};
