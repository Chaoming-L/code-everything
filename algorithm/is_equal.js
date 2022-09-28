var obj1 = {
  a: {},
};

var obj2 = {
  a: [],
};

function isEqual(o1, o2) {
  const k1 = Object.getOwnPropertyNames(o1);
  const k2 = Object.getOwnPropertyNames(o2);

  if (k1.length !== k2.length) {
    return false;
  }

  for (key of k1) {
    const val1 = o1[key];
    const val2 = o2[key];
    if (typeof val1 === 'object' && typeof val2 === 'object') {
      if (!isEqual(val1, val2)) {
        return false;
      }
    } else {
      if (!Object.is(val1, val2)) {
        return false;
      }
    }
  }

  return true;
}

console.log(isEqual(obj1, obj2));
