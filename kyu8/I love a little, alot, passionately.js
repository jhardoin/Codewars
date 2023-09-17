const phrases = [ "I love you", "a little", "a lot", "passionately", "madly", "not at all",]

const howMuchILoveYou = (nbPetals) => phrases[((nbPetals - 1) % 6)] 

function howMuchILoveYou(nbPetals) {
    let response = { 1 : "I love you", 2 : "a little", 3 : "a lot", 4 : "passionately", 5 : "madly", 0 : "not at all"}
    return response[nbPetals % 6]
}