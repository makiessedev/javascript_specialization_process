const assert = require('assert')

function* calculate(arg1, arg2) {
  yield arg1 * arg2
}

function *main() {
  yield 'Hello'
  yield '-'
  yield 'world'
  yield* calculate(20, 10)
}

const generate = main()

assert.deepStrictEqual(generate.next(), { value: 'Hello', done: false })
assert.deepStrictEqual(generate.next(), { value: '-', done: false })
assert.deepStrictEqual(generate.next(), { value: 'world', done: false })
assert.deepStrictEqual(generate.next(), { value: 200, done: false })
assert.deepStrictEqual(generate.next(), { value: undefined, done: true })

// ----- async iterators

const { readFile, stat, readdir } = require('fs/promises')
function* promisefied() {
  yield readFile(__filename)
  yield Promise.resolve('hey Dude')
}

async function* systemInfo() {
  const file = await readFile(__filename)
  yield { file: file.toString() }

  const {size} = await stat(__filename)
  yield { size }

  const dir = await readdir(__dirname)
  yield { dir }
}
(async() => {
  for await (const item of systemInfo()) {
    console.log(item)
  }
})()