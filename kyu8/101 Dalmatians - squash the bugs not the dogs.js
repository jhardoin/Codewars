function howManyDalmatians(number)  {
    let dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];
    if(number <= 10) return dogs[0]
    if(number > 10 && number <= 50) return dogs[1]
    if(number > 50 && number < 101) dogs[2]
    if(number == 101) return dogs[3]
    else return dogs[2]
  }