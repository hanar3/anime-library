import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class UserMigration1612375999749 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'users',
            columns: [
                {
                    name: 'id',
                    type: 'varchar',
                    generationStrategy: 'uuid',
                    isPrimary: true,                    
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
                },
                {
                    name: "updatedAt",
                    type: 'timestamp',
                }
            ]            
        }), true)
        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users', true);
    }

}
