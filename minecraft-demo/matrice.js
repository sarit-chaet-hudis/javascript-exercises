const matrix = [
  [0, 1, 0, 0],
  [0, 1, 1, 1],
  [2, 2, 2, 2],
  [2, 2, 2, 2],
];

for (let i = 0; i < matrix.length; i++) {
  for (let j of matrix[i]) {
    switch (j) {
      case 0:
        console.log("blue");
        break;
      case 1:
        console.log("white");
        break;
      case 2:
        console.log("brown");
        break;
    }
  }
}
