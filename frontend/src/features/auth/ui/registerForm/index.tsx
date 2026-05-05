import { useForm } from "react-hook-form"
import { registerSchema, type TRegisterSchema } from "../../model/schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRegisterMutation } from "../../../../entities/auth/api/authApi"
import { useDispatch } from "react-redux"
import { setAuth } from "../../../../entities/auth/model/authSlice"
import type { TUserReg } from "../../../../entities/auth/model/types"
import { useNavigate } from "react-router"

export const RegisterForm = () => {

    const { register, handleSubmit, formState: {errors}, reset } = useForm<TRegisterSchema>({
        resolver: zodResolver(registerSchema)
    })

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [ registerApi ] = useRegisterMutation()

    const onSubmit = async (userData) => {
    const res = await registerApi(userData).unwrap();

    if (res) {
      dispatch(setAuth({
        isAuth: true,
        user: res.user,
        accessToken: res.accessToken,
        refreshToken: res.refreshToken,
      }))
      alert('Успех')
      reset();
      navigate("/");
    } else {
      alert('Cola')
    }
  };


  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Регистрация</h1>

            <label>
                Логин
                <input type="text" {...register('name')} placeholder="Введите логин..."/>
                {errors.name && <div className="error">{errors.name.message}</div>}
            </label>

            <label>
                Почта
                <input type="text" {...register('email')} placeholder="Введите почту..."/>
                {errors.email && <div className="error">{errors.email.message}</div>}
            </label>

            <label>
                Пароль
                <input type="text" {...register('password')} placeholder="Введите пароль..."/>
                {errors.password && <div className="error">{errors.password.message}</div>}
            </label>

            <button type="submit">Зарегистрироваться</button>
        </form>
    </div>
  )
}
