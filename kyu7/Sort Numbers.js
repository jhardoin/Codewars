const solution = nums => (nums == null) ? [] : nums.sort((a,b) => a - b)

const solution = nums => nums ? nums.sort((a,b) => a - b) : []