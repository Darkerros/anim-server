import { Column, Model, Table, DataType, HasMany } from 'sequelize-typescript';
import { UserSessionsModel } from './user-sessions.model';

interface UserCreationsAttributes {
  nickname: string;
  email: string;
  password: string;
  avatarUrl?: string;
}

@Table({ tableName: 'Users' })
export class UserModel extends Model<UserModel, UserCreationsAttributes> {
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

  @Column({ type: DataType.STRING, allowNull: true })
  avatarUrl: string;

  @HasMany(() => UserSessionsModel)
  sessions: UserSessionsModel[];
}
