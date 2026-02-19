import { Injectable } from '@nestjs/common';
import { prisma } from '@repo/db';
import { CreateUserInput } from '@repo/schemas';
import { hash } from 'argon2';

@Injectable()
export class UserService {
  async create(createUserDto: CreateUserInput) {
    const { password, ...user } = createUserDto;

    const hashedPassword = await hash(password, {
      timeCost: 2,
      memoryCost: 19456,
      parallelism: 2,
    });

    return await prisma.user.create({
      data: { password: hashedPassword, ...user },
    });
  }

  async findByEmail(email: string) {
    return await prisma.user.findUnique({
      where: { email },
    });
  }
}
