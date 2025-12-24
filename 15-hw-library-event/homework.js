const library = [];
const isbn = document.getElementById('isbn');
const title = document.getElementById('title');
const author = document.getElementById('author');
const year = document.getElementById('year');
const result = document.getElementById('result');
const addBook = document.getElementById('addBook');
const deleteBook = document.getElementById('deleteBook');


//isbn,title,author,year
addBook.onclick = function () {
    // TODO: get data from inputs, and put book in <ol id="result"></ol>
    // check is book unique
    if (findBook(library, isbn.value) === -1) {
        const book = new Book(isbn.value, title.value, author.value, year.value);
        library.push(book);
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(book.toString()))
        result.appendChild(li);
    } else {
        alert(`Book with isbn = ${isbn.value} exists`);
    }
    clearInputs();
}

deleteBook.onclick = function () {
    const index = findBook(library, isbn.value);
    if (index !== -1) {
        library.splice(index, 1);
        result.removeChild(result.children[index]);        
    } else {
        alert(`Book with isbn = ${isbn.value} not found`);
    }
    clearInputs();
}

function findBook(library, isbn) {
    for (let i = 0; i < library.length; i++) {
        if (library[i].isbn === isbn) {
            return i;
        }
    }
    return -1;
}

function clearInputs() {
    isbn.value = '';
    title.value = '';
    author.value = '';
    year.value = '';
}

function Book(isbn, title, author, year) {
    this.isbn = isbn;
    this.title = title;
    this.author = author;
    this.year = +year;
    this.toString = function () {
        return `ISBN: ${this.isbn}; Title: ${this.title}; Author: ${this.author}; Year of publication: ${this.year};`
    }
}