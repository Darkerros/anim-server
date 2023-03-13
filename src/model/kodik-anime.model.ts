import { Column, DataType, Model, Table } from 'sequelize-typescript';

export interface IKodikAnimesCreationAttr {
  kodikId: string;

  shikimoryId: string;

  shikimoriRating: number;

  shikimoriVotes: number;

  kinopoiskId: string;

  kinopoiskRating: number;

  kinopoiskVotes: number;

  imdbId: string;

  imdbRating: number;

  imdbVotes: number;

  title: string;

  titleOrig: string;

  otherTitle: string;

  otherTitleEnList: string[];

  year: number;

  episodesCount: number;

  lastEpisode: number;

  kind: string; //"tv"

  status: string; //"released"

  description: string;

  posterUrl: string;

  screenshots: string[];

  duration: number;

  // genres: string[];
  episodesTotal: number;

  episodesAired: number;
}

@Table({ tableName: 'KodikAnimes' })
export class KodikAnimeModel extends Model<
  KodikAnimeModel,
  IKodikAnimesCreationAttr
> {
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

  // genres: string[];
  @Column({ type: DataType.INTEGER })
  episodesTotal: number;

  @Column({ type: DataType.INTEGER })
  episodesAired: number;
}
