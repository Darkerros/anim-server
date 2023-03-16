import { Injectable } from '@nestjs/common';
import { UserModel } from '../../model/user.model';
import { CreateUserDto } from './dto/create-user-dto';
import { UserSessionsModel } from '../../model/user-sessions.model';
import { CreateUserSessionDto } from './dto/create-user-session-dto';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(UserModel) private userRepository: typeof UserModel,
    @InjectModel(UserSessionsModel)
    private userSessionsRepository: typeof UserSessionsModel,
  ) {}

  async getUserById(id: number) {
    return await this.userRepository.findOne({ where: { id: id } });
  }

  async getUserByEmail(email: string) {
    return await this.userRepository.findOne({ where: { email: email } });
  }

  async createUser(dto: CreateUserDto) {
    return await this.userRepository.create(dto);
  }

  async addNewUserSession(dto: CreateUserSessionDto) {
    return await this.userSessionsRepository.create(dto);
  }
}
