function getGrade (s1, s2, s3) {
  let avgGrade = (s1 + s2 + s3)/3
  if(avgGrade >= 90) return "A"
  if(avgGrade >= 80) return "B"
  if(avgGrade >= 70) return 'C'
  if(avgGrade >= 60) return 'D'
  else return 'F'
}

function getGrade (s1, s2, s3) {
  let av = (s1 + s2 + s3)/3
  return av >= 90 ? 'A' : av >= 80 ? 'B' : av >= 70 ? 'C' : av >= 60 ? 'D' : 'F'
}

function getGrade (s1, s2, s3) {
  let x = (s1+s2+s3)/3
  return x >= 90 ? 'A' : x >= 80 ? 'B' : x >= 70 ? 'C' : x >= 60 ? 'D' : 'F'
}