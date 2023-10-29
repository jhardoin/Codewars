function monkeyCount(n) {
    let monkeys = [];
    for(let i = 1; i < n + 1; i++){
      monkeys.push(i);
    }
    return monkeys;
   }

   const monkeyCount = n => Array.from({length:n}, (v,i) => i+1)

   const monkeyCount = n => Array.from({length:n}, (_,i) => i + 1)