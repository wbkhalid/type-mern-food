import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { SignUpInputState, userSignUpSchema } from '@/schema/userSchema'
import { Loader2 } from 'lucide-react'
import { ChangeEvent, FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'

// type SignUpInputState = {
//   fullName: string,
//   email: string,
//   password: string,
//   contact: string
// }

const SignUp = () => {
  const loading = false
  const [input, setInput] = useState<SignUpInputState>({
    fullName: '',
    email: '',
    password: '',
    contact: ''
  })

  const [errors, setErrors] = useState<Partial<SignUpInputState>>({})

  const changeEventHanler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setInput({ ...input, [name]: value })
  }

  const submitHandler = (e: FormEvent) => {
    e.preventDefault()
    const result = userSignUpSchema.safeParse(input)
    if (!result.success) {
      const fieldError = result.error.formErrors.fieldErrors
      setErrors(fieldError as Partial<SignUpInputState>)
      return;
    }
    console.log(input);

  }

  return (
    <div className='flex items-center justify-center min-h-screen'>
      <form onSubmit={submitHandler} className='md:p-8 w-full max-w-md rounded-lg md:border border-gray-200 mx-4'>
        <h1 className='text-2xl font-bold mb-3 text-center'>
          Sign Up
        </h1>
        <div>
          <Input
            name='fullName'
            type='text'
            placeholder='Full Name'
            className='focus-visible:ring-1 mb-2'
            value={input.fullName}
            onChange={changeEventHanler}
          />
          {
            errors && <span className='text-sm text-red-500'>{errors.fullName}</span>
          }
        </div>

        <div>
          <Input
            name='email'
            type='email'
            placeholder='Email'
            className='focus-visible:ring-1 mb-2'
            value={input.email}
            onChange={changeEventHanler}
          />
          {
            errors && <span className='text-sm text-red-500'>{errors.email}</span>
          }
        </div>

        <div>
          <Input
            name='password'
            type='password'
            placeholder='Password'
            className='focus-visible:ring-1 mb-2'
            value={input.password}
            onChange={changeEventHanler}
          />
          {
            errors && <span className='text-sm text-red-500'>{errors.password}</span>
          }
        </div>

        <div>
          <Input
            name='contact'
            type='text'
            placeholder='Contact'
            className='focus-visible:ring-1 mb-4'
            value={input.contact}
            onChange={changeEventHanler}
          />
          {
            errors && <span className='text-sm text-red-500'>{errors.contact}</span>
          }
        </div>

        <Button type='submit' className='w-full bg-orange hover:bg-hoverOrange'>
          {loading ? <Loader2 className='animate-spin w-5 h-5' /> : 'Sign Up'}
        </Button>

        <Separator className='my-4' />

        <p>Already have an account? <Link to='/login' className='text-blue-500'>LogIn</Link></p>

      </form>



    </div>
  )
}

export default SignUp
