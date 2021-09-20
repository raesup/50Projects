const background = document.getElementById("background");
const password = document.getElementById("password");

password.addEventListener("input", (e) => {
  const input = e.target.value;
  const length = input.length;

  //   if (length <= 1) {
  //     background.style.filter = "blur(18px)";
  //   } else if (length <= 2) {
  //     background.style.filter = "blur(15px)";
  //   } else if (length <= 3) {
  //     background.style.filter = "blur(13px)";
  //   } else if (length <= 4) {
  //     background.style.filter = "blur(10x)";
  //   } else if (length <= 5) {
  //     background.style.filter = "blur(7px)";
  //   } else if (length <= 6) {
  //     background.style.filter = "blur(5px)";
  //   } else if (length <= 7) {
  //     background.style.filter = "blur(3px)";
  //   } else if (length <= 8) {
  //     background.style.filter = "blur(0px)";
  //   }

  background.style.filter = `blur(${20 - length * 2}px)`;
});
