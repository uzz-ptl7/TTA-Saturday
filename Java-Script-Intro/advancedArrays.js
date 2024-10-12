let bookStore = ["book1", "book2", "book3", "book4", "book5"];
// console.log(bookStore);

//.................for loop.........................
// for (let i = 0; i < bookStore.length; i++) {
//     console.log(bookStore[i]);
// }

//.................while loop.......................
// let i = 0;
// while(i < bookStore.length) {
//     console.log(bookStore[i]);
//     i++;
// }

//.................forEach loop......................
// bookStore.forEach(function (item, index) {
//     console.log(item);
// })

//.............................................................Array Methods..............................................................

//........................Push Method................................
// bookStore.push("book6");       // Adds item at the end
// console.log("..................ADD BOOK6..........................");
// console.log(bookStore);

//........................Pop Method.................................
// bookStore.pop();              // Removes item at the end
// console.log("..................Remove Book6.......................");
// console.log(bookStore);

//........................Unshift Method............................
// bookStore.unshift("NewBook");    // Adds item at the beginning
// console.log("....................ADD NEW BOOK...................");
// console.log(bookStore);

//........................Shift Method..............................
// bookStore.shift();             // Removes item from the beginning
// console.log("...........Remove Item at the Beginning............");
// console.log(bookStore);

//........................Splice Method.............................
// bookStore.splice(2, 1, "NewBook2");  // Adds "newBook" at index 2
// console.log("..............Add item at index 2...............");
// console.log(bookStore);

// bookStore.splice(1, 2);             // Removes 2 items at index 1
// console.log("..............Remove item at index 1..............");
// console.log(bookStore);

//........................indexOf Method..............................

const index = bookStore.indexOf("book1");  // Finds index of a book
console.log(`Your Book is at Index ${index}`);


