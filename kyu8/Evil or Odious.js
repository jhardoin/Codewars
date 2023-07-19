function evil(n) {
    let binaryRepresentation = n.toString(2)
    let count = 0;
    for (let i = 0; i < binaryRepresentation.length; i++) {
      if (binaryRepresentation.charAt(i) === '1') {
        count++;
      }
    }
    return count % 2 == 0 ? "It's Evil!" : "It's Odious!"
  }