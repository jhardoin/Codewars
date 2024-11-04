function findMissingLetter(array) {
    let codes = array.map(e => e.charCodeAt())
    for(let i = 0; i < codes.length; i++){
      if(codes[i] + 1 !== codes[i + 1]){
        return String.fromCharCode(codes[i] + 1)
      }
    }
  }

  function findMissingLetter(array){
    let a = array.map(e => e.charCodeAt(0))
  
    for(let i = 0; i < a.length; i++){
      if(a[i + 1] - a[i] !== 1) return String.fromCharCode(a[i] + 1)
    }
    
  }

  function findMissingLetter(array){
    let a = array.map(e => e.charCodeAt(0))
    for(let i = 0; i < a.length; i++){
      if(a[i] + 1 !== a[i + 1]) return String.fromCharCode(a[i] + 1)
    }
  }

  function findMissingLetter(array){
    let a = array.map(e => e.charCodeAt(0))
    for(let i = 0; i < a.length; i++){
      if(a[i] + 1 !== a[i + 1]) return String.fromCharCode(a[i] + 1)
    }
  }

  function findMissingLetter(array){
    let a = array.map(e => e.charCodeAt())
    for(let i = 0; i < array.length; i++){
      if(a[i] + 1 !== a[i + 1]) return String.fromCharCode(a[i] + 1)
    }
  }

  function findMissingLetter(array){
    let a = array.map(e => e.charCodeAt())
    for(let i = 0; i < a.length; i++){
      if(a[i] + 1 !== a[i + 1]) return String.fromCharCode(a[i] + 1)
    }
}

function findMissingLetter(array){
  let a = array.map(e => e.charCodeAt())
  for(let i = 0; i < a.length; i++){
    if(a[i] + 1 !== a[i + 1]) return String.fromCharCode(a[i] + 1)
  }
}

function findMissingLetter(array){
  let a = array.map(e => e.charCodeAt())
  for(let i = 0; i < a.length; i++){
    if(a[i] + 1 !== a[i + 1]) return String.fromCharCode(a[i] + 1)
  }
}