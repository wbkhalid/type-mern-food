import { z } from "zod"

export const userSignUpSchema = z.object({
  fullName:z.string().min(1,'Full Name is requried'),
  email:z.string().email("Invalid Email"),
  password:z.string().min(6,'minimum 6 characters'),
  contact:z.string().min(11,'this format 0300 1234567')
})


export type SignUpInputState = z.infer <typeof userSignUpSchema>


export const userLoginUpSchema = z.object({
    email:z.string().email("Invalid Email"),
    password:z.string().min(6,'minimum 6 characters'),
  })
  
  
  export type LoginInputState = z.infer <typeof userLoginUpSchema>