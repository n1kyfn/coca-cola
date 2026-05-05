import z from 'zod'

export const loginShema = z.object({
    email: z.string().email('Введите корректную почту'),
    password: z.string().min(6, 'Минимум 6 символов')
})

export type TLoginSchema = z.infer<typeof loginShema>



export const registerSchema = z.object({
    name: z.string().min(3, 'Минимум 3 символа'),
    email: z.string().email('Введите корректную почту'),
    password: z.string().min(6, 'Минимум 6 символов')
})

export type TRegisterSchema = z.infer<typeof registerSchema>