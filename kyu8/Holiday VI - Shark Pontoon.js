const shark = (pD, sD, yS, sS, d) => (d == true && (pD/yS < (sD/sS * 2)) || (pD/yS < sD/sS)) ? 'Alive!' : "Shark Bait!";

function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
    return youSpeed/pontoonDistance > sharkSpeed/sharkDistance/(dolphin ? 2 : 1) ? 'Alive!' : 'Shark Bait!'
    }