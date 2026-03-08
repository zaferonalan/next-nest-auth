"use server"
import { getSession } from '@/lib/sessions/session'
import Link from 'next/link'
import React from 'react'
import SignOutButton from './SignOutButton'

const signInButton = async() => {
    const session = await getSession()
  return (
    <div className='flex gap-2 items-center ml-auto'>
        {
            !session || !session.user ? (
                <>
                    <Link href={"/auth/signin"}>Sign In</Link>
                    <Link href={"/auth/signup"}>Sign Up</Link>
                </>
            ) : (
                <>
                    <p>{session.user.name}</p>
                    <SignOutButton/>
                </>
            )
        }
    </div>
  )
}

export default signInButton