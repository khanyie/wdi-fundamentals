//console.log("Up and running!");

 
   console.log("User flipped " + cardOne);
 var cards = ['queen' + 'queen' + 'king' + 'king'];
var cardsInPlay = [];

var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]){
		console.log("You found a match!");
} else {
	console.log("Sorry, try again.");
}
};
console.log("User flipped " + cards[0]);
cardsInPlay.push(cards[2]);
if (cardsInPlay.length === 2) {
	checkForMatch();
};


 var cardOne = "queen";
 cardsInPlay.push('queen');
 console.log("User flipped queen")

 var cardTwo = "king";
 cardsInPlay.push('king');
   console.log("User flipped king")
   if (cardsInPlay.length === 2) {
   	if (cardsInPlay[0], cardsInPlay[1]);
   }

    if (cardOne === cardTwo) {
    
      alert("You found a match!");
  } 
  else {
      alert("Sorry, try again");
  }
