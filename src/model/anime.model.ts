import { Column, DataType, Model, Table } from 'sequelize-typescript';

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

  @Column({ type: DataType.NUMBER })
  shikimoriRating: number;

  @Column({ type: DataType.NUMBER })
  shikimori_votes: number;

  @Column({ type: DataType.STRING })
  kinopoiskId: string;

  @Column({ type: DataType.NUMBER })
  kinopoiskRating: number;

  @Column({ type: DataType.NUMBER })
  kinopoiskVotes: number;

  @Column({ type: DataType.STRING })
  imdbId: string;

  @Column({ type: DataType.NUMBER })
  imdbRating: number;

  @Column({ type: DataType.NUMBER })
  imdbVotes: number;

  @Column({ type: DataType.STRING })
  title: string;

  @Column({ type: DataType.STRING })
  titleOrig: string;

  @Column({ type: DataType.STRING })
  otherTitle: string;

  @Column({ type: DataType.ARRAY(DataType.STRING) })
  otherTitleEnList: string[];

  @Column({ type: DataType.NUMBER })
  year: number;

  @Column({ type: DataType.NUMBER })
  episodesCount: number;

  @Column({ type: DataType.NUMBER })
  lastEpisode: number;

  @Column({ type: DataType.STRING })
  kind: string; //"tv"

  @Column({ type: DataType.STRING })
  status: string; //"released"

  @Column({ type: DataType.STRING })
  description: string;

  @Column({ type: DataType.STRING })
  posterUrl: string;

  @Column({ type: DataType.ARRAY(DataType.STRING) })
  screenshots: string[];

  @Column({ type: DataType.NUMBER })
  duration: number;

  // genres: string[];
  @Column({ type: DataType.NUMBER })
  episodesTotal: number;

  @Column({ type: DataType.NUMBER })
  episodesAired: number;
}
