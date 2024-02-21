const validateHello = (greetings) =>(/hello|ciao|salut|hallo|hola|ahoj|czesc/gi).test(greetings)

function validateHello(greetings) {
    let hi = ['hello','ciao','salut','hallo','hola','ahoj','czesc']
    let greet = greetings.toLowerCase()
    return hi.some(e => greet.includes(e))
  }