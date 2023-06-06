function fakeBin(x){
    return x.split('').map(item => item >= 5 ? 1 : 0).join('');
  }