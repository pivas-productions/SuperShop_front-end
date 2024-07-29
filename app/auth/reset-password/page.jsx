import React from 'react'
import ResetPasswordForm from "@/components/auth/reset-password-form";

export default function ResetPasswordPage() {
  return (
    <main className='rounded flex justify-center align-middle items-center h-screen text-center '>
      <section>
        <ResetPasswordForm fetch_route={process.env.REACT_APP_API_URL_CLIENT}/>
      </section>
    </main>
  )
}
