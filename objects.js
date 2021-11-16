const candyStore = {
  candies: [
    {
      name: "mint gum",
      id: "as12f",
      price: 2,
      amount: 2,
    },
    {
      name: "twix",
      id: "5hd7y",
      price: 5,
      amount: 4,
    },
    {
      name: "mars bar",
      id: "6vv3x",
      price: 6,
      amount: 9,
    },
  ],
  cashRegister: 200,
};

// candyStore= {};
//      candies = []
//          candy= {}
//          candy= {}
//      cashRegister = {}

const allcandies = candyStore.candies; //gets all candy array
const cash = candyStore.cashRegister;
const cash2 = candyStore["cashRegister"]; //the same as 2 lines before
// console.log(cash);
// console.log(cash2);

const nameOfFirstCandy = candyStore.candies[0].name; //reached name of first candy
console.log(nameOfFirstCandy);
const getFirstCandyPrice = candyStore.candies[0].price;
console.log(getFirstCandyPrice);
candyStore.candies[0]["newObject"] = { key: "value" }; // added a new object property to first candy
candyStore.candies[0]["colorArray"] = ["white", "blue"]; // added a new array property to first candy
console.log(candyStore.candies[0]);

const getFirstColorOfMint = candyStore.candies[0].colorArray[0]; //colorarray is reached with the period, its a regular property now
console.log(getFirstColorOfMint);

function getFirstCandyProperty(candyStore, propertyName) {
  const candyProperty = candyStore.candies[0][propertyName]; //the square brackets around "propertyName" are needed to use a dynamic key name
  return candyProperty;
}

console.log(getFirstCandyProperty(candyStore, "colorArray"));

function sellCandy(candyStore, id) {
  // reduce amount of candy by 1
  const candies = candyStore.candies; //get candy array
  for (let i = 0; i < candies.length; i++) {
    if (candies[i].id === id) {
      // candies[i]["id"] === candies[i].id
      candies[i].amount--;
    }
  }

  //same with forEach instead

  candies.forEach((element) => {
    if (element.id === id) {
      element.amount--;
    }
  });
}
