import { Link } from "react-router";
import styles from "./index.module.scss";

export function Header() {
  return (
    <header>
      <nav className={styles.header}>
        <Link to={"/"}>Домой</Link>
        <Link to={"/auth/register"}>Регистрация</Link>
        <Link to={"/auth/login"}>Логин</Link>
        <Link to={"/spaces"}>Места</Link>
        <Link to={"/my-bookings"}>Мои брони</Link>
        <Link to={"/manage-bookings"}>Брони менеджера</Link>
        <Link to={"/admin"}>Админ</Link>
        <Link to={"/profile"}>Профиль</Link>
      </nav>
    </header>
  );
}
