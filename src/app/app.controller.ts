import { Controller, Get } from '@nestjs/common';
import { KodikService } from '../kodik/kodik.service';

@Controller()
export class AppController {
  constructor(private kodikService: KodikService) {}
  @Get("/update")
  async update() {
    return await this.kodikService.updateTable();
  }

  @Get()
  async getAll() {
    return await this.kodikService.getAllAnimes();
  }
}
