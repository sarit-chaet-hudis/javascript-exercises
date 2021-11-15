function multiply(num,func) {
    return func(num);
}

function multiplyBy2 (num) {
    return num * 2;
}
function multiplyBy3 (num) {
    return num * 3;
}

console.log(multiply(20,multiplyBy2));
console.log(multiply(20,multiplyBy3));
