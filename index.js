// Code your solution in this
const distanceFromHqInBlocks = function(pickupLocation){
  const hqLocation = 42;
  return Math.abs(pickupLocation - hqLocation);
}

const distanceFromHqInFeet = function (pickupLocation){
  const blocks = distanceFromHqInBlocks(pickupLocation);
  const feetPerBlock = 264;
  return blocks * feetPerBlock;
}

const distanceTravelledInFeet = function(pickupLocation, destination){
  const blocksTravelled = Math.abs(pickupLocation - destination);
  const feetPerBlock = 264;
  return blocksTravelled * feetPerBlock;
}

function calculatesFarePrice(pickupLocation, destination){
  const distance = Math.abs(pickupLocation - destination) * 264;

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000){
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500){
    return 25;
  } else {
    return "cannot travel that far";
  }

}

  /*
 const blocks = distanceFromHqInBlocks(pickupLocation);
  function distanceFromHqInFeet() {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    
    return blocks * feetPerBlock;
  }
  

  function distanceTravelledInFeet(startBlock, endBlock) {
    const blocksTravelled = Math.abs(startBlock - endBlock);
    const feetPerBlock = 264;
    return blocksTravelled * feetPerBlock;
  }
  */



  