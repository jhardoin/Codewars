function bmi(weight, height) {
    let index = weight / (height ** 2);
    if(index <= 18.5) return "Underweight"
  
    if(index <= 25.0) return "Normal"
  
    if(index <= 30.0) return "Overweight"
  
    if(index > 30) return "Obese"
  }

  function bmi(weight, height) {
    let b = weight/(height ** 2)
    return (b<=18.5) ? 'Underweight' : (b<=25) ? 'Normal' : (b<=30) ? 'Overweight' : 'Obese'
  }