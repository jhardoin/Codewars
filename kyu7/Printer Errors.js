const printerError = s => `${s.replace(/[a-m]/g, '').length}/${s.length}`

function printerError(s) {
    let printer = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',]
    return `${[...s].filter(e => !printer.includes(e)).length}/${s.length}`
  }