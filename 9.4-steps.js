function steps(n) {
  let row = [];
  for (let floor = 1; floor <= n; floor++) {
    for (let i = 1; i <= floor; i++) {
      row.push("#");
    }
    for (let i = 0; i <= n - floor -1 ; i++) {
      row.push(" ");
    }
    row.push("\n");
  }
  return row.join("");
}

console.log(steps(4));
