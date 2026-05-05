import {
  createContext,
  useContext,
  useState,
  type PropsWithChildren,
} from "react";
import type { IToast, IToastContext, TToastType } from "./toast-type";
import styles from "./index.module.scss";
import cn from "classnames";

export const ToastContext = createContext<IToastContext>({
  showToast: () => {},
});

export function ToastProvider({ children }: PropsWithChildren) {
  const [toasts, setToasts] = useState<IToast[]>([]);

  const showToast = (message: string, type: TToastType) => {
    const id = Number(Date.now());

    const newToast = {
      id,
      message,
      type,
    };

    setToasts((prev) => [...prev, newToast]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((el) => el.id !== id));
    }, 3000);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className={styles.toastsContainer}>
        {toasts.map((toast) => (
          <div className={cn(styles.toast, styles[`toast__${toast.type}`])}>
            <span>{toast.message}</span>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export const useToast = () => useContext(ToastContext);
