import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class CreateInventory1657647013606 implements MigrationInterface {
    
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "inventory",
              columns: [
                { name: "id", isPrimary: true, type: "uuid" },
                { name: "building_id", type: "uuid" },
                { name: "product_id", type: "uuid" },
                {
                  name: "amount_total",
                  type: "integer",
                },
                {
                  name: "sale_price",
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
              ]
            })
          );

        await queryRunner.createForeignKey(
            "inventory",
            new TableForeignKey({
                columnNames: ["building_id"],
                  referencedColumnNames: ["id"],
                  referencedTableName: "building",
                  name: "fk_inventory_building",
                  onDelete: "RESTRICT",
                  onUpdate: "CASCADE",
            })
        );

        await queryRunner.createForeignKey(
            "inventory",
            new TableForeignKey({
                columnNames: ["product_id"],
                  referencedColumnNames: ["id"],
                  referencedTableName: "product",
                  name: "fk_inventory_product",
                  onDelete: "RESTRICT",
                  onUpdate: "CASCADE",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("inventory");
    }

}