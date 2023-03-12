import { Column, Model, Table, DataType, HasMany } from 'sequelize-typescript';
import { UserSessionsModel } from './user-sessions.model';

@Table({ tableName: 'Users' })
export class UserModel extends Model<UserModel> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
  })
  id: number;

  @Column({ type: DataType.STRING, allowNull: true })
  nickname: string;

  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  email: string;

  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @HasMany(() => UserSessionsModel)
  sessions: UserSessionsModel[];
}
