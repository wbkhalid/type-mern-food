import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import { Loader2 } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const ForgotPassword = () => {
  const loading = false
  const [email, setEmail] = useState<string>()
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <form className='md:p-8 w-full max-w-md rounded-lg md:border border-gray-200 mx-4'>
        <h1 className='text-2xl font-bold mb-1 text-center'>
          Forgot Password
        </h1>
        <p className='text-sm text-center mb-3'>
          Enter Your Email address to reset password
        </p>
        <div>

          <Input
            name='email'
            type='email'
            placeholder='Email'
            className='focus-visible:ring-1 mb-2'
            value={email}
            onChange={(e) => setEmail(e.target.value)}

          />

        </div>

        <Button type='submit' className='w-full bg-orange hover:bg-hoverOrange' disabled={loading}>
          {loading ? <Loader2 className='animate-spin w-5 h-5' /> : 'Send Reset Link'}
        </Button>

        <div className='text-center mt-3'>

          <span>
            Back to <Link to='/login' className='text-blue-500 hover:underline'>Log In</Link>
          </span>
        </div>
      </form>
    </div>

  )
}

export default ForgotPassword