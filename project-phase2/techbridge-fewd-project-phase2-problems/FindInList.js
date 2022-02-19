let findInput = document.getElementById("tbTextToFind");
let books = document.getElementsByClassName("column");
let btnSortIt = document.getElementById("btnFindIt");
let btnReset = document.getElementById("Reset");

const find = function (input) {
  for (let i = 0; i < books.length; i++) {
    let book = books[i].querySelector("span");

    if (book.innerHTML == input)
      book.parentElement.style.border = "5px black solid";
  }
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
