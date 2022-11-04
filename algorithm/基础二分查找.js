const binarySearch = (list, item) => {
  let low = 0
  let high = list.length - 1

  while (low < high) {
    const mid = Math.floor((low + high) / 2)

    if (item === list[mid]) {
      return mid
    } else if (item > list[mid]) {
      low = mid + 1
    } else {
      high = mid - 1
    }
  }

  return null
}

const arr = [0, 2, 3, 100, 110]

console.log(binarySearch(arr, 0))