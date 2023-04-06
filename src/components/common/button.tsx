import { ButtonProps } from "../../types";

export const Button = ({
  onClick,
  disabled,
  className = "focus:shadow-outline hover:bg-secondaryText rounded bg-primaryText px-4 py-2 font-bold text-white focus:outline-none",
  children = "Submit",
}: ButtonProps) => {
  return (
    <button
      type="submit"
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
