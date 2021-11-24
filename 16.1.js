// Block 1 *************************
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

// Block 2 *************************

var fullName = "John Doe";
var obj = {
  fullName: "Colin Ihrig",
  prop: {
    fullName: "Aurelio De Rosa",
    getFullName: function () {
      return this.fullName;
    },
  },
};
console.log(obj.prop.getFullName()); // colin ? no!! Aurelio
var test = obj.prop.getFullName; // now we put the func getFullName inside test
console.log(test); //when we activate test here, the "this" is different, not inside obj anymore..

// The console.log first printed undefined because test doesnt need ()
// Also at the end of 29 the () was missing
// the "this" in the function refers to prop and not obj!

// Block 3 *******************

function funcB() {
  let a = 0;
  a++;
  console.log(typeof a);
  console.log(typeof b);
  return a;
}
console.log(funcB());

// Block 4 ********************

function funcC() {
  console.log("1");
}
funcC();
function funcD() {
  // needed to change name so that its not declared twice
  console.log("2");
}
funcD();

// Block 6 **************

function funcE6() {
  console.log("Value of f in local scope: ", f);
}
console.log("Value of f in global scope: ", f); //undefined because was hoisted but not yet value
var f = 1;
funcE6(); //happens after var f = 1
