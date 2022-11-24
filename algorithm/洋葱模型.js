let middleware = [
  (cx, next) => {
    console.log(cx)
    console.log(1)
    next()
    console.log(5)
  },
  (cx, next) => {
    console.log(2)
    next()
    console.log(4)
  },
  (cx) => {
    console.log(3)
  }
]

const compose = (middleware) => (cx) => {
  function dispatch (i) {
    const fn = middleware[i]
    try {
      return Promise.resolve(fn(cx, dispatch.bind(null, i + 1)))
    } catch (e) {
      return Promise.reject(e)
    }
  }

  return dispatch(0)
}

class App {
  middleware = middleware

  req (cx) {
    const fn = compose(this.middleware)
    fn(cx)
  }

  use (fn) {
    this.middleware.push(fn)
  }
}

const app = new App()
app.req('start')
