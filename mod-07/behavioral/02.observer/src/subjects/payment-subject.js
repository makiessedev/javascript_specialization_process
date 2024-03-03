export default class PaymentSubject {
  #obsevers = new Set()

  notify(data) {
    this.#obsevers.forEach(observer => observer.update(data))
  }

  subscribe(observable) {
    this.#obsevers.add(observable)
  }

  unsubscribe(observable) {
    this.#obsevers.delete(observable)
  }
}