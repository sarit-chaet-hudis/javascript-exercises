const average = (arr) => arr.reduce((p, c) => p + c, 0) / arr.length;

function whoWon() {
  let john = [8, 134, 105];
  let mike = [200, 134, 105];
  let mary = [200, 800, 30];
  const avgJhon = average(john);
  const avgMike = average(mike);
  const avgMary = average(mary);

  switch (true) {
    case avgJhon > avgMike && avgJhon > avgMary:
      console.log("Jhon is the winner!");
      break;
    case avgMike > avgJhon && avgMike > avgMary:
      console.log("Mike is the winner!");
      break;
    case avgMary > avgJhon && avgMary > avgMike:
      console.log("Mary is the winner!");
      break;
    case avgJhon > avgMike && avgMary > avgMike:
      console.log("Jhon and Mary are the winners!");
      break;
    case avgJhon > avgMary && avgMike > avgMary:
      console.log("Jhon and Mike are the winners!");
      break;
    case avgMary > avgJhon && avgMike > avgJhon:
      console.log("Mary and Mike are the winners!");
      break;
    case avgJhon == avgMary && avgMike == avgMary:
      console.log("everyone's a winner!!!");
      break;
    default:
      console.log("hmm try again?");
      break;
  }
}

whoWon();
