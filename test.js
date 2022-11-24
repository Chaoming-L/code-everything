var a = 3
var i = 10
var total = 0
var res = []

function foo (a) {
  var i = 0
  for (; i < 3; i++) {
    res[i] = function () {
      console.log(i, a)
      total = i * a
      console.log(total)
    }
  }
}

foo(1)
res[0]()
res[1]()
res[2]()