function wordleGuess(secret, guess) {
  let count = 0
  for (let i = 0; i < 5; i++) {
    if (secret[i] == guess[i]) {
      count++
    }
  }
  return count
}
