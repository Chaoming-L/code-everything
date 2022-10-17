function throttle (func, delay) {
  const prev = Date.now()
  return function (...args) {
    const self = this
    if (Date.now() - prev >= delay) {
      func.apply(this, args)
      prev = Data.now()
    }
  }
}

function debounce (func, wait) {
  let timer = null
  return function (...args) {
    const self = this
    clearTimeout(timer)
    timer = setTimeout(() => func.apply(this, args), wait)
  }
}