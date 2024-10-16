import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import { Loader2 } from 'lucide-react'
import { ChangeEvent, KeyboardEvent, useRef, useState } from 'react'
import { Link } from 'react-router-dom'


const VerifyEmail = () => {
    const loading = false
    const [otp, setOtp] = useState<string[]>(['', '', '', '', '', ''])
    const inputRef = useRef<any>([])

    const handleChange = (index: number, value: string) => {

        if (/^[a-zA-Z0-9]$/.test(value) || value == '') {
            const newOtp = [...otp]
            newOtp[index] = value
            setOtp(newOtp)
        }

        if (value != '' && index < 5) {
            inputRef.current[index + 1].focus()
        }
    }

    const handleKetDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key == 'Backspace' && !otp[index] && index > 0) {
            inputRef.current[index - 1].focus()
        }
    }
    return (
        <div className='flex items-center justify-center min-h-screen'>
            <form className='md:p-8 w-full max-w-md rounded-lg md:border border-gray-200 mx-4'>
                <h1 className='text-2xl font-bold mb-1 text-center'>
                    Verify Email
                </h1>
                <p className='text-sm text-center mb-3'>
                    Enter code sent to your Email
                </p>

                <form action="">
                    <div className='flex justify-center gap-1 mb-5'>
                        {
                            otp.map((letter: string, index: number) => (<Input key={index} type='text' value={letter}
                                ref={element => inputRef.current[index] = element}
                                max={1}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(index, e.target.value)}
                                onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => handleKetDown(index, e)}
                                className='md:w-10 w-8 md:h-10 h-8 text-center text-sm font-bold rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500' />))
                        }
                    </div>
                </form>


                <Button type='submit' className='w-full bg-orange hover:bg-hoverOrange' disabled={loading}>
                    {loading ? <Loader2 className='animate-spin w-5 h-5' /> : 'Verify'}
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

export default VerifyEmail
