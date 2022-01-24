var singleNumber = function (nums) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]]) {
      hash[nums[i]] = 2;
    } else {
      hash[nums[i]] = 1;
    }
    console.log(hash);
  }
  let res = Object.keys(hash).find((num) => hash[num] === 1);
  return res;
};

console.log(singleNumber([5, 5, 6, 7, 7]));
