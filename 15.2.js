function findSmallest(a, b, c) {
  if (a > b > c) {
    return c;
  } else if (a < c && a < b) {
    return a;
  } else {
    return b;
  }
}
findSmallest(52, 66, 2);

// The error is on line 2  : a > b > c 
// 