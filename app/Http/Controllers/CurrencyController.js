import { CurrencyResource } from '#app/Resources/CurrencyResource'

export class CurrencyController {
  /** @type {import('#app/Services/CurrencyService').CurrencyService} */
  #currencyService

  /**
   * Use the constructor to resolve any dependency of the Ioc container.
   */
  constructor(currencyService) {
    this.#currencyService = currencyService
  }

  /**
   * Index method
   *
   * @param {import('@athenna/http').ContextContract} ctx
   */
  async index({ response, data }) {
    const currencies = await this.#currencyService.index(data)

    return response.status(200).send(CurrencyResource.toArray(currencies))
  }

  /**
   * Store method
   *
   * @param {import('@athenna/http').ContextContract} ctx
   */
  async store({ request, response }) {
    const currency = await this.#currencyService.store(request.body)

    return response.status(201).send(CurrencyResource.toJson(currency))
  }

  /**
   * Show method
   *
   * @param {import('@athenna/http').ContextContract} ctx
   */
  async show({ response, params }) {
    const currency = await this.#currencyService.show(params.id)

    return response.status(200).send(CurrencyResource.toJson(currency))
  }

  /**
   * Update method
   *
   * @param {import('@athenna/http').ContextContract} ctx
   */
  async update({ request, response, params }) {
    const currency = await this.#currencyService.show(params.id, request.body)

    return response.status(200).send(CurrencyResource.toJson(currency))
  }

  /**
   * Delete method
   *
   * @param {import('@athenna/http').ContextContract} ctx
   */
  async delete({ response, params }) {
    await this.#currencyService.delete(params.id)

    return response.status(204)
  }
}
