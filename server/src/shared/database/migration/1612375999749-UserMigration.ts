import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class UserMigration1612375999749 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'users',
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
                    name: "email",
                    type: 'varchar',
                    isUnique: true,
                },
                {
                    name: "username",
                    type: 'varchar',
                },
                {
                    name: "password",
                    type: 'varchar',
                },
                {
                    name: "createdAt",
                    type: 'timestamp',
                    default: 'now()',
                },
                {
                    name: "updatedAt",
                    type: 'timestamp',
                    default: 'now()',
                }
            ]            
        }), true)
        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users', true);
    }

}
