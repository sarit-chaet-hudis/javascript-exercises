const correctLetter = "b";
// const correctLetter = Math.floor(Math.random() * 22);
const guessedLetters = [];

window.addEventListener("keypress", keyPressed);

function keyPressed(e) {
  const key = e.key.toLowerCase();
  if (!key.match(/[a-z]/)) {
    messageUser("invalid");
  } else {
    // char is valid
    check(key);
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
      messageDiv.innerText = "You guessed it! It's " + key + "!";
      break;
    case "guessedBefore":
      messageDiv.style.color = "black";
      messageDiv.innerText = "You already guessed the letter ", key;
      break;
  }
  //  receives 4 states: invalid char, wrong guess, guessed before, success
}

function check(key) {
  // if right char => messageUsr ("success")
  if (key === correctLetter) messageUser("success", key);
  // if not, check if guessed before => messageUsr ("guessed before")
  if (guessedLetters.includes(key)) messageUser("guessedBefore", key);
  // if not, add to guessed letters + messageUsr
}
