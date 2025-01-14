function defineSuit(card) {
    if (card.endsWith('♣')) return 'clubs';
    if (card.endsWith('♦')) return 'diamonds';
    if (card.endsWith('♥')) return 'hearts';
    if (card.endsWith('♠')) return 'spades';
    }

    function defineSuit(card) {
        let suit = { '♣' : 'clubs', '♦' : 'diamonds', '♥' : 'hearts', '♠' : 'spades'}
        return card.length == 2 ? suit[card[1]] : suit[card[2]]
      }

      function defineSuit(card) {
        let suit = { '♣' : 'clubs', '♦' : 'diamonds', '♥' : 'hearts', '♠' : 'spades'}
        return card.length == 2 ? suit[card[1]] : suit[card[2]]
      }