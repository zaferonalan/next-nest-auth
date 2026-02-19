import { z } from "zod";

export const dbEnvSchema = z.object({
    DATABASE_URL: z.string().url().startsWith('postgresql://')
})

