class Observer {
  obj = {}
  constructor(data) {
    return new Proxy(this.observers(data), this.handler())
  }

  handler () {
    const self = this
    return {
      set (target, property, value) {
        self.obj[property].forEach(func => func(value, target[property]))
        return Reflect.set(target, property, value)
      }
    }
  }

  observers (data) {
    return {
      ...data,
      $on: this.$on
    }
  }

  $on = (property, func) => {
    if (this.obj[property]) {
      this.obj[property].push(func)
    } else {
      this.obj[property] = [func]
    }
  }
}

const data = new Observer({a: 1})

data.$on('a', (newVal, oldVal) => {console.log(newVal, oldVal)})

// data.a = 100
// console.log(data.a)


const obj = {
  a () {
    const b = () => console.log(this)
    b()
  },
  b: () => console.log(this)
}

const a = obj.a
a()
obj.a()

const b = obj.b
b()
obj.b()