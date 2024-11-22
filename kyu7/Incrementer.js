function incrementer(nums) { 
    return nums.map((e,i) => (e + (i + 1)) % 10)
  }

  function incrementer(nums) { 
    return nums.map((e,i) => (e + (i + 1)).toString().length > 1 ? +(e + (i + 1)).toString().slice(-1) : e + (i + 1))
  }


  function incrementer(nums) { 
    return nums.map((e,i) => (e + i + 1) % 10)
}

function incrementer(nums) { 
  return nums.map((e,i) => (e + i + 1) % 10)
}