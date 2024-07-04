import LoginForm from '@/components/auth/login-form'
import React from 'react'

const LoginPage = async () => {
  return (
    <main className='rounded flex justify-center align-middle items-center h-screen text-center '>
      <section>
        <LoginForm fetch_route={process.env.REACT_APP_API_URL}/>
      </section>
    </main>
  )
}

export default LoginPage