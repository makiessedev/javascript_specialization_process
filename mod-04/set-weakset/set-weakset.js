const assert = require('assert')

const array1 = ['2', '1', '3']
const array2 = ['3', '1', '4']

console.log(Array.from(new Set([...array1, ...array2])).sort())
