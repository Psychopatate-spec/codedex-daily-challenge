function bloodMoon(time) {
  let hours = time.slice(0, 2)
  let minutes = time.slice(3, 5)
  let nextBloodMoon = []
  for (let i = 0; i < 3; i++) {
    hours = (parseInt(hours) + 2).toString().padStart(2, "0")
    if (parseInt(hours) >= 24) {
      hours = (parseInt(hours) - 24).toString().padStart(2, "0")
    }
    minutes = (parseInt(minutes) + 48).toString().padStart(2, "0")
    if (parseInt(minutes) >=60) {
      minutes = (parseInt(minutes) - 60).toString().padStart(2, "0")
      hours = (parseInt(hours) + 1).toString().padStart(2, "0")
    }
    nextBloodMoon.push(hours + ":" + minutes)
  }
  return(nextBloodMoon)
}
