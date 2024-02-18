function calculateTip(amount, rating) {
    let rat = rating.toLowerCase()
     if(rat == 'excellent') return Math.ceil(amount * .2)
     if(rat == 'great') return Math.ceil(amount * .15)
     if(rat == 'good') return Math.ceil(amount * .10) 
     if(rat == 'poor') return Math.ceil(amount * .05)
     if(rat == 'terrible') return amount * 0
     else return "Rating not recognised"
}

function calculateTip(amount, rating) {
    let r = rating.toLowerCase()
    if(amount == 0) return 0
    return r == 'excellent' ? Math.ceil(amount * .2) : 
    r == 'great' ? Math.ceil(amount * .15) : 
    r == 'good' ? Math.ceil(amount * .1) :
    r == 'poor' ? Math.ceil(amount * .05) : 
    r == 'terrible' ? amount * 0 :
    'Rating not recognised'
  }