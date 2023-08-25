import { Fragment } from "react";
import { Link } from "react-router-dom";
import Button from "../components/common/Button";
import InputField from "../components/common/Input";

export const ResetPassword = () => {
  return (
    <Fragment>
      <main>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Reset Password
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <InputField
                labelName="Old Password"
                htmlFor="email"
                labelClassName="block text-sm font-medium leading-6 text-gray-900"
                type="password"
                name="password"
                autoComplete="current-password"
                placeholder="Old Password"
                required
              />
              <InputField
                labelName="New Password"
                htmlFor="password"
                labelClassName="block text-sm font-medium leading-6 text-gray-900"
                type="password"
                name="password"
                autoComplete="current-password"
                placeholder="New Password"
                required
              />
              <InputField
                labelName="Otp"
                htmlFor="email"
                labelClassName="block text-sm font-medium leading-6 text-gray-900"
                type="text"
                name="otp"
                autoComplete="current-password"
                placeholder="000000"
                required
              />

              <div>
                <Button type="submit" title="Reset Password" />
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
