/** 并发调度 */
function asyncLimit(list, handler, limit) {
  const sequence = list.slice();
  const arr = [];

  function doTask(tasks) {
    return handler(tasks.shift())
      .then(() => {
        if (tasks.length > 0) {
          return doTask(tasks);
        } else {
          return '';
        }
      })
      .catch((err) => console.log(err));
  }

  while (limit--) {
    arr.push(doTask(sequence));
  }

  return Promise.all(arr);
}

const list = [1000, 2000, 5000, 1000, 1000, 2000, 1000];

const sleep = (timer) => {
  return new Promise((r) => {
    setTimeout(() => {
      console.log('sleep:' + timer);
      r();
    }, timer);
  });
};

asyncLimit(list, sleep, 2).then(() => console.log('结束'));
