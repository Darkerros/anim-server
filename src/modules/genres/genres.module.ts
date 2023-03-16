import { Module } from '@nestjs/common';
import { GenresService } from './genres.service';
import { GenresController } from './genres.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { GenresModel } from '../../model/genres.model';

@Module({
  imports: [SequelizeModule.forFeature([GenresModel])],
  providers: [GenresService],
  controllers: [GenresController],
})
export class GenresModule {}
