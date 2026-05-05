import { useAppSelector } from "app/providers/store/hooks";
import styles from "./index.module.scss";
import { useNavigate } from "react-router";

export function ProfilePage() {
  const { user } = useAppSelector((state) => state.auth);
  const navigate = useNavigate()

  return (
    <div className={styles.profilePage}>
      <h1>Ваш профиль</h1>

      <div className={styles.profilePage__profileCard}>
        <h2>Имя: <span>{user.name}</span></h2>
        <h2>Ваша почта: <span>{user.email}</span></h2>
        <h2>Роль: <span>{user.role}</span></h2>
        <button onClick={() => navigate('/')}>На главную</button>
      </div>
    </div>
  );
}
