import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { GenresService } from './genres.service';

@Controller('api/genres')
export class GenresController {
  constructor(private genresService: GenresService) {}
  @Post('/create')
  async createGenre(@Body('name') name: string) {
    return await this.genresService.createNewGenre(name);
  }

  @Get('/all')
  async getAllGenres() {
    return await this.genresService.getAll();
  }

  @Put('/update')
  async updateGenre(@Body() dto: { id: number; name: string }) {
    return await this.genresService.updateGenre(dto.id, dto.name);
  }
}
