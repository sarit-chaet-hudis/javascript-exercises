function scoreToGrade(score) {
  switch (true) {
    case score < 65:
      return "F";
    case score < 70 :
      return "D";
    case score < 80 :
      return "C";
    case score < 90 :
      return "B";
    default:
      return "A";
  }
}

console.log(scoreToGrade(64));
console.log(scoreToGrade(65));
console.log(scoreToGrade(69));
console.log(scoreToGrade(70));
console.log(scoreToGrade(79));
console.log(scoreToGrade(80));
console.log(scoreToGrade(89));
console.log(scoreToGrade(90));
console.log(scoreToGrade(100));

