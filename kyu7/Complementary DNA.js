function DNAStrand(dna){
    let changeDNA = {A: 'T', T: 'A', G : 'C', C : 'G' }
    return dna.replace(/A|T|G|C/g, match => changeDNA[match])
                       
  }

  const DNAStrand = dna =>[...dna].map(e => e == 'A' ? 'T' : e == 'T' ? 'A' : e == 'C' ? 'G' : 'C').join('')