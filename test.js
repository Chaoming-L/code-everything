function add (a, b, callback) {
  callback(a + b)
}

const asyncAdd = (a, b) => new Promise(resolve => add(a, b, resolve))

const chunk = (arr) => {
  const res = []
  for (let i = 0; i < arr.length; i += 2) {
    res.push([arr[i], arr[i + 1] ?? 0])
  }
  console.log(res)
  return res
}


async function sum (arr) {
  return Promise.all(chunk(arr).map(([a, b]) => asyncAdd(a, b)))
}


async function asyncSum (...params) {
  let arr = await sum(params)

  while (arr.length > 1) {
    arr = await sum(arr)
  }

  return arr[0]
}

const res = asyncSum(1, 2, 3, 4, 5);
res.then(console.log)