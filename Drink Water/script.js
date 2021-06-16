const smallCups = document.querySelectorAll(".cup-small");
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");

// updateBigCup();

smallCups.forEach((cup, i) => {
  cup.addEventListener("click", () => highlightCups(i));
});

function highlightCups(i) {
  if (
    smallCups[i].classList.contains("full") &&
    !smallCups[i].nextElementSibling.classList.contains("full")
  ) {
    i--;
  }

  smallCups.forEach((cup, i2) => {
    if (i2 <= i) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });

  updateBigCup(i);
}

function updateBigCup(i) {
  let percentageValue = ((0.25 * (i + 1)) / 2) * 100 + "%";

  percentage.textContent = percentageValue;
  liters.textContent = 2 - 0.25 * (i + 1) + "L";
  percentage.style.height = percentageValue;

  if (i === 7) {
    remained.style.height = 0;
    remained.style.visibility = "hidden";
  } else {
    remained.style.visibility = "visible";
  }
}
