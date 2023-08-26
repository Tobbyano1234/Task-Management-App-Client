import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Button from "../components/common/Button";
import InputField from "../components/common/Input";
import {
  sendVerificationOTPService,
  verifyOTPService,
} from "../services/auth.service";
import { encryptMail } from "../utils/encryptMail";

export const VerifyAccount = () => {
  const navigate = useNavigate();
  const userEmail = localStorage.getItem("email") || "";
  const encryptedMail = encryptMail(userEmail);
  const [seconds, setSeconds] = useState<number>(59);
  const [resetBtnLoading, setResetBtnLoading] = useState<boolean>(false);
  const [confirmBtnLoading, setConfirmBtnLoading] = useState<boolean>(false);
  const [otpValue, setOtpValue] = useState<string>("");

  useEffect(() => {
    if (seconds > 0) {
      const timer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);

      return () => clearInterval(timer);
    }

    // Return an empty cleanup function if seconds is not greater than 0
    return () => {};
  }, [seconds]);

  const handleResendOTP = async () => {
    setResetBtnLoading(true);
    const res = await sendVerificationOTPService(userEmail);
    const { statusCode, message } = res;
    if (statusCode === 200) {
      toast.success(message, {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      toast.error(message, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
    setSeconds(59);
    setResetBtnLoading(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (confirmBtnLoading) return;
    
    try {
      setConfirmBtnLoading(true);
      const res = await verifyOTPService(userEmail, otpValue);
      const { statusCode, message } = res;
      if (statusCode === 200) {
        toast.success(message, {
          position: toast.POSITION.TOP_CENTER,
        });
        localStorage.clear();
        navigate("/");
      } else {
        toast.error(message, {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    } catch (error) {
      toast.error("Otp verification failed", {
        position: toast.POSITION.TOP_CENTER,
      });
    } finally {
      setConfirmBtnLoading(false);
    }
  };

  return (
    <Fragment>
      <main>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Verify OTP
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <p className="block text-sm font-medium leading-6 text-gray-900">
              Kindly input OTP sent to{" "}
              <span className="text-primary-200">{encryptedMail}</span>
            </p>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <InputField
                labelName="Email Address"
                htmlFor="email"
                labelClassName="block text-sm font-medium leading-6 text-gray-900"
                type="email"
                name="email"
                autoComplete="email"
                placeholder="abc@example.com"
                defaultValue={userEmail}
                disabled={true}
                required
              />

              <InputField
                labelName="Otp"
                htmlFor="otp"
                labelClassName="block text-sm font-medium leading-6 text-gray-900"
                type="text"
                name="otp"
                placeholder="Enter OTP"
                value={otpValue}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setOtpValue(e.target.value)
                }
                required
              />

              <div>
                <Button
                  type="submit"
                  title={confirmBtnLoading ? "Loading..." : "Verify"}
                  disabled={confirmBtnLoading}
                />
              </div>
            </form>
            <div className="text-sm">
              {seconds !== 0 ? (
                <p className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                  Resend Otp in {seconds}s
                </p>
              ) : (
                <button
                  type="submit"
                  className={`font-semibold leading-6 text-indigo-600 hover:text-indigo-500 tracking-wide cursor-pointer ${
                    resetBtnLoading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  onClick={handleResendOTP}
                  disabled={resetBtnLoading}
                >
                  Resend Otp
                </button>
              )}
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};
