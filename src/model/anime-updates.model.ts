import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { AnimeModel } from './anime.model';

@Table({ tableName: 'AnimeUpdates' })
export class AnimeUpdatesModel extends Model<AnimeUpdatesModel> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
  })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  updateInfo: string;

  @ForeignKey(() => AnimeModel)
  animeId: number;

  @BelongsTo(() => AnimeModel)
  animeInfo: AnimeModel;
}
