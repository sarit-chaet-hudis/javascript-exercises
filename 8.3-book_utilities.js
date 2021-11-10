const book1 = {
  name: "How to shit in the woods",
  author: "Kathleen Meyer",
  pubYear: 2011,
};

const book2 = {
  name: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  pubYear: 1925,
};

const bookUtils = {};

//add to to the bookUtils object a function getFirstPublished, that recieves 2 books and returns the book with the smaller year.

bookUtils.getFirstPublished = function (book, book2) {
  if (book.pubYear < book2.pubYear) {
    return book;
  } else {
    return book2;
  }
};

//add to to the bookUtils object a function setNewEdition, that recieves a
// book and an edition year and sets a new property latestEdition with the
// edition year, or updates an existing one.

bookUtils.setNewEdition = function (book, year) {
    book.latestEdition = year;
}

// add to to the bookUtils object a setLanguage function, that recieves a book
// and a language and sets a new property language with the languahe, or
// updates an existing one.

bookUtils.setLanguage = function (book, lang) {
    book.language = lang;
}

//add to to the bookUtils object a setTranslation function, that recieves a
// book a language and a translator, and sets a new property of translation,
// which is an object that contains the translator and the language.

bookUtils.setTranslation = function (book, lang, translator) {
    book.translation = {
        language: lang,
        translator: translator
    }
}

// add to to the bookUtils object a setPublisher function, that recieves a book
// a name and a location, and sets a new property named publisher, which is an
//object that contains the name and location.

bookUtils.setPublisher = function (book, name, location) {
    book.publisher = {
        name: name,
        location: location
    }
}

// add to to the bookUtils object a function isSamePublisher, that recieves 2
// books and checks if the publisher name and location are identical in the 2
//books.

bookUtils.isSamePublisher = function (book, book2) {
    if (book.publisher["name"] === book2.publisher["name"] &&
    book.publisher["location"] === book2.publisher["location"]) {
        return true;
    } else {
        return false;
    }
}


// console.log(bookUtils.getFirstPublished(book,book2));
// bookUtils.setNewEdition(book1,2019);
// console.log(book1);
bookUtils.setLanguage(book1, "English");

bookUtils.setTranslation(book1, "Portoguese", "Roberta Benini");
console.log(book1);

bookUtils.setPublisher(book1, "Shulman", "Spain");
bookUtils.setPublisher(book2, "Shulman", "Spain");

console.log(bookUtils.isSamePublisher(book1, book2));