var cards = ["king","king","queen","queen"];
var cardsInPLay = [];

var board = document.getElementById('game-board');

function createCards(){
  for (var i = 0;i<cards.length; i++) {
    var cardCreated = document.createElement("div");
    cardCreated.className = 'card';
    cardCreated.setAttribute("data-card",cards[i]);
    cardCreated.addEventlistener('click',isTwoCards);


    board.appendChild(cardCreated);
    board.appendChild(cardCreated);
  }
}
window.createCards();

}
function isTwoCards() {
  cardsInPlay.push(this.getAttribute('data-card'));
  console.log(this.getAttribute('data-card'));
  	if (this.getAttribute('data-card') === 'king') {
  		this.innerHTML = "<img src='king.png'>"; // king
  	} else {
  		this.innerHTML = "<img src='queen.png'>"; //queen
  	}
  // if you have two cards in play check for a match
  if (cardsInPlay.length === 2) {

    // pass the cardsInPlay as an argument to isMatch function
    isMatch(cardsInPlay);

    // clear cards in play array for next try
    cardsInPlay = [];
}
function isMatch(cardsInPlay){
  if (cardsInPlay[0]==cardsInPlay[1]) {
    alert("You found a match!");
    else {
      alert("Sorry, try again.");
    }
  }
  createBoard();
