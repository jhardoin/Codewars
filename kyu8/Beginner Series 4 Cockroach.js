function cockroachSpeed(s) {
  return Math.floor((s * 1000 * 100)/(60 * 60))
}

const cockroachSpeed = s => Math.floor(s*100000/3600)