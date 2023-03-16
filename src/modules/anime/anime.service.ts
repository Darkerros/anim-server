import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AnimeModel } from '../../model/anime.model';
import { InjectModel } from '@nestjs/sequelize';
import { KodikService } from '../kodik/kodik.service';
import { CreateAnimeDto } from './dto/create-anime-dto';
import { UpdateAnimeDto } from './dto/update-anime-dto';

@Injectable()
export class AnimeService {
  constructor(
    @InjectModel(AnimeModel) private animeRepository: typeof AnimeModel,
    private kodikAnimeService: KodikService,
  ) {}

  async getAnimeById(id: number) {
    return await this.animeRepository.findOne({ where: { id: id } });
  }

  async addAnimeByKodikId(id: number) {
    const kodikAnimeData = await this.kodikAnimeService.getKodikAnimeDataById(
      id,
    );
    if (!kodikAnimeData)
      throw new HttpException('Аниме не найдено в бд', HttpStatus.BAD_REQUEST);
    const isAlreadyAdd = !!(await this.animeRepository.findOne({
      where: { kodikDataId: kodikAnimeData.id },
    }));
    if (isAlreadyAdd)
      throw new HttpException('Аниме уже добавлено', HttpStatus.BAD_REQUEST);
    const kodikData = { ...kodikAnimeData.dataValues };
    delete kodikData.id;

    const animeDto: CreateAnimeDto = { ...kodikData, kodikDataId: id };
    return await this.animeRepository.create(animeDto);
  }

  async updateAnimeInfo(id: number, dto: UpdateAnimeDto) {
    return await this.animeRepository.update(dto, { where: { id: id } });
  }

  async searchAnime(query: string) {
    return await this.animeRepository.findAll({});
  }
}
