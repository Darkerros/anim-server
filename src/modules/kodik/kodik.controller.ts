import { Controller, Get, Param, Query } from '@nestjs/common';
import { KodikService } from './kodik.service';

@Controller('api/kodik')
export class KodikController {
  constructor(private kodikService: KodikService) {}

  @Get('/all')
  async getById(
    @Query() query: { limit: number | undefined; offset: number | undefined },
  ) {
    return await this.kodikService.getAllKodikAnimeToAdd(
      query.limit,
      query.offset,
    );
  }

  @Get(':id')
  async getAll(@Param('id') id: number) {
    return await this.kodikService.getKodikAnimeDataById(id);
  }
}
