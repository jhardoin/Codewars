function outed(meet, boss){
    let avg = (Object.values(meet).reduce((a,b) => a + b, 0) + meet[boss]) / Object.values(meet).length
    return avg <= 5 ? 'Get Out Now!' : 'Nice Work Champ!'
}