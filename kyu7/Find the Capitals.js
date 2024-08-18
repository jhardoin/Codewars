var capitals = function (word) {
    let nums = []
      word.split('').map((e, i) => e == e.toLowerCase() ? [] : nums.push(i))
    return nums
    }

    var capitals = function (word) {
      let cap = [];
      [...word].map((e,i) => e == e.toUpperCase() ? cap.push(i) : '')
      return cap
                               
    };

    var capitals = word => [...word].map((e, i) => e == e.toUpperCase() ? i : -1).filter((e)=> e >= 0)

    var capitals = function (word) {
      return [...word].map((e,i) => e == e.toUpperCase() ? i : -1).filter(e => e >= 0)
        
    }

    var capitals = function (word) {
      return [...word].map((e,i) => e == e.toUpperCase() ? i : '').filter(e => e !== '')
   };

   var capitals = function (word) {
    let arr = []
    word.split('').forEach((e,i) => e === e.toUpperCase() ? arr.push(i) : e)
    return arr
}