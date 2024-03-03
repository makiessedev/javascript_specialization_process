import http from 'http'

async function InjectHttpInterceptor() {
  const oldEmit = http.Server.prototype.emit

  http.Server.prototype.emit = function (...args) {
    const [type, request, response] = args

    if(type === 'request') {
      response.setHeader('X-Instrumented-By', 'MakiesseMorais')
    }

    return oldEmit.apply(this, args)
  }
}

export {
  InjectHttpInterceptor
}