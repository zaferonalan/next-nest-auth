import { getSession } from '@/lib/sessions/session'
import { redirect } from 'next/navigation'
import React from 'react'

const DashboardPage = async() => {
  const session = await getSession()
  if(!session || !session.user) redirect("/auth/signin")
  return (
    <div>DashboardPage</div>
  )
}

export default DashboardPage