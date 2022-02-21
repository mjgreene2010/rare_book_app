let findInput = document.getElementById("tbTextToFind");
let books = document.querySelectorAll(".column");
let btnSortIt = document.getElementById("btnFindIt");
let btnReset = document.getElementById("Reset");

console.log(books);

const find = function (input) {
  let arr = [];
  books.forEach((book) => arr.push(book.innerText));
  if (input === "") return alert("No value provide. Try again");
  if (!arr.includes(input)) {
    findInput.value = "";
    return alert("Not a valid input");
  }

  for (let i = 0; i < books.length; i++) {
    let book = books[i].querySelector("span");

    if (book.innerHTML == input)
      book.parentElement.style.border = "5px black solid";
  }
  findInput.value = "";
};

const reset = function () {
  for (let i = 0; i < books.length; i++) {
    let book = books[i].querySelector("span");

    book.parentElement.style.border = "";
    findInput.value = "";
  }
};

btnFindIt.addEventListener("click", (e) => {
  find(findInput.value.toUpperCase());
});

btnReset.addEventListener("click", () => {
  reset();
});
