function lovefunc(flower1, flower2){
    if (flower1 % 2 === 0 && flower2 % 2 === 1) return true;
    else if (flower2 % 2 === 0 && flower1 % 2 === 1) return true;
    else return false;
}

function lovefunc(flower1, flower2){
    if((flower1 % 2 && !(flower2 % 2)) || (!(flower1 % 2) && flower2 % 2)) return true
    else return false
  }

  const lovefunc = (flower1, flower2) => flower1 % 2 !== flower2 % 2

  const lovefunc = (flower1, flower2) => flower1 % 2 !== flower2 % 2

  function lovefunc(flower1, flower2){
    return flower1 % 2 !== flower2 % 2
  }