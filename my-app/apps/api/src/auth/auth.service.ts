import { ConflictException, Injectable } from '@nestjs/common';
import type { CreateUserInput } from '@repo/schemas';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  /**
   *
   */
  constructor(private readonly userService: UserService) {}
  async registerUser(data: CreateUserInput) {
    const user = await this.userService.findByEmail(data.email);
    if (user) throw new ConflictException('User already exists');
    return this.userService.create(data);
  }
}
