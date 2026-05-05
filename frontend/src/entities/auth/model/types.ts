import type { TRole } from "../../../shared/config/index.types";

export interface IUser {
  id: number;
  isActive: boolean;
  role: TRole;
  username: string;
  password: string;
  email: string;
}

export type TInitialState = {
  user: IUser | null;
  accessToken: string | null;
  refreshToken: string | null;
  isAuth: boolean
};

export type TUserLogin = Pick<IUser, "password" | "email">;
export type TUserReg = Pick<IUser, "username" | "email" | "password">;
export type TUserResponse = {
  accessToken: string,
  refreshToken: string,
  user: IUser
}
