const a = [1,2,3,5,6,7]
const b = [4,5,6,7,8,9]

const obj = a.reduce((obj, key) => {
  obj[key] = key
  return obj
}, {})

const res = b.filter(item => obj[item])

console.log(res)