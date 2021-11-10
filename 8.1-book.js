const book = {
    name:"How to shit in the woods",
    author:"Kathleen Meyer",
    pages: 136,
    edition: 3,
    pubYear: 2011
}

const bookPrint = function (book) {
    return(`the book ${book["name"]} was written by ${book["author"]} in ${book["pubYear"]}`)
}

console.log(bookPrint(book));