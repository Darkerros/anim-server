import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AnimeService } from './anime.service';
import { UpdateAnimeDto } from './dto/update-anime-dto';

@Controller('api/anime')
export class AnimeController {
  constructor(private animeService: AnimeService) {}

  @Get(':id')
  async getAnimeById(@Param('id') id: number) {
    return await this.animeService.getAnimeById(id);
  }

  @Post('/add')
  async addAnimeByKodikDataId(@Body('id') id: number) {
    return await this.animeService.addAnimeByKodikId(id);
  }

  @Post('/update')
  async updateAnimeInfo(@Body() dto: UpdateAnimeDto & { id: number }) {
    return await this.animeService.updateAnimeInfo(dto.id, dto);
  }

  @Get('/search/:query')
  async searchAnime(@Param('query') query: string) {
    return await this.animeService.searchAnime(query);
  }
}
