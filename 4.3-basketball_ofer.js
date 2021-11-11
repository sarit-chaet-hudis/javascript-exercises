const scoreJohn = Math.round((189 + 120 + 103) / 3);
const scoreMike = Math.round((129 + 94 + 123) / 3);
const scoreMary = Math.round((97 + 134 + 105) / 3);
console.log(scoreJohn, scoreMike, scoreMary);
const names = ["John", "Mike", "Mary"];
const scores = [scoreJohn, scoreMike, scoreMary];

const getWinnerTeams = (team1, team2, team3) => {
  // Check for a single winner
  if (team1 > team2 && team1 > team3) {
    return [0];
  } else if (team2 > team1 && team2 > team3) {
    return [1];
  } else if (team3 > team1 && team3 > team2) {
    return [2];
  }

  // There is no one winner - check for draws
  if (team1 === team2 && team2 === team3) {
    return [0, 1, 2];
  } else if (team1 === team2) {
    return [0, 1];
  } else if (team1 === team3) {
    return [0, 2];
  } else {
    return [1, 2];
  }
};

const printWinnerMessage = (winners) => {
  if (winners.length === 1) {
    console.log(
      `${names[winners[0]]}'s team wins with ` + scores[winners[0]] + ` points`
    );
  } else if (winners.length === 2) {
    console.log(
      `Draw between ${names[winners[0]]} and ${names[winners[1]]}'s teams`
    );
  } else {
    console.log(`Draw between everyone`);
  }
};

const printResults = (score1, score2, score3) => {
  const winnerTeams = getWinnerTeams(score1, score2, score3);
  printWinnerMessage(winnerTeams);
};

printResults(1, 2, 3);
printResults(3, 2, 1);
printResults(1, 3, 2);

printResults(1, 2, 2);
printResults(2, 1, 2);
printResults(2, 2, 1);

printResults(2, 1, 1);
printResults(1, 2, 1);
printResults(1, 1, 2);

printResults(1, 1, 1);

// Poor man's "Unit tests"
const expect = (a, b) => {
  if (a.length !== b.length) {
    console.log("Error");
  }
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      console.log("Error");
    }
  }
  console.log("Success");
};

expect(getWinnerTeams(1, 2, 3), [2]);
expect(getWinnerTeams(3, 2, 1), [0]);
expect(getWinnerTeams(1, 3, 2), [1]);

expect(getWinnerTeams(1, 2, 2), [1, 2]);
expect(getWinnerTeams(2, 1, 2), [0, 2]);
expect(getWinnerTeams(2, 2, 1), [0, 1]);

expect(getWinnerTeams(2, 1, 1), [0]);
expect(getWinnerTeams(1, 2, 1), [1]);
expect(getWinnerTeams(1, 1, 2), [2]);

expect(getWinnerTeams(1, 1, 1), [0, 1, 2]);
