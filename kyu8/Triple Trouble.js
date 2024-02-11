function tripleTrouble(one, two, three){
    let finalString = ''
    for(let i = 0; i < one.length; i++){
      finalString += one[i] + two[i] + three[i]
    }
    return finalString
   }

   const tripleTrouble = (one, two, three) => one.split("").map((e, i) => e + two[i] + three[i]).join("")

   function tripleTrouble(one, two, three){
    return [...one].map((e,i) => e + two[i] + three[i]).join('')
   }