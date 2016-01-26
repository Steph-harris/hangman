debugger;
var prompt = require("prompt");
//var Letter = require("./letter.js");
var Word = require("./word.js");

prompt.start();

var game = {
  wordBank: ["ferocity", "flabbergast", "blindside", "permutation", "insipid"],
  guessesRemaining: 10,
  currentWrd: null,
  startGame: function(wrd){
    var rand = Math.floor(Math.random() * game.wordBank.length);
    currentWrd = new Word (game.wordBank[rand]);
    currentWrd.getLets();
    game.keepPromptingUser();
  },
  keepPromptingUser: function(){
    var self = this;
    prompt.get("guessLetter", function(err, result){
      console.log("The Letter or space you guessed is " + result.guessLetter);
      //var findHowManyOfUserGuess = currentWrd.checkIfLetterFound(result.guessLetter);
      //if(findHowManyOfUserGuess === 0){
          //console.log("You guessed wrong!");
          //guessesRemaining-=;
      //} else{
        //console.log("You guessed right!");
        //if(currentWrd.didWeFindTheWord() = true){
            // console.log("You Won!!!");
            // return 1;
        // }
      // }
      //console.log("Guesses remaining: " + guessesRemaining);
      //console.log(currentWrd.wordRender()); Check hint in assignment

      // if(guessesRemaining > 0 && currentWrd.found = false){
        // keepPromptingUser();
      // } else if(guessesRemaining === 0){
        // console.log("Game Over Bro. The word was: " + currentWrd);
      // } else {
            //console.log(currentWrd.wordRender());
      // }
     })
  }
}
game.startGame()