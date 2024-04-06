function nicknameGenerator(name){
    let vowels = ['a','e','i','o','u']
    if(name.length < 4) return "Error: Name too short"
    else if(vowels.includes(name[2])) return name.substring(0, 4)
    else return name.substring(0, 3)
  }

  
  function nicknameGenerator(name){
    return name.length < 4 ? 'Error: Name too short' :
           'aeiou'.includes(name[2]) ? name.slice(0,4) : name.slice(0,3)
  }