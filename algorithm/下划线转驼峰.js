const toCamel = (str) => str.replace(/_(\w)/g, (m, a) => a.toUpperCase());

function mapCamel(data) {
  if (data instanceof Array) {
    data.forEach((v) => {
      mapCamel(v);
    });
  } else if (data instanceof Object) {
    Object.keys(data).forEach((key) => {
      const newKey = toCamel(key);

      if (newKey !== key) {
        data[newKey] = data[key];
        delete data[key];
      }

      mapCamel(data[newKey]);
    });
  }

  return data;
}

const a = {
  b_a: 1,
  c_a: { a_d: 2, f_ni: { a: 2 }, f2: { a: 2 }, f3: { a_c: 2 } },
};

console.log(mapCamel(a));
