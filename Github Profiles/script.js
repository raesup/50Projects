const APIURL = "https://api.github.com/users/";
const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");

// function getUser(username) {
//   axios
//     .get(APIURL + username)
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
// }

// function getRepos(username) {
//   axios
//     .get(APIURL + username + "/repos")
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
// }

async function getUser1(username) {
  try {
    const { data } = await axios(APIURL + username);
    console.log(data);
    createUserCard(data);
    getRepos1(username);
  } catch (err) {
    console.log(err);
    if (err.response.status == 404) {
      createErrorCard("No profile with this username!!");
    }
  }
}

async function getRepos1(username) {
  try {
    const { data } = await axios(APIURL + username + "/repos?sort=created");
    console.log(data);
    addRepos(data);
  } catch (err) {
    console.log(err);
    createErrorCard("Problem fetching repos!!");
  }
}

function createUserCard(user) {
  const cardHTML = `
    <div class="card">
    <div>
      <img
        src=${user.avatar_url}
        alt=""
        class="avatar"
      />
    </div>
    <div class="user-info">
      <h2>${user.name}</h2>
      <p>
        ${user.bio}
      </p>
      <ul>
        <li>${user.followers} <strong>Followers</strong></li>
        <li>${user.following} <strong>Following</strong></li>
        <li>${user.public_repos} <strong>Repos</strong></li>
      </ul>

      <div id="repos">
      </div>
    </div>
  </div>
    `;
  main.innerHTML = cardHTML;
}

function addRepos(repos) {
  const reposEl = document.getElementById("repos");
  repos.slice(0, 10).forEach((repo) => {
    const repoEl = document.createElement("a");
    repoEl.classList.add("repo");
    repoEl.href = repo.html_url;
    repoEl.target = "_blank";
    repoEl.innerText = repo.name;

    reposEl.appendChild(repoEl);
  });
}

function createErrorCard(message) {
  const cardHTML = `
    <div class="card">
        <h1>${message}</h1>
    </div>
    `;
  main.innerHTML = cardHTML;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = search.value;

  if (username) {
    getUser1(username);
    search.value = "";
  }
});
