import { InputProps } from "../../types";

export const Input = ({
  className = "focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-dark shadow focus:outline-none",
  id,
  name,
  type,
  value,
  onChange,
  required,
  placeholder,
}: InputProps) => {
  return (
    <input
      className={className}
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
    />
  );
};
