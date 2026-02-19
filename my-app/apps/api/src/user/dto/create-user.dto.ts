import { createZodDto } from 'nestjs-zod';
import { createUserSchema } from '@repo/schemas';

export class CreateUserDto extends createZodDto(createUserSchema) {}
