import OrderBusiness from "./business/order-business.js";
import Order from "./entities/order.js";

const order = new Order({
  customerId: '123', 
  amount: 10000, 
  products: [{descriptions: 'lamborguine'}]
})

const orderBusiness = new OrderBusiness(order)

console.info('orderCreated', orderBusiness.create(order))