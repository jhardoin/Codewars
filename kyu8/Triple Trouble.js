function tripleTrouble(one, two, three){
    let finalString = ''
    for(let i = 0; i < one.length; i++){
      finalString += one[i] + two[i] + three[i]
    }
    return finalString
   }