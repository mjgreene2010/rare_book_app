"use strict";

const filterSpan = document.querySelector(".filter");
const bookFilter = document.getElementById("book-filter");
const heading = document.querySelector("#book-list-heading");
const filterBtn = document.querySelector(".submit-filter");
const sortBtn = document.querySelector(".sort-button");

// bookFilter.addEventListener("click", function () {
//   let input = document.createElement("input");
//   let btn = document.createElement("button");
//   let span = document.createElement("span");

//   if (filterSpan.getAttribute("value") === "false") {
//     input.classList = "book-filter-input";
//     input.setAttribute("type", "text");
//     btn.innerHTML = "Enter";
//     btn.classList = "submit-filter";
//     btn.setAttribute("type", "submit");
//     span.appendChild(input);
//     span.appendChild(btn);
//     span.classList = "input-button";
//     filterSpan.appendChild(span);
//     filterSpan.setAttribute("value", "true");
//   } else if (filterSpan.getAttribute("value") === "true") {
//     filterSpan.lastChild.remove();
//     filterSpan.setAttribute("value", "false");
//   }
// });

const searchSpan = document.querySelector(".search");
const bookSearch = document.getElementById("book-search");
const searchBtn = document.querySelector(".submit-search");

bookSearch.addEventListener("click", function () {
  let input = document.createElement("input");
  let btn = document.createElement("button");
  let span = document.createElement("span");

  if (searchSpan.getAttribute("value") === "false") {
    input.classList = "book-filter-input";
    input.setAttribute("type", "text");
    btn.innerHTML = "Enter";
    btn.classList = "submit-filter";
    btn.setAttribute("type", "submit");
    span.appendChild(input);
    span.appendChild(btn);
    span.classList = "input-button";
    searchSpan.appendChild(span);
    searchSpan.setAttribute("value", "true");
  } else if (searchSpan.getAttribute("value") === "true") {
    searchSpan.lastChild.remove();
    searchSpan.setAttribute("value", "false");
  }
});

sortBtn.addEventListener("click", function () {
  alert("wow!");
});
