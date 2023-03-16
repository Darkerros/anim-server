import { Column, DataType, ForeignKey, Model } from 'sequelize-typescript';
import { AnimeModel } from './anime.model';
import { GenresModel } from './genres.model';

export class AnimeGenresModel extends Model<AnimeGenresModel> {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  id: number;

  @ForeignKey(() => AnimeModel)
  animeId: number;

  @ForeignKey(() => GenresModel)
  genreId: string;
}
