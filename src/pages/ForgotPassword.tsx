import { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../components/common/Input";
import Button from "../components/common/Button";
import { toast } from "react-toastify";
import { sendVerificationOTPService } from "../services/auth.service";

export const ForgotPassword = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;

    try {
      setLoading(true);
      const res = await sendVerificationOTPService(email);
      const { statusCode, message } = res;
      if (statusCode === 200) {
        toast.success(message, {
          position: toast.POSITION.TOP_CENTER,
        });
        navigate("/reset-password", { state: { email } });
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
              Forgot Password
            </h2>
            <p className="font-sans font-medium text-grey-500 text-lg">
              Enter your email address and we'll send you a link to reset your
              password
            </p>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <InputField
                labelName="Email Address"
                htmlFor="email"
                labelClassName="block text-sm font-medium leading-6 text-gray-900"
                type="email"
                name="email"
                autoComplete="email"
                placeholder="abc@example.com"
                required
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
              />

              <div>
                <Button
                  type="submit"
                  title={loading ? "Loading..." : "Forgot Password" }
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
