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

function solution(str){
  let arr = []
  if(str.length % 2 !== 0) str = str + '_'
  for(let i = 0; i < str.length; i += 2){
    arr.push(str[i] + str[i + 1])
  }
 return arr
}

function solution(str){
  let a = str.length % 2 !== 0 ? str + '_' : str
  let result = []
  
  for(let i = 0; i < a.length; i += 2){
    result.push(a[i] + a[i+1])
  }
 return result
}

function solution(str){
  let s = str.length % 2 == 0 ? str : str + '_'
  let arr = []
  for(let i = 0; i < s.length; i += 2){
    arr.push(s[i] + s[i + 1])
  }
  return arr
}

function solution(str){
  if(str.length % 2 !== 0) str += '_'
  let arr = []
  for(let i = 0; i < str.length; i += 2){
    arr.push(str[i] + str[i + 1])
  }
  return arr
}

function solution(str){
  if(str.length % 2 !== 0) str += '_'
  let arr = []
  for(let i = 0; i < str.length; i += 2){
    arr.push(str[i] + str[i + 1])
  }
  return arr
}

function solution(str){
  if(str.length % 2 !== 0) str += '_'
  let arr = []
  for(let i = 0; i < str.length; i += 2){
    arr.push(str[i] + str[i + 1])
  }
  return arr
}

function solution(str){
  if(str.length % 2 !== 0) str += '_'
  let arr = []
  for(let i = 0; i < str.length; i += 2){
    arr.push(str[i] + str[i + 1])
  }
  return arr
}

function solution(str){
  if(str.length % 2 !== 0) str += '_'
  let arr = []
  for(let i = 0; i < str.length; i += 2){
    arr.push(str[i] + str[i + 1])
  }
  return arr
}

function solution(str){
  if(str.length % 2 !== 0) str += '_'
  let arr = []
  for(let i = 0; i < str.length; i += 2){
    arr.push(str[i] + str[i + 1])
  }
  return arr
}

function solution(str){
  if(str.length % 2 !== 0) str += '_'
  let arr = []
  for(let i = 0; i < str.length; i += 2){
    arr.push(str[i] + str[i + 1])
  }
  return arr
}