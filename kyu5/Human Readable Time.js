function humanReadable (seconds) {
    let humSeconds = (seconds % 60), hours = Math.floor(seconds / 3600), minutes = Math.floor(seconds / 60 - hours * 60);
    
    return [(hours < 10) ? '0' + hours : hours, (minutes < 10) ? '0' + minutes : minutes, (humSeconds < 10) ? '0' + humSeconds : humSeconds].join(':')
  }
  
  