function defineSuit(card) {
    if (card.endsWith('♣')) return 'clubs';
    if (card.endsWith('♦')) return 'diamonds';
    if (card.endsWith('♥')) return 'hearts';
    if (card.endsWith('♠')) return 'spades';
    }