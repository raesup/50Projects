const jokeContainer = document.querySelector(".joke");
const button = document.getElementById("jokeBtn");

// const generateJoke = () => {
//   const config = {
//     headers: {
//       Accept: "application/json",
//     },
//   };

//   fetch("https://icanhazdadjoke.com", config)
//     .then((res) => res.json())
//     .then((data) => {
//       jokeContainer.innerHTML = data.joke;
//     });
// };

// 동기(synchorunous)
// 요청을 보낸후 응답을 받아야하지만 다음 동작이 이루어지는 방식
// 모든 일이 순차적으로 실행됌

// 비동기(asynchrounous)
// 요청을 즉시 처리하지 않아도 그 대기 시간동안 또 다른 동작이 이루어지는 방식
// 모든 일이 병렬적으로 실행

// Async
async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const res = await fetch("https://icanhazdadjoke.com", config);

  const data = await res.json();

  jokeContainer.innerHTML = data.joke;
}

generateJoke();

button.addEventListener("click", generateJoke);
