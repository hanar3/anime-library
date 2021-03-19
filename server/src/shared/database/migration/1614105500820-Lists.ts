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
        name: "watchedAnimes",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            isUnique: true,
            generationStrategy: 'uuid',
            default: `uuid_generate_v4()`            
          }, 
          {
            name: "anime",
            type: "uuid",
          },
          {
            name: "user",
            type: "uuid",
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
      "watchedAnimes",
      new TableForeignKey({
        name: "listToUser",
        columnNames: ["user"],
        referencedTableName: "users",
        referencedColumnNames: ["id"],
      })
    );
    await queryRunner.createForeignKey(
      "watchedAnimes",
      new TableForeignKey({
        name: "listToAnimes",
        columnNames: ["anime"],
        referencedTableName: "animes",
        referencedColumnNames: ["id"],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("watchedAnimes", "listToAnimes");
    await queryRunner.dropForeignKey("watchedAnimes", "listToUser");
    await queryRunner.dropTable("watchedAnimes");
  }
}
