import { Fragment } from "react";
import { Link } from "react-router-dom";
import InputField from "../components/common/Input";
import Button from "../components/common/Button";

export const ForgotPassword = () => {
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

              <div>
                <Button type="submit" title="Submit" />
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
