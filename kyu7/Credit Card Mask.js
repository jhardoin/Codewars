const maskify = cc => cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4)

const maskify = cc => cc.length < 4 ? cc : '#'.repeat(cc.length - 4) + cc.slice(cc.length - 4)

function maskify(cc) {
    return cc < 5 ? cc : [...cc].map((e,i) => i < cc.length - 4 ? '#' : e).join('')
   }
   