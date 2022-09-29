const timeout = (value, fail) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('time' + value, value);
      if (fail) reject(value)
      resolve(value);
    }, value * 1000);
  });
};

const list1 = [1, timeout(1, true), timeout(3)]

Promise._all = (promiseList) => {
  const result = []
  let count = 0

  return new Promise((resolve, reject) => {
    promiseList.forEach((p, i) => {
      Promise.resolve(p)
        .then((val) => {
          count++
          result[i] = val

          if (count === promiseList.length) {
            resolve(result)
          }
        })
        .catch((err) => {
          reject(err);
        })
    })
  })
}

Promise.race = (promiseList) => {
  return new Promise((resolve, reject) => {
    promiseList.forEach(p => {
      Promise.resolve(p).then(
        val => resolve(val),
        err => reject(err)
      )
    })
  })
}

Promise._allSettled = (promiseList) => {
  let count = 0
  const result = []
  return new Promise((resolve) => {
    for (const [index, promise] of promiseList.entries()) {
      Promise.resolve(promise).then((val) => {
        count++
        result[index] = {
          status: 'fulfilled',
          value: val
        }

        count === promiseList.length && resolve(result)
      }, err => {
        count++
        result[index] = {
          status: 'reject',
          value: err
        }
        count === promiseList.length && resolve(result)
      })
    }
  })
}

Promise._all(list1).then((val) => console.log('done', val)).catch(err => console.log(err))
Promise._allSettled(list1).then((val) => console.log('done', val))