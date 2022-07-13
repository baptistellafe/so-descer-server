import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateAddress1657290680994 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "address",
              columns: [
                { name: "id", isPrimary: true, type: "uuid" },
                {
                  name: "zipCode",
                  type: "varchar",
                },
                {
                  name: "state",
                  type: "varchar",
                },
                {
                  name: "city",
                  type: "varchar",
                },
                {
                  name: "neighborhood",
                  type: "varchar",
                },
                {
                  name: "street",
                  type: "varchar",
                },
                {
                  name: "number",
                  type: "varchar",
                },
                {
                  name: "complement",
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
                }
              ],
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("address");
    }

}
