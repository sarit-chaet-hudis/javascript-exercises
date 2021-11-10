const book1 = {
  name: "How to shit in the woods",
  author: "Kathleen Meyer",
  pubYear: 2011,
};

function swapObjectValuesKeys(obj) {
  const resultObject = {};
  for (const [key, value] of Object.entries(obj)) {
    resultObject[value] = [key];
  }
  return resultObject;
}

console.log(swapObjectValuesKeys(book1));
