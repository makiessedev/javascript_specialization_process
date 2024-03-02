const UserRepository = require("../repository/user-repository.js")
const UserService = require("../service/user-service.js")
const Database = require("../util/database.js")

class UserFactory {
  static async createInstance() {
    const db = new Database({ connectionString: '231' })
    const dbConnection = await db.connect()
    const userRepository = new UserRepository(dbConnection)
    const userService = new UserService(userRepository)

    return userService
  }
}

module.exports = UserFactory