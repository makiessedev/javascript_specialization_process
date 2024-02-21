class User {
  constructor({id, name, profession, age}) {
    this.id = parseInt(id)
    this.name = name
    this.profession = profession
    this.birthday = new Date().getFullYear() - parseInt(age)
  }
}

module.exports = User