import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import type { CreateUserInput } from '@repo/schemas';
import { UserService } from '../user/user.service';
import { verifyPassword } from '../common/security/password';
import { AuthUser } from '@repo/schemas';
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

  async validateLocalUser(email: string, password: string): Promise<AuthUser> {
    const user = await this.userService.findByEmail(email);
    if (!user || !user.password) {
      throw new UnauthorizedException('Wrong Credentials');
    }
    const passwordMatch = await verifyPassword(user.password, password);

    if (!passwordMatch) {
      throw new UnauthorizedException('Invalid Credentials');
    }

    return { id: user.id, name: user.name };
  }
}
