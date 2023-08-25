import { Fragment } from "react";
import { Link } from "react-router-dom";
import InputField from "../components/common/Input";
import Button from "../components/common/Button";

export const Login = () => {
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
            <form className="space-y-6" action="#" method="POST">
              <InputField
                labelName="Email Address"
                htmlFor="email"
                labelClassName="block text-sm font-medium leading-6 text-gray-900"
                type="email"
                name="email"
                autoComplete="email"
                placeholder="abc@example.com"
                required
              />

              <InputField
                labelName="Password"
                htmlFor="password"
                labelClassName="block text-sm font-medium leading-6 text-gray-900"
                type="password"
                name="password"
                placeholder="Password"
                required
              />

              <div>
                <Button type="submit" title="Submit" />
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
                  to="/registration"
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
