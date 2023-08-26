import { StoreUserAction } from "../../types/action.types";
import { UserActionTypes } from "../../types/action.enum";

export const storeUserDetails = (payload: IUser): StoreUserAction => {
    return {
        type: UserActionTypes.STORE_USER_DETAILS,
        payload
    }
}

