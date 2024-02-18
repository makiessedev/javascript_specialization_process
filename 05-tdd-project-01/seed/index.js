const faker = require('faker')

const Car = require('../src/entities/car')
const Customer = require('../src/entities/costomer')
const CarCategory = require('../src/entities/car-category')

const { writeFile } = require('fs/promises')
const { join } = require('path')

const seederBaseFolder = join(__dirname, '../', 'database')
const ITEMS_AMOUNT = 2

const carCategory = new CarCategory({
  id: faker.random.uuid(),
  name: faker.vehicle.type(),
  carIds: [],
  price: faker.finance.amount(20, 100)
}) 

const cars = []
const customers = []

for(let index = 0; index <= ITEMS_AMOUNT; index++) {
  const car = new Car({
    id: faker.random.uuid(),
    name: faker.vehicle.model(),
    available: true,
    gasAvailable: true,
    releaseYear: faker.date.past().gerFullYear
  })

  const customer = new Customer({
    id: faker.random.uuid(),
    name: faker.name.findName(),
    age: faker.random.number({min: 18, max: 50})
  })

  carCategory.carIds.push(car.id)
  cars.push(car)
  customers.push(customer)
}

const write = (filename, data) => writeFile(join(seederBaseFolder, filename), JSON.stringify(data))

;(async () => {
  await write('cars.json', cars)
  await write('car-category.json', [carCategory])
  await write('customer.json', customers)

  /* console.log('cars', cars) */
  /* console.log('carCategory', carCategory) */

  console.log(customers)
})()
