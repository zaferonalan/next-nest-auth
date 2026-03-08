import Link from 'next/link'
import React from 'react'
import SignInButton from './signInButton';

const Appbar = () => {
  return (
    <div className='p-4 flex gap-3 bg-linear-to-br from-blue-400 to-cyan-400 text-white'>
        <Link href={"/"}>HOME</Link>
        <Link href={"/dashboard"}>DASHBOARD</Link>
        <SignInButton/>
    </div>
  )
}

export default Appbar