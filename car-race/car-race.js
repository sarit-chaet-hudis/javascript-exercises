window.addEventListener("keyup", go);
const restartButton = document.querySelector("button");
restartButton.style.display = "none";

function go(e) {
  if (e.key.toLowerCase() === "s") {
    const redCar = document.querySelector("#player1-race .active");
    if (redCar.nextElementSibling.classList.contains("finish")) {
      document.querySelector("h2").innerText = "Red Player Won!!";
      window.removeEventListener("keyup", go);
      restartButton.style.display = "inline-block";
      restartButton.addEventListener("click", () => window.location.reload());
    }
    redCar.classList.remove("active");
    redCar.nextElementSibling.classList.add("active");
  }
  if (e.key.toLowerCase() === "l") {
    const yellowCar = document.querySelector("#player2-race .active");
    if (yellowCar.nextElementSibling.classList.contains("finish")) {
      document.querySelector("h2").innerText = "Yellow Player Won!!";
      window.removeEventListener("keyup", go);
      restartButton.style.display = "inline-block";
      restartButton.addEventListener("click", () => window.location.reload());
    }
    yellowCar.classList.remove("active");
    yellowCar.nextElementSibling.classList.add("active");
  }
}
