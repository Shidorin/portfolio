import { InputProps } from "../../types";

export const Input = ({
  className = "focus:border-primaryText w-full appearance-none rounded border px-3 py-2 leading-tight border-dark text-dark shadow focus:outline-none mb-6",
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
