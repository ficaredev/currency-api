import { Seeder } from '@athenna/database'
import { Currency } from '#app/Models/Currency'

export class CurrencySeeder extends Seeder {
  /**
   * Run the database seeders.
   *
   * @return {Promise<void>}
   */
  async run() {
    await Currency.factory().count(3).create()
  }
}
