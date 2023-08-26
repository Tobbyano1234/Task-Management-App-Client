interface IInput {
  type: string;
  labelName: string;
  htmlFor: string;
  labelClassName: string;
  name: string;
  value?: string | number;
  defaultValue?: string | number;
  placeholder: string;
  autoComplete?: string;
  required?: boolean;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField = ({
  labelName,
  htmlFor,
  labelClassName,
  name,
  value,
  defaultValue,
  type,
  placeholder,
  autoComplete,
  disabled,
  onChange,
  required,
}: IInput): JSX.Element => {
  return (
    <>
      <div className="my-1">
        <label htmlFor={htmlFor} className={labelClassName}>
          {labelName}
        </label>
        <div className="mt-2">
          <input
            name={name}
            value={value}
            defaultValue={defaultValue}
            disabled={disabled ? disabled : false}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            className="block w-full pl-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            autoComplete={autoComplete}
            required={required}
          />
        </div>
      </div>
    </>
  );
};

export default InputField;
