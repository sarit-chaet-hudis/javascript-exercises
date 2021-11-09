let n = 20;

for (let i = 1; i < n; i++) {
  if (i % 7 === 0) {
    if (i.toString().includes("7")) {
      //divided by 7 and has 7
      console.log("BOOM BOOM");
    } else {
      //Only divided by 7
      console.log("BOOM");
    }
  }
  console.log(i);
}
