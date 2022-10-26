const getNum = (input) => {
  let arr = []
  input.forEach((weight, i) => {
    arr = arr.concat(new Array(weight).fill(i))
  })
  console.log(arr)
  const len = arr.length - 1

  return () => {
    const n = Math.floor(Math.random() * len)
    return arr[n]
  }
}

const fn = getNum([1, 3, 3, 1])
console.log(fn())
console.log(fn())
console.log(fn())
console.log(fn())