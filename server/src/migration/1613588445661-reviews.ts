import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class reviews1613588445661 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "reviews",
        columns: [
          {
            name: "id",
            type: "varchar",
            isPrimary: true,
            generationStrategy: "uuid",
          },
          {
            name: "anime",
            type: "varchar",
          },
          {
            name: "user",
            type: "varchar",
          },
          {
            name: "rating",
            type: "integer",
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
      "reviews",
      new TableForeignKey({
        name: "reviewsToUser",
        columnNames: ["user"],
        referencedTableName: "users",
        referencedColumnNames: ["id"],
      })
    );
    await queryRunner.createForeignKey(
      "reviews",
      new TableForeignKey({
        name: "reviewsToAnime",
        columnNames: ["anime"],
        referencedTableName: "animes",
        referencedColumnNames: ["id"],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("reviews");
    // await queryRunner.dropForeignKey("reviews", "reviewsToUser");
    // await queryRunner.dropForeignKey("reviews", "reviewsToAnime");
  }
}
