'use strict';

const Event = require('events')
const event = new Event()
const eventName = 'counter'

event.on(eventName, (msg) => console.log('counter updated', msg))

const myCounter = {
  counter: 0
}