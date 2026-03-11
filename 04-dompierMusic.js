function dompierMusic(switches) {
  let decimalNumber
  let music = []
  for (let i = 0; i < switches.length; i++) {
    decimalNumber = parseInt(switches[i], 2)
    //Checks for every possible frequency and adds the corresponding note to music
    if (decimalNumber == 261) {
      music.push("C4")
    } else if (decimalNumber == 294) {
      music.push("D4")
    } else if (decimalNumber == 329) {
      music.push("E4")
    } else if (decimalNumber == 349) {
      music.push("F4")
    } else if (decimalNumber == 392) {
      music.push("G4")
    } else if (decimalNumber == 440) {
      music.push("A4")
    } else if (decimalNumber == 494) {
      music.push("B4")
    } else if (decimalNumber == 523) {
      music.push("C4")
    } else if (decimalNumber == 0) {
      music.push("REST")
    }
  }
  return music
}
