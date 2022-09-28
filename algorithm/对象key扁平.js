var input = {
  a: 1,
  b: [1, 2, { c: true }, [311, [232323232]]],
  d: { e: 22, f: 33 },
  g: null,
  h: { i: { j: 'done' } },
}

function dfs(data) {
  const res = {}

  function helper(obj, preKey = '') {
    const isObjArray = Array.isArray(obj)
    Object.keys(obj).forEach((k) => {
      const key = isObjArray
        ? `${preKey}[${k}]`
        : `${!preKey ? '' : preKey + '.'}${k}`
      if (obj[k] instanceof Array) {
        helper(obj[k], key)
      } else {
        res[key] = obj[k]
      }
    })
  }

  helper(data)
  return res
}

const res1 = dfs(input)
console.log(res1)
