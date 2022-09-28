Function.prototype.fBind = function (context, ...args) {
  if (typeof this !== 'function') throw new Error('不是函数');
  const self = this;

  const Inner = function (...args2) {
    return self.apply(this instanceof Inner ? this : context, [
      ...args,
      ...args2,
    ]);
  };
  
  const Temp = function () {}
  Temp.prototype = self.prototype;
  Inner.prototype = new Temp();

  return Inner;
};


// 下面是测试代码
var obj = {
  name: 'obj'
}

function Foo(name) {
  this.name = name;
}

Foo.prototype.say = function () {
  console.log('say', this.name)
}

var Bar = Foo.fBind(obj)
Bar.prototype.say = function () {
  console.log('bar')
}


var a = new Bar('bar')
a.say()

var b = new Foo('god')
b.say()

