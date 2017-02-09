function sayThatWasEasy() {
  var thatWasEasy = new Audio("MLGAirHorn.mp3");
  thatWasEasy.play();
}

$("#easy").on("click", sayThatWasEasy);