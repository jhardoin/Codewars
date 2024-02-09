function animal(obj){
    let {name, legs, color} = obj;
    return `This ${color} ${name} has ${legs} legs.`;
  }
  
  function animal(obj){
    return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`
  }