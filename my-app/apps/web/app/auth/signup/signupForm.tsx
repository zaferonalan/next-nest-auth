"use client";
import {Input, Label} from '@repo/ui'
import SubmitButton from '@/components/submitButton'
import React from 'react'
import { CreateUserInput } from "@repo/schemas";
import { SubmitHandler, useForm } from 'react-hook-form'
import { useFormState } from 'react-dom';
import { signupAction } from '@/lib/actions/auth.actions';

const SignupForm = () => {
    const [state, action]= useFormState(signupAction, undefined)
    const {register, handleSubmit, formState:{errors}} = useForm<CreateUserInput>()

    const onSubmit:SubmitHandler<CreateUserInput> = (data) => {
        console.log("Formdata:", data);
    }
  return (
    <form action={action}>
        <div className='flex flex-col gap-2'>
            {state?.message && <p className='text-sm text-red-500'>{state.message}</p>}
            <div>
                <Label className='mb-2' htmlFor='name'>Name</Label>
                <Input {...register('name')} className='focus-visible:ring-0' id='name' name='name' placeholder='Zafer Günay'/>
                {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
            </div>
            {state?.error?.name && (<p className='text-sm text-red-500'>{state.error.name}</p>)}

            <div>
                <Label className='mb-2' htmlFor='lastname'>LastName</Label>
                <Input {...register('lastName')} className='focus-visible:ring-0' id='lastname' name='lastName' placeholder='Önalan'/>
                {errors.lastName && <p className='text-red-500'>{errors.lastName.message}</p>}
            </div>
            {state?.error?.lastName && (<p className='text-sm text-red-500'>{state.error.lastName}</p>)}

            <div>
                <Label className='mb-2' htmlFor='email'>Email</Label>
                <Input {...register('email')} className='focus-visible:ring-0' id='email' name='email' placeholder='zafer@example.com'/>
                {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
            </div>
            {state?.error?.email && (<p className='text-sm text-red-500'>{state.error.email}</p>)}

            <div>
                <Label className='mb-2' htmlFor='password'>Password</Label>
                <Input {...register('password')} className='focus-visible:ring-0' id='password' name='password' type='password'/>
                {errors.password && (<p className='text-red-500'>{errors.password.message}</p>)}
            </div>
            {state?.error?.password && (
                <div>
                    <p>Password must</p>
                    <ul>
                        {state.error.password.map((error) => (
                        <li key={error}>{error} </li>
                        ))}
                    </ul>
                </div>
            )}
            <SubmitButton>SignUp</SubmitButton>
        </div>
    </form>
  )
}

export default SignupForm