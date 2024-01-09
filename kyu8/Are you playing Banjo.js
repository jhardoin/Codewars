function areYouPlayingBanjo(name) {
    if(name[0] === "R" || name[0] === "r") {
      return name + " plays banjo"
    }
    else {
      return name + " does not play banjo"
    }  
  }

  function areYouPlayingBanjo(name) {
    if(name[0].toLowerCase() == 'r'){
      return `${name} plays banjo`
    }
    return `${name} does not play banjo`
  }

  const areYouPlayingBanjo = name => name.toLowerCase().startsWith('r') ? `${name} plays banjo` : `${name} does not play banjo`

  function areYouPlayingBanjo(name) {
    return name.toLowerCase()[0] == 'r' ? `${name} plays banjo` : `${name} does not play banjo`
  }

  function areYouPlayingBanjo(name) {
    return name[0].toUpperCase() == 'R' ? `${name} plays banjo` : `${name} does not play banjo`
  }