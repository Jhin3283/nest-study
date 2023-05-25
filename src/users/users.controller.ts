import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.interface';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() user: User): void {
    this.usersService.create(user);
  }

  @Get()
  findAll(): User[] {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): User {
    return this.usersService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() user: User): void {
    this.usersService.update(id, user);
  }

  @Delete(':id')
  delete(@Param('id') id: number): void {
    this.usersService.delete(+id);
  }
}
