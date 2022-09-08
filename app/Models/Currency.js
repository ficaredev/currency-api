import { Model, Column } from '@athenna/database'

export class Currency extends Model {
  /**
   * The attributes that could be persisted in database.
   *
   *  @return {string[]}
   */
  static get persistOnly() {
    return ['id', 'name', 'code', 'symbol']
  }

  /**
   * Set the table name of this model instance.
   *
   * @return {string}
   */
  static get table() {
    return 'currencies'
  }

  /**
   * The default schema for model instances.
   *
   * @return {any}
   */
  static schema() {
    return {
      id: Column.autoIncrementedInt(),
      name: Column.type('varchar').get(),
      code: Column.type('varchar').isUnique().get(),
      symbol: Column.type('varchar').isUnique().get(),
      created_at: Column.createdAt(),
      updated_at: Column.updatedAt(),
      deleted_at: Column.deletedAt(),
    }
  }

  /**
   * The definition method used by factories.
   *
   * @return {any}
   */
  static async definition() {
    return {
      name: this.faker.finance.currencyName(),
      code: this.faker.finance.currencyCode(),
      symbol: this.faker.finance.currencySymbol(),
      created_at: this.faker.date.recent(),
      updated_at: this.faker.date.recent(),
      deleted_at: null,
    }
  }
}
