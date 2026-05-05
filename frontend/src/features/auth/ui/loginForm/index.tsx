import { useForm } from "react-hook-form";
import { loginShema, type TLoginSchema } from "../../model/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLoginMutation } from "../../../../entities/auth/api/authApi";
import { useDispatch } from "react-redux";
import { setAuth } from "../../../../entities/auth/model/authSlice";
import type { TUserLogin } from "../../../../entities/auth/model/types";
import { useNavigate } from "react-router";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TLoginSchema>({
    resolver: zodResolver(loginShema),
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loginApi] = useLoginMutation();

  const onSubmit = async (userData: TUserLogin) => {
    const res = await loginApi(userData).unwrap();

    if (res) {
      dispatch(
        setAuth({
          isAuth: true,
          ...res
        }),
      );
      alert("Успех");
      reset();
      navigate("/");
    } else {
      alert("Cola");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Авторизация</h1>

        <label>
          Почта
          <input
            type="text"
            {...register("email")}
            placeholder="Введите почту..."
          />
          {errors.email && <div className="error">{errors.email.message}</div>}
        </label>

        <label>
          Пароль
          <input
            type="text"
            {...register("password")}
            placeholder="Введите пароль..."
          />
          {errors.password && (
            <div className="error">{errors.password.message}</div>
          )}
        </label>

        <button type="submit">Войти</button>
      </form>
    </div>
  );
};
