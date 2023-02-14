var PersonSaved = 0;
var gameElementsHuman = document.getElementById("game_elements_human");

function HumanClicked() {
  //when clicked on person personsaved gets incremented
  PersonSaved++;

  console.log(PersonSaved);
  gameElementsHuman.style.visibility = "hidden";
}
