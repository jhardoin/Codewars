function pickIt(arr){
    let odd=[],even=[];
    for(let i = 0; i < arr.length; i++){
      if(arr[i] % 2 == 0) even.push(arr[i])
      else odd.push(arr[i])
    }
    return [odd,even];
  }

  function pickIt(arr){
    var odd=[],even=[];
    arr.map(e => e % 2 == 0 ? even.push(e) : odd.push(e))
    
    return [odd,even];
  }