import { Link } from "react-router";
import { useDispatch } from "react-redux";
import { logout } from "entities/auth/model/authSlice";
import { useAppSelector } from "app/providers/store/hooks";
import styles from './index.module.scss'

export function Header() {
  const dispatch = useDispatch();
  const { user } = useAppSelector(((state) => state.auth));

  return (
    <header className={styles.header}>
      <nav className={styles.header}>
        <Link to={"/"}>Главня</Link>
        <Link to={"/spaces"}>Места</Link>
        {user && (
          <>
            <Link to={"/my-bookings"}>Мои брони</Link>
            <Link to={"/manage-bookings"}>Брони менеджера</Link>
            <Link to={"/admin"}>Админ</Link>
            <Link to={"/profile"}>Профиль</Link>
            <Link onClick={() => dispatch(logout())} to={"/auth/login"}>
              Выйти
            </Link>
          </>
        )}

        {!user && (
          <>
            <Link to={"/auth/register"}>Регистрация</Link>
            <Link to={"/auth/login"}>Логин</Link>
          </>
        )}
      </nav>
    </header>
  );
}
