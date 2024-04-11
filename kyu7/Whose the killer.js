function killer(suspectInfo, dead) {
    const suspects = Object.keys(suspectInfo);
    const guilty = suspects.find(e => dead.every(person => suspectInfo[e].includes(person)))
    return guilty;
  }
  

  function killer(suspectInfo, dead) {
    return Object.keys(suspectInfo).find(x => dead.every(y => suspectInfo[x].includes(y)))
   }