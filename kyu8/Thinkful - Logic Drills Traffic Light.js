function updateLight(current) {
    if(current === 'green') return 'yellow';
    if(current === 'yellow') return 'red';
    else return 'green';
  }

  const updateLight = current => current == 'green' ? 'yellow' : current == 'yellow' ? 'red' : 'green'