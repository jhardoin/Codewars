const cannonsReady = (gunners) => (Object.values(gunners)).includes('nay') ? 'Shiver me timbers!' : 'Fire!'

const cannonsReady = (gunners) => {
    return Object.values(gunners).every(e => e == 'aye') ? 'Fire!' : 'Shiver me timbers!'
  }