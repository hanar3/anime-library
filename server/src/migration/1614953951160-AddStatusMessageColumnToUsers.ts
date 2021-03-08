import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddStatusMessageColumnToUsers1614953951160
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "users",
      new TableColumn({
        name: "statusMessage",
        type: "varchar",
        isNullable: true,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("users", "statusMessage");
  }
}
