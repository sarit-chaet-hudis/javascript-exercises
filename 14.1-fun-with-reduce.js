const numbers = [1, -5, 666, 2, 400, 11];

const numMax = numbers.reduce((accumulator, currentValue) => {
  return accumulator > currentValue ? accumulator : currentValue;
});
console.log(numMax);

const sumOfEven = numbers
  .filter((n) => {
    if (n % 2 === 0) return n;
  })
  .reduce((acc, n) => acc + n);

console.log(sumOfEven);

const avg = numbers.reduce((acc,n) => acc + n / 2);
console.log(avg);