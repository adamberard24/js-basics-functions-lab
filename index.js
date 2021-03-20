function distanceFromHqInBlocks (endLocation){
    let distance
    if (endLocation >= 42){
 (distance = endLocation - 42)}
else { (distance = 42 - endLocation)}
return distance
}

function distanceFromHqInFeet (endLocation) {
   return (distanceFromHqInBlocks (endLocation) * 264)
}

function distanceTravelledInFeet(startLocation, endLocation) {
let distance
if (startLocation >= endLocation) {distance = (startLocation - endLocation)*264}
if (startLocation < endLocation) {distance = (endLocation - startLocation)*264}
return distance
}

function calculatesFarePrice (startLocation, endLocation) {
    let total
    if (distanceTravelledInFeet (startLocation, endLocation) <= 400) {total = 0}
    if (distanceTravelledInFeet (startLocation, endLocation) > 400 && distanceTravelledInFeet (startLocation, endLocation) <= 2000) {total = (distanceTravelledInFeet (startLocation, endLocation) - 400) * .02}
    if (distanceTravelledInFeet (startLocation, endLocation) > 2000 && distanceTravelledInFeet (startLocation, endLocation) <= 2500) {total = 25}
    if (distanceTravelledInFeet (startLocation, endLocation) > 2500) {total = 'cannot travel that far'}
    return total
}