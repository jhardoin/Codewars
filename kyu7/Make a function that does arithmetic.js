function arithmetic(a, b, operator){
    if(operator == 'add') return a + b
    else if(operator == 'subtract') return a - b
    else if(operator == 'multiply') return a * b
    else return a / b
  }

  function arithmetic(a, b, operator){
    return (operator == 'add' ? a + b: operator == 'subtract' ? a - b : operator == 'multiply' ? a * b : a/b)
  }

  const arithmetic = (a, b, operator) => {
    return  operator === "add" ? a + b : operator === "subtract" ? a - b : operator === "multiply" ? a * b : a / b
   }

   function arithmetic(a, b, operator){
    return operator == 'add' ? a + b :
           operator == 'subtract' ? a - b :
           operator == 'multiply' ? a * b :
           a / b
  }

  function arithmetic(a, b, operator){
    switch(operator){
        case 'add':
          return a + b
        case 'subtract':
          return a - b
        case 'multiply':
          return a * b
        case 'divide':
          return a / b
    }
  }