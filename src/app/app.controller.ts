import { Controller, Get } from '@nestjs/common';
import { KodikService } from '../kodik/kodik.service';

@Controller()
export class AppController {
  constructor(private kodikService: KodikService) {}
  @Get()
  async getHello() {
    return await this.kodikService.updateTable();
  }
}
