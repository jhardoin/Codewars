function isTriangle(a,b,c){
    let sortNums = [a, b, c].sort((a, b) => a - b);
     return sortNums[0] + sortNums[1] > sortNums[2];
   }

   const isTriangle = (a,b,c) => a + b > c && a + c > b && b + c > a

   function isTriangle(a,b,c) {
    let sides = [a, b, c].sort((a,b) => a - b);
    return (sides[0] + sides[1] > sides[2]);
  }

  function isTriangle(a,b,c){
    return a + b > c && a + c > b && c + b > a;
 }

 function isTriangle(a,b,c){
  return a + b > c && a + c > b && c + b > a;
}

function isTriangle(a,b,c){
  return a + b > c && b + c > a && a + c > b
}

function isTriangle(a,b,c){
  let x = [a,b,c].sort((a,b) => b - a)
  return x[0] < x[1] + x[2]
}

function isTriangle(a,b,c){
  return a + b > c && b + c > a && a + c > b
}