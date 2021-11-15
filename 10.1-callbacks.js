// TODO: refactor all funcs to return stuff and not console log them

function isString(str, func) {
  if (typeof str === "string") {
    func(str);
  }
}

function print(str) {
  console.log(str);
}

function rose(str) {
  return str + " @}---`---";
}

isString("33", print);

function firstWordUpperCase(str, func) {
  const newStr = str[0].toUpperCase() + str.slice(1);
  console.log(func(newStr));
}

function kebab(str) {
  return str.replace(/ +/g, "-");
}

firstWordUpperCase("hi there mate whats up?", kebab);
firstWordUpperCase("hello gorgeous", rose);

function decorateText(str, func) {
  return func(str);
}

const stars = (str) => "✪✪✪ " + str + " ✪✪✪";

console.log(decorateText("Sarit", stars));
console.log(decorateText("Sarit", rose));

