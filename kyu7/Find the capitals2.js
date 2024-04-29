function capital(capitals){
    return capitals.map(e => {
      let state = e.state ? e. state : e.country
      let cap =  e.capital
      return `The capital of ${state} is ${cap}`
    })
    
  }