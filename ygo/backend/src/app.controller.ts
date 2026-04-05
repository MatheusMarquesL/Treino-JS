import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('users')
  create(@Body() body: any) {
    return this.appService.create(body);
  }

  @Get('users')
  findAll() {
    return this.appService.findAll();
  }

  @Put('users/:id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.appService.update(Number(id), body);
  }

  @Delete('users/:id')
  remove(@Param('id') id: string) {
    return this.appService.remove(Number(id));
  }
}