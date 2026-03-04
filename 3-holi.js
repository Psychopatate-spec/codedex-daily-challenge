function findMissingColors(grid) {

  let colors = ["🟥", "🟧", "🟨", "🟩", "🟦", "🟪", "🟫"]
  let presentColors = []
  let missingColors = []

  //Checks for every color present in the grid
  for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 7; j++) {
      if (!presentColors.includes(grid[i][j])) {
        presentColors.push(grid[i][j])
      }
    }
  }

  //Checks for the missing colors in the present colors
  for (i = 0; i < colors.length; i++) {
    if (!presentColors.includes(colors[i])) {
      missingColors.push(colors[i])
    }
  }

  return missingColors
}
