String.prototype.toJadenCase = function () {
    let arr = this.split(' ').map(w => 
                                  ( w[0].toUpperCase() + w.slice(1) ) );
    return arr.join(' ')
    }