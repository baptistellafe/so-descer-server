import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsers1627508510952 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true
          },
          {
            name: "email",
            type: "varchar"
          },
          {
            name: "password",
            type: "varchar"
          },
          {
            name: "name",
            type: "varchar"
          },
          {
            name: "nickname",
            type: "varchar"
          },
          {
            name: "birthDate",
            type: "timestamp"
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()"
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()"
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users");
  }
}
