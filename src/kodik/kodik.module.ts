import { Module } from '@nestjs/common';
import { KodikService } from './kodik.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { KodikAnimeModel } from '../model/kodik-anime.model';

@Module({
  providers: [KodikService],
  imports: [SequelizeModule.forFeature([KodikAnimeModel])],
  exports: [KodikService],
})
export class KodikModule {}
