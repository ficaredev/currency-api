import { Currency } from '#app/Models/Currency'

export class CurrencyRepository {
  /**
   * Use the constructor to resolve any dependency of the Ioc container.
   */
  constructor() {}

  /**
   * Index method
   *
   */
  async index() {
    return Currency.findMany()
  }

  /**
   * Store method
   *
   */
  async store(data) {
    return Currency.createOrUpdate(
      { code: data.code, symbol: data.symbol },
      data,
    )
  }

  /**
   * Show method
   *
   */
  async show(id) {
    return Currency.findOrFail({ id })
  }

  /**
   * Update method
   *
   */
  async update(id, data) {
    return Currency.update({ id }, data)
  }

  /**
   * Delete method
   *
   */
  async delete(id, force = false) {
    return Currency.delete({ id }, force)
  }
}
