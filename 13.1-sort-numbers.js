const numbers = [1, -5, 666, 2, 400, 11];

const ascend = numbers.slice().sort((a,b) => a - b);
console.log(ascend);

const descend = numbers.slice().sort((a,b) => b - a);
console.log(descend);