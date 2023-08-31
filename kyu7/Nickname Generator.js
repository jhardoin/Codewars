function nicknameGenerator(name){
    let vowels = ['a','e','i','o','u']
    if(name.length < 4) return "Error: Name too short"
    else if(vowels.includes(name[2])) return name.substring(0, 4)
    else return name.substring(0, 3)
  }