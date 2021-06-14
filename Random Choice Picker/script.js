// tags => querySelectorAll로 하면 appendChild로 dom element 생성이 안됨
const tagsEl = document.getElementById("tags");
const textarea = document.getElementById("textarea");

textarea.focus();

// textarea.addEventListener("keyup", (e) => {
//   console.log(e);
//   if (e.keyCode === 13) {
//     const texts = textarea.value.split(",");
//     console.log(texts);
//     texts.forEach((text) => {
//       const span = document.createElement("span");
//       span.classList.add("tag");
//       const textNode = document.createTextNode(text);
//       span.appendChild(textNode);
//       tags.appendChild(span);
//     });
//   }
// });

textarea.addEventListener("keyup", (e) => {
  console.log(e);
  createTags(e.target.value);

  if (e.key === "Enter") {
    setTimeout(() => {
      e.target.value = "";
    }, 10);

    randomSelect();
  }
});

function createTags(input) {
  const tags = input
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());
  console.log(tags);

  tagsEl.innerHTML = "";

  tags.forEach((tag) => {
    const tagEl = document.createElement("span");
    tagEl.classList.add("tag");
    tagEl.innerText = tag;
    tagsEl.appendChild(tagEl);
  });
}

function randomSelect() {
  const times = 30;

  const interval = setInterval(() => {
    const randomTag = pickRandomTag();

    highlightTag(randomTag);

    setTimeout(() => {
      unHighlightTag(randomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      const randomTag = pickRandomTag();
      highlightTag(randomTag);
    }, 100);
  }, times * 100);
}

function pickRandomTag() {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
  tag.classList.add("highlight");
}

function unHighlightTag(tag) {
  tag.classList.remove("highlight");
}
