const alphabet = "abcdefghijklmnopqrstuvwxyz";
const correctLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
const guessedLetters = [];

window.addEventListener("keydown", keyPressed);

function keyPressed(e) {
  const key = e.key;
  if (!key.match(/[a-zA-Z]/)) {
    messageUser("invalid");
  } else {
    // char is valid
    check(key.toLowerCase());
  }
}

function messageUser(result, key) {
  messageDiv = document.querySelector(".message");
  switch (result) {
    case "invalid":
      messageDiv.style.color = "red";
      messageDiv.innerText = "Invalid character, press only letters";
      break;
    case "success":
      messageDiv.style.color = "green";
      messageDiv.innerText = "You guessed it! It's " + key + "! Play again?";
      document.querySelector(".letter-cont").innerText = key;
      break;
    case "guessedBefore":
      messageDiv.style.color = "black";
      messageDiv.innerText = "You already guessed the letter " + key;
      break;
    case "wrong":
      messageDiv.style.color = "red";
      messageDiv.innerText = "Sorry, try again";
      break;
  }
  //  receives 4 states: invalid char, wrong guess, guessed before, success
}

function check(key) {
  // if right char => messageUsr ("success")
  if (key === correctLetter) {
    messageUser("success", key);
    window.removeEventListener("keydown", keyPressed);
    const playAgain = document.querySelector(".playAgain");
    playAgain.style.display = "inline-block";
    playAgain.addEventListener("click", () => window.location.reload());
  }
  // if not, check if guessed before => messageUsr ("guessed before")
  else if (guessedLetters.includes(key)) {
    messageUser("guessedBefore", key);
  } else {
    // wrong guess: add to guessed letters + messageUsr
    guessedLetters.push(key);
    document.querySelector(".guessed").innerText = guessedLetters.join(", ");
    messageUser("wrong", key);
  }
}

// TODO get rand letter > inside function. call it on start game / restart
// TODO function that checks if letter was guessed and if not - push to guessed array
// TODO write restart function WITHOUT refreshing the page
function restart() {
  //TODO  cand it be generalized to "start game" as well?
}
