const library = [];
const isbn = document.getElementById('isbn');
const title = document.getElementById('title');
const author = document.getElementById('author');
const year = document.getElementById('year');
const result = document.getElementById('result');
const addBook = document.getElementById('addBook');


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
        

        const btn = document.createElement('button');
        btn.appendChild(document.createTextNode('Delete book'));
        li.appendChild(btn);
        btn.style.marginLeft = '10px';
        btn.onclick = function (event) {
            event.target.parentElement.remove()
            const index = findBook(library, book.isbn);
            library.splice(index, 1);            
        }
    } else {
        alert(`Book with isbn = ${isbn.value} exists`);
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