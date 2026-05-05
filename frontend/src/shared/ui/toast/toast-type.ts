export type TToastType = "success" | "error";

export interface IToast {
  id: number;
  message: string;
  type: TToastType;
}

export interface IToastContext {
  showToast: (message: string, type: TToastType) => void;
}
