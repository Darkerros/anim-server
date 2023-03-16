import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { AnimeModel } from './anime.model';
import { GenresModel } from './genres.model';

@Table({ tableName: 'AnimeGenres', createdAt: false, updatedAt: false })
export class AnimeGenresModel extends Model<AnimeGenresModel> {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  id: number;

  @ForeignKey(() => AnimeModel)
  animeId: number;

  @ForeignKey(() => GenresModel)
  genreId: string;
}
