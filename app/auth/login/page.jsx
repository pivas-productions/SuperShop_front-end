import LoginForm from '@/components/auth/login-form'
import { SessionProvider } from '@/hooks/sessionProvider'
import React from 'react'

const LoginPage = async () => {

  return (
    <main className='rounded flex justify-center align-middle items-center h-screen text-center '>
      <section>
        <SessionProvider route={process.env.REACT_APP_API_URL_CLIENT}>
          <LoginForm fetch_route={process.env.REACT_APP_API_URL_CLIENT}/>
        </SessionProvider>

      </section>
    </main>
  )
}

export default LoginPage