"use server"

import {createUserSchema } from '@repo/schemas';
import { z } from 'zod';
import { signup } from '../api/auth';
import { redirect } from 'next/navigation';

export type FormState = {
    error?:z.inferFlattenedErrors<typeof createUserSchema>['fieldErrors'];
    message?:string
} | undefined

export async function signupAction(_prevState:FormState, formData:FormData):Promise<FormState> {
    const parsed = createUserSchema.safeParse(Object.fromEntries(formData))

    if (!parsed.success) {
        return{
            error: parsed.error.flatten().fieldErrors
        }
    }

    const res = await signup(parsed.data)

    if (!res.ok) {
        return{
            message: res.status === 409 
                ? "User already exists"
                : "Signup failed"
        }
    }

    redirect('/auth/signin')
}