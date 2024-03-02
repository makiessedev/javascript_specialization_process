const UserFactory = require("./factory/user-factory.js")

;(async () => {
  const userFactory = await UserFactory.createInstance()
  const result = await userFactory.find({name: 'Makiesse'})

  console.log('result', result)
})()