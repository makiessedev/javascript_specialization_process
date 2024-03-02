class Database {
  constructor({connectionString}) {
    this.connctionString = connectionString
  }

  sleep (msg) {
    return new Promise(resolve => setTimeout(resolve, msg))
  }
  async connect() { 
    await this.sleep(100)
    return this 
  }
  async find(query) { 
    await this.sleep(100)
    return [{name: "Makiesse"}] 
  }

}

module.exports = Database