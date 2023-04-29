import { Controller, Get, UseGuards, Req, Patch, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { GetUser } from './../auth/decorator';
import { JwtGuard } from './../auth/guard';
import { User } from '@prisma/client';
import { EditUserDto } from './dto';
import { UserService } from './user.service';

@UseGuards(JwtGuard) // JwtGuard insteadof AuthGuard('jwt')
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}
  @Get('/me')
  getMe(@GetUser() user: User) {
    return user;
  }

  @Patch()
  editUser(@GetUser('id') userId: number, @Body() dto: EditUserDto) {
    return this.userService.editUser(userId, dto);
  }

  /*
  //@UseGuards(AuthGuard('jwt')) // This means that this route need to be protected with 'jwt' stategy which we deifned in jwt.strategy.ts
  @Get('/me')
  getMe(@Req() req: Request) {
    return req.user;
  }
  */
}
