function red() {
  console.log('red');
}
function green() {
  console.log('green');
}
function yellow() {
  console.log('yellow');
}

function light(timer, cb) {
  return new Promise((resolve) => {
    setTimeout(() => {
      cb();
      resolve();
    }, timer);
  });
}

function step() {
  [() => light(3000, red), () => light(2000, green), () => light(1000, yellow)]
    .reduce((acc, cur) => {
      return acc.then(cur);
    }, Promise.resolve())
    .then(() => step());
}

step();
