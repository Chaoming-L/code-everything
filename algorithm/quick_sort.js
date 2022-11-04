const arr = [2, 3, 1, 10, 3, 6, 7]

const quickSort = (arr) => {
  if (arr.length < 2) return arr

  const left = [], right = []
  const pivot = arr[0]

  arr.slice(1).forEach(item => {
    if (item > pivot) {
      right.push(item)
    } else {
      left.push(item)
    }
  })

  return [...quickSort(left), pivot, ...quickSort(right)]
}

const res = quickSort(arr)
console.log(res)