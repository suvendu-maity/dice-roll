var randomNumber1 = Math.random() * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;
document.querySelectorAll("img")[0].setAttribute("src", "images/dice" + randomNumber1 + ".png");

var randomNumber2 = Math.random() * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;
document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + randomNumber2 + ".png");


if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = " ⛳" + "Player 1 wins";
} else if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "!! It's a draw !!";
} else {
  document.querySelector("h1").innerHTML = "Player 2 wins" + " ⛳";
}
