function sumNoDuplicates(numList) {
    return numList.filter((e,i,a) => a.indexOf(e) === a.lastIndexOf(e)).reduce((a,b) => a + b, 0)
  }