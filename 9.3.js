const food = ["Noodle", "Pasta", "Ice-cream", "Meat",
"Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives",
"Hamburgers"];
 
const similarFood = [];

for (let foodItem of food) {
    for (let foodItem1 of food1) {
        if (foodItem === foodItem1) {
            similarFood.push(foodItem);
        }
    }
}

console.log(similarFood);