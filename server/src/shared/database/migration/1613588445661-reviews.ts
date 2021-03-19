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
            type: "uuid",
            isPrimary: true,
            isUnique: true,
            generationStrategy: "uuid",
            default: `uuid_generate_v4()`,
          },
          {
            name: "anime",
            type: "uuid",
            isNullable: false,
          },
          {
            name: "user",
            type: "uuid",
            isNullable: false,
          },
          {
            name: "rating",
            type: "integer",
          },
          {
            name: "createdAt",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updatedAt",
            type: "timestamp",
            default: "now()",
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
