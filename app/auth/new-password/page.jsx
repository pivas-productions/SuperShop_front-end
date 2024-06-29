import NewPasswordForm from '@/components/auth/new-password-form'
import React from 'react'

export default function NewPasswordPage(){
  return (
    <main className='rounded flex justify-center align-middle items-center h-screen text-center '>
      <section>
        <NewPasswordForm />
      </section>
    </main>
  )
}
