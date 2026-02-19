import { Module } from '@nestjs/common';
import { ConfigModule as NestConfig } from '@nestjs/config';
import { AppEnv, mergedEnvSchema } from './apiEnvSchema';

@Module({
  imports: [
    NestConfig.forRoot({
      isGlobal: true,
      validate(config): AppEnv {
        const result = mergedEnvSchema.safeParse(config);
        if (!result.success) {
          console.error('Environment validation failed');
          console.error(result.error.format());
          throw new Error('Invalid environment varibles');
        }
        return result.data;
      },
    }),
  ],
})
export class ConfigModule {}
