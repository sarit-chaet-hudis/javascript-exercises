// 1. Fill an array with 100 of a same object using array fill method.

let obj = {fName:"Sarit",lName:"Hayat Hudis"};
const arr = new Array(2).fill(obj);
console.log(arr);

 //2. Create an array with numbers ranging from 1-100 using the Array.from method.

const arr2 = Array.from(Array(100).keys());
console.log(arr2);

let arr3 = Array.from({length:100}, (_,index) => index + 1)
console.log("arr 3: ",arr3);


// 3. Convert only values of an object into one array.
const objArr = Object.values(obj)
console.log(objArr);

// 4. Convert an array into one object.
const arrToObj = Object.assign({}, objArr);
console.log(arrToObj);

// 5. Find out if an array is an array.
console.log(Array.isArray(arr));

// 6A. Create a copy of an array that won’t effect the original array if modified.
let arrCopy = arr.slice();
arrCopy.push("else");
console.log(arr);

// 6B. Create a copy of an array that will effect the original array if modified.
let arrPointer = arr;
console.log(arr);
arrPointer.push("Dan");
console.log(arr);