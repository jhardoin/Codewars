function sayHello( name, city, state ) {
    return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`;
  }

  const sayHello = (name, city, state) =>`Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`

  function sayHello( name, city, state ) {
    name = name.join(' ')
     return `Hello, ${name}! Welcome to ${city}, ${state}!`
  }