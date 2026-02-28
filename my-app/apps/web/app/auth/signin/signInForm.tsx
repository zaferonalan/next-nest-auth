import SubmitButton from '@/components/submitButton'
import { Input, Label } from '@repo/ui'
import Link from 'next/link'
import React from 'react'

const SignInForm = () => {
  return (
    <form>
        <div className='flex flex-col gap-2 w-64'>
            <div>
                <Label htmlFor='email'>Email</Label>
                <Input id='email' name='email' placeholder='m@example.com' type='email'/>
            </div>

            <div>
                <Label htmlFor='password'>Password</Label>
                <Input id='password' name='password' type='password'/>
            </div>
            <Link className='text-sm underline' href="#">Forgot your password?</Link>

            <SubmitButton>Sign In</SubmitButton>
            <div className='flex justify-between text-sm'>
                <p>Don't have an account?</p>
                <Link className='text-sm underline' href="/auth/signup">Sign Up</Link>
            </div>
        </div>
    </form>
  )
}

export default SignInForm