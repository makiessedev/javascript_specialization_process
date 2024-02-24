
const assert = require('assert')
const obj = {}
const arr = []
const fn = () => {}

assert.deepStrictEqual(new Object().__proto__, {}.__proto__)

console.log(obj.__proto__ === Object.prototype)

class T1 {
	ping() {return 'ping'}
}

class T2 extends T1 {
        pong() {return 'ping'}
}

class T3 extends T2 {
        shoot() {return 'shoot'}
}


const t3 = new T3()

console.log('t3 inherits null?', t3.__proto__.__proto__.__proto__.__proto__.__proto__ === null)

assert.deepStrictEqual(t3.__proto__, T3.prototype)
assert.deepStrictEqual(t3.__proto__.__proto__, T2.prototype)
assert.deepStrictEqual(t3.__proto__.__proto__.__proto__, T1.prototype)
assert.deepStrictEqual(t3.__proto__.__proto__.__proto__.__proto__, Object.prototype)
assert.deepStrictEqual(t3.__proto__.__proto__.__proto__.__proto__.__proto__, null)


















