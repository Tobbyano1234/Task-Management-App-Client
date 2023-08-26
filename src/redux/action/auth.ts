import { AuthActionTypes } from "../../types/action.enum";
import { LogoutAction } from "../../types/action.types";
import { LoginSuccessAction } from "../../types/action.types";

export const loginSuccess = (payload: string): LoginSuccessAction => {
    return {
        type: AuthActionTypes.LOGIN_SUCCESS,
        payload,
    };
};

export const logOut = (): LogoutAction => {
    return {
        type: AuthActionTypes.LOGOUT,
    };
};

