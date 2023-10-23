import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateGenresTable1698047072723 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
    new Table({
      name: "genres",
      columns: [
        {
          name: "id",
          type: "int",
          isPrimary: true,
          isGenerated: true,
          generationStrategy: "increment",
        },
        {
          name: "name",
          type: "varchar",
          length: "50",
        },
        {
          name: "is_active",
          type: "boolean",
          default: "true",
        },
      ],
    }),
      true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("genres");
  }
}
