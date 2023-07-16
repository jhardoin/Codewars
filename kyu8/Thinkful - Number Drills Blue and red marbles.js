function guessBlue(blueStart, redStart, bluePulled, redPulled) {
    let blueTotal = blueStart - bluePulled
    let redTotal = redStart - redPulled
    let allMarbles = blueTotal + redTotal
    return blueTotal/allMarbles
}