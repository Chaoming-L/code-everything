function _instanceof (left, right) {
  let l = left.__proto__
  while (true) {
    if (l === null) return false
    if (l === right.prototype) return true
    l = l.__proto__
  }
}

console.log(_instanceof([], Function))