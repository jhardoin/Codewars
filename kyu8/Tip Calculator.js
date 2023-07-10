function calculateTip(amount, rating) {
    let rat = rating.toLowerCase()
     if(rat == 'excellent') return Math.ceil(amount * .2)
     if(rat == 'great') return Math.ceil(amount * .15)
     if(rat == 'good') return Math.ceil(amount * .10) 
     if(rat == 'poor') return Math.ceil(amount * .05)
     if(rat == 'terrible') return amount * 0
     else return "Rating not recognised"
}