const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];

function countTheLetters(arr) {
  const strArray = array.join("").replace(/\s+/g, "");
  const resultObject = {};

  for (var i = 0; i < strArray.length; i++) {
    let charKey = strArray[i].toLowerCase();
    [charKey] in resultObject ?
    resultObject[charKey] += 1 :
    resultObject[charKey] = 1 ;
  }
  console.log(resultObject);
}

countTheLetters(array);
