function guessBlue(blueStart, redStart, bluePulled, redPulled) {
    let blueTotal = blueStart - bluePulled
    let redTotal = redStart - redPulled
    let allMarbles = blueTotal + redTotal
    return blueTotal/allMarbles
}

function guessBlue(blueStart, redStart, bluePulled, redPulled) {
    let totalLeft = (blueStart - bluePulled) + (redStart - redPulled)
    return (blueStart - bluePulled) / totalLeft
  }