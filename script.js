"use strict";

const currentCountElem = document.querySelector(".current-count");
const lowerCountBtn = document.querySelector("#btn-decrement");
const addCountBtn = document.querySelector("#btn-increment");

let currentCount = 0;

function lowerCount() {
  currentCount--;
  currentCountElem.innerHTML = currentCount;
}

function raiseCount() {
  currentCount++;
  currentCountElem.innerHTML = currentCount;
}

lowerCountBtn.addEventListener("click", lowerCount);
addCountBtn.addEventListener("click", raiseCount);