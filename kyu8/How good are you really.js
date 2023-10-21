function betterThanAverage(classPoints, yourPoints) {
    let avgClass = (classPoints.reduce((a, b) => a + b))/classPoints.length;
    return (yourPoints > avgClass) ? true : false;
    }

    const betterThanAverage = (cP, yP) => (cP.reduce((a,b) => a + b) + yP) / cP.length <= yP

    const betterThanAverage = (classPoints, yourPoints) => yourPoints > classPoints.reduce((a,b) => a + b)/classPoints.length