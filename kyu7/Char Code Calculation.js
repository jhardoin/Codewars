function calc(x){
    let total1 = '';
    let total2 = '';
    for (let i = 0; i < x.length; i++) {
      total1 += x.charCodeAt(i);
    }
    total2 = total1.replace(/7/g, '1');
    return total1.split('').reduce((a, b) => parseInt(a) + parseInt(b)) - total2.split('').reduce((a, b) => parseInt(a) + parseInt(b));
  }