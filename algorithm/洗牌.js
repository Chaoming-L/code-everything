const shuffle = function (nums) {
  const result = [...nums]
  let n = result.length;

  // 产生的结果有 n! 种可能
  for (let i = 0; i < n; i++) {
    // 从 i 到 n-1 随机选一个
    const rand = randOne(i, n - 1);

    [result[i], result[rand]] = [result[rand], result[i]];
  }

  return result;
};

// 获取闭区间 [n, m] 内的一个随机整数
const randOne = function (n, m) {
  return Math.floor(Math.random() * (m - n + 1)) + n;
};


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11]

const res = shuffle(arr)

console.log(res)