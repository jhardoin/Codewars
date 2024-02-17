const isLockNessMonster = (s) => /tree fiddy|3.50|three fifty/.test(s)

function isLockNessMonster(s) {
    return s.includes('tree fiddy') || s.includes('3.50') || s.includes('three fifty')
  }