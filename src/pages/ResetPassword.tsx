import { Fragment, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "../components/common/Button";
import InputField from "../components/common/Input";
import { toast } from "react-toastify";
import { resetPasswordService } from "../services/auth.service";
import { encryptMail } from "../utils/encryptMail";

export const ResetPassword = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<PasswordDTO>({
    newPassword: "",
    confirmPassword: "",
    otp: "",
  });

  const email = (location.state as any)?.email as string;
  const encryptedMail = encryptMail(email);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;

    try {
      setLoading(true);
      const passwordDTO = { email, ...formData };
      const res = await resetPasswordService(passwordDTO);
      const { statusCode, message } = res;
      if (statusCode === 200) {
        toast.success(message, {
          position: toast.POSITION.TOP_CENTER,
        });
        navigate("/");
      } else {
        toast.error(message, {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    } catch (error) {
      toast.error("Failed to reset password", {
        position: toast.POSITION.TOP_CENTER,
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <Fragment>
      <main>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Reset Password
            </h2>
            <p className="block text-sm font-medium leading-6 text-gray-900">
              We sent an OTP to{" "}
              <span className="text-primary-200">{encryptedMail}</span>
            </p>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <InputField
                labelName="New Password"
                htmlFor="newPassword"
                labelClassName="block text-sm font-medium leading-6 text-gray-900"
                type="password"
                value={formData.newPassword}
                name="newPassword"
                autoComplete="current-password"
                placeholder="New Password"
                onChange={handleChange}
                required
              />
              <InputField
                labelName="Confirm Password"
                htmlFor="confirmPassword"
                labelClassName="block text-sm font-medium leading-6 text-gray-900"
                type="password"
                value={formData.confirmPassword}
                name="confirmPassword"
                autoComplete="current-password"
                placeholder="Confirm Password"
                onChange={handleChange}
                required
              />
              <InputField
                labelName="Otp"
                htmlFor="otp"
                labelClassName="block text-sm font-medium leading-6 text-gray-900"
                type="text"
                name="otp"
                value={formData.otp}
                autoComplete="current-password"
                placeholder="000000"
                onChange={handleChange}
                required
              />

              <div>
                <Button
                  type="submit"
                  title={loading ? "Loading..." : "Login"}
                  disabled={loading}
                />
              </div>
            </form>

            <div>
              <p className="mt-10 text-center text-sm text-gray-500">
                Already have an account?{" "}
                <Link to="/login">
                  <p className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                    Login
                  </p>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};
