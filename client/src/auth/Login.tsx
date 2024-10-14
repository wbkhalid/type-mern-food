import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { LoginInputState, userLoginUpSchema } from '@/schema/userSchema'
import { Loader2 } from 'lucide-react'
import { ChangeEvent, FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'

// type LoginInputState = {
//     email: string,
//     password: string
// }

const Login = () => {
    const loading = false
    const [input, setInput] = useState<LoginInputState>({
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState<Partial<LoginInputState>>({})

    const changeEventHanler = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setInput({ ...input, [name]: value })
    }

    const submitHandler = (e: FormEvent) => {
        e.preventDefault()
        const result = userLoginUpSchema.safeParse(input)
        if (!result.success) {
            const fieldError = result.error.formErrors.fieldErrors
            setErrors(fieldError as Partial<LoginInputState>)
            return;
        }
        console.log(input);

    }

    return (
        <div className='flex items-center justify-center min-h-screen'>
            <form onSubmit={submitHandler} className='md:p-8 w-full max-w-md rounded-lg md:border border-gray-200 mx-4'>
                <h1 className='text-2xl font-bold mb-3 text-center'>
                    Login
                </h1>
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
                        className='focus-visible:ring-1 mb-4'
                        value={input.password}
                        onChange={changeEventHanler}
                    />
                    {
                        errors && <span className='text-sm text-red-500'>{errors.password}</span>
                    }
                </div>


                <Button type='submit' disabled={loading} className='w-full bg-orange hover:bg-hoverOrange'>
                    {loading ? <Loader2 className='animate-spin w-5 h-5' /> : 'Login'}
                </Button>

                <div className='text-center mt-3'>

                    <Link to='/forgot-password' className='text-blue-500 hover:underline'>Forgot Password</Link>
                </div>

                <Separator className='my-4' />

                <p>Do not have an account? <Link to='/signup' className='text-blue-500'>SignUp</Link></p>

            </form>

        </div>
    )
}

export default Login
