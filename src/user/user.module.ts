import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModel } from '../model/user.model';
import { UserSessionsModel } from '../model/user-sessions.model';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  imports: [SequelizeModule.forFeature([UserModel, UserSessionsModel])],
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
