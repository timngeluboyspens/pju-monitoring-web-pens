import React from 'react'
import { LoginForm } from '@/components/auth/login-form'

const LoginPage: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <LoginForm />
    </div>
  )
}

export default LoginPage