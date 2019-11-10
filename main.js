var moveValueOne = document.getElementById("move-value-one");
var moveValueTwo = document.getElementById("move-value-two");
var moveValueThree = document.getElementById("move-value-three");
var moveValueFour = document.getElementById("move-value-four");
var moveValueFive = document.getElementById("move-value-five");

var priceTomatoes = document.getElementById("price-tomatoes");
var priceCucumbers = document.getElementById("price-cucumbers");
var priceCarrots = document.getElementById("price-carrots");
var priceSpinach = document.getElementById("price-spinach");
var priceCabbage = document.getElementById("price-cabbage");

document.getElementById("move-range-one").addEventListener(
  "change",
  function() {
    moveValueOne.innerText = this.value;
    priceTomatoes.innerText = this.value * 32;
  },
  false
);

document.getElementById("move-range-two").addEventListener(
  "change",
  function() {
    moveValueTwo.innerText = this.value;
    priceCucumbers.innerText = this.value * 34;
  },
  false
);

document.getElementById("move-range-three").addEventListener(
  "change",
  function() {
    moveValueThree.innerText = this.value;
    priceCarrots.innerText = this.value * 50;
  },
  false
);

document.getElementById("move-range-four").addEventListener(
  "change",
  function() {
    moveValueFour.innerText = this.value;
    priceSpinach.innerText = this.value * 67;
  },
  false
);

document.getElementById("move-range-five").addEventListener(
  "change",
  function() {
    moveValueFive.innerText = this.value;
    priceCabbage.innerText = this.value * 42;
  },
  false
);
