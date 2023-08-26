import { AxiosError } from "axios";
import axios from "../utils/API";


export const signupService = async (credentials: SignUpDTO) => {
  try {
    const res = await axios.post("/auth/signup-user", credentials);
    return res.data;
  } catch (err) {
    if (err instanceof AxiosError) {
      return err.response?.data;
    }
  }
};

export const loginService = async (credentials: LoginDTO) => {
  try {
    const res = await axios.post("/auth/signin-user", credentials);
    return res.data;
  } catch (err) {
    if (err instanceof AxiosError) {
      return err.response?.data;
    }
  }
};

export const resetPasswordService = async (passwordDTO: PasswordDTO) => {
  try {
    const res = await axios.post("/auth/reset-password-user", passwordDTO);
    return res.data;
  } catch (err) {
    if (err instanceof AxiosError) {
      return err.response?.data;
    }
  }
};

export const sendVerificationOTPService = async (email: string) => {
  try {
    const res = await axios.post("/auth/send-otp-user", {
      email,
      type: "verify",
    });
    return res.data;
  } catch (err) {
    if (err instanceof AxiosError) {
      return err.response?.data;
    }
  }
};

export const verifyOTPService = async (email: string, otp: string) => {
  try {
    const res = await axios.post("/auth/verify-otp-user", {
      email,
      otp,
    });
    return res.data;
  } catch (err) {
    if (err instanceof AxiosError) {
      return err.response?.data;
    }
  }
};
