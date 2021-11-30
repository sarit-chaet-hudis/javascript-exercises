window.addEventListener("keyup", go);
const restartButton = document.querySelector("button");
restartButton.style.display = "none";

function go(e) {
  if (e.key.toLowerCase() === "s") {
    const car = document.querySelector("#player1-race .active");
    if (car.classList.contains("finish")) {
      document.querySelector("h2").innerText = "Red Player Won!!";
      window.removeEventListener("keyup", go);
      restartButton.style.display = "inline-block";
      restartButton.addEventListener("click", () => window.location.reload());
      return;
    }
    car.classList.remove("active");
    car.nextElementSibling.classList.add("active");
  }
  if (e.key.toLowerCase() === "l") {
    const car = document.querySelector("#player2-race .active");
    if (car.classList.contains("finish")) {
      document.querySelector("h2").innerText = "Yellow Player Won!!";
      window.removeEventListener("keyup", go);
      restartButton.style.display = "inline-block";
      restartButton.addEventListener("click", () => window.location.reload());
      return;
    }
    car.classList.remove("active");
    car.nextElementSibling.classList.add("active");
  }
}
