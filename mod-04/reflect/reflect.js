const assert = require('assert')

const myObj = {
  add(value) {
    return this.arg1 + this.arg2 + value
  }
}

assert.deepStrictEqual(myObj.add.apply({arg1: 10, arg2: 20}, [100]), 130)