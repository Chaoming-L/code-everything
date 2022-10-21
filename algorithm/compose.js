const compose = (...func) => {
  if (func.length === 1) {
    return func[0]
  }

  return func.reduce((a, b) => (...args) => a(b(...args)))
}

const add = (a, b) => a + b
const pow = (a) => Math.pow(a, 2)

const n = compose(pow, add)(2, 4)
console.log(n)


