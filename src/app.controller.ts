import { Controller, Get } from '@nestjs/common';

@Controller('/rian')
export class AppController {
  @Get('/hi')
  getRootRoute() {
    return '정미! 따라오고 있냐?';
  }

  @Get('/bye')
  getByeThere() {
    return '정민! 퇴직금 맛있드나?';
  }
}
