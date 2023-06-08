function getGrade (s1, s2, s3) {
  let avgGrade = (s1 + s2 + s3)/3
  if(avgGrade >= 90) return "A"
  if(avgGrade >= 80) return "B"
  if(avgGrade >= 70) return 'C'
  if(avgGrade >= 60) return 'D'
  else return 'F'
}