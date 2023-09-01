class Dinglemouse{
    constructor( firstName, lastName ){
      this.first = firstName
      this.last = lastName
    }
  getFullName() {
      if (this.first && this.last) return `${this.first} ${this.last}`
      else if (this.first) return this.first
      else if (this.last) return this.last
      else return ''
    }
  }