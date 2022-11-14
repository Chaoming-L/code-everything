function asyncFunc (limit) {
  const queue = []
  let count = 0

  const runTask = (fn) => {
    if (fn) queue.push(fn)
    if (count >= limit || queue.length === 0) return

    count++
    const task = queue.shift()
    task().then(() => {
      count--
      runTask()
    })
  }

  const execute = (fn) => {
    return new Promise((resolve, reject) => {
      const task = () => fn().then(resolve, reject)
      runTask(task)
    }).catch(err => Promise.resolve(err))
  }

  return execute
}

const execute = asyncFunc(2)

const timeout = (value, fail) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('time' + value);
      if (fail) reject('error')
      resolve(value);
    }, value * 1000);
  });
};

execute(() => timeout(1))
execute(() => timeout(3))
execute(() => timeout(1))
execute(() => timeout(2))
execute(() => timeout(1))
execute(() => timeout(1))
