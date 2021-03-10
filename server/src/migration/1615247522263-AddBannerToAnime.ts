import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableColumn,
  TableForeignKey,
} from "typeorm";

export class AssociateAnimeWithBanner1615247522263
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "animes",
      new TableColumn({
        name: "banner",
        type: "varchar",
        isNullable: true,
      })
    );

  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("animes", "banner");
  }
}
