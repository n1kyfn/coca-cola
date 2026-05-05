import { useForm } from "react-hook-form";
import { registerSchema, type TRegisterSchema } from "../../model/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRegisterMutation } from "../../../../entities/auth/api/authApi";
import { useDispatch } from "react-redux";
import { setAuth } from "../../../../entities/auth/model/authSlice";
import type { TUserReg } from "../../../../entities/auth/model/types";
import { useNavigate } from "react-router";
import { useToast } from "shared/ui/toast/toast-provider";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TRegisterSchema>({
    resolver: zodResolver(registerSchema),
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [registerApi] = useRegisterMutation();

  const { showToast } = useToast();

  const onSubmit = async (userData: TUserReg) => {
    try {
      const res = await registerApi(userData).unwrap();
      dispatch(
        setAuth({
          isAuth: true,
          ...res,
        }),
      );
      showToast("Вы успешно заругистрировались", "success");
      reset();
      navigate("/");
    } catch {
      showToast("Ошибка при регистрации!", "error");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Регистрация</h1>

        <label>
          Логин
          <input
            type="text"
            {...register("username")}
            placeholder="Введите логин..."
          />
          {errors.username && (
            <div className="error">{errors.username.message}</div>
          )}
        </label>

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

        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
};
