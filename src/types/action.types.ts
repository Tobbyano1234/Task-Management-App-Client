import { AuthActionTypes, UserActionTypes } from "./action.enum";

export interface LoginSuccessAction {
    type: AuthActionTypes.LOGIN_SUCCESS;
    payload: string;
}

export interface LogoutAction {
    type: AuthActionTypes.LOGOUT;
}

export type AuthActions = LoginSuccessAction | LogoutAction;

export interface StoreUserAction {
    type: UserActionTypes.STORE_USER_DETAILS;
    payload: IUser
}

export type UserActions = StoreUserAction;
