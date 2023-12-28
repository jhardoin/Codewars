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