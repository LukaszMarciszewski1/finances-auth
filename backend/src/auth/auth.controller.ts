import { Body, Controller, HttpCode, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { ExistingUserDTO } from '../user/dtos/existing-user.dto';

import { NewUserDTO } from '../user/dtos/new-user.dto';
import { UserDetails } from '../user/user-details.interface';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  register(@Body() user: NewUserDTO): Promise<UserDetails | null> {
    return this.authService.register(user);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  login(@Body() user: ExistingUserDTO): Promise<{ token: string } | null> {
    return this.authService.login(user);
  }
}
