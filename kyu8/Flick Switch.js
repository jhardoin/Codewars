function flickSwitch(arr) {
    let arr2 = [];
    let boo = true;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== 'flick') {
        arr2.push(boo);
      }
      if (arr[i] === 'flick') {
        arr2.push(!boo), boo = !boo
      }
    }
    return arr2;
  }