const findOutlier = (integers) => {
    let odd = integers.filter(e => e % 2);
    let even = integers.filter(e => e % 2 == 0);
    return odd.length == 1 ? odd[0] : even[0]
  }