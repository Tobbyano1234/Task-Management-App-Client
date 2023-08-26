import { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import InputField from "../components/common/Input";
import Button from "../components/common/Button";
import { loginService } from "../services/auth.service";
import { useAppDispatch } from "../hooks/redux.hooks";
import { loginSuccess } from "../redux/action/auth";
import { storeUserDetails } from "../redux/action/user";

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState<LoginDTO>({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState<boolean>(false);

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
      const res = await loginService(formData);
      const { statusCode, message, token, payload } = res;
      if (statusCode === 200) {
        toast.success(message, {
          position: toast.POSITION.TOP_CENTER,
        });
        dispatch(loginSuccess(token));
        dispatch(storeUserDetails(payload));
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
      setLoading(false);
    }
  };

  return (
    <Fragment>
      <main>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <InputField
                labelName="Email Address"
                htmlFor="email"
                labelClassName="block text-sm font-medium leading-6 text-gray-900"
                type="email"
                name="email"
                value={formData.email}
                autoComplete="email"
                placeholder="abc@example.com"
                required
                onChange={handleChange}
              />

              <InputField
                labelName="Password"
                htmlFor="password"
                labelClassName="block text-sm font-medium leading-6 text-gray-900"
                type="password"
                name="password"
                value={formData.password}
                placeholder="Password"
                required
                onChange={handleChange}
              />

              <div>
                <Button
                  type="submit"
                  title={loading ? "Loading..." : "Login"}
                  disabled={loading}
                />
              </div>
            </form>
            <div className="text-sm">
              <Link
                to="/forgot-password"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >
                Forgot Password
              </Link>
            </div>

            <div className="flex justify-between">
              <p className="mt-10 text-center text-sm text-gray-500">
                Not a member?{" "}
                <Link
                  to="/register"
                  className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                >
                  Sign Up Now!!!
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};
