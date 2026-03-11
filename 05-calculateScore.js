function calculateScore(elements) {
  let tes = 0
  for (let element = 0; element < elements.length; element++) {
    //Gets base value and scores
    let base = elements[element][1]
    let scores = elements[element][2]
    //Adds up every score
    let sum = 0
    for (let i = 0; i < 9; i++) {
      sum += scores[i]
    }
    //Deletes lowest and highest values
    sum -= Math.min(...scores)
    sum -= Math.max(...scores)
    let avgGOE = sum / 7
    let elementScore = base + (avgGOE * 0.1 * base)
    tes += elementScore
  }
  return Number(tes.toFixed(1))
}
