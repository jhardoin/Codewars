String.prototype.vowel = function(){
    return this.length == 1 ? 'aeiouAEIOU'.includes(this) : false
  }