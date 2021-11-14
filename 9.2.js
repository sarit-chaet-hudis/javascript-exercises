const lengthOfStrings = function (arr) {
  const result = [];
  let i = 0;
  while (i < arr.length) {
    result.push(arr[i].length);
    i++;
  }
  return result;
};

console.log(lengthOfStrings(["boo", "doooo", "hoo", "ro"]));
