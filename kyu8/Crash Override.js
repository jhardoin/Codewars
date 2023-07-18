function aliasGen(a, b){
    if(firstName[a[0].toUpperCase()] == undefined || surname[b[0].toUpperCase()] == undefined)
     return "Your name must start with a letter from A - Z."
    else return firstName[a[0].toUpperCase()] + ' ' + surname[b[0].toUpperCase()]
}