function chromosomeCheck(sperm) {
    let sonOrDaughter = ((sperm == 'XX') ? 'daughter' : 'son');
    return `Congratulations! You're going to have a ${sonOrDaughter}.`
  }