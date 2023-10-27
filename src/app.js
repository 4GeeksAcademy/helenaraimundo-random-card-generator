/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector(".card").classList.add(generateRandomSuit());
  document.querySelector(".card").innerHTML = generateRandomNumber();
};

let generateRandomSuit = () => {
  let suit = ["diamond", "club", "heart", "spade"];
  let indexsuit = Math.floor(Math.random() * suit.length);
  return suit[indexsuit];
};

let generateRandomNumber = () => {
  let number = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];
  let indexnumber = Math.floor(Math.random() * number.length);
  return number[indexnumber];
};
