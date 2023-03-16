import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import * as process from 'process';
import { UserModel } from '../../model/user.model';
import { UserSessionsModel } from '../../model/user-sessions.model';
import { KodikAnimeModel } from '../../model/kodik-anime.model';
import { AnimeModel } from '../../model/anime.model';
import { KodikModule } from '../kodik/kodik.module';
import { UserModule } from '../user/user.module';
import { AuthModule } from '../auth/auth.module';
import { ScheduleModule } from '@nestjs/schedule';
import { AnimeModule } from '../anime/anime.module';
import { AnimeGenresModel } from '../../model/anime-genres.model';
import { GenresModel } from '../../model/genres.model';

@Module({
  controllers: [AppController],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSGRES_HOST,
      port: Number(process.env.POSGRES_PORT),
      username: process.env.POSTGRES_USERNAME,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_TABLE,
      models: [
        UserModel,
        UserSessionsModel,
        AnimeModel,
        AnimeGenresModel,
        GenresModel,
        KodikAnimeModel,
      ],
      autoLoadModels: true,
      synchronize: true,
      sync: { force: false },
      logging: false,
    }),
    ScheduleModule.forRoot(),
    UserModule,
    AuthModule,
    KodikModule,
    AnimeModule,
  ],
})
export class AppModule {}
