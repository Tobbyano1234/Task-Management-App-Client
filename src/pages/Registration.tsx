import { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Button from "../components/common/Button";
import InputField from "../components/common/Input";
import { signupService } from "../services/auth.service";

interface IUser {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const initialState = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const UserRegistrationForm = (): JSX.Element => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<IUser>(initialState);
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
      const res = await signupService(formData);
      const { statusCode, message } = res;
      if (statusCode === 201) {
        console.log("toast")
        toast.success(message, {
          position: toast.POSITION.TOP_CENTER,
        });
        
          localStorage.setItem("email", formData.email);
          navigate("/verify-account");

      } else {
        toast.error(message, {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    } catch (error) {
      toast.error("Registration failed", {
        position: toast.POSITION.TOP_CENTER,
      });
    } finally {
      setLoading(false); 
    }
  };

  return (
    <Fragment>
      <main>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-3 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-3 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Register your account
            </h2>
          </div>
          <div className="mt-7 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <InputField
                labelName="First Name"
                htmlFor="first-name"
                labelClassName="block text-sm font-medium leading-6 text-gray-900"
                type="text"
                name="firstName"
                value={formData.firstName}
                autoComplete="given-name"
                placeholder="Enter First Name"
                onChange={handleChange}
                required
              />
              <InputField
                labelName="Last Name"
                htmlFor="last-name"
                labelClassName="block text-sm font-medium leading-6 text-gray-900"
                type="text"
                name="lastName"
                value={formData.lastName}
                autoComplete="family-name"
                placeholder="Enter Last Name"
                onChange={handleChange}
                required
              />
              <InputField
                labelName="Phone Number"
                htmlFor="phoneNumber"
                labelClassName="block text-sm font-medium leading-6 text-gray-900"
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                autoComplete="number"
                placeholder="08011111111"
                onChange={handleChange}
                required
              />
              <InputField
                labelName="Email Address"
                htmlFor="email"
                labelClassName="block text-sm font-medium leading-6 text-gray-900"
                type="email"
                name="email"
                value={formData.email}
                autoComplete="email"
                placeholder="abc@example.com"
                onChange={handleChange}
                required
              />
              <InputField
                labelName="Password"
                htmlFor="password"
                labelClassName="block text-sm font-medium leading-6 text-gray-900"
                type="password"
                name="password"
                value={formData.password}
                placeholder="Password"
                onChange={handleChange}
                required
              />
              <InputField
                labelName="Confirm Password"
                htmlFor="confirmPassword"
                labelClassName="block text-sm font-medium leading-6 text-gray-900"
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                placeholder="confirm password"
                onChange={handleChange}
                required
              />
              <div>
                <Button
                  type="submit"
                  title={loading ? "Loading..." : "Register"}
                  disabled={loading}
                />
              </div>
            </form>

            <div className="mt-10 text-center text-sm text-gray-500">
              <Link to="/dashboard">Already have an account</Link>
              <Link to="/login">
                <p className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                  Login
                </p>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default UserRegistrationForm;
