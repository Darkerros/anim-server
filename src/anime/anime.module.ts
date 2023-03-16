import { Module } from '@nestjs/common';
import { AnimeService } from './anime.service';
import { AnimeController } from './anime.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { AnimeModel } from '../model/anime.model';
import { KodikModule } from '../kodik/kodik.module';

@Module({
  imports: [SequelizeModule.forFeature([AnimeModel]), KodikModule],
  providers: [AnimeService],
  controllers: [AnimeController],
})
export class AnimeModule {}
