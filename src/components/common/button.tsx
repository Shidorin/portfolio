import { forwardRef } from "react";
import { ButtonProps } from "../../types";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      submitting,
      className = "focus:shadow-outline hover:bg-secondaryText rounded bg-primaryText px-4 py-2 font-bold text-white focus:outline-none",
      children = "Submit",
      ...rest
    },
    ref
  ) => {
    const submitTSX = <div className="rounded-full h-12 w-12 bg-primaryText"></div>;

    return (
      <>
        <button
          type="submit"
          className={className}
          disabled={submitting}
          {...rest}
        >
          {children}
        </button>
        {submitting && submitTSX}
      </>
    );
  }
);
