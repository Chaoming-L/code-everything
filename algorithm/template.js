const string = 'yo {{man}}, {{sea.flish}}';
const obj = { man: 'chao', doing: 'sleep', sea: { flish: 'cat' } };


const baseGet = (obj, path) => {
  const paths = path.split('.')
  let object = obj
  let index = 0
  while(object !== null && index < paths.length) {
    object = object[paths[index++]]
  }
  return object
}

const template = (str, obj) => {
  return str.replace(/{{([\s\S)]+?)}}/g, (m, s) => baseGet(obj, s));
};

template(string, obj);


