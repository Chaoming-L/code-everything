const a = "[{}]";
const b = "[]{}";
const c = "[{]}";
const d = "{[{]";
const e = "{aaffd(s)}";

const left = new Map([
  ["{", "}"],
  ["(", ")"],
  ["[", "]"],
]);

const right = new Map([
  ["}", "{"],
  [")", "("],
  ["]", "["],
]);

function doIt(str) {
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    const s = str[i];

    if (left.has(s)) {
      stack.push(s);
    } else if (right.has(s)) {
      const text = stack.pop();

      if (left.get(text) !== s) {
        return false;
      }
    }
  }

  if (stack.length === 0) {
    return true;
  }
}

console.log(doIt(b));
console.log(doIt(d));
console.log(doIt(e));
