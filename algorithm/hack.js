class Hacker {
  arr = []

  _run (id, value, cb) {
    const dom = document.getElementById(id)
    dom.value = value
    cb && cb()
  }

  set (...arg) {
    const task = () => this._run(...arg)
    this.arr.push(task)
    return this
  }

  go () {
    this.arr.forEach((task, index) => {
      setTimeout(task, index * 100)
    })
  }
}

new Hacker()
  .set('brandName', 'NK', ChangeDataBrand)
  .set('gmhp', '102019083107', ChangeData)
  .set('gmdp', 'NKJK26', BindSize)
  .set('xzcm', '4Y')
  .go()
