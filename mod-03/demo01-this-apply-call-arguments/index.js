
'use strict'

const { watch, promises: { readFile } } = require('fs')

class File {
	async watch(event, filename) {
		console.log('this', this)
		await this.showContent(filename)
	}
	async showContent(filename) {
		console.log((await readFile(filename)).toString())
	}
}

const file = new File()

// watch(__filename, file.watch.bind(file))
file.watch.call({ showContent: () => console.log('hi!')}, null, __filename)

console.log('dir', __dirname)







