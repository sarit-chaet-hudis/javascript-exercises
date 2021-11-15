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
    if ("aeiou".includes(char))
      if (count[char]) {
        //vowel already exists in count array
        count[char]++;
      } else {
        count[char] = 1;
      }
  }
  return count;
}

console.log(vowelCount("daaiewwuw"));

const capitalize = (str) => {
  return str.toUpperCase();
};
console.log(capitalize("hi there neighbour"));

function shiftLetters(str) {
  const strArr = str.split("");
  for (char of strArr) {
    // TODO: shift char
  }
}

function swapCase(str) {
  const resultArr = str.split(" ");
  //   console.log(resultArr);
  for (let wordIndex = 0; wordIndex < resultArr.length; wordIndex++) {
    if (wordIndex % 2 !== 0) {
      // console.log(resultArr[wordIndex]);
      resultArr[wordIndex] = capitalize(resultArr[wordIndex]);
    }
  }
  return resultArr.join(" ");
}

console.log(swapCase("hi there stranger whats up?"));
