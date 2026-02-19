import { dbEnvSchema } from '@repo/schemas';
import { z } from 'zod';

export const apiEnvSchema = z.object({});

export const mergedEnvSchema = apiEnvSchema.merge(dbEnvSchema);

export type AppEnv = z.infer<typeof mergedEnvSchema>;
