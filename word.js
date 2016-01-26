var Letter = require("./letter.js");

function Word(wrd){
  this.word = wrd;
  this.lets = [];
  this.found = false;
  this.getLets = function(){
    //run loop w/ i = length of word property
    for (var i = 0; i < wrd.length; i++) {
      //create new Letter object w/ current [i] passed in 
      var newLet = new Letter(wrd[i]);
      //push new object into lets [] }
      this.lets.push(newLet);
    };   
  }
  this.checkIfLetterFound = function(guessLetter){
    var whatToReturn = 0;
    //run loop j over each object in lets[]
    //compare charac[j] with guessLetter
    //if(===){appear=true, checkIfLetterFound++, return checkIfLetterFound}
  }
  this.didWeFindTheWord = function(){
    //checks if ALL lets [] objects are appear = true; if yes, return true
    //lets.every(didWeFindTheWord)
  }
  this.wordRender = function(){
    var str = "";
    //loop over let[]{call letterRender on [k], and .concat() on to str}
    //return str
  }
}

module.exports = Word;