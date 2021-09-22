const range = document.getElementById("range");
// const label = document.getElementById("label");

range.addEventListener("input", (e) => {
  const value = +e.target.value;
  //   console.log(value);
  //   label.innerText = value;
  const label = e.target.nextElementSibling;

  const range_width = getComputedStyle(e.target).getPropertyValue("width");
  const label_width = getComputedStyle(label).getPropertyValue("width");

  const num_width = +range_width.substring(0, range_width.length - 2);
  const num_label_width = +label_width.substring(0, label_width.length - 2);
  console.log(num_width, num_label_width);

  const max = +e.target.max;
  const min = +e.target.min;
  console.log(max, min);

  const left = value * (num_width / max) - num_label_width / 2;
  label.style.left = `${left}px`;

  label.innerHTML = value;
});
