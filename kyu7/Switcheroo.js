const switcheroo = x => x.split('').map(e => e == 'a' ? 'b' : e == 'b' ? 'a' : e).join('')