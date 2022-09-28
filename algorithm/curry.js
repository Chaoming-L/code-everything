const add = (a, b, c) => {
  return a + b + c;
};

function curry(fn, ...a1) {
  if (a1.length >= fn.length) {
    return fn.apply(this, a1)
  }
  return (...a2) => curry(fn, ...a2, ...a1)
}

let f1 = curry(add);
let f2 = f1(2);
let f3 = f2(3);

console.log(f3(1));
