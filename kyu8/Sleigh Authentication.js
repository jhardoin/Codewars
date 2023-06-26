function Sleigh() {}
Sleigh.prototype.authenticate = function(name, password) {
  return name.includes("Santa Claus") && password.includes('Ho Ho Ho!')
};