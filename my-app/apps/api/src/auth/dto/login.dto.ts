import { createZodDto } from 'nestjs-zod';
import { loginSchema } from '@repo/schemas';

export class LoginDto extends createZodDto(loginSchema) {}
