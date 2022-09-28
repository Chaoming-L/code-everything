var input = {
  a: 1,
  b: [1, 2, { c: true }, [311, [232323232]]],
  d: { e: 22, f: 33 },
  g: null,
  h: { i: { j: 'fff' } },
};

function flatten(data) {
  let res = {};

  function helper(values, key = '') {
    if (!values) return;

    Object.keys(values).forEach((k) => {
      const value = values[k];

      let __key;
      if (Array.isArray(values)) {
        __key = key ? `${key}[${k}]` : k;
      } else {
        __key = key ? `${key}.${k}` : k;
      }
      
      if (typeof value === 'object') {
        helper(value, __key)
      } else {
        res[__key] = value
      }
    });
  }

  helper(data);
  return res;
}

const res = flatten(input);

console.log(res)
