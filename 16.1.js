function funcA() {
  var a = 1;

  console.log(a);
  console.log(foo());
  function foo() {
    return 2;
  }
}
funcA();

// console.log(a) will in its original position will print undefined as a is defined only after the cosole log line.
// console.log foo will work fine as it is hoisted.
