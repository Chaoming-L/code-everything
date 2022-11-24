const add = (a, b, c) => {
  return a + b + c;
};

function curry (fn, ...rest) {
  function curried (...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args)
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2))
      }
    }
  }

  const _fn = curried(...rest)
  return _fn
}

function makeArray5 (a, b, c, d, e) {
  return [a, b, c, d, e];
}

console.log(curry(makeArray5, 1, 2, 3, 4, 5))

