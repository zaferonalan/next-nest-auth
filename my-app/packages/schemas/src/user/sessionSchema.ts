import { z } from "zod";

export const sessionSchema = z.object({
    user: z.object({
        id: z.number(),
        name: z.string()
    }),
})

export type Session = z.infer<typeof sessionSchema>