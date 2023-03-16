import { Module } from '@nestjs/common';
import { KodikService } from './kodik.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { KodikAnimeModel } from '../../model/kodik-anime.model';
import { KodikController } from './kodik.controller';
import { AnimeModel } from '../../model/anime.model';

@Module({
  providers: [KodikService],
  imports: [SequelizeModule.forFeature([KodikAnimeModel, AnimeModel])],
  exports: [KodikService],
  controllers: [KodikController],
})
export class KodikModule {}
