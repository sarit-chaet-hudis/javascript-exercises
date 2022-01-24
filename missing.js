// Given an array nums containing n distinct numbers in the range [0, n],
// return the only number in the range that is missing from the array.

var missingNumber = function (nums) {
  let n = nums.length;
  let sorted = [...nums].sort((a, b) => a - b);
  console.log("~ sorted", sorted);

  if (sorted[0] != 0) {
    return 0;
  } else if (sorted[n - 1] != n) {
    return n;
  }

  for (let i = 1; i <= nums.length; i++) {
    console.log("~ sorted[i]", sorted[i]);
    console.log("~ sorted[i - 1]", sorted[i - 1]);

    if (sorted[i] != sorted[i - 1] + 1) {
      return sorted[i] - 1;
    }
  }
};

console.log(missingNumber([3, 0, 1]));
