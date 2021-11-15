const data = [
  {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
      meats: ["hamburgers", "sausages"],
      fish: ["salmon", "pike"],
    },
  },
  {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
      meats: ["hamburgers", "steak", "lamb"],
      fish: ["tuna", "salmon", "barracuda"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["ham", "chicken"],
      fish: ["pike"],
    },
  },
  {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
      meats: ["bird", "rooster"],
      fish: ["salmon"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["hamburgers", "lamb"],
      fish: ["anchovies", "tuna"],
    },
  },
];

const getNames = (data) => {
  // get only names
  const nameList = [];
  data.forEach((element) => nameList.push(element.name));
  return nameList;
};

const bornBefore1990 = (data) => {
  // get all elements that have year less than 1990
  const bornBeforeList = [];
  data.forEach((element) => {
    if (parseInt(element.birthday.substr(-4)) < 1990) {
      bornBeforeList.push(element);
    }
  });
  return bornBeforeList;
};

function getAllFoods(data) {
  // count instances of all food types in all objects
  const foods = {};
  for (let object of data) {
    for (let foodType of object.favoriteFoods.meats) {
      if (foods.hasOwnProperty(foodType)) {
        foods[foodType]++;
      } else {
        foods[foodType] = 1;
      }
    }
    for (let foodType of object.favoriteFoods.fish) {
      if (foods.hasOwnProperty(foodType)) {
        foods[foodType]++;
      } else {
        foods[foodType] = 1;
      }
    }
  }
  return foods;
}

// console.log(getNames(data));

// console.log(bornBefore1990(data));

console.log(getAllFoods(data));
