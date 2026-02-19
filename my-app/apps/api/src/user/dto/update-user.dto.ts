import { createZodDto } from 'nestjs-zod';
import { updateUserSchema } from '@repo/schemas';

export class UpdateUserDto extends createZodDto(updateUserSchema) {}
