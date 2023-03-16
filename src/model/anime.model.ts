import {
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { KodikAnimeModel } from './kodik-anime.model';
import { AnimeGenresModel } from './anime-genres.model';
import { GenresModel } from './genres.model';
import { AnimeUpdatesModel } from './anime-updates.model';

@Table({ tableName: 'Animes' })
export class AnimeModel extends Model<AnimeModel> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
  })
  id: number;

  @Column({ type: DataType.STRING })
  kodikId: string;

  @Column({ type: DataType.STRING })
  shikimoryId: string;

  @Column({ type: DataType.INTEGER })
  shikimoriRating: number;

  @Column({ type: DataType.INTEGER })
  shikimoriVotes: number;

  @Column({ type: DataType.STRING })
  kinopoiskId: string;

  @Column({ type: DataType.INTEGER })
  kinopoiskRating: number;

  @Column({ type: DataType.INTEGER })
  kinopoiskVotes: number;

  @Column({ type: DataType.STRING })
  imdbId: string;

  @Column({ type: DataType.INTEGER })
  imdbRating: number;

  @Column({ type: DataType.INTEGER })
  imdbVotes: number;

  @Column({ type: DataType.STRING })
  title: string;

  @Column({ type: DataType.STRING })
  titleOrig: string;

  @Column({ type: DataType.STRING })
  otherTitle: string;

  @Column({ type: DataType.ARRAY(DataType.STRING) })
  otherTitleEnList: string[];

  @Column({ type: DataType.INTEGER })
  year: number;

  @Column({ type: DataType.INTEGER })
  episodesCount: number;

  @Column({ type: DataType.INTEGER })
  lastEpisode: number;

  @Column({ type: DataType.STRING })
  kind: string; //"tv"

  @Column({ type: DataType.STRING })
  status: string; //"released"

  @Column({ type: DataType.JSON })
  description: string;

  @Column({ type: DataType.STRING })
  posterUrl: string;

  @Column({ type: DataType.ARRAY(DataType.STRING) })
  screenshots: string[];

  @Column({ type: DataType.INTEGER })
  duration: number;

  @BelongsToMany(() => GenresModel, () => AnimeGenresModel)
  genres: string[];

  @Column({ type: DataType.INTEGER })
  episodesTotal: number;

  @Column({ type: DataType.INTEGER })
  episodesAired: number;

  @ForeignKey(() => KodikAnimeModel)
  kodikDataId: number;

  @HasMany(() => AnimeUpdatesModel)
  updates: AnimeUpdatesModel[];
}
