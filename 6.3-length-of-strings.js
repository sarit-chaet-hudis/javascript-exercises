const lengthOfStrings = function (arr) {
    const result  = [];
    for (let str of arr) {
        result.push(str.length)
    }
    return result;
}

console.log(lengthOfStrings(["boo", "doooo", "hoo","ro"]));