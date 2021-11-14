function steps(n) {
  let row = [];
  for (let floor = 1; floor <= n; floor++) {
    for (let i = 1; i <= floor; i++) {
      i <= floor ? row.push("#") : row.push(" ");
    }
    row.push("\n");
  }
  return row.join("");
}

console.log(steps(4));
