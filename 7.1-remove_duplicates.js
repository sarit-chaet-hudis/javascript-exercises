const integerArray = [3,4,4,3,6,3];

function removeDuplicates (arr) {
    const resultArray =  [];
    arr.forEach(element => {
        if (resultArray.indexOf(element) < 0) {
        //check if element does not yet exist in result array
        resultArray.push(element);
        // add to result array
        }
    });

    return(resultArray);
}

console.log(removeDuplicates(integerArray));