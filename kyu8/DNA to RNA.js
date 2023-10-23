function DNAtoRNA(dna) {
    return dna.replace(/T/g, "U")
  }

  const DNAtoRNA = dna => [...dna].map(e => e == 'T' ? 'U' : e).join('')