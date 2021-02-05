import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({ name: 'animes' })
export default class Anime {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    englishName: string;

    @Column()
    description: string;

}
