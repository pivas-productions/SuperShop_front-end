'use server'
import RegisterForm from '@/components/auth/register-form'
import React from 'react'

export default async function RegisterPage() {
  return (
    <main className='rounded flex justify-center align-middle items-center h-screen text-center '>
      <section>
        <RegisterForm fetch_route={process.env.REACT_APP_API_URL_CLIENT}/>
      </section>
    </main>
  )
}
