console.log("it vorks");

const searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", getProfile);

const wantedProfile = document.querySelector("#wantedProfile");

document.addEventListener("keydown", function (e) {
  if (e.code === "Enter") {
    getProfile;
  }
});

async function getProfile() {
  const data = await (
    await fetch(`https://api.github.com/users/${wantedProfile.value}`)
  ).json();
  console.log(wantedProfile.value);
  console.log(data);
  document.querySelector("main").innerText = data;
}
