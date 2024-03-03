InjectHttpInterceptor()

import http from 'http'
import { InjectHttpInterceptor } from '../index.js'


function handleRequest(request, response) {
  response.end('Hello World!')
}

const server = http.createServer(handleRequest)
const port = 3000
server.listen(port, () => console.log('server running on port', server.address().port))