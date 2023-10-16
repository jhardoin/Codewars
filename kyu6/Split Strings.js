function solution(str){
    let result = [];
     for (let i = 0; i < str.length; i += 2) {
     const twoChars = str.substring(i, i + 2);
     result.push(twoChars);
   }
   return result.map(e => e.length < 2 ? e + '_' : e)
   
 }

 function solution(str){
  let result = []
  for(let i = 0; i < str.length; i += 2){
    result.push(str[i] + (str[i + 1] == undefined ? '_' : str[i + 1]))
  }
return result
}