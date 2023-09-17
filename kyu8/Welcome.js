function greet(language) {
    const greetings = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso'};
      
     return (greetings[language] !== undefined) ? greetings[language] : greetings['english']
    }

    function greet(language) {
        let wel = {
     "english": "Welcome"
    ,"czech": "Vitejte"
    ,"danish": "Velkomst"
    ,"dutch": "Welkom"
    ,"estonian": "Tere tulemast"
    ,"finnish": "Tervetuloa"
    ,"flemish": "Welgekomen"
    ,"french": "Bienvenue"
    ,"german": "Willkommen"
    ,"irish": "Failte"
    ,"italian": "Benvenuto"
    ,"latvian": "Gaidits"
    ,"lithuanian": "Laukiamas"
    ,"polish": "Witamy"
    ,"spanish": "Bienvenido"
    ,"swedish": "Valkommen"
    ,"welsh": "Croeso"
      }
    return wel.hasOwnProperty(language)  ? wel[language] : wel["english"]
    }