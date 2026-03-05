"use server"

import {authUserSchema, createUserSchema, loginSchema } from '@repo/schemas';
import { z } from 'zod';
import { signup, signIn } from '../api/auth';
import { redirect } from 'next/navigation';
import { createSession } from '../sessions/session';

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

export type signInFormState = {
    error?: z.inferFlattenedErrors<typeof loginSchema>["fieldErrors"],
    message?: string
}| undefined

export async function signInAction(state: signInFormState, formData:FormData):Promise<signInFormState> {
    const parsed = loginSchema.safeParse(Object.fromEntries(formData))

    if (!parsed.success) return{
        error: parsed.error.flatten().fieldErrors
    }

    const res = await signIn(parsed.data)

    if (res.ok) {
        const response = await res.json()
        const result = authUserSchema.parse(response)
        await createSession({
            user: {
                id: result.id,
                name: result.name
            }
        })
        redirect("/")
    }
    else {
        return {
            message: res.status === 401 ? "Invalid Credentials!" : res.statusText
        }
    }
}