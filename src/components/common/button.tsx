import { forwardRef, useEffect, useRef } from "react";
import { ButtonProps } from "../../types";
import anime from "animejs";
import {
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
  AiOutlineLoading3Quarters,
} from "react-icons/ai";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      submitting,
      isSuccess,
      isFailure,
      className = "focus:shadow-outline hover:bg-secondaryText rounded bg-primaryText px-4 py-2 font-bold text-white focus:outline-none",
      children = "Submit",
      ...rest
    },
    ref
  ) => {
    const spinnerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const spinnerAnimation = anime({
        targets: spinnerRef.current,
        rotate: "360deg",
        easing: "linear",
        duration: 1500,
        loop: true,
      });

      return () => {
        spinnerAnimation.pause();
      };
    }, []);

    useEffect(() => {
      const successAnimation = anime({
        targets: spinnerRef.current,
        easing: "easeInOutQuad",
        duration: 500,
      });

      const failureAnimation = anime({
        targets: spinnerRef.current,
        easing: "easeInOutQuad",
        duration: 500,
      });

      if (isSuccess) {
        successAnimation.restart();
      } else {
        failureAnimation.restart();
      }
    }, [isSuccess]);

    const submitTSX = (
      <div
        ref={spinnerRef}
        className={`flex h-16 w-16 items-center justify-center rounded-full bg-primaryText ${
          isSuccess && "bg-green-500"
        } ${isFailure && "bg-red-500"}`}
      >
        {!isSuccess ? (
          !isFailure ? (
            <AiOutlineLoading3Quarters className="h-8 w-8 animate-spin text-white" />
          ) : (
            <AiOutlineCloseCircle className="h-8 w-8 text-white" />
          )
        ) : (
          <AiOutlineCheckCircle className="h-8 w-8 text-white" />
        )}
      </div>
    );

    return (
      <>
        {!submitting && (
          <button
            type="submit"
            className={className}
            disabled={submitting}
            {...rest}
          >
            {children}
          </button>
        )}
        {submitting && submitTSX}
      </>
    );
  }
);
