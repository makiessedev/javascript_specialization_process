const assert = require('assert')

const uniqueKey = Symbol("userName")
const user = {}

user["userName"] = 'normal'
user[uniqueKey] = 'symb'

assert.deepStrictEqual(user.userName, 'normal')
assert.deepStrictEqual(user[Symbol("userName")], undefined)
assert.deepStrictEqual(user[uniqueKey], 'symb')

const obj = {
  [Symbol.iterator]: () => ({
    items: ['c', 'b', 'a'],
    next() {
      return {
        done: this.items.length === 0,
        value: this.items.pop()
      }
    }
  })
}

for (const item of obj) {
  console.log('item', item)
}