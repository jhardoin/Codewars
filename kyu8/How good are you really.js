function betterThanAverage(classPoints, yourPoints) {
    let avgClass = (classPoints.reduce((a, b) => a + b))/classPoints.length;
    return (yourPoints > avgClass) ? true : false;
    }

const betterThanAverage = (cP, yP) => (cP.reduce((a,b) => a + b) + yP) / cP.length <= yP

const betterThanAverage = (classPoints, yourPoints) => yourPoints > classPoints.reduce((a,b) => a + b)/classPoints.length

function betterThanAverage(classPoints, yourPoints) {
        return yourPoints > classPoints.reduce((a,b) => a + b, 0)/classPoints.length
      }
      
function betterThanAverage(classPoints, yourPoints) {
        return classPoints.reduce((a,b) => a + b, 0)/classPoints.length < yourPoints
      }
      

      function betterThanAverage(classPoints, yourPoints) {
        return classPoints.reduce((a,b) => a + b, 0)/classPoints.length < yourPoints
      }
      

      function betterThanAverage(classPoints, yourPoints) {
        return classPoints.reduce((a,b) => a + b, 0)/classPoints.length < yourPoints
      }
      

      function betterThanAverage(classPoints, yourPoints) {
        return classPoints.reduce((a,b) => a + b, 0)/classPoints.length < yourPoints
      }
      