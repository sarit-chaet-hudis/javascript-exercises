const foods = ["hummus", "falafel", "sabich", "pizza with extra pineapple"];

const ascend = foods.sort();
console.log("in ascending order: ", ascend);

const descend = foods.slice().sort((a, b) => b.localeCompare(a));
console.log("in descending order: ", descend);

const foodsWithUpperCase = [
  "falafel",
  "Sabich",
  "hummus",
  "pizza with extra pineapple",
];

const ascendWithUpper = foodsWithUpperCase.sort((a, b) => a.localeCompare(b));
console.log("ascending with uppercase: ", ascendWithUpper);

const descendWithUpper = foodsWithUpperCase
  .slice()
  .sort((a, b) => b.localeCompare(a));

console.log("descending with uppercase: ", descendWithUpper);

const words = ["apple", "supercalifragilisticexpialidocious", "hi", "zoo"];

const shortest = words.sort((a, b) => b.length - a.length);
console.log("sorted from longest to shortest: ",shortest);
