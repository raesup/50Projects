const result = document.getElementById("result");
const filter = document.getElementById("filter");
const listItems = [];

getData();

filter.addEventListener("input", (e) => filterData(e.target.value));

async function getData() {
  const res = await fetch("https://randomuser.me/api?results=50");
  const data = await res.json();
  result.innerHTML = "";

  data.results.forEach((user) => {
    // console.log(user);
    const li = document.createElement("li");
    listItems.push(li);
    li.innerHTML = `
        <img
          src="${user.picture.large}"
          alt="${user.name.first}"
        />
        <div class="user-info">
          <h4>${user.name.first} ${user.name.last}</h4>
          <p>${user.location.city}, ${user.location.country}</p>
        </div>
    `;

    result.appendChild(li);
  });
}

function filterData(searchTerm) {
  listItems.forEach((user) => {
    console.log(user);
    // if (user.innerText.toLowerCase().indexOf(searchTerm) > 0) {
    if (user.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      user.classList.remove("hide");
    } else {
      user.classList.add("hide");
    }
  });
}
