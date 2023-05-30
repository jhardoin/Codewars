function billboard(name, price = 30){
    let solution = 0;
    for (const leng of name)  {
      solution += price;
    }
    return solution
  } 