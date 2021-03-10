import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddMoreFieldsToAnime1613756686240 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumns("animes", [
      new TableColumn({
        name: "japaneseName",
        type: "varchar",
        isNullable: true,
      }),
      new TableColumn({ name: "episodes", type: "integer", isNullable: true }),
      new TableColumn({ name: "status", type: "varchar", isNullable: true }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumns("animes", [
      new TableColumn({
        name: "japaneseName",
        type: "varchar",
        isNullable: true,
      }),
      new TableColumn({ name: "episodes", type: "integer", isNullable: true }),
      new TableColumn({ name: "status", type: "varchar", isNullable: true }),
    ]);
  }
}
