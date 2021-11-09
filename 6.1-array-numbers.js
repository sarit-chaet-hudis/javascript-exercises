const arr = [1, 7, 3, 0, -5, 7, 3, 9];

for (let i of arr) {
  console.log(i);
}

const arrayLength = function (arr) {
  let l = 0;
  for (let i of arr) {
    l++;
  }
  return l;
};

const arraySum = function (arr) {
    let s = 0;
    for (let i of arr) {
      s+=i;
    }
    return s;
  };

  const arrayMulti = function (arr) {
    let m = 1;
    for (let i of arr) {
      m *= i;
    }
    return m;
  };

console.log("length is " +arrayLength(arr));
console.log("sum is " +arraySum(arr));
console.log("multiplication is " +arrayMulti(arr));
