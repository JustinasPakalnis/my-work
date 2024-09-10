export function chuck() {
  const result = document.querySelector(".joke");
  const btnDOM = document.querySelector(".chuckBtn");

  btnDOM.addEventListener("click", getJoke);

  function getJoke() {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((resp) => resp.json())
      .then((data) => (result.innerHTML = data.value));
  }
}
