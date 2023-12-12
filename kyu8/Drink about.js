function peopleWithAgeDrink(old) {
    if(old < 14) return 'drink toddy';
    if(old < 18) return 'drink coke';
    if(old < 21) return 'drink beer';
    else return 'drink whisky';
  };

  function peopleWithAgeDrink(old) {
    if(old < 14) return 'drink toddy'
    else if(old < 18) return 'drink coke'
    else if(old < 21) return 'drink beer'
    else return 'drink whisky'
  }

  function peopleWithAgeDrink(old) {
    return old >= 21 ? "drink whisky" : old >= 18 ? "drink beer" : old >= 14 ? "drink coke" : "drink toddy"
  }