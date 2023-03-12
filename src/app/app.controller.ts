import { Controller, Get } from '@nestjs/common';
import { getList } from '../external-api/kodik/kodik';
@Controller()
export class AppController {
  @Get()
  async getHello() {
    return await getList();
  }
}
