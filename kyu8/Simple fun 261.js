function whoseMove(lastPlayer, win) {
    if((lastPlayer == 'black' && win == true) || (lastPlayer == 'white' && win == false)) return "black"
    else return 'white'
  }