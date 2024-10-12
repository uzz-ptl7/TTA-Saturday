let bookStore = [];

//........Adding New Items...................
function addBook(newBook){
    bookStore.push(newBook);
    displayBooks();
    console.log("...............................")
}

//...........Display Books...................
function displayBooks(){
    bookStore.forEach(function (item, index){
        console.log(`Book ${index+1}: ${item}`)
    })
}

//............Removing Book...................
function removeBook(bookToRemove){
    const index = bookStore.indexOf(bookToRemove);
    if (index != -1) {
        bookStore.splice(index, 1);
        console.log(`Book at index ${index} removed successfully`);
        displayBooks();
    } 
    else {
        console.log("Book not found");
    }
}

//..............Update Book........................
function updateBook(oldVersion, newVersion) {
    const index = bookStore.indexOf(oldVersion);
    if (index != -1){
        bookStore.splice(index, 1, newVersion);
        console.log("...............................")
        console.log(`Book at index ${index} updated successfully`);
        displayBooks();
    }
    else {
        console.log(`${oldVersion} not found`)
    }
}



//.....................Adding Parameters and Calling Functions..............................

addBook("NewBook1");
addBook("NewBook2");
addBook("NewBook3");
addBook("NewBook4");
addBook("NewBook5");

removeBook("NewBook2");

updateBook("NewBook3", "NewBook10");