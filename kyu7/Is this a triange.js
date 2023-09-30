function isTriangle(a,b,c){
    let sortNums = [a, b, c].sort((a, b) => a - b);
     return sortNums[0] + sortNums[1] > sortNums[2];
   }

   const isTriangle = (a,b,c) => a + b > c && a + c > b && b + c > a