import {z} from 'zod'

export const loginSchema = z.object({
    email: z.string().email({message: "Please enter a valid email"}),
    password: z.string().min(1, {message: "Password field must not be empty"})
})

export type loginInput = z.infer<typeof loginSchema>