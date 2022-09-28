function chunk(arr) {
  const res = [];
  for (let i = 0; i < arr.length; i += 2) {
    res.push([arr[i], arr[i + 1] ? arr[i + 1] : 0]);
  }
  return res;
}

function add(a, b, callback) {
  callback(a + b);
}

function asyncAdd(a, b) {
  return new Promise((resolve) => add(a, b, (sum) => resolve(sum)));
}

function sum(arr) {
  return Promise.all(chunk(arr).map(([a, b]) => asyncAdd(a, b)));
}

async function asyncSum(...args) {
  let arr = await sum(args);

  while (arr.length > 1) {
    arr = await sum(arr);
  }

  return arr[0];
}

asyncSum(1, 2, 3, 4, 5);
