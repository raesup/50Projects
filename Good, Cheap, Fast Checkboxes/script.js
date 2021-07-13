const goodEl = document.getElementById("good");
const cheapEl = document.getElementById("cheap");
const fastEl = document.getElementById("fast");
const toggles = document.querySelectorAll(".toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("change", (e) => {
    if (goodEl.checked && cheapEl.checked && fastEl.checked) {
      console.log(e, e.target);
      if (e.target === goodEl) {
        fastEl.checked = false;
      }

      if (e.target === cheapEl) {
        goodEl.checked = false;
      }

      if (e.target === fastEl) {
        cheapEl.checked = false;
      }
    }
  });
});
