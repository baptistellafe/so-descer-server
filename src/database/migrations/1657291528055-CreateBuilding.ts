import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class CreateBuilding1657291528055 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "building",
              columns: [
                { name: "id", isPrimary: true, type: "uuid" },
                {
                  name: "referenceName",
                  type: "varchar",
                },
                {
                  name: "fantasyName",
                  type: "varchar",
                },
                {
                  name: "companyName",
                  type: "varchar",
                },
                {
                  name: "cnpj",
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
                  name: "address_id", 
                  type: "uuid" 
                },
              ],
            })
          );

        await queryRunner.createForeignKey(
        "building",
        new TableForeignKey({
            columnNames: ["address_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "address",
            name: "fk_building_address_",
            onDelete: "CASCADE",
        })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("building");
    }

}
