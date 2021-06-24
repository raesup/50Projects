const buttons = document.querySelectorAll(".ripple");

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    const x = e.clientX;
    const y = e.clientY;
    console.log(x, y);

    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;
    console.log(buttonLeft, buttonTop);

    // button.innerHTML = `Click Me<span class="circle" style="top: ${
    //   y - buttonTop
    // }px; left: ${x - buttonLeft}px"></span>`;

    const circle = document.createElement("span");
    circle.classList.add("circle");
    circle.style.top = `${y - buttonTop}px`;
    circle.style.left = x - buttonLeft + "px";

    // this keyword does not work with arrow function.
    this.appendChild(circle);

    setTimeout(() => circle.remove(), 2000);
  });
});
