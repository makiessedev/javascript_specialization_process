
import database from '../database.json' with { type: 'json' }
import Person from './person.js'
import TerminalController from './terminall-controller.js'

const DEFAULT_LANG = 'pt'
const STOP_TERM = ':q'

const terminalController = new TerminalController()
terminalController.initializeTerminal(database, DEFAULT_LANG)

async function mainLoop() {
	try {
		const answer = await terminalController.question('')
		if (answer === STOP_TERM) {
			terminalController.closeTerminal()
			console.log('process finished!')
			return;
		}

		const person = Person.generateInstanceFromString(answer).formatted(DEFAULT_LANG)
		console.log('person', person)

		return mainLoop()
	} catch (error){
		console.log('Error', error)
		return mainLoop()
	}
}

await mainLoop()








































