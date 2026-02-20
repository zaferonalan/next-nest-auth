"use client"
import { Button } from '@workspace/ui/index';
import React from 'react'
import { useFormStatus } from 'react-dom'

type submitButtonProps = {
    children: React.ReactNode
}

const SubmitButton = ({children}:submitButtonProps) => {
    const { pending } = useFormStatus()
  return (
    <Button type='submit' disabled={pending} className='w-full mt-2'>
        {pending ? "Submitting...": children}
    </Button>
  )
}

export default SubmitButton