function grabDoll(dolls){
    var bag=[];
    for(let i = 0; i < dolls.length; i++){
      if(dolls.lenth > 0) continue
      if(dolls[i] == 'Hello Kitty' || dolls[i] == 'Barbie doll') bag.push(dolls[i])
      if(bag.length == 3) break
    }
    return bag
  }