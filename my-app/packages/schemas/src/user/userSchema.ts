import { z } from "zod";

export const createUserSchema = z.object({
    name : z.string().min(2, {message:"Name must be at least 2 characters long"}).trim(),
    email: z.string().email({message: "Please enter a valid email."}).trim(),
    password: z.string().min(8,{message:"Be at least 8 characters long"}).regex(/[a-zA-A]/, {message: "Contain at least one letter"}).regex(/[0-9]/,{message:"Contain at least one letter"}).trim(),
    lastName: z.string()
})

export const updateUserSchema = createUserSchema.partial()

export type CreateUserInput = z.infer<typeof createUserSchema>
export type UpdateUserInput = z.infer<typeof updateUserSchema>