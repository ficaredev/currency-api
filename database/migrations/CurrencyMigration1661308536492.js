import { Table } from 'typeorm'

export class CurrencyMigration1661308536492 {
  /**
   * Create a table instance.
   *
   * @return {string}
   */
  get tableName() {
    return 'currencies'
  }

  /**
   * Up.
   *
   * @param queryRunner {import('typeorm').QueryRunner}
   * @return {Promise<void>}
   */
  async up(queryRunner) {
    const table = new Table({ name: this.tableName })

    table.addColumn({
      name: 'id',
      type: 'int',
      isPrimary: true,
      isGenerated: true,
      generationStrategy: 'increment',
    })

    table.addColumn({
      name: 'name',
      type: 'varchar',
    })

    table.addColumn({
      name: 'code',
      type: 'varchar',
      isUnique: true,
    })

    table.addColumn({
      name: 'symbol',
      type: 'varchar',
      isUnique: true,
    })

    table.addColumn({
      name: 'created_at',
      type: 'timestamp',
      default: 'now()',
    })

    table.addColumn({
      name: 'updated_at',
      type: 'timestamp',
      default: 'now()',
    })

    table.addColumn({
      name: 'deleted_at',
      type: 'timestamp',
      default: null,
      isNullable: true,
    })

    await queryRunner.createTable(table)
  }

  /**
   * Down.
   *
   * @param queryRunner {import('typeorm').QueryRunner}
   * @return {Promise<void>}
   */
  async down(queryRunner) {
    await queryRunner.dropTable(this.tableName)
  }
}
