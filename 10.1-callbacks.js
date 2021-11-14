function isString(str, func) {
  if (typeof str === "string") {
    func(str);
  }
}

function print(str) {
  console.log(str);
}

function printRose(str) {
  return str + " @}---`---";
}

isString("33", print);

function firstWordUpperCase(str, func) {
  console.log(func(str[0].toUpperCase() + str.slice(1)));
}

function kebab(str) {
  return str.replace(/ /g, "-");
}

firstWordUpperCase("hi there mate whats up?", kebab);
firstWordUpperCase("hello gorgeous", printRose);

function decorateText(str, func) {
  return func(str);
}

const stars = (str) => "✪✪✪ " + str + " ✪✪✪";

console.log(decorateText("Sarit", stars));
