function evalObject(value){
    var result = 0;
    switch(value.operation){
      case'+': result = Number(value.a + value.b); break
      case'-': result = Number(value.a - value.b); break
      case'/': result = Number(value.a / value.b); break
      case'*': result = Number(value.a * value.b); break
      case'%': result = Number(value.a % value.b); break
      case'^': result = Number(Math.pow(value.a, value.b)); break
      default: result
    }
    return result;
  }