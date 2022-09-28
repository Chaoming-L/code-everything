Function.prototype.fCall = function (context, ...args) {
  const __key = '__' + new Date().getTime();

  context[__key] = this;
  const result = context[__key](...args);
  delete context[__key];

  return result;
};

[].slice.fCall([1, 2, 3, 4], 1, -1); // [2, 3]

Function.prototype.fApply = function (context, args = []) {
  const __key = '__' + new Date().getTime();

  context[__key] = this;
  const result = context[__key](...args);
  delete context[__key];

  return result;
};

[].slice.fApply([1, 2, 3, 4], [1, -1]);
