import { Link } from "react-router";
import { useDispatch } from "react-redux";
import { logout } from "entities/auth/model/authSlice";
import { useAppSelector } from "app/providers/store/hooks";
import styles from "./index.module.scss";

export function Header() {
  const dispatch = useDispatch();
  const { user } = useAppSelector((state) => state.auth);

  return (
    <header>
      <nav className={styles.header}>
        <div className={styles.header__mainSection}>
          <Link to={"/"}>Главня</Link>
          <Link to={"/spaces"}>Места</Link>
        </div>
        {user && (
          <div className={styles.header__secondSection}>
            <div className={styles.header__oneSection}>
              <Link to={"/my-bookings"}>Мои брони</Link>
              <Link to={"/manage-bookings"}>Брони менеджера</Link>
            </div>
            <div className={styles.header__twoSection}>
              <Link to={"/admin"}>Админ</Link>
              <Link to={"/profile"}>Профиль</Link>
              <Link
                className={styles.header__logout}
                onClick={() => dispatch(logout())}
                to={"/auth/login"}
              >
                Выйти
              </Link>
            </div>
          </div>
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
