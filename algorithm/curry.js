const add = (a, b, c) => {
  return a + b + c;
};

function curry (fn) {
  return function curried (...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args)
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2))
      }
    }
  }
}

let f1 = curry(add);
let f2 = f1(2);
let f3 = f2(3);

console.log(f3(1));
