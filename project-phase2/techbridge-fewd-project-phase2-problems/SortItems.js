const btnSort = document.getElementById("btnSortIt");
const btnReset = document.getElementById("Reset");
const arr = document.querySelector("#row0");
const you = document.getElementById("row0").children;
const books = document.getElementsByClassName("column");
const results = document.getElementById("resultsRow");
const booksArr = [...books];
const booksReset = [...books];

function sortIt() {
  console.log(you);
  let newT = [];
  for (let t = 0; t < you.length; t++) {
    console.log(you[t].innerText);
    newT.push(you[t].innerText);
    newT.sort();
  }
  console.log(newT);
  let gone = [];
  for (let t = 0; t < you.length; t++) {
    for (let v = 0; v < newT.length; v++) {
      if (newT[t] == you[v].innerText) {
        console.log(gone[v]);

        gone.push(you[v]);
      }
    }
  }

  let a = [1, 2, 3, 4, 5];
  let b = [4, 5, 2, 1, 3];

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i] == b[j]) {
        // gone.push(you[v]);
      }
    }
  }

  1 === 4;
  1 === 5;
  1 === 2;
  1 === 1;

  2 === 4;
  2 === 5;
  2 === 2;

  3 === 4;

  for (let i = 0; i < gone.length; i++) {
    results.appendChild(gone[i]);
  }

  // return arr.appendChild(gone);
}

sortIt();

// booksArr.sort((a, b) => {
//   a = a.getElementsByTagName("span")[0].innerHTML;
//   b = b.getElementsByTagName("span")[0].innerHTML;

//   if (typeof parseInt(a) === "number" && typeof parseInt(b) === "number")
//     return parseInt(a) - parseInt(b);
//   typeof a === "string" && typeof b === "string" && a > b ? 1 : -1;
// });

// btnSort.addEventListener("click", function () {
//   booksArr.forEach((book) => bookList.appendChild(book));
// });

// btnReset.addEventListener("click", function () {
//   booksReset.forEach((book) => bookList.appendChild(book));
// });

//working through the problem/

// booksArr.sort((a, b) => {
//   a = a.getElementsByTagName("span")[0].innerHTML;
//   b = b.getElementsByTagName("span")[0].innerHTML;

//   typeof a === "string" && typeof b === "string" && a > b ? 1 : -1;
// });

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
