function betterThanAverage(classPoints, yourPoints) {
    let avgClass = (classPoints.reduce((a, b) => a + b))/classPoints.length;
    return (yourPoints > avgClass) ? true : false;
    }