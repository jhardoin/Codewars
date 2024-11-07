String.prototype.camelCase = function() {
    if (this.trim() === '') return ''
    return this.split(' ').map(e => e[0].toUpperCase() + e.slice(1)).join('')
  }

  String.prototype.camelCase=function(){
    return this.trim() == '' ? '' : this.split(' ').map(e => e[0].toUpperCase() + e.slice(1)).join('')
}

String.prototype.camelCase=function(){
  return this ? this.split(' ').map(e => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()).join('') : ''
}

String.prototype.camelCase=function(){
  return this ? this.split(' ').map(e => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()).join('') : ''
}