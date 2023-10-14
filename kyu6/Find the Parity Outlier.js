const findOutlier = (integers) => {
    let odd = integers.filter(e => e % 2);
    let even = integers.filter(e => e % 2 == 0);
    return odd.length == 1 ? odd[0] : even[0]
  }

  function findOutlier(integers){
    return integers.filter(e => e % 2 == 0).length == 1 ? +integers.filter(e => e % 2 == 0) : +integers.filter(e => e % 2 !== 0) 
}