const arr = [
  {id: 1, pid: 0, name: '上海市'},
  {id: 2, pid: 1, name: '杨浦区'},
  {id: 3, pid: 1, name: '静安区'},
  {id: 4, pid: 2, name: '营口路'},
  {id: 5, pid: 3, name: '北京西路'},
  {id: 6, pid: 2, name: '长海路'},
  {id: 7, pid: 3, name: '长寿路'},
  {id: 8, pid: 4, name: '1号楼'},
  {id: 9, pid: 4, name: '2号楼'},
]

const tree = [
  {
    id: 1,
    pid: 0,
    name: '上海市',
    children: [
      {
        id: 2,
        pid: 1,
        name: '杨浦区',
        children: [
          {
            id: 4,
            pid: 2,
            name: '营口路',
            children: [
              {id: 8, pid: 4, name: '1号楼', children: []},
              {id: 9, pid: 4, name: '2号楼', children: []},
            ],
          },
          {id: 6, pid: 2, name: '长海路', children: []},
        ],
      },
      {
        id: 3,
        pid: 1,
        name: '静安区',
        children: [
          {id: 5, pid: 3, name: '北京西路', children: []},
          {id: 7, pid: 3, name: '长寿路', children: []},
        ],
      },
    ],
  },
]

const arrayToTree = (arr) => {
  const map = arr.reduce((prev, curr) => {
    prev[curr.id] = {
      ...curr,
      children: [],
    }
    return prev
  }, {})

  const tree = []
  arr.forEach((item) => {
    const obj = map[item.pid]
    if (obj) {
      obj.children.push(map[item.id])
    } else {
      tree.push(map[item.id])
    }
  })

  return tree
}

// console.log(JSON.stringify(arrayToTree(arr)))

const treeToArray = (tree) => {
  return tree.reduce((prev, curr) => {
    const children = curr.children
    delete curr.children
    return [...prev, curr].concat(treeToArray(children))
  }, [])
}

console.log(treeToArray(tree))