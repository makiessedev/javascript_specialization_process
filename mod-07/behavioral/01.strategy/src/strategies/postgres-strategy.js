import knex from 'knex'

export default class PostegresStrategy {
  #instance
  constructor(connectionString) {
    this.connectionString = connectionString
    this.table = 'warriors'
  }

  async connect() {
    this.#instance = knex({
      client: 'pg',
      connection: this.connectionString
    })

    return this.#instance.raw('SELECT 1+1 as result')
  }

  async create(item) {
    return this.#instance
      .insert(item)
      .into(this.table)
  }

  async read(item) {
    return this.#instance
      .select()
      .from(this.table)
  }
}