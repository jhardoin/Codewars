const findNextSquare = sq => Math.sqrt(sq) % 1 ? -1 : (Math.sqrt(sq) + 1) ** 2

const findNextSquare = sq => Math.sqrt(sq) % 1 == 0 ? (Math.sqrt(sq) + 1) ** 2 : -1

function findNextSquare(sq) {
    return Math.sqrt(sq) % 1 !== 0 ? -1 : (Math.floor(Math.sqrt(sq)) + 1) ** 2
  }

  function findNextSquare(sq) {
    return Math.sqrt(sq) % 1 == 0 ? (Math.sqrt(sq) + 1) ** 2 : -1
  }

  function findNextSquare(sq) {
    return Math.sqrt(sq) % 1 == 0 ? (Math.sqrt(sq) + 1) ** 2 : -1
  }

  function findNextSquare(sq) {
    return Math.sqrt(sq) % 1 !== 0 ? -1 : Math.pow(Math.sqrt(sq) + 1, 2)
}

function findNextSquare(sq) {
  return Math.sqrt(sq) % 1 !== 0 ? -1 : Math.pow(Math.sqrt(sq) + 1, 2)
}

function findNextSquare(sq) {
  return Math.sqrt(sq) % 1 !== 0 ? -1 : Math.pow(Math.sqrt(sq) + 1, 2)
}