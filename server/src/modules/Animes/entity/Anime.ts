import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Expose } from "class-transformer";
import Review from "../../Reviews/entity/Review";

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
  
  @Column()
  banner: string;

  @OneToMany(() => Review, (review) => review.anime)
  reviews: Review[];

  @Expose({ name: 'bannerUrl' })
  getAnimeBanner():string|null {
    if (!this.banner) {
      return null;
    }
    return `${process.env.APP_URL}/static/${this.banner}`;
  }
}
