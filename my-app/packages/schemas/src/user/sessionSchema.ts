import { z } from "zod";

export const sessionSchema = z.object({
    user: z.object({
        id: z.string(),
        name: z.string()
    }),
    
    accessToken: z.string(),
    refreshToken: z.string()
})

export type Session = z.infer<typeof sessionSchema>