import { UserActionTypes } from "../../types/action.enum";
import { UserActions } from "../../types/action.types";


interface UserState {
    user: IUser | null
}

const initialState: UserState = {
    user: null
};

const userReducer = (state = initialState, action: UserActions): UserState => {
    switch (action.type) {
        case UserActionTypes.STORE_USER_DETAILS:
            return {
                ...state,
                user: action.payload,
            };
        default:
            return state;
    }
};

export default userReducer;