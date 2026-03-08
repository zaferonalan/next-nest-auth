"use client"

import { Button } from '@repo/ui'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function SignOutButton() {
    const router = useRouter()
    
    const logOut = async() => {
        await fetch("/api/auth/signout")
        router.refresh()
    }

  return (
    <Button className='bg-transparent text-white cursor-pointer' onClick={logOut}>Sign Out</Button>
  )
}
