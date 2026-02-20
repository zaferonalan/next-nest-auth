import {Input, Label} from '@workspace/ui/index'
import SubmitButton from '@/components/submitButton'
import React from 'react'
import { CreateUserInput } from "@repo/schemas";
import { SubmitHandler, useForm } from 'react-hook-form'

const SignupForm = () => {
    const {register, handleSubmit, formState:{errors}} = useForm<CreateUserInput>()

    const onSubmit:SubmitHandler<CreateUserInput> = (data) => {
        console.log("Formdata:", data);
    }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col gap-2'>
            <div>
                <Label className='mb-2' htmlFor='name'>Name</Label>
                <Input {...register('name')} className='focus-visible:ring-0' id='name' name='name' placeholder='Zafer Günay'/>
                {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
            </div>

            <div>
                <Label className='mb-2' htmlFor='lastname'>LastName</Label>
                <Input {...register('lastName')} className='focus-visible:ring-0' id='lastname' name='lastname' placeholder='Önalan'/>
                {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
            </div>

            <div>
                <Label className='mb-2' htmlFor='email'>Email</Label>
                <Input {...register('email')} className='focus-visible:ring-0' id='email' name='email' placeholder='zafer@example.com'/>
                {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
            </div>

            <div>
                <Label className='mb-2' htmlFor='password'>Password</Label>
                <Input {...register('password')} className='focus-visible:ring-0' id='password' name='password' type='password'/>
                {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
            </div>
            <SubmitButton>SignUp</SubmitButton>
        </div>
    </form>
  )
}

export default SignupForm