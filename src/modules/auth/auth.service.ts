import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserModel } from '../../model/user.model';
import { UserService } from '../user/user.service';
import { LoginUserDto } from '../user/dto/login-user-dto';
import { CreateUserDto } from '../user/dto/create-user-dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UserService,
  ) {}

  validateToken(token: string) {
    return this.jwtService.verify(token);
  }

  async generateToken(user: UserModel) {
    const payload = {
      id: user.id,
      email: user.email,
      avatarUrl: user.avatarUrl,
      nickname: user.nickname,
    };

    const accessToken = await this.jwtService.signAsync(payload, {
      expiresIn: '24h',
    });

    const refreshToken = await this.jwtService.signAsync(payload, {
      expiresIn: '30d',
    });

    return { accessToken: accessToken, refreshToken: refreshToken };
  }

  async login(dto: LoginUserDto) {
    const candidate = await this.userService.getUserByEmail(dto.email);
    if (!candidate)
      throw new HttpException('Not registered', HttpStatus.BAD_REQUEST);

    const passwordEqual = await bcrypt.compare(
      dto.password,
      candidate.password,
    );
    if (passwordEqual && candidate) {
      const tokens = await this.generateToken(candidate);
      await this.userService.addNewUserSession({
        userId: candidate.id,
        accessToken: tokens.accessToken,
        refreshToken: tokens.refreshToken,
      });

      return {
        data: {
          user: {
            id: candidate.id,
            nickname: candidate.nickname,
            email: candidate.email,
          },
          ...tokens,
        },
      };
    }
  }

  async register(dto: CreateUserDto) {
    const candidate = await this.userService.getUserByEmail(dto.email);
    if (candidate)
      throw new HttpException('User already register', HttpStatus.BAD_REQUEST);

    const password = await bcrypt.hash(dto.password, 6);

    const user = await this.userService.createUser({
      ...dto,
      password: password,
    });
    const tokens = await this.generateToken(user);
    await this.userService.addNewUserSession({
      userId: user.id,
      accessToken: tokens.accessToken,
      refreshToken: tokens.refreshToken,
    });

    return {
      data: {
        user: { id: user.id, nickname: user.nickname, email: user.email },
        ...tokens,
      },
    };
  }
}
