import { z } from "zod";

export const authUserSchema = z.object({
    id: z.number(),
    name: z.string()
})

export type AuthUser = z.infer<typeof authUserSchema>