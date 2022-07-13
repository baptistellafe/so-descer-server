import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class CreateInventoryDetail1657647085912 implements MigrationInterface {
    
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "inventory_detail",
              columns: [
                { name: "id", isPrimary: true, type: "uuid" },
                { name: "inventory_id", type: "uuid" },
                {
                  name: "amount",
                  type: "integer",
                },
                {
                  name: "expiration_date",
                  type: "varchar",
                },
                {
                  name: "cost_price",
                  type: "decimal(12,2)",
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

        await queryRunner.createForeignKey(
            "inventory_detail",
            new TableForeignKey({
                columnNames: ["inventory_id"],
                  referencedColumnNames: ["id"],
                  referencedTableName: "inventory",
                  name: "fk_inventory_detail_inventory",
                  onDelete: "RESTRICT",
                  onUpdate: "CASCADE",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("inventory_detail");
    }

}
