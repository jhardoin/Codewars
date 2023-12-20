String.prototype.toJadenCase = function () {
    let arr = this.split(' ').map(w => 
                                  ( w[0].toUpperCase() + w.slice(1) ) );
    return arr.join(' ')
    }

    String.prototype.toJadenCase = function () {
        return this.split(' ').map(e => e[0].toUpperCase() + e.slice(1)).join(' ')
      };

      String.prototype.toJadenCase = function () {
        return this.split(' ').map(e => e[0].toUpperCase() + e.slice(1)).join(' ')
    };