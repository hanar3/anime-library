import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

import Review from "./Review";

@Entity({ name: "animes" })
export default class Anime {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  englishName?: string;

  @Column({ nullable: true })
  description?: string;

  @Column({ nullable: true })
  japaneseName?: string;

  @Column({ nullable: true })
  episodes?: number;

  @Column({ nullable: true })
  status: string;

  @OneToMany(() => Review, (review) => review.anime)
  reviews: Review[];

  @Column()
  banner: string;
}
