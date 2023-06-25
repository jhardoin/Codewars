function isTriangle(a,b,c){
    let sortNums = [a, b, c].sort((a, b) => a - b);
     return sortNums[0] + sortNums[1] > sortNums[2];
   }