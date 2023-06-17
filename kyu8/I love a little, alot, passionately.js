const phrases = [ "I love you", "a little", "a lot", "passionately", "madly", "not at all",]

const howMuchILoveYou = (nbPetals) => phrases[((nbPetals - 1) % 6)] 
