import RegisterForm from '@/components/auth/register-form'
import React from 'react'

export default function RegisterPage() {
  return (
    <main className='rounded flex justify-center align-middle items-center h-screen text-center '>
      <section>
        <RegisterForm />
      </section>
    </main>
  )
}
