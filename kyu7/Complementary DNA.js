function DNAStrand(dna){
    let changeDNA = {A: 'T', T: 'A', G : 'C', C : 'G' }
    return dna.replace(/A|T|G|C/g, match => changeDNA[match])
                       
  }