var capitals = function (word) {
    let nums = []
      word.split('').map((e, i) => e == e.toLowerCase() ? [] : nums.push(i))
    return nums
    }