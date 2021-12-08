const searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", getMovie);
const userMessage = document.getElementById("userMessage");
const wantedMovie = document.querySelector("#wantedMovie");

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    getMovie();
  }
});

async function getMovie() {
  try {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=33ee9637&t=${wantedMovie.value}`
    );
    wantedMovie.value = "";
    wantedMovie.focus();
    const data = await response.json();
    console.log(data);
    if (data.Response === "False") {
      userMessage.innerText = "Sorry, try a different movie name";
    } else {
      showMovie(data);
    }
  } catch (err) {
    userMessage.innerText = "oops, something went wrong: " + err;
  }
}

function showMovie(data) {
  console.log("inside show movie");
  //   const cardWrap = document.createElement("a");
  // cardWrap.setAttribute("href", data.html_url);
  const newCard = document.createElement("div");
  // newCard.classList.add("card");
  // newCard.innerHTML = `<h2>${data.name}</h2>`;
  // newCard.innerHTML += `<img src="${data.avatar_url}" \>`;
  // newCard.innerHTML += `No. of public repos: ${data.public_repos}`;
  // cardWrap.appendChild(newCard);
  // document.querySelector("main").appendChild(cardWrap);
}
