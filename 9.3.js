const food = ["Noodle", "Pasta", "Ice-cream", "Meat",
"Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives",
"Hamburgers"];
 

function compareFood (arr, arr2) {
const similarFood = [];

for (let foodItem of food) {
    for (let foodItem1 of food1) {
        if (foodItem === foodItem1) {
            similarFood.push(foodItem);
        }
    }
}
return similarFood.length === 0 ? false : similarFood;
}

console.log(compareFood(food,food1));