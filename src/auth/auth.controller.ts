import { Body, Controller, Post } from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { CredentialsDto } from './dto/credentials.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  async sinup(@Body() createUserDto: CreateUserDto): Promise<User> {
    return await this.authService.signup(createUserDto);
  }

  @Post('signin')
  async signin(
    @Body() credentialsDto: CredentialsDto,
  ): Promise<{ accessToken: string }> {
    return await this.authService.signin(credentialsDto);
  }
}
