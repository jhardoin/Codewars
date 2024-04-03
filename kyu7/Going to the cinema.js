function movie(card, ticket, perc) {
    let times = 0;
    let costWithoutCard = 0;
    let costWithCard = card;

    while (Math.ceil(costWithCard) >= costWithoutCard) {
        times++;
        costWithoutCard += ticket;
        costWithCard += ticket * perc ** times;
    }

    return times;
}