function DNAStrand(dna){
    let changeDNA = {A: 'T', T: 'A', G : 'C', C : 'G' }
    return dna.replace(/A|T|G|C/g, match => changeDNA[match])
                       
  }

  const DNAStrand = dna =>[...dna].map(e => e == 'A' ? 'T' : e == 'T' ? 'A' : e == 'C' ? 'G' : 'C').join('')

  function DNAStrand(dna){
    return [...dna].map(e => e == 'T' ? 'A' : e == 'A' ? 'T' : e == 'G' ? 'C' : 'G').join('')
  }

  function dnaStrand(dna){
    return [...dna].map(e => e == 'A' ? 'T' : e == 'T' ? 'A' : e == 'G' ? 'C' : 'G').join('')
  }

  function dnaStrand(dna){
    return dna.split('').map(e => e == 'A' ? 'T' : e == 'T' ? 'A' : e == 'G' ? 'C' : 'G').join('')
  }

  function dnaStrand(dna){
    return dna.split('').map(e => e == 'A' ? 'T' : e == 'T' ? 'A' : e == 'G' ? 'C' : 'G').join('')
  }

  function dnaStrand(dna){
    return dna.split('').map(e => e == 'A' ? 'T' : e == 'T' ? 'A' : e == 'G' ? 'C' : 'G').join('')
  }