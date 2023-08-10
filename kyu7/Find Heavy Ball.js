function findBall(scales) {
    for (var i = 1; i < 8; i++) {
        var leftPan = [i - 1];
        var rightPan = [8 - i];
        var w = scales.getWeight(leftPan, rightPan);

        if (w === -1) {
            return leftPan[0];
        }

        if (w === 1) {
            return rightPan[0];
        }
    }
}