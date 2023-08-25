import InputField from "../components/common/Input";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import Button from "../components/common/Button";

// interface IUser {
//   firstName: string;
//   lastName: string;
//   phoneNumber: string;
//   email: string;
//   password: string;
//   confirmPassword: string;
// }

const UserRegistrationForm = (): JSX.Element => {
  // const [formData, setFormData] = useState<IUser | null>({});

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log(formData);
  //   const { name, value } = e.target;
  //   setFormData((prevFormData) => ({
  //     ...prevFormData,
  //     [name]: value,
  //   }));
  // };

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
            <form className="space-y-4" action="#" method="POST">
              <InputField
                labelName="First Name"
                htmlFor="first-name"
                labelClassName="block text-sm font-medium leading-6 text-gray-900"
                type="text"
                name="first-name"
                autoComplete="given-name"
                placeholder="Enter First Name"
                required
              />
              <InputField
                labelName="Last Name"
                htmlFor="last-name"
                labelClassName="block text-sm font-medium leading-6 text-gray-900"
                type="text"
                name="last-name"
                autoComplete="family-name"
                placeholder="Enter Last Name"
                required
              />
              <InputField
                labelName="Phone Number"
                htmlFor="phoneNumber"
                labelClassName="block text-sm font-medium leading-6 text-gray-900"
                type="text"
                name="phoneNumber"
                autoComplete="number"
                placeholder="08011111111"
                required
              />
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
              <InputField
                labelName="Confirm Password"
                htmlFor="confirmPassword"
                labelClassName="block text-sm font-medium leading-6 text-gray-900"
                type="password"
                name="confirmPassword"
                placeholder="confirm password"
                required
              />
              <div>
                <Button type="submit" title="Register" />
              </div>
            </form>
           
            <div className="mt-10 text-center text-sm text-gray-500">
               <Link to="/dashboard">
            Already have an account
            </Link>
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
