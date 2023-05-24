import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserLoginDto } from './dto/user-login.dto';
import { VerifyEmailDto } from './dto/verify-email.dto';
import { Response } from 'express';
import { UserInfo } from './UserInfo';

@Controller('users')
export class UsersController {
  @Post('/')
  async createUser(
    @Body() dto: CreateUserDto,
    @Res() res: Response,
  ): Promise<Response> {
    console.log(dto);
    return res.status(HttpStatus.CREATED).send();
  }

  @Post('/email-verify')
  async verifyEmail(@Query() dto: VerifyEmailDto): Promise<string> {
    console.log(dto);
    return;
  }

  @Post('/login')
  async login(@Body() dto: UserLoginDto): Promise<string> {
    console.log(dto);
    return;
  }

  @Get('/:id')
  async getUserInfo(@Param('id') userId: string): Promise<UserInfo> {
    console.log(userId);
    return;
  }
}
