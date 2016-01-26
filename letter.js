function Letter(let){
  this.charac = let;
  this.appear = false;
  this.letterRender = function(){
    if(!this.appear){
      return "_";
    }else{
      return this.charac;
    }
  }
}

module.exports = Letter;