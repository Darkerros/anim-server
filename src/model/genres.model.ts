import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { AnimeModel } from './anime.model';
import { AnimeGenresModel } from './anime-genres.model';

export interface GenresCreationAttributes {
  name: string;
}

@Table({ tableName: 'Genres', createdAt: false, updatedAt: false })
export class GenresModel extends Model<GenresModel, GenresCreationAttributes> {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  id: number;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;

  @BelongsToMany(() => AnimeModel, () => AnimeGenresModel)
  animesWithGenre: AnimeModel[];
}
