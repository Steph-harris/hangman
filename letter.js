debugger;
function Letter(let){
  this.charac = let;
  this.appear = false;
  this.letterRender = function(){
    if(!charac){
      return "_";
    }else{
      return charac;
    }
  }
}

module.exports = Letter;