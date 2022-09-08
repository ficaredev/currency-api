export class CurrencyService {
  /** @type {import('#app/Repositories/CurrencyRepository').CurrencyRepository} */
  #currencyRepository

  /**
   * Use the constructor to resolve any dependency of the Ioc container.
   */
  constructor(currencyRepository) {
    this.#currencyRepository = currencyRepository
  }

  /**
   * Index method
   *
   */
  async index() {
    return this.#currencyRepository.index()
  }

  /**
   * Store method
   *
   */
  async store(data) {
    return this.#currencyRepository.store(data)
  }

  /**
   * Show method
   *
   */
  async show(id) {
    return this.#currencyRepository.show(id)
  }

  /**
   * Update method
   *
   */
  async update(id, data) {
    return this.#currencyRepository.update(id, data)
  }

  /**
   * Delete method
   *
   */
  async delete(id) {
    return this.#currencyRepository.delete(id)
  }
}
