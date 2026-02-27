import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import type { CreateUserInput, loginInput } from '@repo/schemas';
import { UserService } from '../user/user.service';
import { verifyPassword } from '../common/security/password';

@Injectable()
export class AuthService {
  /**
   *
   */
  constructor(private readonly userService: UserService) {}

  async registerUser(createUserDto: CreateUserInput) {
    const user = await this.userService.findByEmail(createUserDto.email);
    if (user) throw new ConflictException('User already exists');
    return this.userService.create(createUserDto);
  }

  async login(loginDto: loginInput) {
    const user = await this.userService.findByEmail(loginDto.email);
    if (!user || !user.password) {
      throw new UnauthorizedException('Wrong credential');
    }

    const passwordMatch = await verifyPassword(
      user.password,
      loginDto.password,
    );

    if (!passwordMatch) {
      throw new UnauthorizedException('Invalid Credentials');
    }

    return { id: user.id, name: user.name };
  }
}
