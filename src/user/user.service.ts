import { Injectable } from '@nestjs/common';
import { UserModel } from '../model/user.model';
import { CreateUserDto } from './dto/create-user-dto';
import { UserSessionsModel } from '../model/user-sessions.model';

@Injectable()
export class UserService {
  constructor(
    private userRepository: typeof UserModel,
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

}
