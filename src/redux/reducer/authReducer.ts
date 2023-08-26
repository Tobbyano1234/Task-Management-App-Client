import { AuthActionTypes } from "../../types/action.enum";
import { AuthActions } from "../../types/action.types";

interface AuthState {
  accessToken: string | null;
  isSignedIn: boolean;
}

const initialState: AuthState = {
  accessToken: null,
  isSignedIn: false
};

const authReducer = (state = initialState, action: AuthActions): AuthState => {
  switch (action.type) {
    case AuthActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        accessToken: action.payload,
        isSignedIn: true
      };
    case AuthActionTypes.LOGOUT:
      return {
        ...state,
        accessToken: null,
        isSignedIn: false
      };
    default:
      return state;
  }
};

export default authReducer;