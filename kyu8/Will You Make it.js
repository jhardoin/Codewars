const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    if(mpg * fuelLeft >= distanceToPump) {
      return true
    }
    else {
      return false
    }
};

const zeroFuel = (distanceToPump, mpg, fuelLeft) =>  distanceToPump/mpg <= fuelLeft