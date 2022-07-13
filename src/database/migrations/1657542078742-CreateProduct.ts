import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class CreateProduct1657542078742 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "product",
        columns: [
          { name: "id", isPrimary: true, type: "uuid" },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "internalCode",
            type: "varchar",
          },
          {
            name: "barCode",
            type: "varchar",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
          { 
            name: "product_category_id", 
            type: "uuid" 
          }
        ]
      })
    );

    await queryRunner.createForeignKey(
        "product",
        new TableForeignKey({
            columnNames: ["product_category_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "product_category",
            name: "fk_product_product_category_",
            onDelete: "CASCADE",
        })
    );

  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("product");
  }
}

