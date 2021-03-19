import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class MoreFieldsToReview1614028215490 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumns("reviews", [
      new TableColumn({
        name: "status",
        type: "varchar",
        isNullable: true,
      }),
      new TableColumn({
        name: "watchedEpisodes",
        type: "integer",
        isNullable: true,
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumns("reviews", [
      new TableColumn({
        name: "status",
        type: "varchar",
        isNullable: true,
      }),
      new TableColumn({
        name: "watchedEpisodes",
        type: "integer",
        isNullable: true,
      }),

    ]);
  }
}
