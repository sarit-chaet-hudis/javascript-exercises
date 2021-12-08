const searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", getProfile);
const userMessage = document.getElementById("userMessage");
const cards = [];
const wantedProfile = document.querySelector("#wantedProfile");

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    getProfile();
  }
});

async function getProfile() {
  try {
    const response = await fetch(
      `https://api.github.com/users/${wantedProfile.value}`
    );
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      addProfileCard(data);
    } else {
      userMessage.innerText = "please try a different userName";
    }
  } catch (err) {
    userMessage.innerText = "oops, something went wrong: " + err;
  }
}

function addProfileCard(data) {
  if (cards.includes(data.name)) {
    userMessage.innerText = "we already have that name";
    return;
  } else {
    cards.push(data.name);
    const newCard = document.createElement("div");
    newCard.classList.add("card");
    newCard.innerHTML = `<h2>${data.name}</h2>`;
    newCard.innerHTML += `<img src="${data.avatar_url}" \>`;
    newCard.innerHTML += `No. of public repos: ${data.public_repos}`;

    document.querySelector("main").appendChild(newCard);
  }
}
