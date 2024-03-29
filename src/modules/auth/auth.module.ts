import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import * as process from 'process';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    JwtModule.register({ secret: `${process.env.JSONT_KEY}` }),
    UserModule,
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
