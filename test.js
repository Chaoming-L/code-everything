function Person () {
  this.age = 12
}

Person.prototype.sex = 'man'

const p = new Person()

console.log(p)
console.log(p.sex)

const clone = (obj) => {
  const targetProtoType = Object.getPrototypeOf(obj)
  return Object.assign(Object.create(targetProtoType), obj)
}

const p1 = clone(p)
console.log(p1)
console.log(p1.sex)