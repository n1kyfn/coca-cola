import { Link } from "react-router";
import { useDispatch } from "react-redux";
import { logout } from "entities/auth/model/authSlice";
import { useAppSelector } from "app/providers/store/hooks";
import styles from "./index.module.scss";

export function Header() {
  const dispatch = useDispatch();
  const { user } = useAppSelector((state) => state.auth);

  return (
    <header className={styles.headerWrapper}>
  <nav className={styles.header}>
    <div className={styles.header__mainSection}>
      <Link to={"/"}>Главная</Link>
      <Link to={"/spaces"}>Места</Link>
    </div>

    {user ? (
      <div className={styles.header__secondSection}>
        <div className={styles.header__linksGroup}>
          <Link to={"/my-bookings"}>Мои брони</Link>
          <Link to={"/manage-bookings"}>Брони менеджера</Link>
        </div>
        <div className={styles.header__linksGroup}>
          <Link to={"/admin"}>Админ</Link>
          <Link to={"/profile"}>Профиль</Link>
          <button // Выход лучше делать кнопкой, если есть onClick
            className={styles.header__logout}
            onClick={() => dispatch(logout())}
          >
            Выйти
          </button>
        </div>
      </div>
    ) : (
      <div className={styles.header__authSection}>
        <Link to={"/auth/register"}>Регистрация</Link>
        <Link to={"/auth/login"}>Логин</Link>
      </div>
    )}
  </nav>
</header>
  );
}
