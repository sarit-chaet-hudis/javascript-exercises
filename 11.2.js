function doubleValues(arr) {
  return arr.map(function (n) {
    return n * 2;
  });
}

console.log(doubleValues([1, 5, 20]));

function onlyEvenValues(arr) {
  //returns a new array with only the even values in
  // the array passed to the function
  const evenValues = [];
  arr.forEach((element) => {
    if (element % 2 === 0) {
      evenValues.push(element);
    }
  });
  return evenValues;
}

console.log(onlyEvenValues([1, 5, 20]));

function showFirstAndLast(arr) {
  const firstAndLast = [];
  for (let i = 0; i < arr.length; i++) {
    //look for first string
    if (typeof arr[i] === "string") {
      firstAndLast.push(arr[i]);
      break;
      //only needs 1
    }
  }

  for (let i = arr.length; i > 0; i--) {
    //look for last string
    if (typeof arr[i] === "string") {
      firstAndLast.push(arr[i]);
      break;
    }
    //only needs 1
  }
  return firstAndLast;
}

console.log(showFirstAndLast([1, 2, "hi", "there", 3, "stranger", 10.5]));

function vowelCount(str) {
  str = str.toLowerCase();
  const count = {};
  for (let char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    )
      if (count.hasOwnProperty(char)) {
        count[char]++;
      } else {
          count[char] = 1;
      }
  }
  return count;
}

console.log(vowelCount("daaiewwuw"));


