const arr = [10, 2, 3, 4, 5]

const sum = (arr) => {
  if (arr.length === 0) return 0

  return arr[0] + sum(arr.slice(1))
}

console.log(sum(arr))

const len = (arr) => {
  if (arr.length === 0) return 0

  return 1 + len(arr.slice(1))
}

console.log(len(arr))

const max = (arr) => {
  if (arr.length === 1) return arr[0]

  return arr[0] > max(arr.slice(1)) ? arr[0] : max(arr.slice(1))
}

console.log(max(arr))