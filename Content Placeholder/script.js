const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const name = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");

function getData() {
  header.innerHTML =
    '<img src="https://images.unsplash.com/photo-1624976845869-59781225b4d0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80" alt="" />';
  title.innerHTML = "Lorem ipsum dolor sit am";
  excerpt.innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, sed";
  profile_img.innerHTML =
    '<img src="https://media-exp3.licdn.com/dms/image/D5635AQHj2bxlk3k5PQ/profile-framedphoto-shrink_200_200/0/1623782042967?e=1625166000&v=beta&t=UgzM-yykKmKJ-8aRFx-wwsgC7un0HueFPiyWCZO6ZM8" alt="" />';
  name.innerHTML = "Raesup Kim";
  date.innerHTML = "Jun 30, 2021";

  animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));
  animated_bg_texts.forEach((bg) => bg.classList.remove("animated_bg_text"));
}

setTimeout(getData, 2000);
