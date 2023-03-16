import { Column, DataType, Model, Table } from 'sequelize-typescript';

export interface GenresCreationAttributes {
  name: string;
}

@Table({ tableName: 'Genres' })
export class GenresModel extends Model<GenresModel, GenresCreationAttributes> {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  id: number;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;
}
