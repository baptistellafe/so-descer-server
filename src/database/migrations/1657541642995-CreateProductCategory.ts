import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateProductCategory1657541642995 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "product_category",
              columns: [
                { name: "id", isPrimary: true, type: "uuid" },
                {
                  name: "name",
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
              ],
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("product_category");
    }

}
