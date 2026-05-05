import { RegisterForm } from "features/auth/ui/registerForm";
import styles from './index.module.scss'

export function RegisterPage() {
  return (
    <div className={styles.registerPage}>
      <RegisterForm />
    </div>
  );
}
