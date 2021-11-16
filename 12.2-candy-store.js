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
  ],
  cashRegister: 200,
};

function getCandy(candyStore, id) {
  return (
    candyStore.candies.find((candy) => candy.id === id) ||
    "no such id, try again"
  );
}

function getPrice(candyStore, id) {
  return candyStore.candies.find((candy) => candy.id === id).price;
}

function addCandy(candyStore, id, name, price) {
  candyStore.candies.push({ name: name, id: id, price: price, amount: 1 });
}

function buy(candyStore, id) {
  if (getCandy(candyStore, id).amount > 0) {
    candyStore.cashRegister += getPrice(candyStore, id);
    getCandy(candyStore, id).amount--;
  } else {
    console.log("This candy is out of stock, sorry");
  }
}

console.log(getCandy(candyStore, "57y"));
// console.log(getPrice(candyStore, "5hd7y"));
// addCandy(candyStore, "4jcn!", "Creambo", 3);

// buy(candyStore, "4jcn!");
// console.log(candyStore);
// buy(candyStore, "4jcn!");
// console.log(candyStore);
