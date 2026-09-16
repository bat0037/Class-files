const relativeBox = document.getElementById("relativeBox");
const absoluteBox = document.getElementById("absoluteBox");

// Relative positioning controls

const relativeRight = document.getElementById("relativeRight");
const relativeTop = document.getElementById("relativeTop");

const relativeRightValue = document.getElementById("relativeRightValue");
const relativeTopValue = document.getElementById("relativeTopValue");

relativeRight.addEventListener("input", function () {
  const value = this.value;

  relativeBox.style.left = `${value}px`;
  relativeRightValue.textContent = `${value}px`;
});

relativeTop.addEventListener("input", function () {
  const value = this.value;

  relativeBox.style.top = `${value}px`;
  relativeTopValue.textContent = `${value}px`;
});

// Absolute positioning controls

const absoluteLeft = document.getElementById("absoluteLeft");
const absoluteTop = document.getElementById("absoluteTop");

const absoluteLeftValue = document.getElementById("absoluteLeftValue");
const absoluteTopValue = document.getElementById("absoluteTopValue");

absoluteLeft.addEventListener("input", function () {
  const value = this.value;

  absoluteBox.style.left = `${value}px`;
  absoluteLeftValue.textContent = `${value}px`;
});

absoluteTop.addEventListener("input", function () {
  const value = this.value;

  absoluteBox.style.top = `${value}px`;
  absoluteTopValue.textContent = `${value}px`;
});

// Fixed box interaction

const fixedBox = document.getElementById("fixedBox");

fixedBox.addEventListener("click", function () {
  if (fixedBox.textContent === "Fixed Box") {
    fixedBox.textContent = "I stay fixed!";
  } else {
    fixedBox.textContent = "Fixed Box";
  }
});