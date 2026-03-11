function minimumComponents(components) {
  let best = Infinity
  function search(i, sum, count) {
    if (sum == 42) {
      if (count < best) {
        best = count
        return
      }
    }
    if (sum > 42 || i == components.length) {
      return
    }
    search(i + 1, sum + components[i], count + 1)
    search(i + 1, sum, count)
  }
  search(0, 0, 0)
  if (best == Infinity) {
    return -1
  }
  return best
}
