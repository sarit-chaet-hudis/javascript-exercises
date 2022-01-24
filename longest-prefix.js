var longestCommonPrefix = function (strs) {
  // create result array
  let res = [];
  // iterate over i char of strings, (check all strs[i])
  const strsAsArrays = strs.map((str) => str.split(""));
  console.log(strsAsArrays);
  for (let i = 0; i < 200; i++) {
    for (let arr = 0; i < strsAsArrays.length; i++) {
      console.log(`strsAsArrays[arr][i] is ${strsAsArrays[arr][i]}`);
    }
  }
  // if identical in all strs, push strings[i] to results
  // do this while its identical

  // return result array (join to str)
  return res.join("");
};

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Input: strs = ["dog","racecar","car"]
// Output: ""

longestCommonPrefix(["wert", "fd"]);
