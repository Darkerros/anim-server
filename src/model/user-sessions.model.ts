import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { UserSessionStatus } from '../types/user-session-status';
import { UserModel } from './user.model';

@Table({ tableName: 'UsersSessions' })
export class UserSessionsModel extends Model<UserSessionsModel> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
  })
  id: number;

  @ForeignKey(() => UserModel)
  userId: number;

  @Column({ type: DataType.STRING, allowNull: false })
  accessToken: string;

  @Column({ type: DataType.STRING, allowNull: false })
  refreshToken: string;

  @Column({
    type: DataType.ENUM(
      UserSessionStatus.active,
      UserSessionStatus.cancelled,
      UserSessionStatus.expired,
      UserSessionStatus.refreshed,
    ),
    defaultValue: UserSessionStatus.active,
  })
  status: UserSessionStatus;
}
