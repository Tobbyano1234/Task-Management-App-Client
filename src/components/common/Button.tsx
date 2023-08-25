import React, { ButtonHTMLAttributes } from "react";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  loading?: boolean;
  className?: string;
  placeholder?: string;
}

const Button: React.FC<IButtonProps> = ({
  title,
  onClick,
  loading = false,
  type,
  className,
  placeholder
}) => {
  return (
    <button
      className={className?className:`flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
        loading ? "opacity-50 cursor-wait" : ""
      }`}
      type={type}
      onClick={onClick}
      placeholder={placeholder}
      disabled={loading}
    >
      <p className="font-work-sans font-medium text-grey-1000 text-base">
        {loading ? "Loading..." : title}
      </p>
    </button>
  );
};

export default Button;
