import { AxiosError } from "axios";
import axios from "../utils/API";

export const readUserProfileService = async () => {
    try {
        const res = await axios.get("/user");
        return res.data;
    } catch (err) {
        if (err instanceof AxiosError) {
            return err.response?.data;
        }
    }
};