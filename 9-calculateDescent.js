function calculateDescent(altitude) {
  function calculateTime(distance, speed) { //time = distance / speed
    return (distance * 1000) / speed //Convert from km to m
  }
  let totalDescentTime = 0
  let distance = altitude
  if (distance > 700) { //Exosphere
    totalDescentTime += calculateTime(distance - 700, 2000)
    distance = 700
  } if (distance > 85) { //Thermosphere
    totalDescentTime += calculateTime(distance - 85, 500)
    distance = 85
  } if (distance > 50) { //Mesosphere
    totalDescentTime += calculateTime(distance - 50, 200)
    distance = 50
  } if (distance > 12) { //Stratosphere
    totalDescentTime += calculateTime(distance - 12, 75)
    distance = 12
  } if (distance > 0) { //Troposhpere
    totalDescentTime += calculateTime(distance, 20)
  }
  return Math.round(totalDescentTime * 10) / 10
}
