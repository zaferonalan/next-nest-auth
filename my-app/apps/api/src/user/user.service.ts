import { Injectable } from '@nestjs/common';
import { prisma } from '@repo/db';
import { CreateUserInput } from '@repo/schemas';
import { hashPassword } from '../common/security/password';

@Injectable()
export class UserService {
  async create(createUserDto: CreateUserInput) {
    const { password, ...user } = createUserDto;

    // const hashedPassword = await hash(password, {
    //   timeCost: 2,
    //   memoryCost: 19456,
    //   parallelism: 2,
    // });

    const hashedPassword = await hashPassword(password);

    return await prisma.user.create({
      data: { ...user, password: hashedPassword },
    });
  }

  async findByEmail(email: string) {
    return await prisma.user.findUnique({
      where: { email },
    });
  }
}
