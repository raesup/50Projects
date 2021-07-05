const button = document.getElementById("button");
const toasts = document.getElementById("toasts");

const messages = [
  "Message One",
  "Message Two",
  "Message Three",
  "Message Four",
];

const types = ["info", "error", "success"];

button.addEventListener("click", () => {
  createNotification();
});

function createNotification() {
  const toast = document.createElement("div");
  toast.classList.add("toast");
  const message = randomToast();
  const type = randomType();
  toast.textContent = messages[message];
  toast.classList.add(type);
  toasts.appendChild(toast);
  setTimeout(() => toast.remove(), 2000);
}

function randomToast() {
  return Math.floor(Math.random() * messages.length);
}

function randomType() {
  return types[Math.floor(Math.random() * types.length)];
}
