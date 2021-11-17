function getSum(arr1, arr2) {
  const sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    sum += arr2[i];
  }
}
getSum([1, 2, 3], [5, 66, 23]);
// The bug was in line 10, I found it using VScode's debug tool.
// I could see that arr1, arr2 were passed to getSum as undefined.
// Then I could see that they are passed in line 10 without a separating comma.
// After adding the comma, the debugger helped me see that arr2 has an unnecessary parenthesis.
