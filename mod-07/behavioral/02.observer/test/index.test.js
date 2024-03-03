import { expect, describe, beforeAll, test, jest } from '@jest/globals'
import PaymentSubject from '../src/subjects/payment-subject.js'
import Payment from '../src/events/payment.js'
import Shipment from '../src/observers/shipment.js'
import Marketing from '../src/observers/marketing.js'

describe('Test Suite for Observer Pattern', () => {
  beforeAll(() => {
    jest.spyOn(console, console.log.name).mockImplementation(() => {})
  })
  test('#PaymentSubject notify observers', () => {
    const subject = new PaymentSubject()
    const observer = {
      update: jest.fn()
    }
    const data = 'Hello World'
    const expected = data

    subject.subscribe(observer)
    subject.notify(data)
    expect(observer.update).toBeCalledWith(expected)
  })
  test('#PaymentSubject should not notify unsubscribed observers', () => {
    const subject = new PaymentSubject()
    const observer = {
      update: jest.fn()
    }
    const data = 'hello world'
    const expected = data

    subject.subscribe(observer)
    subject.unsubscribe(observer)
    subject.notify(data)

    expect(observer.update).not.toHaveBeenCalled()
  })
  test('#Payment should notify subject after a credit card transaction', () => {
    const subject = new PaymentSubject()
    const payment = new Payment(subject)

    const paymentSubjectNotifierSpy = jest.spyOn(
      payment.paymentSubject,
      payment.paymentSubject.notify.name
    )
    const data = {userName: 'makiessemorais', id: Date.now()}
    payment.creditCard(data)

    expect(paymentSubjectNotifierSpy).toBeCalledWith(data)
  })
  test('#All should notify subscribeders after a credit card payment', () => {
    const subject = new PaymentSubject()
    const shipment = new Shipment()
    const marketing = new Marketing()

    const shipmentSpy = jest.spyOn(shipment, shipment.update.name)
    const marketingSpy = jest.spyOn(marketing, marketing.update.name)

    subject.subscribe(shipment)
    subject.subscribe(marketing)

    const payment = new Payment(subject)
    const data = {userName: 'makiessemorais', id: Date.now()}
    payment.creditCard(data)

    expect(shipmentSpy).toBeCalledWith(data)
    expect(marketingSpy).toBeCalledWith(data)
  })
})