import { LoginForm } from "features/auth/ui/loginForm";
import styles from './index.module.scss'

export function LoginPage() {
  return (
    <div className={styles.loginPage}>
      <LoginForm />
    </div>
  );
}
