const btnSort = document.getElementById("btnSortIt");
const btnReset = document.getElementById("Reset");
const bookList = document.getElementById("row0");
const books = document.getElementsByClassName("column");
const booksArr = [...books];
const booksReset = [...books].slice();

booksArr.sort((a, b) => {
  a = a.getElementsByTagName("span")[0].innerHTML;
  b = b.getElementsByTagName("span")[0].innerHTML;

  if (typeof parseInt(a) === "number" && typeof parseInt(b) === "number")
    return parseInt(a) - parseInt(b);
});

booksArr.sort((a, b) => {
  a = a.getElementsByTagName("span")[0].innerHTML;
  b = b.getElementsByTagName("span")[0].innerHTML;

  if (typeof a === "string" && typeof b === "string" && a > b) return 1;
  else return -1;
});

btnSort.addEventListener("click", function () {
  booksArr.forEach((book) => bookList.appendChild(book));
});

btnReset.addEventListener("click", function () {
  booksReset.forEach((book) => bookList.appendChild(book));
});

//working through the problem

/*const btnSort = document.getElementById("btnSortIt");
const btnReset = document.getElementById("Reset");
const bookList = document.getElementById("row0");
const books = document.getElementsByClassName("column");
const booksArr = [...books];
const booksReset = [...books].slice();
console.log(booksArr);
// console.log([...books][0].getElementsByTagName("span")[0].outerText);
// console.log([...books][1].getElementsByTagName("span")[0].outerText);
// //the spread operator turns HTML collection into an array
// const newBookList = booksArr.map((book, i) => {
//   console.log(
//     book.nextElementSibling.getElementsByTagName("span")[0].innerHTML
//   );
//   return book;
//   // return book.getElementsByTagName("span")[0].outerText;
// });
//   .sort((a, b) => book.getElementsbyTagName("span")[0}.outerText - b);
// console.log(booksArr[0].getElementsByTagName("span")[0].innerHTML);
// console.log(booksArr[0].nextElementSibling("span")[0])
booksArr.sort((a, b) => {
  a = a.getElementsByTagName("span")[0].innerHTML;
  b = b.getElementsByTagName("span")[0].innerHTML;

  if (typeof parseInt(a) === "number" && typeof parseInt(b) === "number")
    return parseInt(a) - parseInt(b);
});

booksArr.sort((a, b) => {
  a = a.getElementsByTagName("span")[0].innerHTML;
  b = b.getElementsByTagName("span")[0].innerHTML;

  if (typeof a === "string" && typeof b === "string" && a > b) return 1;
  else return -1;
});

// const sortBooks = function (bookTest) {
//   for (let i = 0; i < booksArr.length - 1; i++) {
//     let a = booksArr[i].getElementsByTagName("span")[0].outerText;
//     let b = booksArr[i + 1].getElementsByTagName("span")[0].outerText;
//     // console.log(a, b);
//   }
// };

// sortBooks(books);
// console.log(booksArr);

btnSort.addEventListener("click", function () {
  //   bookList.innerHTML = "";
  booksArr.forEach((book) => bookList.appendChild(book));
});

console.log(booksArr === booksReset);

btnReset.addEventListener("click", function () {
  booksReset.forEach((book) => bookList.appendChild(book));
});

// const find = function (input) {
//   for (let i = 0; i < books.length; i++) {
//     let book = books[i].querySelector("span");

//     if (book.innerHTML == input)
//       book.parentElement.style.border = "5px black solid";
//   }
// }; */
