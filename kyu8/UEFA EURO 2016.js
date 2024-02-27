function uefaEuro2016(teams, scores){
    if (scores[0]==scores[1]) return `At match ${teams[0]} - ${teams[1]}, teams played draw.`
    if(scores[0]>scores[1]) return `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`
    else return `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`
  }

  function uefaEuro2016(teams, scores){
    return "At match " + teams[0] + " - " + teams[1] + ", " + ((scores[0] > scores[1]) ? teams[0] + " won!" : (scores[0] < scores[1]) ? teams[1] +" won!":  "teams played draw.");
   };