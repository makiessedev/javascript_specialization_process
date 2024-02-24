import readline from 'readline'
import chalk from 'chalk'
import DraftLog from 'draftlog'
import chalkTable from 'chalk-table'

import Person from './person.js'

export default class TerminalController {
	constructor() {
		this.print = {}
		this.data = []
	}

	initializeTerminal(database, language) {
		DraftLog(console).addLineListener(process.stdin)
		this.terminal = readline.createInterface({
			input: process.stdin,
			output: process.stdout
		})

		this.initializeTable(database, language)
	}

	initializeTable(database, language) {
		this.data = database.map(item => new Person(item).formatted(language))
		const table = chalkTable(this.getTableOptions, this.data)
		this.print = console.draft(table)

	}

	closeTerminal() {
		this.terminal.close()
	}

	question(msg = '') {
		return new Promise((resolve) => this.terminal.question(msg, resolve))
	}

	getTableOptions() {
		return {
			leftPad: 2,
			columns: [
				{ field: "id", name: chalk.cyan("ID") },
				{ field: "vehicles", name: chalk.magenta("Vehicles") },
				{ field: "kmTraveled", name: chalk.cyan("Km Traveled") },
				{ field: "from", name: chalk.cyan("From") },
				{ field: "to", name: chalk.cyan("To") },
			]
		}

	}
}
