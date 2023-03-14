import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModel } from '../model/user.model';
import { UserController } from './user.controller';
import { UserSessionsModel } from '../model/user-sessions.model';

@Module({
  providers: [UserService],
  imports: [SequelizeModule.forFeature([UserModel, UserSessionsModel])],
  controllers: [UserController],
})
export class UserModule {}
