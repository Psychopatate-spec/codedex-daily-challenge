function analyze(percentages) {
  //Calculate the Net Change Per Year
  let ncpy = (percentages[percentages.length - 1] - percentages[0]) / (percentages.length - 1)
  ncpy = Math.round(ncpy * 10000) / 10000
  //Compare the last 3-year average with the first 3-year average
  let trend = ""
  let avgFirst = (percentages[0] + percentages[1] + percentages[2]) / 3
  let avgLast = (percentages[percentages.length - 1] + percentages[percentages.length - 2] + percentages[percentages.length - 3]) / 3
  if (avgLast > avgFirst) {
    trend = "improving"
  } else if (avgLast == avgFirst) {
    trend = "stagnating"
  } else {
    trend = "declining"
  }
  //Calculate dips
  let dips = 0
  for (let i = 1; i < percentages.length; i++) {
    if (percentages[i] < percentages[i - 1]) {
      dips++
    }
  }
  return [ncpy, trend, dips]
}
