const numbers = [1, -5, 666, 2, 400, 11];

const numMax = numbers.reduce((accumulator, currentValue) => {
  return accumulator > currentValue ? accumulator : currentValue;
});
console.log(numMax);

function sumOfEven(numbers) {
  numbers.unshift(0);
  console.log(numbers);
  const result = numbers.reduce((acc, n) => {
    return n % 2 === 0 ? acc + n : acc;
  });
  return result;
}

console.log(sumOfEven(numbers));

const avg = numbers.reduce((acc, n) => acc + n / 2);
console.log(avg);
