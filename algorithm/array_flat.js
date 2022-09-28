const arr = [1, 2, [3, 4], [5, 6, [7, 8, [9, 10, [11, 12]]]]]

const flat = (arr, depth = 1) => {
  return arr.reduce(
    (acc, val) =>
      acc.concat(depth > 1 && Array.isArray(val) ? flat(val, depth - 1) : val),
    []
  )
}

console.log(flat(arr, 2))
console.log(arr.flat(2))
