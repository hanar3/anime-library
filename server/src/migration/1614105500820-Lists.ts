import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class Lists1614105500820 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "lists",
        columns: [
          {
            name: "id",
            type: "varchar",
            generationStrategy: "uuid",
          },
          {
            name: "anime",
            type: "uuid",
          },
          {
            name: "user",
            type: "integer",
          },
          {
            name: "watchedEpisodes",
            type: "integer",
          },
          {
            name: "status",
            type: "varchar",
          },
          {
            name: "rating",
            type: "integer",
          },
          {
            name: "createdAt",
            type: "timestamp",
          },
          {
            name: "updatedAt",
            type: "timestamp",
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
      "lists",
      new TableForeignKey({
        name: "listsToUser",
        columnNames: ["user"],
        referencedTableName: "users",
        referencedColumnNames: ["id"],
      })
    );
    await queryRunner.createForeignKey(
      "lists",
      new TableForeignKey({
        name: "listsToAnime",
        columnNames: ["anime"],
        referencedTableName: "animes",
        referencedColumnNames: ["id"],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("lists", "reviewsToUser");
    await queryRunner.dropForeignKey("lists", "reviewsToAnime");
    await queryRunner.dropTable("lists");
  }
}
